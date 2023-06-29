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
  
  test('Check when Backgroud button is clicked', async () => {
    
    await page.waitForSelector('#backgroundBtn');
    const element = await page.evaluate(() => {
      const titleElement = document.getElementById('title');
      const parent = titleElement.parentNode;
      const styles = window.getComputedStyle(parent);
      if(styles.backgroundColor === 'rgb(163, 230, 252)'){
        return true;
      }
      return false;
    })
    expect(element).toBeTruthy();
  
    await page.click('#backgroundBtn'); 
  
    await page.waitForTimeout(500);
  
    const ele = await page.evaluate(() => {
      const titleElement = document.getElementById('title');
      const parent = titleElement.parentNode;
      const styles = window.getComputedStyle(parent);
      if(styles.backgroundColor === 'rgb(255, 0, 0)'){
        return true;
      }
      return false;
    })
    expect(ele).toBeTruthy();
  });
  
  test('Check when Color button is clicked', async () => {
    await page.waitForSelector('#colorBtn');
    
    const element = await page.evaluate(() => {
      const div = document.getElementById('child');
      const child = Array.from(div.children);
      for (let i = 0; i < child.length; i++) {
        const style = window.getComputedStyle(child[i]);
        if (style.color !== 'rgb(0, 0, 0)') {
          return false;
        }
      }
      return true;
    });
    
    expect(element).toBeTruthy();
    
    await page.click('#colorBtn');
  
    await page.waitForTimeout(500);
  
    const ele = await page.evaluate(() => {
      const div = document.getElementById('child');
      const child = Array.from(div.children);
      for (let i = 0; i < child.length; i++) {
        const style = window.getComputedStyle(child[i]);
        if (style.color !== 'rgb(0, 0, 255)') {
          return false;
        }
      }
      return true;
    });
    expect(ele).toBeTruthy();
  });
});