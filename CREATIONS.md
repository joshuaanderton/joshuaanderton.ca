# Creations protocol

This repo turns the *process* of building a creation into a blog post. Git history is the source material. Every meaningful step becomes a commit with a screenshot, the prompt that caused it, and a one-line note. The site reads `process.json` and renders the post: final embed at the top, then the timeline of steps.

Follow this file exactly whenever you work inside `creations/`.

---

## 1. Layout

All creations share one repo. The website code (if it lives here too) stays **outside** `creations/`.

```
creations/
  <slug>/
    index.html               # the current/final version — this is what gets embedded
    process.json             # the blog-post manifest (schema in §5)
    conversation.jsonl       # raw LLM conversation, written by tools/convo-log (see CONVERSATIONS.md)
    steps/
      01.png                 # desktop screenshot, 1440×900
      01-m.png               # mobile screenshot, iPhone 13
      01.html                # frozen copy of index.html at this step (single-file creations only)
      02.png …
```

- `<slug>` is lowercase-kebab, short, and never changes once created (e.g. `prism`, `broadsheet`).
- There is no shared index file. The site builds its homepage grid by collecting every `creations/*/process.json` where `published` is set. This avoids merge conflicts between creations.
- Single-file HTML creations are preferred. If a creation needs more files, keep them inside `<slug>/` and skip the `NN.html` snapshots (the git tag covers it).

## 2. What counts as a step

One step = one user prompt that produces a **visible** change. That's the unit of the blog post.

| Situation | What to do |
|---|---|
| User prompt → visible change | One step. One commit. Screenshot. |
| Several fix-ups while answering one prompt | Fold into that same step (amend is OK *only until the step is tagged*). |
| Change with no visual difference (refactor, perf, a11y attrs) | Step with `kind: "under-the-hood"`, no screenshot required. Rendered collapsed. |
| Direction abandoned | Keep it. Mark `kind: "dead-end"`. Undo it with a *new* step (`git revert` or manual), never by rewriting history. Dead ends are part of the story. |
| User says "go back to step N" | New step whose note says "Back to step N". Restore files from tag `<slug>/step-NN`. |

Do not create a step for chat-only turns (questions, explanations) that change no files.

## 3. The step routine (do this every time, in order)

1. **Make the change** to `creations/<slug>/index.html` (or files).
2. **Snapshot** (single-file only): `cp creations/<slug>/index.html creations/<slug>/steps/NN.html`
3. **Screenshot** — desktop (1440×900) and mobile (iPhone 13), light scheme. Screenshots are taken in GitHub Actions, not locally:
   ```bash
   tools/shots <slug> NN
   ```
   It pushes the current state of `creations/<slug>/` (committed or not) to a scratch branch `shots/<slug>-NN`, runs `.github/workflows/creation-shots.yml` (Playwright + Chromium), downloads `steps/NN.webp` and `steps/NN-m.webp`, and deletes the scratch branch. Nothing is committed to the creation branch; the images go into the step commit in step 5.
   - If the change is below the fold, add `--full-page` or `--anchor '#section'` and say so in `focus`.
   - Every screenshot stays in git history forever, so the workflow converts them to `.webp` (`cwebp -q 82`). If the repo later adopts Git LFS for `creations/**/steps/*`, follow `.gitattributes`.
   - If the workflow fails or `gh` isn't authenticated, stop and tell the user. Do not commit a step without its screenshot (except `under-the-hood`).
4. **Append the step** to `process.json` (§5). Look at the screenshot before writing the note.
5. **Commit** with the message format in §4. Stage only `creations/<slug>/` (`git add creations/<slug>/`). Never stage site code or another creation's files in a step commit.
6. **Tag**: `git tag <slug>/step-NN`
7. **Report** to the user in one line: `Step NN — <title> (committed, tagged)`.

`NN` is two digits, sequential, never reused, never renumbered.

## 4. Commit message format

```
creation(<slug>): step NN — <title, ≤ 6 words>

<note: one sentence, what changed and why>

Step: NN
Kind: prompt | fix | pivot | polish | dead-end | under-the-hood | final
Prompt: <the user's prompt, cleaned per §6, ≤ 400 chars; "…" if trimmed>
Screenshot: creations/<slug>/steps/NN.webp
```

The last four lines are git trailers (blank line before them, `Key: value`, no blank lines between). They let the site be rebuilt from `git log --format='%(trailers)'` if `process.json` is ever lost.

## 5. `process.json` schema

