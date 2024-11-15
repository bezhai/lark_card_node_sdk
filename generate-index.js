import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


const dir = './src';

// 递归遍历文件夹，过滤出所有 `.ts` 文件（排除 `index.ts` 自己）
function getFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getFiles(filePath, fileList);
    } else if (file.endsWith('.ts') && !file.endsWith('index.ts')) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

const tsFiles = getFiles(dir);

const output = tsFiles
  .map((file) => {
    const relativePath = `./${path.relative(dir, file).replace(/\.ts$/, '')}`;
    return `export * from '${relativePath}';`;
  })
  .join('\n');

fs.writeFileSync(path.join(dir, 'index.ts'), output);

console.log('index.ts 生成成功！');