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
      browser = await puppeteer.launch({ args: ["--no-sandbox"], headless: "new" });
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

    test('After height transition', async () => {
      await page.hover('div');
      await page.waitForTimeout(2000); // Wait for height transition duration of 2 seconds
    
      const valid = await page.$eval('body', fxn.afterHeight);
      expect(valid).toBeTruthy();
    }, 3000);
    

    test('After width transition', async () => {
      await page.hover('div');

      await page.waitForTimeout(2000); // Wait for height transition duration of 2 seconds

      const valid = await page.$eval('body', fxn.afterWidth);
      expect(valid).toBeTruthy();
    });

    test('After transform transition', async () => {
      await page.hover('div');

      await page.waitForTimeout(6000); // Wait for width transition duration of 2 seconds

      const valid = await page.$eval('body', fxn.afterTransform);
      expect(valid).toBeTruthy();
    },10000);
  });
};

const checkDivStyles = {
  before: (body) => {
    const div = body.querySelector('div');
    const heading = body.querySelector('p');

    const divStyles = window.getComputedStyle(div);
    const headingContent = heading.textContent;

    const divWidth = divStyles.getPropertyValue('width');
    const divHeight = divStyles.getPropertyValue('height');
    const divTransform = divStyles.getPropertyValue('transform');

    return (
      divWidth === '100px' &&
      divHeight === '100px' &&
      divTransform === 'none' &&
      headingContent === 'Hover over the div element below:'
    );
  },
  afterHeight: (body) => {
    const div = body.querySelector('div');
    const boundingBox = div.getBoundingClientRect();
    const height = boundingBox.height;
    return height >= 500;
  },
  afterWidth: (body) => {
    const div = body.querySelector('div');

    const divStyles = window.getComputedStyle(div);

    return divStyles.getPropertyValue('width') === '500px';
  },
  afterTransform: (body) => {
    const div = body.querySelector('div');

    const divStyles = window.getComputedStyle(div);

    return divStyles.getPropertyValue('transform') === 'matrix(-1, 0, 0, -1, 0, 0)';
  },
};

helper('Check Div Styles', checkDivStyles);



