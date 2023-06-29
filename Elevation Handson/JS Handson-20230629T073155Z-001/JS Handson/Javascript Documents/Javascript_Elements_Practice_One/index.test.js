const puppeteer = require('puppeteer');
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });
  
const launchBrowser = async () => await puppeteer.launch({ args: ["--no-sandbox"], headless: "new" });
const createPage = async (browser) => await browser.newPage();
const closeBrowser = async (browser) => await browser.close();
const closePage = async (page) => await page.close();
  
const folderPath = __dirname;
  
describe('Test Suite Title', () => {
  let browser, page, container;
  
  beforeAll(async () => {
    browser = await launchBrowser();
    page = await createPage(browser);
    await page.goto(`file://${folderPath}/source/index.html`);
    container = await page.$('#container');
    const cssFilePath = __dirname + "/source/index.css";
    await page.addStyleTag({ path: cssFilePath });
  });
  
  afterAll(async () => {
    await closePage(page);
    await closeBrowser(browser);
  });
  
  test('Check when submitChanges is clicked', async () => {
    await page.waitForSelector('#homeBtn');
    const element = await page.evaluate(() => {
      const btnElement = document.getElementById('homeBtn');
      const parent = btnElement.parentNode;
      const styles = window.getComputedStyle(parent);
      if(styles.backgroundColor === 'rgb(241, 241, 241)'){
        return true;
      }
      return false;
    })

    expect(element).toBeTruthy();
    await page.click('#homeBtn'); 
  
    await page.waitForTimeout(500);
  
    const ele = await page.evaluate(() => {
      const btnElement = document.getElementById('homeBtn');
      const parent = btnElement.parentNode;
      const styles = window.getComputedStyle(parent);
      if(styles.backgroundColor === 'rgb(173, 216, 230)'){
        return true;
      }
      return false;
    })
    expect(ele).toBeTruthy();
  });

  test('Check when textUnderline button is clicked', async () => {
    await page.waitForSelector('#heading');
    const element = await page.evaluate(() => {
      const btnElement = document.getElementById('heading');
      const parent = btnElement.parentNode;
      const childs = Array.from(parent.children);
      for(let i=0; i<childs.length; i++){
        const styles = window.getComputedStyle(childs[i]);
        if(styles.textDecoration === 'underline solid rgb(51, 51, 51)'){
          return false;
        }
      }
      return true;
    })
    expect(element).toBeTruthy();
    await page.click('#heading');

    await page.waitForTimeout(500);

    const ele = await page.evaluate(() => {
      const btnElement = document.getElementById('heading');
      const parent = btnElement.parentElement;
      const childs = Array.from(parent.children);
      for(let i=0; i<childs.length; i++){
        const styles = window.getComputedStyle(childs[i]);
        if(styles.textDecoration !== 'underline solid rgb(51, 51, 51)'){
          return false;
        }
      }
      return true;
    })
    expect(ele).toBeTruthy();
  })
});