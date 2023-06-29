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
    browser = await launchBrowser({ args: ["--no-sandbox"], headless: "new" });
    page = await createPage(browser);
    await page.goto(`file://${folderPath}/source/index.html`);
  });

  afterAll(async () => {
    await closePage(page);
    await closeBrowser(browser);
  });

  test("One Box", async () => {
    let box = (await page.$$(".box"))[0];
    let scale = await page.evaluate((element) => {
      return window.getComputedStyle(element).transform;
    }, box);

    expect(scale).toBe("none");

    await box.hover();
    await page.waitForTimeout(500);

    scale = await page.evaluate((element) => {
      return window.getComputedStyle(element).transform;
    }, box);

    expect(scale).toBe("matrix(2, 0, 0, 2, 0, 0)");
    await box.hover({ steps: 10 });
    await page.mouse.move(0, 0);

    scale = await page.evaluate((element) => {
      return window.getComputedStyle(element).transform;
    }, box);

    expect(scale).toBe("none");
  });

  test("Two Box", async () => {
    let box = (await page.$$(".box"))[1];
    let scale = await page.evaluate((element) => {
      return window.getComputedStyle(element).transform;
    }, box);

    expect(scale).toBe("none");

    await box.hover();
    await page.waitForTimeout(500);

    scale = await page.evaluate((element) => {
      return window.getComputedStyle(element).transform;
    }, box);

    expect(scale).toBe("matrix(2, 0, 0, 2, 0, 0)");
    await box.hover({ steps: 10 });
    await page.mouse.move(0, 0);

    scale = await page.evaluate((element) => {
      return window.getComputedStyle(element).transform;
    }, box);

    expect(scale).toBe("none");
  });

  test("Three Box", async () => {
    let box = (await page.$$(".box"))[2];
    let scale = await page.evaluate((element) => {
      return window.getComputedStyle(element).transform;
    }, box);

    expect(scale).toBe("none");

    await box.hover();
    await page.waitForTimeout(500);

    scale = await page.evaluate((element) => {
      return window.getComputedStyle(element).transform;
    }, box);

    expect(scale).toBe("matrix(2, 0, 0, 2, 0, 0)");
    await box.hover({ steps: 10 });
    await page.mouse.move(0, 0);

    scale = await page.evaluate((element) => {
      return window.getComputedStyle(element).transform;
    }, box);

    expect(scale).toBe("none");
  });

});
