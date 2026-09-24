# Conversation logging protocol

Every LLM conversation that changes this repo is recorded twice:

1. **In git:** a JSONL log committed alongside the work. It's searchable with `git grep`, and the creations site can render it.
2. **On the branch's PR:** one comment per turn. It's searchable on GitHub and is the history you read later.

`tools/convo-log` does both. Hooks call it automatically where the tool supports hooks. For tools that don't, you run it by hand.

---

## 1. What gets recorded

| Rule | Detail |
|---|---|
| One comment per turn | Consecutive user messages are merged into **one** comment. Each assistant reply is **one** comment. |
| Text only | Your prompts and the assistant's final reply for the turn. Tool calls, diffs, and thinking are **not** logged (the commits already hold the diffs). |
| Secrets redacted | API keys, tokens, private keys and `key=value` secrets become `[redacted]` before anything is written or posted. |
| Order | A user comment is only posted once the reply arrives (so bursts of messages group). Anything still waiting is posted when the session ends, or by running `convo-log sync --flush`. |
| No PR yet | Messages queue in the log and post, in order, on the first reply after the branch has a PR (or run `convo-log sync`). |
| Never blocks | If logging fails, it prints a warning and exits 0. The agent carries on. |

## 2. Where the log lives

| Branch | Log file |
|---|---|
| `creation/<slug>` | `creations/<slug>/conversation.jsonl` (committed with the creation's steps) |
| anything else | `conversations/<branch>.jsonl` |

Each line:
```json
{"id":"86675602508e","ts":"2026-09-24T10:14:03-07:00","role":"user","tool":"claude","model":null,
 "session":"s1","text":"make it blue","comment":"https://github.com/<you>/<repo>/pull/7#issuecomment-…"}
```
`comment` is `null` until posted. It then holds the link to the PR comment, so a creation step can link straight to the conversation behind it.

Each PR comment starts with a hidden marker, used for de-duplication and for scripts:
```
<!-- convo v1 role=user tool=claude session=s1 ids=86675602508e,1cae9d51faaa -->
**Joshua** · via Claude Code · 2026-09-24 10:14
```

## 3. Setup (once per repo)

1. Copy `tools/convo-log` into the repo. It needs Python 3 and nothing else.
2. Install and log in to the GitHub CLI: `brew install gh && gh auth login`.
3. Add the config for each tool you use (§4).
4. Add this to `CLAUDE.md` / `AGENTS.md`:
   ```
   Conversations are logged by tools/convo-log (see CONVERSATIONS.md). At the start of work on a new branch,
   push it and open a draft PR so the log has somewhere to post:
   git push -u origin HEAD && gh pr create --draft --fill
   Include the conversation log file in your commits. Never edit or delete conversation logs.
   ```
   A PR needs at least one commit that `main` doesn't have. If the branch has none yet, make an empty one first: `git commit --allow-empty -m "start <slug>"`.

## 4. Per-tool setup

| Tool | How it's captured | Reliability |
|---|---|---|
| **Claude Code** | Hooks in `.claude/settings.json`: `UserPromptSubmit` → your prompt, `Stop` → `last_assistant_message`, `SessionEnd` → posts anything still waiting. | High |
| **Codex CLI** | `notify` in `~/.codex/config.toml`. Each turn it passes your messages (`input-messages`) and the final reply (`last-assistant-message`). | High |
| **Copilot / agents in VS Code** | Hooks (Preview) in `.github/hooks/convo-log.json`: `UserPromptSubmit` → prompt, `Stop` → the reply, read from the transcript. The transcript format isn't a stable API, so the reply can be missed. | Medium |
| **ChatGPT, Claude.ai, Gemini, any chat UI** | No hooks. Log by hand (below). | Manual |
| **Any other agent** | Tell it in `AGENTS.md` to run `convo-log add` at the end of each turn. | Low. Agents forget. |

**Claude Code** — `.claude/settings.json` (included):
```json
{ "hooks": {
  "UserPromptSubmit": [{ "hooks": [{ "type": "command", "command": "python3 \"$CLAUDE_PROJECT_DIR/tools/convo-log\" capture claude", "timeout": 10 }]}],
  "Stop":             [{ "hooks": [{ "type": "command", "command": "python3 \"$CLAUDE_PROJECT_DIR/tools/convo-log\" capture claude", "async": true, "timeout": 60 }]}],
  "SessionEnd":       [{ "hooks": [{ "type": "command", "command": "python3 \"$CLAUDE_PROJECT_DIR/tools/convo-log\" capture claude", "timeout": 60 }]}]
}}
```
Set `CONVO_MODEL=claude-opus-5-5` (or similar) in your shell if you want the model name on comments.

**Codex CLI** — `~/.codex/config.toml`. `notify` is a global setting, but the script only acts inside a git repo and logs to whichever repo Codex ran in:
```toml
notify = ["python3", "/absolute/path/to/repo/tools/convo-log", "capture", "codex"]
```

**VS Code / Copilot** — `.github/hooks/convo-log.json` (included). Leave `chat.useClaudeHooks` **off**. Otherwise VS Code also runs the Claude Code hooks and labels its messages as Claude Code.

**Manual (ChatGPT etc.)** — from inside the repo:
```bash
pbpaste | tools/convo-log add --role user --tool chatgpt
pbpaste | tools/convo-log add --role assistant --tool chatgpt --model gpt-5
tools/convo-log sync --flush        # when you're done
```
For a long chat, paste the whole exported thread as a single assistant entry, with `--tool chatgpt` and a first line saying "Imported thread".

## 5. Searching later

- **Across all PRs on GitHub:** search `repo:<you>/<repo> is:pr "convo v1" <words>`. Comment text is indexed; the hidden marker matches every logged comment.
- **In git:** `git grep -i "<words>" -- 'creations/*/conversation.jsonl' 'conversations/*.jsonl'`
- **By tool or role:** `jq -c 'select(.tool=="codex" and .role=="user")' conversations/*.jsonl`

## 6. How it connects to Creations

- On `creation/<slug>` branches the log sits at `creations/<slug>/conversation.jsonl`, so it's included in every step commit.
- In each step of `process.json`, set `convo` to the `id`s of the log entries behind that step (§5 of CREATIONS.md). The post can then show the whole exchange, not just the cleaned prompt.
- The raw log is **not** cleaned (filler words stay in). The published post shows `prompt` from `process.json`, which is cleaned per CREATIONS.md §6.

## 7. Privacy

- On a **public** repo, PR comments are public. Only secrets are auto-redacted, not personal details. Keep private work in a private repo, or review the log before opening the PR.
- To remove something after posting, edit or delete the PR comment on GitHub **and** the matching line in the log. Removing it from git history needs a history rewrite, which the creations protocol otherwise forbids, so decide before merging.

## 8. Limits

- Only the assistant's **final** message per turn is captured. Text it wrote between tool calls is not.
- Messages from sub-agents are not captured.
- Long replies are split across several comments (GitHub caps a comment at 65,536 characters).
- If a PR is closed and a new one opened for the same branch, later comments go to the new PR. Earlier ones stay on the old one, and the log still has everything.
