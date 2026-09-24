# Setup (once per repo)

1. Put `CREATIONS.md` in the repo root.
2. Add this line to `CLAUDE.md` (Claude Code) and/or `AGENTS.md` (other agents):

   ```
   When working in creations/, follow @CREATIONS.md exactly. Every visible change is a step: snapshot, screenshots, process.json entry, commit with trailers, tag.
   ```
3. Have the site's homepage collect `creations/*/process.json` where `published` is set (no shared index file).
4. Check `npx playwright screenshot --help` runs.

---

# Kickoff prompt (paste at the start of each new creation session)

```
New creation. Follow CREATIONS.md for all git and step handling.

Slug: <slug>
Title: <Title>
Kind: <Websites | Podcast themes | Tools | Experiments>
One-line summary: <what it is>

Setup: create worktree ../wt-<slug> on new branch creation/<slug> from main, work only inside it, scaffold creations/<slug>/ with process.json and steps/.

Step 01 prompt: <your first real instruction>

After every step, reply with just: "Step NN — <title>" and one sentence on what to look at. I'll say "publish" when it's done.
```

# Resume prompt (continuing an existing creation)

```
Continue creation <slug>. Follow CREATIONS.md. Work in worktree ../wt-<slug> (recreate it from branch creation/<slug> if missing), read process.json, continue from the next step number.
```

# Useful mid-session commands

- `dead end` → mark the last step `dead-end` and revert it as a new step.
- `back to step 04` → restore from tag `<slug>/step-04` as a new step.
- `hide that prompt` → set the last step's prompt to null.
- `publish` → run the publish checklist in CREATIONS.md §7.
