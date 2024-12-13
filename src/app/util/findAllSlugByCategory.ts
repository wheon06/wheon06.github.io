import path from 'path';
import fs from 'fs';

export const findAllSlugByCategory = (basePath: string): string[] => {
  const result: string[] = [];

  function findDirectories(currentPath: string): void {
    const entries = fs.readdirSync(currentPath, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isDirectory()) {
        const fullPath = path.join(currentPath, entry.name);
        result.push(fullPath);
        findDirectories(fullPath);
      }
    }
  }

  findDirectories(basePath);
  return result;
};
