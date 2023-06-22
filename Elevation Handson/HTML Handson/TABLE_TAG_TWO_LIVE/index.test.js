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
  const title =document.querySelector('title').textContent;
  if(title=='Tables with rowspan/colspan')
  {
    return 1
  }
  return 0
}

const checkAttributes = ()=>{
  const table = document.querySelector('table')
  if (table == null)
  {
    throw('Table doesnot exists')
  }else
{
  const border = document.querySelector('table').getAttribute('border')
  const cellspacing = document.querySelector('table').getAttribute('cellspacing')
  const cellpadding = document.querySelector('table').getAttribute('cellpadding')

  if (!(table && border=='2' && cellspacing=='2'&& cellpadding=='4'))
  { 
    return 0
  }
  return 1
}
}
const checkRow1 = ()=>{
  const ths = document.querySelectorAll('tr')[0].querySelectorAll('th');
  if (ths.length!=3)
  {
    throw('Headings are not in the table')
  }
  if (ths[0].textContent=='Name' && ths[1].textContent=='Designation' && ths[2].textContent=='Company')
  {
    return 1
  }
  else{
    throw('Headings data is wrong')
  }
}

const checkRow2 = ()=>{
  const tds = document.querySelectorAll('tr')[1].querySelectorAll('td');
      
  if (tds.length!=3)
  {
    throw('Columns in row 2 are missing')
  }
  if (tds[0].textContent=='Employee 1' && tds[1].textContent=='Manager' && tds[2].textContent=='Prepbytes')
  {
    if (tds[2].getAttribute('rowspan')!=null)
    {
      console.log(tds[2].getAttribute('rowspan').textContent);
      if (tds[2].getAttribute('rowspan')=='3')
      {
        return 1
      }
      else{
        throw('Need to give the correct rowspan ')
        return 0

      }
    }
    else{
      throw('give rowspan to the last col of the 2nd row')
    }

  }
  else{
    throw('Column data of row 2 is wrong')

  }
}
const checkRow3 = ()=>{
  const tds = document.querySelectorAll('tr')[2].querySelectorAll('td');
      
  if (tds.length!=2)
  {
    throw('Columns in row 3 are missing')
  }
  if (tds[0].textContent=='Exployee 2' && tds[1].textContent=='Employee')
  {
    if (tds[1].getAttribute('rowspan')!=null)
    {
      console.log(tds[1].getAttribute('rowspan').textContent);
      if (tds[1].getAttribute('rowspan')=='2')
      {
        return 1
      }
      else{
        throw('Need to give the correct rowspan ')
        return 0

      }
    }
    else{
      throw('give rowspan to the last col of the 3nd row')
    }

  }
  else{
    throw('Column data in row 3 is wrong')

  }
}

const checkRow4 = ()=>{
  const tds = document.querySelectorAll('tr')[3].querySelectorAll('td');
      
  if (tds.length!=1)
  {
    throw('Columns in row 4 are missing or extra')
  }
  if (tds[0].textContent=='Exployee 3')
  { 
    return 1
  }
  else{
    throw('Column data in row 4 is wrong')
  }
}
helper('Title is Tables',checkTitle)
helper('Table with some attributes like border,cellpadding,cellspacing',checkAttributes)
helper('First row of table',checkRow1)
helper('Second row of table',checkRow2)
helper('Third row of table',checkRow3)
helper('Fourth row of table',checkRow4)
