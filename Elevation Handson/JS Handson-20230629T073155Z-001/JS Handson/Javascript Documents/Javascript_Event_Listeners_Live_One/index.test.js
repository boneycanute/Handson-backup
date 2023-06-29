const puppeteer = require('puppeteer');
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

let browser;
let page;
let container;

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
    container = await page.$('#container');
    const cssFilePath = __dirname + "/source/index.css";
    await page.addStyleTag({ path: cssFilePath });
  });

  afterAll(async () => {
    await closePage(page);
    await closeBrowser(browser);
  });

  test('Hover check', async () => {
    const imageContainers = await page.$$('.image-container');

    for (const container of imageContainers) {
      const caption = await container.$('.caption');

      let capOpacity = await page.evaluate((element) => {
        return window.getComputedStyle(element).getPropertyValue('opacity');
      }, caption);
      expect(parseFloat(capOpacity)).toBe(0);

      await container.hover();
      await page.waitForTimeout(500);
      
      capOpacity = await page.evaluate((element) => {
        return window.getComputedStyle(element).getPropertyValue('opacity');
      }, caption);

      expect(parseFloat(capOpacity)).toBe(1);
    }
  });


  test('Mouse out check', async () => {
    const imageContainers = await page.$$('.image-container');

    for (const container of imageContainers) {
      const caption = await container.$('.caption');

      let capOpacity = await page.evaluate((element) => {
        return window.getComputedStyle(element).getPropertyValue('opacity');
      }, caption);
      expect(parseFloat(capOpacity)).toBe(0);

      await container.hover();
      await page.waitForTimeout(500);
      
      capOpacity = await page.evaluate((element) => {
        return window.getComputedStyle(element).getPropertyValue('opacity');
      }, caption);

      expect(parseFloat(capOpacity)).toBe(1);
    }

    for (const container of imageContainers) {
      const caption = await container.$('.caption');

      let capOpacity = await page.evaluate((element) => {
        return window.getComputedStyle(element).getPropertyValue('opacity');
      }, caption);
      expect(parseFloat(capOpacity)).toBe(0);
      await container.hover();
      await container.hover({ steps: 10 });
      await page.mouse.move(0, 0);
      await page.waitForTimeout(500);
      
      capOpacity = await page.evaluate((element) => {
        return window.getComputedStyle(element).getPropertyValue('opacity');
      }, caption);

      expect(parseFloat(capOpacity)).toBe(0);
    }
  });
  test('Click check', async () => {
    const imageContainers = await page.$$('.image-container');
    for (const container of imageContainers) {
      const img = await container.$('.image');

      let imgOpacity = await page.evaluate((element) => {
        return window.getComputedStyle(element).getPropertyValue('opacity');
      }, img);
      expect(parseFloat(imgOpacity)).toBe(1);

      await img.click();
      await page.waitForTimeout(500);

      imgOpacity = await page.evaluate((element) => {
        return window.getComputedStyle(element).getPropertyValue('opacity');
      }, img);
      expect(parseFloat(imgOpacity)).toBe(0.3);

      await page.waitForTimeout(400);
      imgOpacity = await page.evaluate((element) => {
        return window.getComputedStyle(element).getPropertyValue('opacity');
      }, img);
      expect(parseFloat(imgOpacity)).toBe(1);
    }});
});
