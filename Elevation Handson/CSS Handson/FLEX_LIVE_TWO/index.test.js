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
const checkFlex = ()=>{
  const flex = document.querySelector('.flex');
  const style = getComputedStyle(flex)
  const height = flex.offsetHeight;
const width = flex.offsetWidth;
  const display = style.display,direction = style.flexDirection, justifyC = style.justifyContent, bgColor = style.backgroundColor, align = style.alignItems

  if (display!='flex')
  {
    return 0
  }

  if (!(height==window.innerHeight && (width==window.innerWidth||width==window.innerWidth)))
  {
    return 0
  }

  if (justifyC!='space-evenly')
  {
    return 0
  }

  if (bgColor != 'rgb(255, 255, 0)')
  {
    return 0
  }

  if (align!='center')
  {
    return 0
  }
  if (direction!='column')
  {
    return 0
  }
  return 1
}

const checkOption =()=>{
  const option = document.querySelector('.option');
  const style = getComputedStyle(option)
  const border = style.border,display = style.display, padding = style.padding, height = style.height, width =style.width, borderRadius = style.borderRadius, transform = style.transform,align = style.alignItems
  if (border!='1px solid rgb(0, 0, 0)')
  {
    return 0
  }
  if (padding!='10px')
  {
    return 0
  }
  if (height!='50px')
  {
    return 0
  }
  if (width!='100px')
  {
    return 0
  }
  if (borderRadius!='10px')
  {
    return 0
  }
  if (display!='flex')
  {
    return 0
  }
  if (align!='center')
  {
    return 0
  }
  return 1
}

const checkContent = ()=>{
  const content = document.querySelector('.content');
  const style = getComputedStyle(content)
  const marginL= style.marginLeft;
  const marginR = style.marginRight;
  if (!(marginL=='26.4375px' && marginR=='26.4375px'))
  {
    return 0
  }
  return 1
}




helper('Body Styles',checkBody)
helper('Flex Styles',checkFlex)
helper('Option Styles',checkOption)
helper('Content Styles',checkContent)
