#!/usr/bin/env bash
# Can this checkout push to GitHub, and if not, exactly why?
#
# The build runner pushes after every page. When that fails it fails the same
# way sixty times, so this says once, precisely, which link in the chain is
# broken and what to do about it.
#
#     tools/check_push.sh
#
# Exit 0 = a push would work. Exit 1 = it would not, and the reason is printed.
set -uo pipefail
cd "$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)" || exit 1

ok()   { printf '  \033[32mok\033[0m    %s\n' "$*"; }
bad()  { printf '  \033[31mFAIL\033[0m  %s\n' "$*"; }
note() { printf '        %s\n' "$*"; }

echo "Push readiness for $(pwd)"
echo

# ---------------------------------------------------------------- 1. remote
remote=$(git remote get-url origin 2>/dev/null)
if [ -z "$remote" ]; then
  bad "no 'origin' remote"; exit 1
fi
case "$remote" in
  git@github.com:*)  ok "remote is SSH: $remote" ;;
  https://github.com/*)
      bad "remote is HTTPS: $remote"
      note "An unattended runner cannot answer a username/password prompt."
      note "Fix:  git remote set-url origin git@github.com:OWNER/REPO.git"
      exit 1 ;;
  *) bad "remote is not GitHub: $remote"; exit 1 ;;
esac

slug=${remote#git@github.com:}; slug=${slug%.git}

# ---------------------------------------------------------------- 2. the key
sshcmd=$(git config --local --get core.sshCommand)
if [ -z "$sshcmd" ]; then
  note "no repo-local core.sshCommand; ssh will pick its own key"
  key=""
else
  ok "core.sshCommand = $sshcmd"
  key=$(sed -n 's/.*-i *\([^ ]*\).*/\1/p' <<<"$sshcmd")
  key=${key/#\~/$HOME}
  if [ -n "$key" ] && [ ! -f "$key" ]; then
    bad "the key it names does not exist: $key"; exit 1
  fi
  [ -n "$key" ] && ok "key file present: $key"
  [ -n "$key" ] && note "fingerprint: $(ssh-keygen -lf "$key.pub" 2>/dev/null | awk '{print $2}')"
fi

# ---------------------------------------------------------------- 3. GitHub
echo
echo "Asking GitHub who this key is..."
out=$(eval "${sshcmd:-ssh} -o StrictHostKeyChecking=accept-new -T git@github.com" 2>&1)

if grep -q "successfully authenticated" <<<"$out"; then
  who=$(sed -n 's/^Hi \([^!]*\)!.*/\1/p' <<<"$out")
  ok "GitHub accepts the key, as: $who"
  if [ "$who" = "$slug" ]; then
    note "that is a deploy key on this very repository -- correct"
  elif [[ "$who" == */* ]]; then
    bad "that deploy key belongs to $who, not $slug"
    note "Add the key to $slug instead."
    exit 1
  else
    note "that is a user account key, which can push to any repo it can write"
  fi
elif grep -q "Permission denied (publickey)" <<<"$out"; then
  bad "GitHub does not recognise this key at all"
  note ""
  note "This is NOT the 'Allow write access' checkbox. A read-only deploy key"
  note "still authenticates here and fails later, at push, with"
  note "  ERROR: The key you are trying to use has read-only access."
  note "Being refused at authentication means the public key below is not"
  note "registered on GitHub -- not on $slug, not on the account."
  note ""
  note "Add it at:  https://github.com/$slug/settings/keys"
  note "  'Add deploy key', paste the ONE line below, tick 'Allow write access'."
  note ""
  [ -n "$key" ] && note "$(cat "$key.pub")"
  note ""
  note "Paste it as a single line. A line break in the middle is the usual"
  note "reason a key looks added but never authenticates."
  exit 1
else
  bad "unexpected answer from GitHub"
  note "$out"
  exit 1
fi

# ---------------------------------------------------------------- 4. a push
echo
echo "Trying the push itself (dry run, nothing is sent)..."
if push=$(git push --dry-run origin HEAD 2>&1); then
  ahead=$(git rev-list --count '@{u}..HEAD' 2>/dev/null || echo "?")
  ok "a push would succeed ($ahead commit(s) waiting)"
  exit 0
fi

if grep -q "read-only access" <<<"$push"; then
  bad "the key authenticates but is READ-ONLY"
  note "This one IS the checkbox. On https://github.com/$slug/settings/keys"
  note "delete the key and add it again with 'Allow write access' ticked --"
  note "the flag cannot be changed on an existing key."
  exit 1
fi

bad "the push was refused"
note "$push"
exit 1
