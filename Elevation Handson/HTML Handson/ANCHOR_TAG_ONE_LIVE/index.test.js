const puppeteer = require("puppeteer");
const path = require("path");
const { toMatchImageSnapshot } = require("jest-image-snapshot");
expect.extend({ toMatchImageSnapshot });

describe("Test project", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({ args: ["--no-sandbox"], headless: "new" });
  });

  afterAll(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    page = await browser.newPage();
  });

  afterEach(async () => {
    await page.close();
  });

  test("Count of anchor tags should be 4", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const anchorCnt = await page.evaluate(() => {
      return document.querySelectorAll("a").length;
    });
    expect(anchorCnt).toBe(4);
  });

  test("First anchor tag content and id", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const anchorCnt = await page.evaluate(() => {
      const anchorTag = document.querySelectorAll("a")[0];
      if (
        anchorTag.textContent === "Open in new Tab" &&
        anchorTag.id === "newtab"
      ) {
        return true;
      }
      return false;
    });
    expect(anchorCnt).toBeTruthy();
  });

  test("Second anchor tag content and id", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const anchorCnt = await page.evaluate(() => {
      const anchorTag = document.querySelectorAll("a")[1];
      if (
        anchorTag.textContent === "Open in same Tab" &&
        anchorTag.id === "sametab"
      ) {
        return true;
      }
      return false;
    });
    expect(anchorCnt).toBeTruthy();
  });

  test("Third anchor tag content and id", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const anchorCnt = await page.evaluate(() => {
      const anchorTag = document.querySelectorAll("a")[2];
      if (anchorTag.textContent === "Mail Us" && anchorTag.id === "mailus") {
        return true;
      }
      return false;
    });
    expect(anchorCnt).toBeTruthy();
  });

  test("Fourth anchor tag content", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const anchorCnt = await page.evaluate(() => {
      const anchorTag = document.querySelectorAll("a")[3];
      if (anchorTag.textContent === "Call Us" && anchorTag.id === "callus") {
        return true;
      }
      return false;
    });
    expect(anchorCnt).toBeTruthy();
  });

  test("First anchor tag href", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const anchorCnt = await page.evaluate(() => {
      return document.querySelectorAll("a")[0].href;
    });
    expect(anchorCnt).toBe("https://www.prepbytes.com/");
  });

  test("Second anchor tag href", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const anchorCnt = await page.evaluate(() => {
      return document.querySelectorAll("a")[1].href;
    });
    expect(anchorCnt).toBe("https://www.prepbytes.com/");
  });

  test("Third anchor tag href", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const anchorCnt = await page.evaluate(() => {
      return document.querySelectorAll("a")[2].href;
    });
    expect(anchorCnt).toBe("mailto:abc@gmail.com");
  });

  test("Fourth anchor tag href", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const anchorCnt = await page.evaluate(() => {
      return document.querySelectorAll("a")[3].href;
    });
    expect(anchorCnt).toBe("tel:+911234567899");
  });

  test("First anchor tag target", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const anchorCnt = await page.evaluate(() => {
      return document.querySelectorAll("a")[0].target;
    });
    expect(anchorCnt).toBe("_blank");
  });

  test("Second anchor tag target", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const anchorCnt = await page.evaluate(() => {
      return document.querySelectorAll("a")[1].target;
    });
    expect(anchorCnt).toBe("_self");
  });

  test("Anchor tag with id newtab should be followed by anchor tag with id sametab", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const anchorCnt = await page.evaluate(() => {
      const firstAnchor = document.querySelectorAll("a")[0];
      const secondAnchor = firstAnchor.nextElementSibling;
      if (
        secondAnchor &&
        secondAnchor.tagName === "A" &&
        secondAnchor.id === "sametab"
      ) {
        return true;
      }
      return false;
    });
    expect(anchorCnt).toBeTruthy();
  });

  test("Anchor tag with id sametab should be followed by anchor tag with id mailus", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const anchorCnt = await page.evaluate(() => {
      const secondAnchor = document.querySelectorAll("a")[1];
      const thirdAnchor = secondAnchor.nextElementSibling;
      if (
        thirdAnchor &&
        thirdAnchor.tagName === "A" &&
        thirdAnchor.id === "mailus"
      ) {
        return true;
      }
      return false;
    });
    expect(anchorCnt).toBeTruthy();
  });

  test("anchor tag with id mailus should be followed by anchor tag with id callus", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const anchorCnt = await page.evaluate(() => {
      const thirdAnchor = document.querySelectorAll("a")[2];
      const forthAnchor = thirdAnchor.nextElementSibling;
      if (
        forthAnchor &&
        forthAnchor.tagName === "A" &&
        forthAnchor.id === "callus"
      ) {
        return true;
      }
      return false;
    });
    expect(anchorCnt).toBeTruthy();
  });

  test("Anchor tag next should be null", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const anchorCnt = await page.evaluate(() => {
      const forthAnchor = document.querySelectorAll("a")[3];
      const last = forthAnchor.nextElementSibling;
      if (last) {
        return false;
      }
      return true;
    });
    expect(anchorCnt).toBeTruthy();
  });
});