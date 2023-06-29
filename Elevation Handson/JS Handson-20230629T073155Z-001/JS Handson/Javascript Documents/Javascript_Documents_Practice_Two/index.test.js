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

  test('Red Box', async () => {
    const box = (await page.$$('.box'))[0];
    let opacity = await page.evaluate((element) => {
      return window.getComputedStyle(element).opacity;
    }, box);

    expect(opacity).toBe('0.5');

    await box.hover();
    await page.waitForTimeout(500);

    opacity = await page.evaluate((element) => {
      return window.getComputedStyle(element).opacity;
    }, box);

    expect(opacity).toBe('1');
    await box.hover({ steps: 10 });
    await page.mouse.move(0, 0);

    opacity = await page.evaluate((element) => {
      return window.getComputedStyle(element).opacity;
    }, box);
    expect(opacity).toBe('0.5');


  });
  test('Green Box', async () => {
    const box = (await page.$$('.box'))[1];
    let opacity = await page.evaluate((element) => {
      return window.getComputedStyle(element).opacity;
    }, box);

    expect(opacity).toBe('0.5');

    await box.hover();
    await page.waitForTimeout(500);

    opacity = await page.evaluate((element) => {
      return window.getComputedStyle(element).opacity;
    }, box);

    expect(opacity).toBe('1');
    await box.hover({ steps: 10 });
    await page.mouse.move(0, 0);

    opacity = await page.evaluate((element) => {
      return window.getComputedStyle(element).opacity;
    }, box);
    expect(opacity).toBe('0.5');


  });

  test('Blue Box', async () => {
    const box = (await page.$$('.box'))[2];
    let opacity = await page.evaluate((element) => {
      return window.getComputedStyle(element).opacity;
    }, box);

    expect(opacity).toBe('0.5');

    await box.hover();
    await page.waitForTimeout(500);

    opacity = await page.evaluate((element) => {
      return window.getComputedStyle(element).opacity;
    }, box);

    expect(opacity).toBe('1');
    await box.hover({ steps: 10 });
    await page.mouse.move(0, 0);

    opacity = await page.evaluate((element) => {
      return window.getComputedStyle(element).opacity;
    }, box);
    expect(opacity).toBe('0.5');


  });
});
