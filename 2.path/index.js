const path = require('path');


console.log('Current directory:', __dirname);
console.log('current file:', __filename);

const fileName = path.basename(__filename);
console.log('File name:', fileName);

const dirName = path.dirname(__filename);
console.log('Directory name:', dirName);

const fileExt = path.extname(__filename);
console.log('File extension:', fileExt);

const parsedPath = path.parse(__filename);
console.log('Parsed path:', parsedPath);

const joinedPath = path.join(__dirname, 'subfolder', 'file.txt');
console.log('Joined path:', joinedPath);    

const resolvedPath = path.resolve(__dirname, 'subfolder', 'file.txt');
console.log('Resolved path:', resolvedPath);    

const normalizedPath = path.normalize('/folder//subfolder/../file.txt');
console.log('Normalized path:', normalizedPath);