```json
{
  "slug": "prism",
  "title": "Prism",
  "kind": "Websites",
  "summary": "Homepage concept built around a light-splitting prism.",
  "blurb": "Homepage concept",
  "cover": null,
  "started": "2026-09-23",
  "published": null,
  "embed": "index.html",
  "live": null,
  "tools": ["Claude Code"],
  "steps": [
    {
      "n": 1,
      "date": "2026-09-23",
      "title": "First pass",
      "kind": "prompt",
      "prompt": "Make a homepage concept where a prism splits the nav into colour bands.",
      "note": "Single-column layout; prism drawn in SVG, bands as nav links.",
      "screenshot": "steps/01.png",
      "mobile": "steps/01-m.png",
      "snapshot": "steps/01.html",
      "focus": null,
      "convo": ["86675602508e", "4c5d4ad1db22"],
      "tag": "prism/step-01"
    }
  ]
}
```

Rules:
- `note` ≤ 25 words. Plain, factual. No "Now we…", no hype. The screenshots do the talking.
- `title` ≤ 6 words, describes the change ("Darker palette", "Mobile nav fix"), not the effort.
- `art`: optional specimen icon key from `src/lib/specimens.ts` for the homepage tile (see `design/specimen-icons-prompt.md`). If it's not set, the tile shows `cover`.
- `focus`: optional CSS selector or `#anchor` the post should zoom/scroll to when the change is small.
- `convo`: the `id`s from `conversation.jsonl` for the user message(s) and reply behind this step. Read the file to get them; don't invent ids. The post uses them to show the full exchange and link to the PR comments.
- Keep `steps` in order. Never delete a step; mark it `dead-end` instead.
- Record the model/tool you are actually running as in `tools` (add, don't overwrite).

## 6. Prompts are published — clean and redact them

The user often dictates by voice. Before storing a prompt:
- **Clean**: remove filler ("um", "like, like", "sort of"), false starts and repeated words. Keep the user's own wording and meaning. Do not paraphrase, summarise, or improve it.
- **Trim**: over 400 chars → keep the instruction core, end with "…".
- **Redact**: API keys, tokens, passwords, email addresses, phone numbers, street addresses, names of private people, client names, internal URLs → `[redacted]`.
- If a step came from your own initiative (no user prompt), set `prompt` to `null` and `kind` to `fix` or `polish`.
- If a prompt is too personal or messy to clean without changing meaning, ask the user: "Publish this prompt as-is, cleaned, or hidden?"

## 7. Branches, tags, publishing

- **One worktree per creation.** Several sessions may run at once, so never switch branches in the main checkout. Start a creation with:
  ```bash
  git worktree add ../wt-<slug> -b creation/<slug> main
  cd ../wt-<slug>
  ```
  Then push and open a draft PR so the conversation log can post to it (see CONVERSATIONS.md): `git commit --allow-empty -m "start <slug>" && git push -u origin HEAD && gh pr create --draft --fill`.
  Resume with `cd ../wt-<slug>` (or `git worktree add ../wt-<slug> creation/<slug>` if the folder is gone). Run everything, including screenshot paths, from inside the worktree. Then create `creations/<slug>/`, `process.json` (with `steps: []`), and `steps/`.
- Check first: if `creations/<slug>/` already exists on `main` or another branch, stop and ask for a different slug.
- Never squash, rebase, or force-push a creation branch once a step is tagged. The history *is* the post.
- **Publish** (only when the user says it's done):
  1. Final step with `kind: "final"`.
  2. Set `published` (today) and `live` (URL if deployed) in `process.json`.
  3. Make sure `process.json` has `blurb` (≤ 5 words) and `cover` (the step image to use as the grid thumbnail, e.g. `steps/NN.webp`). The site derives the homepage entry from these; there is nothing else to update.
  4. Commit `creation(<slug>): publish`, tag `<slug>/v1`.
  5. Merge from the main checkout, not the worktree: `cd <main checkout> && git switch main && git pull && git merge --no-ff creation/<slug>` (preserves the step commits). Push `main` and tags (`git push --follow-tags` or `git push origin 'refs/tags/<slug>/*'`).
  6. Leave the worktree in place unless the user says to remove it (`git worktree remove ../wt-<slug>`).
- Later revisions reopen the same branch, continue step numbering, and publish as `<slug>/v2`. The post shows v1 → v2 as a divider.

## 8. How the post renders (contract for the site template)

Top to bottom, minimal text:
1. Title, kind, dates, step count.
2. **Live embed** of `embed` in an iframe (sandboxed), with a desktop/mobile toggle.
3. **Timeline**, one row per step: screenshot (click → open `snapshot`), step number + title, prompt in a chat-bubble style, note underneath in small text. `dead-end` rows dimmed with a strike label; `under-the-hood` rows collapsed.
4. Optional scrubber: a slider across all step screenshots (before/after).

Anything not in `process.json` does not appear in the post. Don't write prose elsewhere expecting it to be published.

## 9. Don'ts

- Don't commit a visible change without a screenshot.
- Don't bundle two user prompts into one step.
- Don't edit old steps' `prompt` or `note` after tagging, except to redact.
- Don't touch other creations' folders or site code in a creation commit.
- Don't switch branches in the main checkout; use the creation's worktree.
- Don't publish without the user saying so.
