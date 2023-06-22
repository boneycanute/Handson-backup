const { JSDOM } = require('jsdom');
const { window } = new JSDOM();
globalThis.Node = window.Node;

module.exports = {
  testEnvironment: 'jsdom'
};


const launchBrowser = async () => await  puppeteer.launch({
  defaultViewport: { width: 1920, height: 1080 },
});
const createPage = async browser => await browser.newPage();
const closeBrowser = async browser => await browser.close();
const closePage = async page => await page.close();
const puppeteer = require('puppeteer');
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });
const folderPath = __dirname;

function helper(title, fxn) {
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
    });
  });
}
const checkBody =()=>{
  const body = document.querySelector('body');
  const style = window.getComputedStyle(body)
  const margin = style.margin, padding = style.padding 
  if (!(margin=='0px' && padding=='0px')) 
  {
    return 0
  }
  return 1
}


const checkH1 =()=>{
  const h1 = document.querySelector('h1');
  const style = window.getComputedStyle(h1)
  const color = style.color, tShadow = style.textShadow
  if (color!='rgb(51, 51, 51)' || tShadow!='rgba(221, 22, 22, 0.3) 2px 2px 4px, rgba(255, 255, 255, 0.3) -2px -2px 4px')
  {
    return 0
  }
  return 1
}

const checkText = ()=>{
  const text = document.querySelector('.text-container');
  const style = window.getComputedStyle(text)
  const textAlign = style.textAlign, marginT = style.marginTop
  if (textAlign!='center'|| marginT!='100px')
  {
    return 0
  } 
  return 1
}

const checkBox = ()=>{
  const box = document.querySelector('.box');
  const style = window.getComputedStyle(box)
  const width = style.width, height = style.height,bgColor = style.backgroundColor, boxSh = style.boxShadow, marginL= style.marginLeft,marginR = style.marginRight
  if (width!='200px'|| height!='200px' || bgColor!='rgb(255, 255, 255)' || boxSh!='rgb(0, 93, 255) 3px 5px 9px 0px, rgb(255, 0, 0) 5px 15px 16px 0px'|| marginL!='860px'|| marginR!='860px')
  {
    return 0
  } 
  return 1
}

helper('Body Styles',checkBody)
helper('h1 Styles',checkH1)
helper('Text Styles',checkText)
helper('Box Styles',checkBox)




