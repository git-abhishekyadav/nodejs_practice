const {greet} = require('./exampleModule');


console.log("inside index.js:", __dirname);
console.log("inside index.js:", __filename);

console.log(greet('Krishna'));

// wrapper function 
// (function(exports, require, module, __filename, __dirname) {
    // your module code would be here
// })(module.exports, require, module, __filename, __dirname);