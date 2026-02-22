const fs = require('fs').promises;
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const src = path.join(repoRoot, 'dist', 'apps', 'web');
const dest = path.join(repoRoot, 'dist');

(async () => {
	try {
		// remove existing root dist
		await fs.rm(dest, { recursive: true, force: true });
		// recreate dest and copy files
		await fs.mkdir(dest, { recursive: true });
		await fs.cp(src, dest, { recursive: true });
		console.log('Prepared Hostinger dist at', dest);
	} catch (err) {
		console.error('Failed to prepare Hostinger dist:', err);
		process.exit(1);
	}
})();
