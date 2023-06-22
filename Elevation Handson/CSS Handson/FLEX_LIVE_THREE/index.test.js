const { JSDOM } = require('jsdom');
const { window } = new JSDOM();
globalThis.Node = window.Node;
module.exports = {
  testEnvironment: 'jsdom'
};

const launchBrowser = async () => await puppeteer.launch();
const createPage = async browser => await browser.newPage();
const closeBrowser = async browser => await browser.close();
const closePage = async page => await page.close();
const puppeteer = require('puppeteer');
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });
const folderPath = __dirname;

function helper(title, fxn, no = 0) {
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
      const valid = await page.evaluate(fxn,no);
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
  const display = style.display,padding = style.padding, justifyC = style.justifyContent, bgColor = style.backgroundColor, marginL = style.marginLeft, marginR = style.marginRight, marginT = style.marginTop,marginB = style.marginBottom,height = style.height

  if (display!='flex')
  {
    return 0
  }

 

  if (justifyC!='space-evenly')
  {
    return 0
  }

  if (bgColor != 'rgb(0, 0, 0)')
  {
    return 0
  }

  if (padding!='16px')
  {
    return 0
  }
  if (!(marginT=='16px' && marginB =='16px'))
  {
    return 0
  }
  if (!(marginL=='0px' && marginR=="0px"))
  {
    return 0
  }
  if (height != '400px')
  {
    return 0
  }
  return 1
}

const checkBox = ()=>{
  const box = document.querySelector('.box');
  const style = getComputedStyle(box)
  const margin = style.margin, height = style.height, bgColor = style.backgroundColor
  if (margin!='16px' || height!='120px' || bgColor!='rgb(255, 255, 0)')
  {
    return 0
  }
  return 1

}
const checkBoxA = ()=>{
  const box = document.querySelector('.boxA');
  const style = getComputedStyle(box)
  const width = style.width
  if (width!='400px')
  {
    return 0
  }
  return 1
}

const checkFlexA = ()=>{
  const flex = document.querySelector('.flexA');
  const style = getComputedStyle(flex)
  const display = style.display,padding = style.padding, justifyC = style.justifyContent, bgColor = style.backgroundColor, marginL = style.marginLeft, marginR = style.marginRight, marginT = style.marginTop,marginB = style.marginBottom,wrap = style.flexWrap

  if (display!='flex')
  {
    return 0
  }

 

  if (justifyC!='space-evenly')
  {
    return 0
  }

  if (bgColor != 'rgb(0, 0, 0)')
  {
    return 0
  }

  if (padding!='16px')
  {
    return 0
  }
  if (!(marginT=='16px' && marginB =='16px'))
  {
    return 0
  }
  if (!(marginL=='0px' && marginR=="0px"))
  {
    return 0
  }
  if (wrap != 'wrap')
  {
    return 0
  }
  return 1
}
const checkBox1  =()=>{
  const box = document.querySelector('#box1');
  const style = getComputedStyle(box)
  const flexBasis = style.flexBasis, flexShrink = style.flexShrink, align=style.alignSelf
  if (flexBasis!='100px' || flexShrink!='3' || align!='center' )
  {
    return 0
  }
  return 1
}

const checkBox2 = ()=>{
  const box = document.querySelector('#box2');
  const style = getComputedStyle(box)
  const flexGrow = style.flexGrow
  if (flexGrow!='2')
  {
    return 0
  }
  return 1
}



const checkBoxO  =(no)=>{
  const box = document.querySelector(`#box${no}`);
  const style = getComputedStyle(box)
  const flexGrow = style.flexGrow
  const align = style.alignSelf
  if (flexGrow!='1' || align!='center' )
  {
    return 0
  }
  return 1
}

const checkBoxE  =(no)=>{
  const box = document.querySelector(`#box${no}`);
  const style = getComputedStyle(box)
  const flexGrow = style.flexGrow
  if (flexGrow!='2' )
  {
    return 0
  }
  return 1
}
const checkDivsA = () => {
  const boxes = document.querySelectorAll('.boxA');
  for (let i = 0; i < boxes.length; i++) {
    const style = getComputedStyle(boxes[i]);
    const width = style.width;
    if (width !== '400px') {
      return 0;
    }
  }
  return 1;
};


helper('Body Styles',checkBody)
helper('Flex Styles',checkFlex)
helper('Box styles',checkBox)
helper('box 1 styles',checkBox1)
helper('box 2 styles',checkBox2)
helper('box 3 styles',checkBoxO,3)
helper('box 4 styles',checkBoxE,4)
helper('box 5 styles',checkBoxO,5)
helper('box 6 styles',checkBoxE,6)
helper('box 7 styles',checkBoxO,7)
helper('box 8 styles',checkBox,8)
helper('box 9 styles',checkBoxO,9)

helper('FlexA Styles',checkFlexA)
helper('BoxA styles',checkBoxA)
helper('Divs in flexA styles',checkDivsA)