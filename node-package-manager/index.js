const lodash = require('lodash');


const names = ['abhishek','paul','gopal', 'chetan', 'chris'];

const capitalNames  = lodash.map(names, lodash.upperCase);

console.log(capitalNames);