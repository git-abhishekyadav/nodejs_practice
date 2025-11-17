const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "script");

if (!fs.existsSync(filePath)) {
  fs.mkdirSync(filePath);
  console.log("Script foldercreated successfully");
}

const scriptFilePath = path.join(filePath, "script.txt");
fs.writeFileSync(scriptFilePath, "Hello from the script file");
console.log("file created successfully");

const scriptFileContent = fs.readFileSync(scriptFilePath, "utf-8");
console.log("🪲 ~ index.js:16 ~ scriptFileContent:", scriptFileContent);

const appendFileContent = fs.appendFileSync(
  scriptFilePath,
  "\nThis is new script appended"
);
console.log("file appended successfully");

const readAppendContent = fs.readFileSync(scriptFilePath, "utf-8");
console.log("🪲 ~ index.js:24 ~ readAppendContent:", readAppendContent);

//Async way to write to file
const asyncFileScript = path.join(filePath, "async-script.txt");
fs.writeFile(asyncFileScript, "This is file written by async way", (err) => {
  if (err) throw new err();
  console.log("File created async way");

  fs.readFile(asyncFileScript, "utf-8", (err, data) => {
    if (err) throw new err();
    console.log("🪲 ~ index.js:36 ~ data:", data);

    fs.appendFile(
      asyncFileScript,
      "\n new line append to async file",
      (err) => {
        if (err) throw new err();
        console.log("File appended async way");

        fs.readFile(asyncFileScript, "utf-8", (err, appendedData) => {
          if (err) throw new err();
          console.log("🪲 ~ index.js:36 ~ data:", appendedData);
        });
      }
    );
  });
});

// with async await
const fsAwait = require("fs").promises; 

async function createAyncAwaitFileSystem() {
  try {
    const asyncAwaitFileScript = path.join(filePath, "async-await-script.txt");
    await fsAwait.writeFile(
      asyncAwaitFileScript,
      "This is file written by async way"
    );
    console.log("File created async await way");

    const readByAsyncAwait = await fsAwait.readFile(asyncAwaitFileScript, "utf-8");
    if (!readByAsyncAwait) throw new Error("Failed to read file");
    console.log("🪲 ~ index.js:66 ~ readByAsyncAwait:", readByAsyncAwait);

    await fsAwait.appendFile(
      asyncAwaitFileScript,
      "\n new line append to async file"
    );
    console.log("File appended async await successfully");

    const readAppend = await fsAwait.readFile(asyncAwaitFileScript, "utf-8");
    if (!readAppend) throw new Error("Failed to read appended file");
    console.log("🪲 ~ index.js:74 ~ readAppend:", readAppend);
  } catch (error) {
    console.log("🪲 ~ index.js:59 ~ createAyncAwaitFileSystem ~ error:", error);
  }
}

createAyncAwaitFileSystem();
