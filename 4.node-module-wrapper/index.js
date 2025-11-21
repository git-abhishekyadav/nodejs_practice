
function sqrt(a) {
    if(a === -1) {
        throw new Error("Invalid Number");
    }

    return Math.sqrt(a) || a ** 0.5;
}

module.exports = sqrt;


//✅ In Node.js, every CommonJS module is wrapped automatically in a function before execution:

// (function (exports, require, module, __filename, __dirname) {
//     your code
// }) (module.exports, require, module, __filename, __dirname)