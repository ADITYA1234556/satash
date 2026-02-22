import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

// Try public_html first (Hostinger), then fall back to dist
const staticDir = path.existsSync(path.join(__dirname, 'public_html'))
  ? path.join(__dirname, 'public_html')
  : path.join(__dirname, 'dist');

console.log(`Serving static files from: ${staticDir}`);

// Serve static files
app.use(express.static(staticDir));

// SPA fallback: serve index.html for all routes
app.get('*', (req, res) => {
	res.sendFile(path.join(staticDir, 'index.html'));
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
