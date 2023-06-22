const { JSDOM } = require('jsdom');
const puppeteer = require('puppeteer');
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

const launchBrowser = async () => await puppeteer.launch();
const createPage = async (browser) => await browser.newPage();
const closeBrowser = async (browser) => await browser.close();
const closePage = async (page) => await page.close();

const folderPath = __dirname;

const helper = (title, fxn) => {
  describe(title, () => {
    let browser, page;

    beforeAll(async () => {
      browser = await launchBrowser();
      page = await createPage(browser);
      await page.goto(`file://${folderPath}/source/index.html`);
    });

    afterAll(async () => {
      await closePage(page);
      await closeBrowser(browser);
    });

    test('Before hover', async () => {
      const valid = await page.$eval('body', fxn.before);
      expect(valid).toBeTruthy();
    });

    test('After hover on box1', async () => {
      await page.hover('#box1');
      await page.waitForTimeout(2000); // Wait for transition duration of 2 seconds

      const valid = await page.$eval('body', fxn.afterBox1);
      expect(valid).toBeTruthy();
    });

    test('After hover on box2', async () => {
      await page.hover('#box2');
      await page.waitForTimeout(2000); // Wait for transition duration of 2 seconds

      const valid = await page.$eval('body', fxn.afterBox2);
      expect(valid).toBeTruthy();
    });
  });
};

const checkDivStyles = {
  before: (body) => {
    const box1 = body.querySelector('#box1');
    const box2 = body.querySelector('#box2');

    const box1Styles = window.getComputedStyle(box1);
    const box2Styles = window.getComputedStyle(box2);

    const box1Height = box1Styles.getPropertyValue('height');
    const box2Width = box2Styles.getPropertyValue('width');

    return (
      box1Height === '100px' &&
      box2Width === '200px'
    );
  },
  afterBox1: (body) => {
    const box1 = body.querySelector('#box1');

    const box1Styles = window.getComputedStyle(box1);

    const box1Height = box1Styles.getPropertyValue('height');

    return box1Height === '600px';
  },
  afterBox2: (body) => {
    const box2 = body.querySelector('#box2');

    const box2Styles = window.getComputedStyle(box2);

    const box2Width = box2Styles.getPropertyValue('width');

    return box2Width === '250px';
  },
};

helper('Check Div Styles', checkDivStyles);
