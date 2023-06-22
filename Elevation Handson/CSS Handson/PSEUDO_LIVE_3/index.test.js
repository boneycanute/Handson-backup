const puppeteer = require("puppeteer");
const { toMatchImageSnapshot } = require("jest-image-snapshot");
expect.extend({ toMatchImageSnapshot });
const folderPath = __dirname;

describe("CSS Text Formatting Live", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({ args: ["--no-sandbox"], headless: "new",width: 1920, height: 1080  });
  });
  
  afterAll(async () => {    
    await browser.close();
  });

  beforeEach(async () => {
    page = await browser.newPage();
    await page.addStyleTag({ path:`${folderPath}/source/index.html` });
  });

  afterEach(async () => {
    await page.close();
  });

  test("Body background-color, color, display, align-items, justify-content, height, margin, padding, font-size", async () => {
    await page.goto(`file://${folderPath}/source/index.html`);

    const body = await page.evaluate(() => {
      const b = document.querySelector("body");
      const styles = window.getComputedStyle(b);
      if(styles.backgroundColor === 'rgb(0, 0, 0)' &&
      styles.color === 'rgb(255, 255, 255)' && styles.display === 'flex' &&
      styles.alignItems === 'center' && styles.justifyContent === 'space-evenly'
      && styles.height === '1080px' && styles.margin === '0px' && 
      styles.padding === '0px' && styles.fontSize === '30px'){
        return true;
      }
      return false;
    });
    expect(body).toBeTruthy();
  });

  test("Child Selector .parent > .child color", async () => {
    await page.goto(`file://${folderPath}/source/index.html`);

    const c = await page.evaluate(() => {
      const child = document.querySelector(".parent > .child");
      const styles = window.getComputedStyle(child);
      if(styles.color === 'rgb(0, 255, 0)'){
        return true;
      }
      return false;
    })
    expect(c).toBeTruthy();
  })

  test("Descendant Selector .ancestor .descendant color", async () => {
    await page.goto(`file://${folderPath}/source/index.html`);

    const c = await page.evaluate(() => {
      const child = document.querySelector(".ancestor .descendant");
      const styles = window.getComputedStyle(child);
      if(styles.fontWeight === '700'){
        return true;
      }
      return false;
    })
    expect(c).toBeTruthy();
  })
  
});