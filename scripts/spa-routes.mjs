import { copyFileSync, mkdirSync } from 'node:fs'

// Amplify has no rewrite rule for client-side routes, so a direct visit to one returned 404.
// A copy of index.html at each route's folder lets Amplify serve the app there.
const routes = ['projects/balisong', 'projects/balisong/latch']

for (const route of routes) {
  mkdirSync(`dist/${route}`, { recursive: true })
  copyFileSync('dist/index.html', `dist/${route}/index.html`)
}
