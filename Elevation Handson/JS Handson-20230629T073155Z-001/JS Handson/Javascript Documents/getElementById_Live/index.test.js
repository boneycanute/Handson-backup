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
  
  test('Check when idBtn is clicked', async () => {
    await page.waitForSelector('#idBtn');
    await page.click('#idBtn'); 
  
    await page.waitForTimeout(500);
  
    const ele = await page.evaluate(() => {
      const titleElement = document.getElementById('container');
      const styles = window.getComputedStyle(titleElement);
      if(styles.backgroundColor === 'rgb(173, 216, 230)'){
        return true;
      }
      return false;
    })
    expect(ele).toBeTruthy();
  });

  test('Check when classBtn is clicked', async () => {
    await page.waitForSelector('#classBtn');
    await page.click('#classBtn'); 
  
    await page.waitForTimeout(500);
  
    const ele = await page.evaluate(() => {
      const para = document.getElementsByClassName('paragraph');
      for(let i in para){
        const styles = window.getComputedStyle(para[i]);
        if(styles.color !== 'rgb(255, 0, 0)'){
          return false;
        }
        return true;
      }
    })
    expect(ele).toBeTruthy();
  });

  test('Check when tagBtn is clicked', async () => {
    await page.waitForSelector('#tagBtn');
    await page.click('#tagBtn'); 
  
    await page.waitForTimeout(500);
  
    const ele = await page.evaluate(() => {
      const list = document.getElementsByTagName('li');
      for(let i in list){
        const styles = window.getComputedStyle(list[i]);
        if(styles.textDecoration !== 'line-through solid rgb(0, 0, 0)'){
          return false;
        }
        return true;
      }
    })
    expect(ele).toBeTruthy();
  });
  
});