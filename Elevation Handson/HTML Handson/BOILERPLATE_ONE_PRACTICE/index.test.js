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

  test("Title tag and its content", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const title = await page.evaluate(() => {
      const t = document.querySelector("title");
      if (t && t.textContent === "Elevation Academy") {
        return true;
      }
      return false;
    });
    expect(title).toBeTruthy();
  });

  test("Count of h1 tags", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const h1Cnt = await page.evaluate(() => {
      const h1 = document.querySelectorAll("h1");
      if (h1.length === 3) {
        return true;
      }
      return false;
    });
    expect(h1Cnt).toBeTruthy();
  });

  test("Count of h4 tags", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const h4Cnt = await page.evaluate(() => {
      const h4 = document.querySelectorAll("h4");
      if (h4.length === 3) {
        return true;
      }
      return false;
    });
    expect(h4Cnt).toBeTruthy();
  });

  test("Count of p tags", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const pCnt = await page.evaluate(() => {
      const p = document.querySelectorAll("p");
      if (p.length === 3) {
        return true;
      }
      return false;
    });
    expect(pCnt).toBeTruthy();
  });

  test("First h1 tag previous should be null", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const h1Tag = await page.evaluate(() => {
      const h1 = document.querySelectorAll("h1")[0];
      const prev = h1.previousElementSibling;
      if (!prev) {
        return true;
      }
      return false;
    });
    expect(h1Tag).toBeTruthy();
  });

  test("First h1 tag content", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const h1Tag = await page.evaluate(() => {
      const h1 = document.querySelectorAll("h1")[0];
      if (h1.textContent === "HTML") {
        return true;
      }
      return false;
    });
    expect(h1Tag).toBeTruthy();
  });

  test("h1 tag next should be h4 tag", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const h1Next = await page.evaluate(() => {
      const h1 = document.querySelectorAll("h1")[0];
      const sibling = h1.nextElementSibling;
      if (sibling && sibling.tagName === "H4") {
        return true;
      }
      return false;
    });
    expect(h1Next).toBeTruthy();
  });

  test("First h4 tag content", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const h4Text = await page.evaluate(() => {
      const h4Content = document.querySelectorAll("h4")[0];
      if (h4Content.textContent === "Structure of the webpage") {
        return true;
      }
      return false;
    });
    expect(h4Text).toBeTruthy();
  });

  test("h4 tag next is p tag", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const h4Next = await page.evaluate(() => {
      const h4 = document.querySelectorAll("h4")[0];
      const sibling = h4.nextElementSibling;
      if (sibling && sibling.tagName === "P") {
        return true;
      }
      return false;
    });
    expect(h4Next).toBeTruthy();
  });

  test("First paragraph tag content", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const pCnt = await page.evaluate(() => {
      const p = document.querySelectorAll("p")[0];
      if (
        p.textContent ===
        "HTML is the standard markup language for Web pages. With HTML you can create your own Website."
      ) {
        return true;
      }
      return false;
    });
    expect(pCnt).toBeTruthy();
  });

  test("First paragraph tag next is h1", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const pNext = await page.evaluate(() => {
      const p = document.querySelectorAll("p")[0];
      const sibling = p.nextElementSibling;
      if (sibling && sibling.tagName === "H1") {
        return true;
      }
      return false;
    });
    expect(pNext).toBeTruthy();
  });

  test("Second h1 tag content", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const h1Tag = await page.evaluate(() => {
      const h1 = document.querySelectorAll("h1")[1];
      if (h1.textContent === "CSS") {
        return true;
      }
      return false;
    });
    expect(h1Tag).toBeTruthy();
  });

  test("h1 tag next should be h4 tag", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const h1Next = await page.evaluate(() => {
      const h1 = document.querySelectorAll("h1")[1];
      const sibling = h1.nextElementSibling;
      if (sibling && sibling.tagName === "H4") {
        return true;
      }
      return false;
    });
    expect(h1Next).toBeTruthy();
  });

  test("Second h4 tag content", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const h4Text = await page.evaluate(() => {
      const h4Content = document.querySelectorAll("h4")[1];
      if (h4Content.textContent === "Styling of the webpage") {
        return true;
      }
      return false;
    });
    expect(h4Text).toBeTruthy();
  });

  test("h4 tag next is paragraph tag", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const h4Next = await page.evaluate(() => {
      const h4 = document.querySelectorAll("h4")[1];
      const sibling = h4.nextElementSibling;
      if (sibling && sibling.tagName === "P") {
        return true;
      }
      return false;
    });
    expect(h4Next).toBeTruthy();
  });

  test("Second paragraph tag content", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const pCnt = await page.evaluate(() => {
      const p = document.querySelectorAll("p")[1];
      if (
        p.textContent ===
        "Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML"
      ) {
        return true;
      }
      return false;
    });
    expect(pCnt).toBeTruthy();
  });

  test("Second paragraph tag next is h1 tag", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const pNext = await page.evaluate(() => {
      const p = document.querySelectorAll("p")[1];
      const sibling = p.nextElementSibling;
      if (sibling && sibling.tagName === "H1") {
        return true;
      }
      return false;
    });
    expect(pNext).toBeTruthy();
  });

  test("Third h1 tag content", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const h1Tag = await page.evaluate(() => {
      const h1 = document.querySelectorAll("h1")[2];
      if (h1.textContent === "JavaScript") {
        return true;
      }
      return false;
    });
    expect(h1Tag).toBeTruthy();
  });

  test("h1 tag next should be h4 tag", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const h1Next = await page.evaluate(() => {
      const h1 = document.querySelectorAll("h1")[2];
      const sibling = h1.nextElementSibling;
      if (sibling && sibling.tagName === "H4") {
        return true;
      }
      return false;
    });
    expect(h1Next).toBeTruthy();
  });

  test("Third h4 tag content", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const h4Text = await page.evaluate(() => {
      const h4Content = document.querySelectorAll("h4")[2];
      if (h4Content.textContent === "Functionality of webpage") {
        return true;
      }
      return false;
    });
    expect(h4Text).toBeTruthy();
  });

  test("h4 tag next is paragraph tag", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const h4Next = await page.evaluate(() => {
      const h4 = document.querySelectorAll("h4")[2];
      const sibling = h4.nextElementSibling;
      if (sibling && sibling.tagName === "P") {
        return true;
      }
      return false;
    });
    expect(h4Next).toBeTruthy();
  });

  test("Third paragraph tag content", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const pCnt = await page.evaluate(() => {
      const p = document.querySelectorAll("p")[2];
      if (
        p.textContent ===
        "JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions."
      ) {
        return true;
      }
      return false;
    });
    expect(pCnt).toBeTruthy();
  });

  test("Third paragraph tag next is null", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const pNext = await page.evaluate(() => {
      const p = document.querySelectorAll("p")[2];
      const sibling = p.nextElementSibling;
      if (sibling) {
        return false;
      }
      return true;
    });
    expect(pNext).toBeTruthy();
  });
});
