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
  test('Check the quote Generator', async () => {
    const btn = await page.$('button');
    var quotes = [
      "Creativity is intelligence having fun.",
      "The best way to predict the future is to create it.",
      "Imagination is the beginning of creation.",
      "Creativity is contagious, pass it on.",
      "Every artist was first an amateur."
    ];
    for (let i =0;i<5;i++)
    {
      await btn.click();
      await page.waitForTimeout(500);
      let para = await page.$('.quote p');
      let text = await page.evaluate((element) => {
        return element.textContent;
        }, para);
      expect(text).toBe(quotes[i])
    }
  });

});
