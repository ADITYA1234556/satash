import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

// Determine which directory to serve based on what exists
// Priority: build (Hostinger) > dist (local dev) > public_html (fallback)
let staticDir;
if (fs.existsSync(path.join(__dirname, 'build'))) {
  staticDir = path.join(__dirname, 'build');
  console.log('✓ Using build/ directory');
} else if (fs.existsSync(path.join(__dirname, 'dist'))) {
  staticDir = path.join(__dirname, 'dist');
  console.log('✓ Using dist/ directory');
} else if (fs.existsSync(path.join(__dirname, 'public_html'))) {
  staticDir = path.join(__dirname, 'public_html');
  console.log('✓ Using public_html/ directory');
} else {
  console.error('✗ ERROR: No build output directory found!');
  console.error('✗ Please run: npm run build');
  console.error('✗ Expected one of: ./build, ./dist, or ./public_html');
  process.exit(1);
}

console.log(`✓ Serving static files from: ${staticDir}`);

// Check if index.html exists
const indexPath = path.join(staticDir, 'index.html');
if (!fs.existsSync(indexPath)) {
  console.error(`✗ ERROR: index.html not found at ${indexPath}`);
  console.error('✗ Please run: npm run build');
  process.exit(1);
}

// Serve assets with proper MIME types and long-term caching
app.use(express.static(staticDir, {
  setHeaders: (res, path) => {
    // Cache assets for 1 year (they have hashes in filenames)
    if (path.includes('/assets/')) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    } else {
      // Don't cache HTML
      res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
    }
    // Ensure proper MIME types
    if (path.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    } else if (path.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    }
  }
}));

// SPA fallback: serve index.html for all routes (only if file doesn't exist)
app.get('*', (req, res) => {
	res.setHeader('Content-Type', 'text/html');
	res.sendFile(indexPath);
});

app.listen(PORT, () => {
	console.log(`✓ Server running on http://localhost:${PORT}`);
});
