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
  const title = document.querySelector('title').textContent;

  if(title=='Tables for practice1')
  {
    return 1
  }
  return 0
}
helper('Title is Tables',checkTitle)

const checkBorder = ()=>{
  const table = document.querySelector('table')
  if (table == null)
  {
    throw('Table doesnot exists')
  }else
{
  const border = document.querySelector('table').getAttribute('border')
  const cellspacing = document.querySelector('table').getAttribute('cellspacing')
  const cellpadding = document.querySelector('table').getAttribute('cellpadding')
  const bgcolor = document.querySelector('table').getAttribute('bgcolor')
  expect(table).toBeTruthy();
  expect(border).toBeTruthy();
  expect(cellpadding).toBeTruthy();
  expect(cellspacing).toBeTruthy();
  expect(bgcolor).toBeTruthy();

  expect(border).toBe('2');
  if (table && border=='2' && cellpadding=='3' && cellspacing=='5' && bgcolor=='beige')
  {
    return 1
  }
  return 0
}

}
helper('Table with some border',checkBorder)

const checkRow1 = ()=>{
  const ths = document.querySelectorAll('tr')[0].querySelectorAll('th');
  if (ths.length!=4)
  {
    throw('Headings are not in the table')
  }
  if (ths[0].textContent=='Product' && ths[1].textContent=='Price'&& ths[2].textContent=='Quantity' && ths[3].textContent=='Total')
  {
    return 1
  }
  else{
    throw('Headings data is wrong')
  }
}
helper('First row of table',checkRow1)

const checkRow2 = ()=>{
  const tds = document.querySelectorAll('tr')[1].querySelectorAll('td');
      
  if (tds.length!=4)
  {
    throw('Columns in row 2 are missing')
  }
  if (tds[0].textContent=='Apple' && tds[1].textContent=='$0.50' && tds[2].textContent=='10' && tds[3].textContent=='$5.00')
  {
   return 1

  }
  else{
    throw('Column data in row 2 is wrong')

  }
}
helper('Second row of table',checkRow2)

const checkRow3 = ()=>{
  const tds = document.querySelectorAll('tr')[2].querySelectorAll('td');
      
  if (tds.length!=4)
  {
    throw('Columns in row 3 are missing')
  }
  if (tds[0].textContent=='Orange' && tds[1].textContent=='$0.75' && tds[2].textContent=='15' && tds[3].textContent=='$11.25')
  {
   return 1

  }
  else{
    throw('Column data in row 3 is wrong')

  }
}
helper('Third row of table',checkRow3)

const checkRow4 = ()=>{
  const tds = document.querySelectorAll('tr')[3].querySelectorAll('td');
      
  if (tds.length!=4)
  {
    throw('Columns of 4th row are missing')
  }
  if (tds[0].textContent=='Banana' && tds[1].textContent=='$0.35' && tds[2].textContent=='20' && tds[3].textContent=='$7.00')
  {
   return 1

  }
  else{
    throw('Column data of 4th row is wrong')

  }
}
helper('Fourth row of table',checkRow4)



