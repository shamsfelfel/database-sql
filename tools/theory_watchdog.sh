#!/usr/bin/env bash
# Watchdog for the unattended theory-track build.
#
# The runner writes .build/heartbeat every time it starts authoring, verifying
# or committing a page. If that file stops moving the runner is wedged -- a
# hung model call that outlived its own timeout, a network stall, a prompt
# waiting for an answer that will never come -- and the only cure is a restart.
# The runner is resumable (it skips every page whose source file already
# exists), so restarting costs at most the page in flight.
#
# Run it from a systemd timer every five minutes:
#     tools/theory_watchdog.sh
#
# Env:
#   THEORY_REPO     repository root        (default: this script's parent)
#   THEORY_SERVICE  systemd user unit      (default: theory-build.service)
#   THEORY_STALL    seconds without a beat (default: 2700 = 45 minutes)
set -uo pipefail

REPO="${THEORY_REPO:-$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)}"
SERVICE="${THEORY_SERVICE:-theory-build.service}"
STALL="${THEORY_STALL:-2700}"
BEAT="$REPO/.build/heartbeat"
LOG="$REPO/.build/watchdog.log"

mkdir -p "$REPO/.build"
say() { printf '%s  %s\n' "$(date '+%Y-%m-%d %H:%M:%S')" "$*" >> "$LOG"; }

active=$(systemctl --user is-active "$SERVICE" 2>/dev/null || true)

# Nothing left to do is not a stall: the runner sets the heartbeat to "idle"
# and exits cleanly when every page is written or blocked.
if [ -f "$BEAT" ] && grep -q ' idle$' "$BEAT"; then
  [ "$active" = "active" ] || exit 0
fi

if [ "$active" != "active" ]; then
  # Did it finish, or did it die?
  left=$(cd "$REPO" && python3 tools/theory_runner.py --status 2>/dev/null | tail -1)
  case "$left" in
    *" 0 to go"*) say "all pages accounted for ($left) -- nothing to restart"; exit 0 ;;
  esac
  say "service not active and work remains ($left) -- starting"
  systemctl --user start "$SERVICE"
  exit 0
fi

if [ ! -f "$BEAT" ]; then
  say "no heartbeat file yet -- leaving the service alone this round"
  exit 0
fi

now=$(date +%s)
last=$(cut -d' ' -f1 "$BEAT")
what=$(cut -d' ' -f2- "$BEAT")
age=$(( now - last ))

if [ "$age" -gt "$STALL" ]; then
  say "stalled ${age}s on '${what}' (limit ${STALL}s) -- restarting $SERVICE"
  systemctl --user restart "$SERVICE"
else
  say "ok: ${age}s since last beat ('${what}')"
fi
