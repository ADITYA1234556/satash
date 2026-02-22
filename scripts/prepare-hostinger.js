import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const repoRoot = path.resolve(__dirname, '..');
const src = path.join(repoRoot, 'dist', 'apps', 'web');
const dest = path.join(repoRoot, 'dist');
const tempDest = path.join(repoRoot, '.dist-temp');

// On Hostinger: repo is at .../public_html/.builds/source/repository/
// We need to deploy to .../public_html/ (three levels up)
const serverPublicHtml = path.resolve(repoRoot, '../../..');

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

    console.log('Prepared Hostinger dist at', dest);

    // Copy built files to server's public_html directory
    try {
      // Ensure the destination exists
      await fs.mkdir(serverPublicHtml, { recursive: true });

      // Remove old files in public_html (but keep .htaccess and other important files)
      const existingFiles = await fs.readdir(serverPublicHtml).catch(() => []);
      for (const file of existingFiles) {
        if (!['public_html', '.htaccess', '.htpasswd', 'error_log', 'access_log'].includes(file)) {
          try {
            const filePath = path.join(serverPublicHtml, file);
            const stat = await fs.stat(filePath);
            if (stat.isDirectory()) {
              await fs.rm(filePath, { recursive: true, force: true });
            } else {
              await fs.rm(filePath, { force: true });
            }
          } catch (e) {
            // Ignore errors removing files
          }
        }
      }

      // Copy all built content to public_html
      const distFiles = await fs.readdir(dest);
      for (const file of distFiles) {
        const src = path.join(dest, file);
        const dst = path.join(serverPublicHtml, file);
        await fs.cp(src, dst, { recursive: true });
      }

      console.log('✓ Deployed to server public_html at', serverPublicHtml);
    } catch (e) {
      console.warn('⚠ Warning: Could not deploy to server public_html:', e.message);
      console.log('Files are available in repository ./dist/ directory');
    }
  } catch (err) {
    console.error('✗ Failed to prepare Hostinger dist:', err);
    await fs.rm(tempDest, { recursive: true, force: true }).catch(() => {});
    process.exit(1);
  }
})();