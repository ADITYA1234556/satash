import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const repoRoot = path.resolve(__dirname, '..');
const src = path.join(repoRoot, 'dist', 'apps', 'web');
const dest = path.join(repoRoot, 'dist');
const publicHtmlDest = path.join(repoRoot, 'public_html');
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

    console.log('Prepared Hostinger dist at', dest);

    // Also ensure files are in public_html for Hostinger to serve
    try {
      // Create public_html if needed
      await fs.mkdir(publicHtmlDest, { recursive: true });

      // Remove old public_html content (except .htaccess)
      const publicFiles = await fs.readdir(publicHtmlDest);
      for (const file of publicFiles) {
        if (file !== '.htaccess') {
          await fs.rm(path.join(publicHtmlDest, file), { recursive: true, force: true });
        }
      }

      // Copy new files
      const distFiles = await fs.readdir(dest);
      for (const file of distFiles) {
        await fs.cp(
          path.join(dest, file),
          path.join(publicHtmlDest, file),
          { recursive: true }
        );
      }

      console.log('Copied to public_html at', publicHtmlDest);

      // Create a marker file to indicate successful build
      await fs.writeFile(path.join(publicHtmlDest, '.build-success'), 'Build completed successfully');
    } catch (e) {
      console.warn('Warning: Could not copy to public_html:', e.message);
    }
  } catch (err) {
    console.error('Failed to prepare Hostinger dist:', err);
    await fs.rm(tempDest, { recursive: true, force: true }).catch(() => {});
    process.exit(1);
  }
})();
    process.exit(1);
  }
})();