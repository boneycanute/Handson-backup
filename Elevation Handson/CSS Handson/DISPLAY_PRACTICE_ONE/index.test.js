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

  test("Body font-family, font-size, margin and padding", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const body = await page.evaluate(() => {
      const b = document.querySelector("body");
      const styles = window.getComputedStyle(b);
      if(styles.margin === '0px' && styles.padding === '0px' && styles.fontSize === '16px' && styles.fontFamily === 'sans-serif'){
        return true;
      }
      return false;
    });
    expect(body).toBeTruthy();
  });
  
  test("Header background color and padding", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const header = await page.evaluate(() => {
      const hh = document.querySelector('header');
      const styles = window.getComputedStyle(hh);
      if(styles.backgroundColor === 'rgb(204, 204, 204)' && styles.padding === '20px'){
        return true;
      }
      return false;
    })
    expect(header).toBeTruthy();
  })

  test("UL margin, padding and list style", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const ul = await page.evaluate(() => {
      const u = document.querySelector('.ul');
      const styles = window.getComputedStyle(u);
      if(styles.margin === '0px' && styles.padding === '0px' && styles.listStyleType === 'none'){
        return true;
      }
      return false;
    })
    expect(ul).toBeTruthy();
  })

  test("LI margin right and display", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const li = await page.evaluate(() => {
      const l = document.querySelector('.li');
      const styles = window.getComputedStyle(l);
      if(styles.marginRight === '20px' && styles.display === 'inline-block'){
        return true;
      }
      return false;
    })
    expect(li).toBeTruthy();
  })
  
  test("Anchor color and text decoration", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const anchor = await page.evaluate(() => {
      const a = document.querySelector('.a');
      const styles = window.getComputedStyle(a);
      if(styles.color === 'rgb(0, 0, 0)' && styles.textDecoration === 'none solid rgb(0, 0, 0)'){
        return true;
      }
      return false;
    })
    expect(anchor).toBeTruthy();
  })

  test(("Main class margin"), async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const main = await page.evaluate(() => {
      const m = document.querySelector('.main');
      const styles = window.getComputedStyle(m);
      if(styles.margin === '20px'){
        return true;
      }
      return false;
    })
    expect(main).toBeTruthy();
  })

  test(("Main Section margin bottom"), async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const main = await page.evaluate(() => {
      const m = document.querySelector('.main-section');
      const styles = window.getComputedStyle(m);
      if(styles.marginBottom === '40px'){
        return true;
      }
      return false;
    })
    expect(main).toBeTruthy();
  })

  test(("h2 margin top"), async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const h2 = await page.evaluate(() => {
      const m = document.querySelector('.h2');
      const styles = window.getComputedStyle(m);
      if(styles.marginTop === '0px'){
        return true;
      }
      return false;
    })
    expect(h2).toBeTruthy();
  })

  test(("Box margin, padding and border"), async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const box = await page.evaluate(() => {
      const m = document.querySelector('.box');
      const styles = window.getComputedStyle(m);
      if(styles.margin === '10px' && styles.padding === '10px' && styles.border === '1px solid rgb(0, 0, 0)'){
        return true;
      }
      return false;
    })
    expect(box).toBeTruthy();
  })

  test(("Block class display"), async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const b = await page.evaluate(() => {
      const d = document.querySelector('.block');
      const styles = window.getComputedStyle(d);
      if(styles.display === 'block'){
        return true;
      }
      return false;
    })
    expect(b).toBeTruthy();
  })

  test(("Inline-block class display, width, height and background color"), async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const b = await page.evaluate(() => {
      const d = document.querySelector('.inline-block');
      const styles = window.getComputedStyle(d);
      if(styles.display === 'inline-block' && styles.width === '300px' && styles.height === '100px' && styles.backgroundColor === 'rgb(204, 204, 204)'){
        return true;
      }
      return false;
    })
    expect(b).toBeTruthy();
  })

  test("Footer background color, padding and text align", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const footer = await page.evaluate(() => {
      const f = document.querySelector('.footer');
      const styles = window.getComputedStyle(f);
      if(styles.backgroundColor === 'rgb(238, 238, 238)' && styles.padding === '20px' && styles.textAlign === 'center'){
        return true;
      }
      return false;
    })
    expect(footer).toBeTruthy();
  })

});
