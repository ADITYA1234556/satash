import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const repoRoot = path.resolve(__dirname, '..');
const src = path.join(repoRoot, 'dist', 'apps', 'web');
const dest = path.join(repoRoot, 'dist');
const buildDest = path.join(repoRoot, 'build');
const tempDest = path.join(repoRoot, '.dist-temp');

(async () => {
  try {
    // sanity check - source exists
    await fs.access(src);

    // copy web build to temp
    await fs.cp(src, tempDest, { recursive: true });

    // remove old dist
    await fs.rm(dest, { recursive: true, force: true });

    // move temp to dist
    await fs.rename(tempDest, dest);

    console.log('✓ Prepared dist at', dest);

    // Copy to build directory for Hostinger
    try {
      // Remove old build directory
      await fs.rm(buildDest, { recursive: true, force: true });
      
      // Create build directory
      await fs.mkdir(buildDest, { recursive: true });

      // Copy all files from dist to build
      const distFiles = await fs.readdir(dest);
      for (const file of distFiles) {
        const src = path.join(dest, file);
        const dst = path.join(buildDest, file);
        await fs.cp(src, dst, { recursive: true });
      }

      console.log('✓ Deployed to build directory at', buildDest);
    } catch (e) {
      console.error('✗ Failed to deploy to build directory:', e.message);
      process.exit(1);
    }
  } catch (err) {
    console.error('✗ Failed to prepare Hostinger dist:', err);
    await fs.rm(tempDest, { recursive: true, force: true }).catch(() => {});
    process.exit(1);
  }
})();