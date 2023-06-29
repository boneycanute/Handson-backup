const puppeteer = require('puppeteer');
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

const launchBrowser = async () => await puppeteer.launch({ args: ["--no-sandbox"], headless: "new" });
const createPage = async (browser) => await browser.newPage();
const closeBrowser = async (browser) => await browser.close();
const closePage = async (page) => await page.close();

const folderPath = __dirname;

describe('Test Suite Title', () => {
  let browser, page, container;

  beforeAll(async () => {
    browser = await launchBrowser({ args: ["--no-sandbox"], headless: "new" });
    page = await createPage(browser);
    await page.goto(`file://${folderPath}/source/index.html`);
    container = await page.$('#container'); // Retrieve the container element
  });

  afterAll(async () => {
    await closePage(page);
    await closeBrowser(browser);
  });

  
  test('Check when highlight button is clicked', async () => {
    await page.waitForSelector('#highlightBtn');
    await page.click('#highlightBtn'); 
    await page.waitForTimeout(500);

    let firstParagraph = await page.$('#container > p:first-child');
    let lastParagraph = await page.$('#container > p:last-child');
    let firstChildBgColor = await page.evaluate(el => el.style.backgroundColor, firstParagraph);
    let lastChildBgColor = await page.evaluate(el => el.style.backgroundColor, lastParagraph);

    expect(firstChildBgColor).toBe('yellow');
    expect(lastChildBgColor).toBe('yellow');
    await page.waitForSelector('#undoBtn');
    await page.click('#undoBtn'); 

    await page.waitForTimeout(500);

    firstParagraph = await page.$('#container > p:first-child');
    lastParagraph = await page.$('#container > p:last-child');
    firstChildBgColor = await page.evaluate(el => el.style.backgroundColor, firstParagraph);
    lastChildBgColor = await page.evaluate(el => el.style.backgroundColor, lastParagraph);
    expect(firstChildBgColor).toBe('');
    expect(lastChildBgColor).toBe('');

    await page.click('#highlightBtn'); 
    firstParagraph = await page.$('#container > p:first-child');
    lastParagraph = await page.$('#container > p:last-child');
    firstChildBgColor = await page.evaluate(el => el.style.backgroundColor, firstParagraph);
    lastChildBgColor = await page.evaluate(el => el.style.backgroundColor, lastParagraph);

    expect(firstChildBgColor).toBe('yellow');
    expect(lastChildBgColor).toBe('yellow');

  });

  test('Check when Undo highlight button is clicked', async () => {
    await page.waitForSelector('#undoBtn');
    await page.click('#undoBtn'); 

    await page.waitForTimeout(500);

    let firstParagraph = await page.$('#container > p:first-child');
    let lastParagraph = await page.$('#container > p:last-child');
    let firstChildBgColor = await page.evaluate(el => el.style.backgroundColor, firstParagraph);
    let lastChildBgColor = await page.evaluate(el => el.style.backgroundColor, lastParagraph);
    expect(firstChildBgColor).toBe('');
    expect(lastChildBgColor).toBe('');


    await page.waitForSelector('#highlightBtn');
    await page.click('#highlightBtn'); 
    await page.waitForTimeout(500);
    firstParagraph = await page.$('#container > p:first-child');
    lastParagraph = await page.$('#container > p:last-child');
    firstChildBgColor = await page.evaluate(el => el.style.backgroundColor, firstParagraph);
    lastChildBgColor = await page.evaluate(el => el.style.backgroundColor, lastParagraph);

    expect(firstChildBgColor).toBe('yellow');
    expect(lastChildBgColor).toBe('yellow');
  });


  test('Check when interchange button is clicked', async () => {
    await page.waitForSelector('#interChangeBtn');
    await page.click('#interChangeBtn'); 

    await page.waitForTimeout(500);
    
    let preText = await page.evaluate(() => {
      let container = document.getElementById('container');
      return container.firstChild.textContent.trim();
    });

    let finalText = await page.evaluate(() => {
      let container = document.getElementById('container');
      return container.lastChild.textContent.trim();
    });

    expect(preText).toBe('Final text');
    expect(finalText).toBe('Pre text');

    await page.click('#interChangeBtn'); 
     preText = await page.evaluate(() => {
      let container = document.getElementById('container');
      return container.firstChild.textContent.trim();
    });

     finalText = await page.evaluate(() => {
      let container = document.getElementById('container');
      return container.lastChild.textContent.trim();
    });

    expect(preText).toBe('Pre text');
    expect(finalText).toBe('Final text');
  });

});
