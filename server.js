import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from dist/apps/web
app.use(express.static(path.join(__dirname, 'dist', 'apps', 'web')));

// SPA fallback: serve index.html for all routes
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist', 'apps', 'web', 'index.html'));
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
