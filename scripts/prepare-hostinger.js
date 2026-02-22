import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const repoRoot = path.resolve(__dirname, '..');
const src = path.join(repoRoot, 'dist', 'apps', 'web');
const dest = path.join(repoRoot, 'dist');
const tempDest = path.join(repoRoot, 'dist-temp');

(async () => {
	try {
		// copy files to temp location first
		await fs.cp(src, tempDest, { recursive: true });
		// remove old dist folder
		await fs.rm(dest, { recursive: true, force: true });
		// move temp to dist
		await fs.rename(tempDest, dest);
		console.log('Prepared Hostinger dist at', dest);
	} catch (err) {
		console.error('Failed to prepare Hostinger dist:', err);
		// cleanup temp dir if it exists
		await fs.rm(tempDest, { recursive: true, force: true }).catch(() => {});
		process.exit(1);
	}
})();
