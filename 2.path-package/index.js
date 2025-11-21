const path = require('path');

//
const directoryName = path.dirname(__filename);
console.log("🪲 ~ index.js:6 ~ directoryName:", directoryName);

const fileName = path.basename(__filename);
console.log("🪲 ~ index.js:10 ~ fileName:", fileName);


const fileExt = path.extname(__filename);
console.log("🪲 ~ index.js:12 ~ fileExt:", fileExt);


//its like string concat, creates relative path and normalize it like removing /// or / .. .
const joinPath = path.join('user','address','states');
console.log("🪲 ~ index.js:15 ~ joinPath:", joinPath);


//it uses process.cwd() which looks for current dir
//  and normalize it like removing /// or / .. .
//  and add to curr dir creates absolute path
const resolvePath = path.resolve('resolve','path');
console.log("🪲 ~ index.js:22 ~ resolvePath:", resolvePath);


// Does not take multiple path
// const normalizePath = path.normalize('curr','sub', '..', '/file.txt');
// console.log("🪲 ~ index.js:25 ~ normalizePath:", normalizePath);


const normalizePath = path.normalize('curr/sub/../file.txt');
console.log(normalizePath);





