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
const checkFlex = ()=>{
  const flex = document.querySelector('.flex');
  const style = window.getComputedStyle(flex)
  const height = style.height;
  const display = style.display, justifyC = style.justifyContent, boxS = style.boxSizing, align = style.alignItems
  


  if (display!='flex')
  {
    return 0
  }

  if (height!='1080px')
  {
    return 0
  }

  if (justifyC!='space-evenly')
  {
    return 0
  }

  if (boxS != 'border-box')
  {
    return 0
  }

  if (align!='center')
  {
    return 0
  }
  return 1
}

const checkBox =()=>{
  const box = document.querySelector('.box');
  const style = window.getComputedStyle(box)
  const display = style.display, padding = style.padding, height = style.height, width =style.width, borderRadius = style.borderRadius, align = style.alignItems, bgColor = style.backgroundColor, color = style.color, textSh = style.textShadow, boxSh = style.boxShadow,fontSize = style.fontSize

  if (display!='flex')
  {
    return 0
  }
  if (padding!='16px')
  {
    return 0
  }
  if (height!='200px')
  {
    return 0
  }
  if (width!='200px')
  {
    return 0
  }
  if (borderRadius!='16px')
  {
    return 0
  }

  if (align!='center')
  {
    return 0
  }

  if (textSh!='rgb(0, 0, 0) 2px 2px 2px' || boxSh!='rgb(76, 143, 195) 5px 5px 3px 0px' || fontSize!='19px' || bgColor!='rgb(255, 0, 0)'|| color!='rgb(255, 255, 255)')
  {
    return 0
  }
  return 1
}
helper('Body Styles',checkBody)
helper('Flex Styles',checkFlex)
helper('Box Styles',checkBox)