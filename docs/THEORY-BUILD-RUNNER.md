# The unattended build

The theory track is 70 pages. `tools/theory_runner.py` builds them one at a time on
the development server, committing after each page, and `tools/theory_watchdog.sh`
restarts it when it wedges. Nothing here is needed to *use* the course — it is how the
course gets written.

## What the runner does

It walks `src/registry.json` in reading order. For every page whose source file does
not exist yet it:

1. writes a brief (the contract docs, the page's own task, and, on a retry, the
   verifier's complaints);
2. hands that brief to a headless Claude Code run inside the repository;
3. runs `python3 build-theory.py` and `python3 tools/verify_chapter.py --scope <page>`;
4. on success: `scripts/build-sw.py`, then `git add -A`, commit, push;
5. on failure: retries once with the failure text attached, then records the page as
   **BLOCKED** and moves to the next one.

One bad page never stops the other sixty-nine. A BLOCKED page keeps its last failure
text in `.build/state.json`, so you can read what went wrong and either fix it by hand
or run `--retry-blocked`.

The runner is **resumable by construction**: "done" means the source file exists on
disk, not a flag it set. Kill it at any moment and the next start picks up at the next
unwritten page, losing at most the page in flight.

```bash
python3 tools/theory_runner.py                # build everything that is left
python3 tools/theory_runner.py --only t2      # one chapter
python3 tools/theory_runner.py --units 1      # one page, then stop (good for a first look)
python3 tools/theory_runner.py --dry-run      # print the plan and the first brief, build nothing
python3 tools/theory_runner.py --status       # done / blocked / to go
python3 tools/theory_runner.py --retry-blocked
```

Environment: `CLAUDE_BIN` (default `~/.local/bin/claude`), `THEORY_MODEL` (default
`opus`), `THEORY_TIMEOUT_LESSON` (default 3600s), `THEORY_TIMEOUT_OTHER` (default
2400s).

`.build/` holds `state.json`, `run.log`, `watchdog.log` and `heartbeat`, and is
git-ignored.

## Why it runs with permissions bypassed

The author process writes lesson files, diagrams and question banks, and runs the
build and the verifier. There is nobody at the keyboard to approve each write, so the
runner passes `--dangerously-skip-permissions`. Two things keep that honest: the
process runs with its working directory set to this repository and nothing in the brief
sends it outside, and every page it writes lands in its own commit, so anything
unwelcome is one `git revert` away. Run it on the development server, not on a machine
that holds anything else you care about.

## Installing it on the server

```bash
# once
git clone git@github.com:shamsfelfel/database-sql.git ~/work/shams/database-sql
cd ~/work/shams/database-sql
mkdir -p ~/.config/systemd/user
cp docs/theory-build.service  ~/.config/systemd/user/
cp docs/theory-watchdog.service ~/.config/systemd/user/
cp docs/theory-watchdog.timer   ~/.config/systemd/user/
systemctl --user daemon-reload
systemctl --user enable --now theory-watchdog.timer
systemctl --user start theory-build.service
loginctl enable-linger "$USER"     # so it keeps running when you log out
```

Watch it:

```bash
journalctl --user -u theory-build.service -f
tail -f ~/work/shams/database-sql/.build/run.log
python3 tools/theory_runner.py --status
```

Stop it:

```bash
systemctl --user stop theory-build.service
systemctl --user disable --now theory-watchdog.timer
```

## The watchdog

`tools/theory_watchdog.sh` runs every five minutes from a systemd timer and looks at
`.build/heartbeat`, which the runner rewrites each time it starts authoring, verifying
or committing a page.

* heartbeat older than 45 minutes → `systemctl --user restart theory-build.service`
* service not active but pages remain → start it
* heartbeat says `idle` → the run finished; do nothing

A finished run is not a stall, and a restart is cheap, which is why the watchdog
prefers restarting to diagnosing.
