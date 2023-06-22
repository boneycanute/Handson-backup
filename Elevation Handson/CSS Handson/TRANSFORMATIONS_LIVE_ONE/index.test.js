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

  test("Body font-family and background-color", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const body = await page.evaluate(() => {
      const b = document.querySelector("body");
      const styles = window.getComputedStyle(b);
      if(styles.fontFamily === 'Verdana, Geneva, Tahoma, sans-serif' && styles.backgroundColor === 'rgb(0, 0, 0)'){
        return true;
      }
      return false;
    });
    expect(body).toBeTruthy();
  });
  
  test("h1 text-align and color", async() => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const h1 = await page.evaluate(() => {
      const h = document.querySelector("h1");
      const styles = window.getComputedStyle(h);
      if(styles.textAlign === 'center' && styles.color === 'rgb(255, 255, 255)'){
        return true;
      }
      return false;
    })
    expect(h1).toBeTruthy();
  })

  test("Class container display, margin-left and margin-top", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const cont = await page.evaluate(() => {
      const c = document.querySelector(".container");
      const styles = window.getComputedStyle(c);
      if(styles.display === 'flex' && styles.marginLeft === '200px' && styles.marginTop === '100px'){
        return true;
      }
      return false;
    })
    expect(cont).toBeTruthy();
  })

  test("Class box width, height, background-color, margin and text-align", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const box = await page.evaluate(() => {
      const b = document.querySelector(".box");
      const styles = window.getComputedStyle(b);
      if(styles.width === '114.672px' && styles.height === '200px' && styles.backgroundColor === 'rgb(255, 165, 0)' && styles.margin === '40px' && styles.textAlign === 'center'){
        return true;
      }
      return false;
    })
    expect(box).toBeTruthy();
  })

  test("Class one transform", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const one = await page.evaluate(() => {
      const b = document.querySelector(".one");
      const styles = window.getComputedStyle(b);
      if(styles.transform === 'matrix(1, 0.176327, 0.176327, 1, 0, 0)'){
        return true;
      }
      return false;
    })
    expect(one).toBeTruthy();
  })

  test("Class two transform", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const one = await page.evaluate(() => {
      const b = document.querySelector(".two");
      const styles = window.getComputedStyle(b);
      if(styles.transform === 'matrix(1.5, 0, 0, 1.5, 0, 0)'){
        return true;
      }
      return false;
    })
    expect(one).toBeTruthy();
  })

  test("Class two transform", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const one = await page.evaluate(() => {
      const b = document.querySelector(".three");
      const styles = window.getComputedStyle(b);
      if(styles.transform === 'matrix(0, 1, -1, 0, 0, 0)'){
        return true;
      }
      return false;
    })
    expect(one).toBeTruthy();
  })

});
