const puppeteer = require("puppeteer");
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

  test("Body font-family", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const body = await page.evaluate(() => {
      const b = document.querySelector("body");
      const styles = window.getComputedStyle(b);
      if(styles.fontFamily === 'Verdana, Geneva, Tahoma, sans-serif'){
        return true;
      }
      return false;
    });
    expect(body).toBeTruthy();
  });
  
  test("Unordered List list-style-type and color", async() => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const ul = await page.evaluate(() => {
      const u = document.querySelector("ul");
      const styles = window.getComputedStyle(u);
      if(styles.listStyleType === 'square' && styles.color === "rgb(251, 131, 111)"){
        return true;
      }
      return false;
    })
    expect(ul).toBeTruthy();
  })

  test("Class image-list color and list-style-image", async() => {
    await page.goto("file://" + __dirname + "/source/index.html");
    
    const ul = await page.evaluate(() => {
      const u = document.querySelector(".image-list");
      const styles = window.getComputedStyle(u);
      if(styles.color === 'rgb(16, 188, 226)' && styles.listStyleImage === 'linear-gradient(to left bottom, rgb(255, 0, 0), rgb(0, 0, 255))'){
        return true;
      }
      return false;
    })
    expect(ul).toBeTruthy();
  })

  test("Class position-list list-style-position", async() => {
    await page.goto("file://" + __dirname + "/source/index.html");
    
    const ul = await page.evaluate(() => {
      const u = document.querySelector(".position-list");
      const styles = window.getComputedStyle(u);
      if(styles.listStylePosition === 'inside'){
        return true;
      }
      return false;
    })
    expect(ul).toBeTruthy();
  })

  test("Heading h1 color", async() => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const ul = await page.evaluate(() => {
      const u = document.querySelector("h1");
      const styles = window.getComputedStyle(u);
      if(styles.color === 'rgb(126, 84, 159)'){
        return true;
      }
      return false;
    })
    expect(ul).toBeTruthy();
  })

  test("Heading h2 color", async() => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const ul = await page.evaluate(() => {
      const u = document.querySelector("h2");
      const styles = window.getComputedStyle(u);
      if(styles.color === 'rgb(193, 84, 156)'){
        return true;
      }
      return false;
    })
    expect(ul).toBeTruthy();
  })

});


