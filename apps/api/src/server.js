import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '../../..');
const app = express();
const PORT = process.env.PORT || 3000;

let staticDir;
if (fs.existsSync(path.join(repoRoot, 'build'))) {
  staticDir = path.join(repoRoot, 'build');
  console.log('✓ Using build/ directory');
} else if (fs.existsSync(path.join(repoRoot, 'dist'))) {
  staticDir = path.join(repoRoot, 'dist');
  console.log('✓ Using dist/ directory');
} else if (fs.existsSync(path.join(repoRoot, 'public_html'))) {
  staticDir = path.join(repoRoot, 'public_html');
  console.log('✓ Using public_html/ directory');
} else {
  console.error('✗ ERROR: No build output directory found!');
  console.error('✗ Please run: npm run build');
  console.error('✗ Expected one of: ./build, ./dist, or ./public_html');
  process.exit(1);
}

console.log(`✓ Serving static files from: ${staticDir}`);

const indexPath = path.join(staticDir, 'index.html');
if (!fs.existsSync(indexPath)) {
  console.error(`✗ ERROR: index.html not found at ${indexPath}`);
  console.error('✗ Please run: npm run build');
  process.exit(1);
}

app.use(express.static(staticDir, {
  setHeaders: (res, filePath) => {
    if (filePath.includes('/assets/')) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    } else {
      res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
    }

    if (filePath.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    } else if (filePath.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    }
  }
}));

app.get('*', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(indexPath);
});

app.listen(PORT, () => {
  console.log(`✓ Server running on http://localhost:${PORT}`);
});
