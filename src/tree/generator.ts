import * as fs from 'fs';
import * as path from 'path';


export function generateTree(dir: string, prefix: string = ''): string {

    const items = fs.readdirSync(dir);
    let tree = "";

    items.forEach((item, index) => {
        if(["node_modules", "dist", "build"].includes(item)) return;

        const fullPath = path.join(dir, item);
        const isLast = index === items.length - 1;

        const connection = isLast ? '└── ' : '├── ';
        tree += `${prefix}${connection}${item}\n`;

        if (fs.statSync(fullPath).isDirectory()) {
            const newPrefix = prefix + (isLast ? '    ' : '│   ');
            tree += generateTree(fullPath, newPrefix);
        }   
    });

    return tree;
}   
