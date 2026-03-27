import * as fs from "fs";
import * as path from "path";

const IGNORE = [
  "node_modules",
  ".git",
  ".vscode",
  "dist",
  "build",
  "out",
  ".next"
];

export function generateTree(
  dir: string,
  prefix = "",
  depth = 4
): { tree: string; fileCount: number; folderCount: number } {
  if (depth === 0) {
    return { tree: "", fileCount: 0, folderCount: 0 };
  }

  let tree = "";
  let fileCount = 0;
  let folderCount = 0;

  let items = fs.readdirSync(dir);

  // 👉 Remove ignored
  items = items.filter(item => !IGNORE.includes(item));

  // 👉 Sort: folders first, then files
  items.sort((a, b) => {
    const aPath = path.join(dir, a);
    const bPath = path.join(dir, b);

    const aDir = fs.statSync(aPath).isDirectory();
    const bDir = fs.statSync(bPath).isDirectory();

    if (aDir === bDir) return a.localeCompare(b);
    return aDir ? -1 : 1;
  });

  items.forEach((item, index) => {
    const fullPath = path.join(dir, item);
    const isLast = index === items.length - 1;
    const connector = isLast ? "└── " : "├── ";

    const isDir = fs.statSync(fullPath).isDirectory();

    tree += `${prefix}${connector}${item}${isDir ? "/" : ""}\n`;

    if (isDir) {
      folderCount++;

      const newPrefix = prefix + (isLast ? "    " : "│   ");

      const result = generateTree(fullPath, newPrefix, depth - 1);

      tree += result.tree;
      fileCount += result.fileCount;
      folderCount += result.folderCount;
    } else {
      fileCount++;
    }
  });

  return { tree, fileCount, folderCount };
}