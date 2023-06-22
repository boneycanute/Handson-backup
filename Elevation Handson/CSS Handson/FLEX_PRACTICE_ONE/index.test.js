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
  const style  = getComputedStyle(body)
  const margin = style.margin, padding = style.padding 
  if (!(margin=='0px' && padding=='0px')) 
  {
    return 0
  }
  return 1
}
const checkNav = ()=>{
  const nav = document.querySelector('#horizontal-nav');
  const style = getComputedStyle(nav)
  const width = style.width, color = style.color,display = style.display,padding = style.padding, justifyC = style.justifyContent, bgColor = style.backgroundColor
  if (display!='flex')
  {
    return 0
  }

  if (color!='rgb(255, 255, 255)')
  {
    return 0
  }



  if (justifyC!='end')
  {
    return 0
  }

  if (bgColor != 'rgb(51, 51, 51)')
  {
    return 0
  }

  if (padding!='25px')
  {
    return 0
  }

  if (width != '1920px')
  {
    return 0
  }
  return 1
}

const navUl = ()=>{
  const ul = document.querySelector('#horizontal-nav ul');
  const style = getComputedStyle(ul)
  const list = style.listStyleType,display = style.display,padding = style.padding, margin = style.margin
  if (display!='flex')
  {
    return 0
  }

  if (list!='none')
  {
    return 0
  }
 

  if (margin!='0px')
  {
    return 0
  }

  

  if (padding!='0px')
  {
    return 0
  }

  return 1
}

const navUlLi = ()=>{
  const li = document.querySelector('#horizontal-nav ul li');
  const style = getComputedStyle(li)
  const marginR = style.marginRight;
  if (marginR=='20px'){
    return 1
  }
  return 0
}

const navUlLiA = ()=>{
  const a = document.querySelector('#horizontal-nav ul li a');
  const style = getComputedStyle(a)
  const color = style.color, text = style.textDecoration;
  if (color!='rgb(255, 255, 255)'){
    return 0
  }
  if (text!='none solid rgb(255, 255, 255)'){
    return 0
  }
  return 1
}

const verticalNav  =()=>{
  const v = document.querySelector('#vertical-nav');
  const style = getComputedStyle(v)
  const font=style.fontSize,width = style.width , fd = style.flexDirection, color = style.color,display = style.display, justifyC = style.justifyContent, bgColor = style.backgroundColor,height = style.height
  if (display!='flex')
  {
    return 0
  }

  if (color!='rgb(51, 51, 51)')
  {
    return 0
  }

  if (justifyC!='center')
  {
    return 0
  }

  if (bgColor != 'rgb(204, 204, 204)')
  {
    return 0
  }

  if (height!='1080px')
  {
    return 0
  }

  if (width != '384px')
  {
    return 0
  }

  if (fd!='column')
  {
    return 0
  }


  if(font!='32px')
  {
    return 0
  }
  return 1
}

const verticalNavUl = ()=>{
  const ul = document.querySelector('#vertical-nav ul');
  const style = getComputedStyle(ul)
  const list = style.listStyleType,display = style.display,padding = style.padding, margin = style.margin
  if (display!='flex')
  {
    return 0
  }

  if (list!='none')
  {
    return 0
  }

 

  if (margin!='0px')
  {
    return 0
  }


  if (padding!='0px')
  {
    return 0
  }

  return 1
}

const verticalNavLi = ()=>{
  const li = document.querySelector('#vertical-nav ul li');
  const style = getComputedStyle(li)
  const margin = style.marginBottom;
  if (margin=='10px'){
    return 1
  }
  return 0
}
const verticalNavA = ()=>{
  const a = document.querySelector('#vertical-nav ul li a');
  const style = getComputedStyle(a)
  const color = style.color, text = style.textDecoration;

  if (color!='rgb(51, 51, 51)'){
    return 0
  }

  if (text!='none solid rgb(51, 51, 51)'){
    return 0
  }
  return 1
}
helper('Body Styles',checkBody)
helper('Horizontal Nav Styles',checkNav)
helper('navUL styles',navUl)
helper('navUlLi styles',navUlLi)
helper('navUlLiA styles',navUlLiA)
helper('verticalNav styles',verticalNav)
helper('verticalNavUl styles',verticalNavUl)
helper('verticalNavLi styles',verticalNavLi)
helper('verticalNavA styles',verticalNavA)
