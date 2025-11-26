const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

(async () => {
  try {
    console.log('Launching browser...');
    const browser = await puppeteer.launch({
      headless: true,
        executablePath: process.env.CHROMIUM_PATH,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
      dumpio:true
    });

    console.log('Creating new page...');

    const page = await browser.newPage();
    await page.setContent('<h1>Hello Abhishek!</h1>');


  const outputDir = path.join(__dirname, 'pdfs');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);


    // Save PDF inside container
const filePath = path.join(outputDir, 'output.pdf');
    

    console.log("🪲 ~ index.js:23 ~ filePath:", filePath);

await page.pdf({ path: filePath, format: 'A4' });

    console.log(`PDF created: ${filePath}`);
    await browser.close();
  } catch (err) {
    console.error('Error creating PDF:', err);
  }
})();
