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
  
  test("Table border-collapse, width, border and background-color", async() => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const table = await page.evaluate(() => {
      const t = document.querySelector("table");
      const styles = window.getComputedStyle(t);
      if(styles.borderCollapse === 'collapse' && styles.width === '1265px' && styles.border === '1px solid rgb(0, 0, 0)' && styles.backgroundColor === 'rgb(225, 236, 244)'){
        return true;
      }
      return false;
    })
    expect(table).toBeTruthy();
  })

  test("th padding, text-align, border-bottom, background-color and color", async() => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const th = await page.evaluate(() => {
      const t = document.querySelector("th");
      const styles = window.getComputedStyle(t);
      if(styles.padding === '8px' && styles.textAlign === 'left' && styles.borderBottom === '1px solid rgb(221, 221, 221)' && styles.backgroundColor === 'rgb(52, 152, 219)' && styles.color === 'rgb(255, 255, 255)'){
        return true;
      }
      return false;
    })
    expect(th).toBeTruthy();
  })

  test("td padding, text-align and border-bottom", async() => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const td = await page.evaluate(() => {
      const t = document.querySelector("td");
      const styles = window.getComputedStyle(t);
      if(styles.padding === '8px' && styles.textAlign === 'left' && styles.borderBottom === '1px solid rgb(221, 221, 221)'){
        return true;
      }
      return false;
    })
    expect(td).toBeTruthy();
  })

  test("outside-position border, list-style-position and background-color", async() => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const cl = await page.evaluate(() => {
      const t = document.querySelector(".outside-position");
      const styles = window.getComputedStyle(t);
      if(styles.border === '1px solid rgb(0, 0, 0)' && styles.listStyleType === 'square' && styles.backgroundColor === 'rgb(225, 236, 244)'){
        return true;
      }
      return false;
    })
    expect(cl).toBeTruthy();
  })

  test("inside-position border, list-style-position and background-color", async() => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const cl = await page.evaluate(() => {
      const t = document.querySelector(".inside-position");
      const styles = window.getComputedStyle(t);
      if(styles.border === '1px solid rgb(0, 0, 0)' && styles.listStylePosition === 'inside' && styles.backgroundColor === 'rgb(225, 236, 244)'){
        return true;
      }
      return false;
    })
    expect(cl).toBeTruthy();
  })

  test("h1 color and text-align", async() => {
    await page.goto("file://" + __dirname + "/source/index.html");
    
    const h = await page.evaluate(() => {
      const t = document.querySelector("h1");
      const styles = window.getComputedStyle(t);
      if(styles.color === 'rgb(116, 159, 240)' && styles.textAlign === 'center'){
        return true;
      }
      return false;
    })
    expect(h).toBeTruthy();
  })

  test("h2 color and text-align", async() => {
    await page.goto("file://" + __dirname + "/source/index.html");
    
    const h = await page.evaluate(() => {
      const t = document.querySelector("h2");
      const styles = window.getComputedStyle(t);
      if(styles.color === 'rgb(116, 159, 240)' && styles.textAlign === 'center'){
        return true;
      }
      return false;
    })
    expect(h).toBeTruthy();
  })

  test("li padding", async() => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const li = await page.evaluate(() => {
      const t = document.querySelector("li");
      const styles = window.getComputedStyle(t);
      if(styles.padding == '5px'){
        return true;
      }
      return false;
    })
    expect(li).toBeTruthy();
  })

});
