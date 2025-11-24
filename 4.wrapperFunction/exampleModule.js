

console.log("inside exampleModule.js:", __dirname);
console.log("inside exampleModule.js:", __filename);



const greet = function(name) {
    return `Hello WOrld! ${name}`;
};

module.exports = {greet};