const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'example.txt');

// Write to a file
fs.writeFileSync(filePath, 'Hello, this is a sample text file.');

// Read from a file
const data = fs.readFileSync(filePath, 'utf8');
console.log('File content:', data);

// Append to a file
fs.appendFileSync(filePath, '\nThis is an appended line.');

// Read the updated file
const updatedData = fs.readFileSync(filePath, 'utf8');
console.log('Updated file content:', updatedData);

// Delete the file
fs.unlinkSync(filePath);
console.log('File deleted successfully.');  