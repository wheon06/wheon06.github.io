import fs from 'fs';
import path from 'path';

export const getAllSlugNames = (dirPath: string): string[] => {
  const subFolders: string[] = [];

  const exploreDirectories = (currentPath: string, isRoot: boolean) => {
    const items = fs.readdirSync(currentPath);

    for (const item of items) {
      const fullPath = path.join(currentPath, item);

      if (fs.statSync(fullPath).isDirectory()) {
        if (!isRoot) {
          subFolders.push(fullPath.split('/')[4]);
        }
        exploreDirectories(fullPath, false);
      }
    }
  };

  exploreDirectories(dirPath, true);
  return subFolders;
};
