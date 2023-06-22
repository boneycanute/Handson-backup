const puppeteer = require("puppeteer");
const path = require("path");
const { toMatchImageSnapshot } = require("jest-image-snapshot");
expect.extend({ toMatchImageSnapshot });

describe("CSS Text Formatting Live", () => {
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

  test("h1 heading should have color as red and text is aligned to the center", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const heading = await page.evaluate(() => {
      const h1 = document.querySelector("#h1");
      const styles = window.getComputedStyle(h1);
      if (styles.color === "rgb(255, 0, 0)" && styles.textAlign === "center") {
        return true;
      }
      return false;
    });
    expect(heading).toBeTruthy();
  });

  test("Paragraph background color is pink and text should be in uppercase", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const paragraph = await page.evaluate(() => {
      const para = document.querySelector("#p");
      const styles = window.getComputedStyle(para);
      if (
        styles.backgroundColor === "rgb(255, 192, 203)" &&
        styles.textTransform === "uppercase"
      ) {
        return true;
      }
      return false;
    });
    expect(paragraph).toBeTruthy();
  });

  test("h2 text decoration should be underline", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const heading = await page.evaluate(() => {
      const h2 = document.querySelector("#h2");
      const styles = window.getComputedStyle(h2);
      if (styles.textDecoration === "underline solid rgb(0, 0, 0)") {
        return true;
      }
      return false;
    });
    expect(heading).toBeTruthy();
  });

  test("h3 text decoration should be overline", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const heading = await page.evaluate(() => {
      const h3 = document.querySelector("#h3");
      const styles = window.getComputedStyle(h3);
      if (styles.textDecoration === "overline solid rgb(0, 0, 0)") {
        return true;
      }
      return false;
    });
    expect(heading).toBeTruthy();
  });

  test("h4 should have letter spacing of 10px", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const heading = await page.evaluate(() => {
      const h4 = document.querySelector("#h4");
      const styles = window.getComputedStyle(h4);
      if (styles.letterSpacing === "10px") {
        return true;
      }
      return false;
    });
    expect(heading).toBeTruthy();
  });
});
