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

  test("Check when #inner button is clicked", async () => {
    await page.waitForSelector("#inner");
    
    const initialInnerHTML = await page.evaluate(() => {
      const div = document.getElementById("container");
      return div.innerHTML.trim();
    });
    
    expect(initialInnerHTML).toBe("<h1>Inner HTML property</h1>");
  
    await page.click("#inner");
    await page.waitForTimeout(500);
    
    const updatedInnerHTML = await page.evaluate(() => {
      const div = document.getElementById("container");
      return div.innerHTML.trim();
    });
    
    expect(updatedInnerHTML).toBe("<h2>Inner HTML property</h2>");
  });

  test("Check when #outer button is clicked", async () => {
    await page.waitForSelector("#outer");

    const initialOuterHTML = await page.evaluate(() => {
      const p = document.querySelector("p");
      return p.outerHTML.trim();
    })

    expect(initialOuterHTML).toBe("<p>Outer HTML property</p>")

    await page.click("#outer");
    await page.waitForTimeout(500);

    const updatedOuterHTML = await page.evaluate(() => {
      const h4 = document.querySelector("h4");
      return h4.outerHTML.trim();
    })

    expect(updatedOuterHTML).toBe("<h4>Outer HTML property</h4>");

  })
  
});
