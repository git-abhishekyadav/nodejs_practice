const lodash = require('lodash');

const numbers = [1, 2, 3, 4, 5, 6];

// Using lodash to chunk the array into smaller arrays of size 2
const chunkedArray = lodash.chunk(numbers, 2);
console.log('Chunked Array:', chunkedArray);

// Using lodash to find the maximum number in the array
const maxNumber = lodash.max(numbers);
console.log('Maximum Number:', maxNumber);

// Using lodash to shuffle the array
const shuffledArray = lodash.shuffle(numbers);
console.log('Shuffled Array:', shuffledArray);

// Using lodash to remove duplicates from an array
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = lodash.uniq(arrayWithDuplicates);
console.log('Unique Array:', uniqueArray);

// Using lodash to capitalize a string
const lowerCaseString = 'hello world from lodash';
const capitalizedString = lodash.capitalize(lowerCaseString);
console.log('Capitalized String:', capitalizedString);

// Using lodash to debounce a function
const logMessage = () => {
    console.log('Function executed!');
};

const debouncedLogMessage = lodash.debounce(logMessage, 2000);

// Simulating rapid calls to the debounced function
debouncedLogMessage();
debouncedLogMessage();
debouncedLogMessage();

// Only the last call will execute after 2 seconds  

console.log('Debounced function calls simulated. Check console after 2 seconds.');

