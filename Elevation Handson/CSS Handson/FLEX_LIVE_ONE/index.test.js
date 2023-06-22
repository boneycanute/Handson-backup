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
  const height = flex.offsetHeight;
const width = flex.offsetWidth;
  const display = style.display, justifyC = style.justifyContent, bgColor = style.backgroundColor, align = style.alignItems

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
  return 1
}

const checkChild =()=>{
  const child = document.querySelector('.child');
  const style = window.getComputedStyle(child)
  const border = style.border, padding = style.padding, height = style.height, width =style.width, borderRadius = style.borderRadius, transform = style.transform
  if (border!='1px solid rgb(0, 0, 0)')
  {
    return 0
  }
  if (padding!='10px')
  {
    return 0
  }
  if (height!='150px')
  {
    return 0
  }
  if (width!='200px')
  {
    return 0
  }
  if (borderRadius!='10px')
  {
    return 0
  }
  if (transform!='matrix(0.984808, 0.173648, -0.173648, 0.984808, 0, 0)')
  {
    return 0
  }
  return 1
}

const checkBox1 =()=>{
  const b1 = document.querySelector('#box1');
  const style = window.getComputedStyle(b1)
  const textDec = style.textDecoration
  if (textDec!='line-through solid rgb(0, 0, 0)')
  {
    return 0
  }
  return 1
}
const checkBox2 =()=>{
  const b1 = document.querySelector('#box2');
  const style = window.getComputedStyle(b1)
  const display = style.display
  if (display!='none')
  {
    return 0
  }
  return 1
}
const checkBox3 =()=>{
  const b1 = document.querySelector('#box3');
  const style = window.getComputedStyle(b1)
  const textDec = style.textDecoration
  if (textDec!='underline solid rgb(0, 0, 0)')
  {
    return 0
  }
  return 1
}
helper('Body Styles',checkBody)
helper('Flex Styles',checkFlex)
helper('Child Styles',checkChild)
helper('Box1 Styles',checkBox1)
helper('Box2 Styles',checkBox2)
helper('Box3 Styles',checkBox3)
