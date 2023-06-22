const puppeteer = require("puppeteer");
const path = require("path");
const { toMatchImageSnapshot } = require("jest-image-snapshot");
expect.extend({ toMatchImageSnapshot });

describe("CSS Display Live", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      args: ["--no-sandbox"],
      headless: true,
    });
  });

  afterAll(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    page = await browser.newPage();
    const cssFilePath = __dirname + "/source/index.css";
    await page.addStyleTag({ path: cssFilePath });
  });

  afterEach(async () => {
    await page.close();
  });

  test("h1 color and text-align", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const heading = await page.evaluate(() => {
      const h1 = document.querySelector(".h1");
      const styles = window.getComputedStyle(h1);
      if (styles.color === "rgb(255, 0, 0)" && styles.textAlign === "center") {
        return true;
      }
      return false;
    });
    expect(heading).toBeTruthy();
  });

  test("Inline-Element display, border and padding", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const span = await page.evaluate(() => {
      const s = document.querySelector(".inline-element");
      const styles = window.getComputedStyle(s);
      if (
        styles.display === "inline" &&
        styles.padding == "5px" &&
        styles.border === "1px solid rgb(255, 0, 0)"
      ) {
        return true;
      }
      return false;
    });
    expect(span).toBeTruthy();
  });

  test("Inline-Block-Element display, background color, padding and margin bottom", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const div = await page.evaluate(() => {
      const d = document.querySelector(".inline-block-element");
      const styles = window.getComputedStyle(d);
      if (
        styles.display === "inline-block" &&
        styles.backgroundColor === "rgb(144, 238, 144)" &&
        styles.padding === "15px" &&
        styles.marginRight === "10px"
      ) {
        return true;
      }
      return false;
    });
    expect(div).toBeTruthy();
  });

  test("Block-Element display, background color, padding and margin bottom", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const div = await page.evaluate(() => {
      const d = document.querySelector(".block-element");
      const styles = window.getComputedStyle(d);
      if (
        styles.display === "block" &&
        styles.backgroundColor === "rgb(173, 216, 230)" &&
        styles.padding === "10px" &&
        styles.marginBottom === "20px"
      ) {
        return true;
      }
      return false;
    });
    expect(div).toBeTruthy();
  });

  test("Div element display is none", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const div = await page.evaluate(() => {
      const d = document.querySelector(".none");
      const styles = window.getComputedStyle(d);
      if (styles.display === "none") {
        return true;
      }
      return false;
    });
    expect(div).toBeTruthy();
  });
});
