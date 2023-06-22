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

  test("Body background-color, margin and padding", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const body = await page.evaluate(() => {
      const b = document.querySelector("body");
      const styles = window.getComputedStyle(b);
      if(styles.backgroundColor === 'rgb(234, 234, 96)' && styles.margin === '0px' && styles.padding === '0px'){
        return true;
      }
      return false;
    });
    expect(body).toBeTruthy();
  });
  
  test("h1 text-align, padding and margin", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const h1 = await page.evaluate(() => {
        const b = document.querySelector("h1");
        const styles = window.getComputedStyle(b);
        if(styles.textAlign === 'center' && styles.padding === '0px' && styles.margin === '0px'){
            return true;
        }
        return false;
    })
    expect(h1).toBeTruthy();
  })

  test("Class grid display, grid-template-column, padding, width, margin-left and gap", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const g = await page.evaluate(() => {
        const b = document.querySelector(".grid");
        const styles = window.getComputedStyle(b);
        if(styles.display === 'grid' && styles.gridTemplateColumns === '250px 250px 250px' && styles.padding === '10px' && styles.width === '700px' && styles.marginLeft === '300px' && styles.gap === '30px'){
            return true;
        }
        return false;
    })
    expect(g).toBeTruthy();
  })

  test("Class item1 background-color, border, padding, width, height and animation", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const g = await page.evaluate(() => {
        const b = document.querySelector(".item1");
        const styles = window.getComputedStyle(b);
        if(styles.backgroundColor === 'rgb(49, 106, 142)' && styles.padding === '20px' && styles.width === '90px' && styles.height === '60px' && styles.border === '1px solid rgb(0, 0, 0)' && styles.transform === 'matrix(1, 0, 0.36397, 1, 0, 0)'){
            return true;
        }
        return false;
    })
    expect(g).toBeTruthy();
  })

  test("Class item2 background-color, border, padding, width, height, transform", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");
    
    const g = await page.evaluate(() => {
        const b = document.querySelector(".item2");
        const styles = window.getComputedStyle(b);
        if(styles.backgroundColor === 'rgb(221, 160, 221)' && styles.border === '1px solid rgb(0, 0, 0)' && styles.padding === '20px' && styles.width === '90px' && styles.height === '60px' && styles.transform === 'matrix(1.2, 0, 0, 1.4, 0, 0)'){
            return true;
        }
        return false;
    })
    expect(g).toBeTruthy();
  })

  test("Class item3 background-color, border, padding, width, height, transform", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");
    
    const g = await page.evaluate(() => {
        const b = document.querySelector(".item3");
        const styles = window.getComputedStyle(b);
        if(styles.backgroundColor === 'rgb(49, 106, 142)' && styles.border === '1px solid rgb(0, 0, 0)' && styles.padding === '20px' && styles.width === '90px' && styles.height === '60px' && styles.transform === 'matrix(0.642788, 0.766044, -0.766044, 0.642788, 0, 0)'){
            return true;
        }
        return false;
    })
    expect(g).toBeTruthy();
  })

});
