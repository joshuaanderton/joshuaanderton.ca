import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'
import path from 'node:path'

const CREATIONS_DIR = path.resolve(__dirname, 'creations')

// Files inside creations/<slug>/ that are never served. The raw conversation log isn't cleaned
// (CONVERSATIONS.md §6), so the site only reads its PR comment links, via `?links` below.
const PRIVATE_FILES = new Set(['conversation.jsonl', '.DS_Store'])

const MIME: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.woff2': 'font/woff2',
}

function listCreations({ publishedOnly }: { publishedOnly: boolean }) {
  if (!fs.existsSync(CREATIONS_DIR)) return []
  return fs.readdirSync(CREATIONS_DIR).filter((slug) => {
    const manifest = path.join(CREATIONS_DIR, slug, 'process.json')
    if (!fs.existsSync(manifest)) return false
    if (!publishedOnly) return true
    return Boolean(JSON.parse(fs.readFileSync(manifest, 'utf8')).published)
  })
}

/**
 * Creations live in creations/<slug>/ (see CREATIONS.md).
 * - /creations/<slug>/        the post page (the app's index.html)
 * - /creations/<slug>/files/  the creation's own files: the embed, step screenshots and snapshots
 */
function creations(): Plugin {
  return {
    name: 'creations',
    load(id) {
      // `import x from '…/conversation.jsonl?links'` → { [entry id]: PR comment URL }
      if (!id.endsWith('conversation.jsonl?links')) return
      const file = id.slice(0, -'?links'.length)
      this.addWatchFile(file)
      const links: Record<string, string> = {}
      for (const line of fs.readFileSync(file, 'utf8').split('\n')) {
        try {
          const entry = JSON.parse(line)
          if (entry.id && entry.comment) links[entry.id] = entry.comment
        } catch {
          // skip blank or partial lines
        }
      }
      return `export default ${JSON.stringify(links)}`
    },
    configureServer(server) {
      server.watcher.add(CREATIONS_DIR)
      server.middlewares.use((req, res, next) => {
        // Post pages get the app, not the creation's own index.html (Vite would serve that from the root).
        if (req.url?.split('?')[0].match(/^\/creations\/[^/]+\/?(index\.html)?$/)) req.url = '/index.html'
        const match = req.url?.split('?')[0].match(/^\/creations\/([^/]+)\/files\/(.+)$/)
        if (!match) return next()
        const [, slug, rel] = match
        const file = path.join(CREATIONS_DIR, slug, decodeURIComponent(rel))
        if (!file.startsWith(path.join(CREATIONS_DIR, slug) + path.sep)) return next()
        if (PRIVATE_FILES.has(path.basename(file)) || !fs.existsSync(file) || !fs.statSync(file).isFile()) return next()
        res.setHeader('Content-Type', MIME[path.extname(file).toLowerCase()] ?? 'application/octet-stream')
        fs.createReadStream(file).pipe(res)
      })
    },
    writeBundle(options) {
      const outDir = options.dir ?? path.resolve(__dirname, 'dist')
      const shell = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8')
      for (const slug of listCreations({ publishedOnly: true })) {
        const target = path.join(outDir, 'creations', slug)
        fs.mkdirSync(target, { recursive: true })
        fs.writeFileSync(path.join(target, 'index.html'), shell)
        fs.cpSync(path.join(CREATIONS_DIR, slug), path.join(target, 'files'), {
          recursive: true,
          filter: (src) => !PRIVATE_FILES.has(path.basename(src)),
        })
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), creations()],
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') },
  },
})
