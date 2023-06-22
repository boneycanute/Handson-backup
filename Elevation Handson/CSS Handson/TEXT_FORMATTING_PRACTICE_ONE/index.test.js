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

  test("h1 color, text-align and text-shadow", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const heading = await page.evaluate(() => {
      const h1 = document.querySelector("#h1");
      const styles = window.getComputedStyle(h1);
      if (
        styles.color === "rgb(128, 0, 128)" &&
        styles.textAlign === "center" &&
        styles.textShadow === "rgb(255, 0, 0) 2px 2px 0px"
      ) {
        return true;
      }
      return false;
    });
    expect(heading).toBeTruthy();
  });

  test("Div1 letter spacing and text identation", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const div = await page.evaluate(() => {
      const d = document.querySelector("#div1");
      const styles = window.getComputedStyle(d);
      if (styles.letterSpacing === "2px" && styles.textIndent == "100px") {
        return true;
      }
      return false;
    });
    expect(div).toBeTruthy();
  });

  test("h2 color and text-align", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const heading = await page.evaluate(() => {
      const h2 = document.querySelector("#h2");
      const styles = window.getComputedStyle(h2);
      if (styles.color === "rgb(220, 20, 60)") {
        return true;
      }
      return false;
    });
    expect(heading).toBeTruthy();
  });

  test("Div2 letter spacing and text decoration", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const div = await page.evaluate(() => {
      const d = document.querySelector("#div2");
      const styles = window.getComputedStyle(d);
      if (
        styles.letterSpacing === "2px" &&
        styles.textDecoration == "line-through solid rgb(0, 0, 0)"
      ) {
        return true;
      }
      return false;
    });
    expect(div).toBeTruthy();
  });

  test("h3 color and text-align", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const heading = await page.evaluate(() => {
      const h3 = document.querySelector("#h3");
      const styles = window.getComputedStyle(h3);
      if (styles.color === "rgb(233, 150, 122)") {
        return true;
      }
      return false;
    });
    expect(heading).toBeTruthy();
  });

  test("Div3 letter spacing and text decoration", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const div = await page.evaluate(() => {
      const d = document.querySelector("#div3");
      const styles = window.getComputedStyle(d);
      if (
        styles.letterSpacing === "2px" &&
        styles.backgroundColor == "rgb(0, 255, 255)"
      ) {
        return true;
      }
      return false;
    });
    expect(div).toBeTruthy();
  });
});
