const { JSDOM } = require('jsdom');
const { window } = new JSDOM();
globalThis.Node = window.Node;

const launchBrowser = async () => await puppeteer.launch();
const createPage = async browser => await browser.newPage();
const closeBrowser = async browser => await browser.close();
const closePage = async page => await page.close();
const puppeteer = require('puppeteer');
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });
const folderPath = __dirname;

function helper(title, fxn,time=5000) {
  describe('Test project', () => {
    let browser, page;

    beforeAll(async () => {
      browser = await puppeteer.launch({ args: ["--no-sandbox"], headless: "new" });
      page = await createPage(browser);
    });

    afterAll(async () => {
      await closePage(page);
      await closeBrowser(browser);
    });

    test(`${title}`, async () => {
      await page.goto(`file://${folderPath}/source/index.html`);
      const valid = await page.evaluate(fxn);
      expect(valid).toBeTruthy();
    },time);
  });
}

const checkTitle = ()=>{
  const title =  document.querySelector('title').textContent;
  if(title=='Tables')
  {
    return 1
  }
  return 0
}
const checkBorder = ()=>{
  const table =  document.querySelector('table')
  if (table == null)
  {
    throw('Table doesnot exists')
  }
  const border =document.querySelector('table').getAttribute('border')
  
  if(table==null || border == null)
  {
    return 0
  }
  return 1
}
const checkRow1 = ()=>{
  const ths = document.querySelectorAll('tr')[0].querySelectorAll('th');
  if (ths.length!=2)
  {
    throw('Headings are not in the table')
  }
  if (ths[0].textContent=='Placement Programs' && ths[1].textContent=='Web Developement')
  {
    return 1
  }
  else{
    throw('Headings data is wrong')
  }
}
const checkRow2 = ()=>{
  const tds = document.querySelectorAll('tr')[1].querySelectorAll('td');
      
  if (tds.length!=2)
  {
    throw('Columns in row 2 are missing')
  }
  if (tds[0].textContent=='ZENITH' && tds[1].textContent=='FRONTEND')
  {
    return 1
  }
  else{
    throw('Column data in row 2 is wrong')

  }
}
const checkRow3 = ()=>{
  const tds = document.querySelectorAll('tr')[2].querySelectorAll('td');
      
  if (tds.length!=2)
  {
    throw('Columns in row 3 are missing')
  }
  if (tds[0].textContent=='CREST' && tds[1].textContent=='FULL STACK')
  {
    return 1
  }
  else{
    throw('Column data in row 3 is wrong')

  }
}


helper('Title is Tables',checkTitle)
helper('Table with some border',checkBorder)
helper('First row of table',checkRow1)
helper('Second row of table',checkRow2)
helper('Third row of table',checkRow3)
