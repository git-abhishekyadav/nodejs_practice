

console.log('Inside wrapper explorer');

console.log('__filename in wrapper explorer', __filename);
console.log('__direname in wrapper explorer', __dirname);

module.exports.greet = (name) => console.log(`Hello ${name}`);

