const puppeteer = require('puppeteer');
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

let browser;
let page;

const launchBrowser = async () => await puppeteer.launch({ args: ["--no-sandbox"], headless: "new" });
const createPage = async (browser) => await browser.newPage();
const closeBrowser = async (browser) => await browser.close();
const closePage = async (page) => await page.close();

const folderPath = __dirname;

describe('Test Suite Title', () => {
  beforeAll(async () => {
    browser = await launchBrowser();
    page = await createPage(browser);
    await page.goto(`file://${folderPath}/source/index.html`);
  });

  afterAll(async () => {
    await closePage(page);
    await closeBrowser(browser);
  });

  test('Clicked on Paris', async () => {
    const paris = (await page.$$('.option'))[0];
    const ans = await page.$('.result');
    let color = await page.evaluate((element) => {
      return window.getComputedStyle(element).color;
    }, ans);
    let text = await page.evaluate((element) => {
      return element.textContent;
    }, ans);
    expect(color).toBe('rgb(0, 0, 0)');
    expect(text).toBe('');

    await paris.click();
    await page.waitForTimeout(500);

    color = await page.evaluate((element) => {
      return window.getComputedStyle(element).color;
    }, ans);
    text = await page.evaluate((element) => {
      return element.textContent;
    }, ans);

    expect(color).toBe('rgb(0, 128, 0)');
    expect(text).toBe('Correct!');
    await page.reload();
  });

  test('Clicked on London', async () => {
    const london = (await page.$$('.option'))[1];
    const ans = await page.$('.result');
    let color = await page.evaluate((element) => {
      return window.getComputedStyle(element).color;
    }, ans);
    let text = await page.evaluate((element) => {
      return element.textContent;
    }, ans);
    expect(color).toBe('rgb(0, 0, 0)');
    expect(text).toBe('');

    await london.click();
    await page.waitForTimeout(500);

    color = await page.evaluate((element) => {
      return window.getComputedStyle(element).color;
    }, ans);
    text = await page.evaluate((element) => {
      return element.textContent;
    }, ans);

    expect(color).toBe('rgb(255, 0, 0)');
    expect(text).toBe('Incorrect!');
    await page.reload();
  });

  test('Clicked on Rome', async () => {
    const rome = (await page.$$('.option'))[2];
    const ans = await page.$('.result');
    let color = await page.evaluate((element) => {
      return window.getComputedStyle(element).color;
    }, ans);
    let text = await page.evaluate((element) => {
      return element.textContent;
    }, ans);
    expect(color).toBe('rgb(0, 0, 0)');
    expect(text).toBe('');

    await rome.click();
    await page.waitForTimeout(500);

    color = await page.evaluate((element) => {
      return window.getComputedStyle(element).color;
    }, ans);
    text = await page.evaluate((element) => {
      return element.textContent;
    }, ans);

    expect(color).toBe('rgb(255, 0, 0)');
    expect(text).toBe('Incorrect!');
    await page.reload();
  });
});
