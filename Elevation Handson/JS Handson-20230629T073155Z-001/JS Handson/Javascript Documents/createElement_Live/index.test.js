const puppeteer = require("puppeteer");
const { toMatchImageSnapshot } = require("jest-image-snapshot");
expect.extend({ toMatchImageSnapshot });

let browser;
let page;

const launchBrowser = async () => await puppeteer.launch();
const createPage = async (browser) => await browser.newPage();
const closeBrowser = async (browser) => await browser.close();
const closePage = async (page) => await page.close();

const folderPath = __dirname;

describe("Test Suite Title", () => {
  beforeAll(async () => {
    browser = await launchBrowser({ args: ["--no-sandbox"], headless: true });
    page = await createPage(browser);
    await page.goto(`file://${folderPath}/source/index.html`);
  });

  afterAll(async () => {
    await closePage(page);
    await closeBrowser(browser);
  });

  test("Check when #newElement is clicked", async () => {
    await page.waitForSelector("#newElement");
  
    await page.click("#newElement");
    await page.waitForTimeout(500);
    const ele = await page.evaluate(() => {
      const h2 = document.querySelector("h2");
      if(h2 && h2.innerText === 'New Element Added'){
        return true;
      }
      return false;
    })
    expect(ele).toBeTruthy();
  });

  test("Check when #newNode is clicked", async () => {
    await page.waitForSelector("#newNode");
  
    await page.click("#newNode");
    await page.waitForTimeout(500);
    const ele = await page.evaluate(() => {
      const container = document.getElementById("container");
      for (let i = 0; i < container.childNodes.length; i++) {
        const node = container.childNodes[i];
        if (node.nodeType === Node.TEXT_NODE && node.textContent === 'New Text Node Added') {
          return true;
        }
      }
      return false;
    })
    expect(ele).toBeTruthy();
  })
  
});
