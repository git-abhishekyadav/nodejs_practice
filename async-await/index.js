// async function divideFn(num1,num2) {
//         if(num2===0) {
//             throw new Error("Cannot divide by 0");
//         }

//         return num1/num2;
// }

// async function mainFn() {
// try {
//    const result = await divideFn(100,0);

//    console.log("🪲 ~ index.js:13 ~ mainFn ~ result:", result);

// } catch (error) {

//     console.log("🪲 ~ index.js:14 ~ mainFn ~ error:", error);

    
// }
// }

// mainFn();


const fs = require('fs').promises;
async function createAyncAwaitFileSystem() {
  try {
    await fs.writeFile(
      "async-await.txt",
      "This is file written by async way"
    );
    console.log("File created async await way");

    const readByAsyncAwait = await fs.readFile("async-await.txt", "utf-8");
    if (!readByAsyncAwait) throw new Error("Failed to read file");
    console.log("🪲 ~ index.js:66 ~ readByAsyncAwait:", readByAsyncAwait);

    await fs.appendFile(
      "async-await.txt",
      "\n new line append to async file"
    );
    console.log("File appended async await successfully");

    const readAppend = await fs.readFile("async-await.txt", "utf-8");
    if (!readAppend) throw new Error("Failed to read appended file");
    console.log("🪲 ~ index.js:74 ~ readAppend:", readAppend);
  } catch (error) {
    console.log("🪲 ~ index.js:59 ~ createAyncAwaitFileSystem ~ error:", error);
  }
}

createAyncAwaitFileSystem();
    