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

const checkForm = ()=>{
  const body = document.querySelector('body').children;
  const form = document.querySelector('form');
  if (form==null)
  {
    throw('No form')
  }
  if (body[0]==form)
  {
    return 1
  }
  else
  {
    throw(' the form is wrong or it is not following the order')
  }
}
const checkLabel1 = ()=>{
  const label = document.querySelectorAll('label')[0];
  const form = document.querySelector('form').children;
  if (label==null)
  {
    throw('No label inside the form')
  }
  if (label.textContent=='Choose a Program:' && label.getAttribute('for')=='course' && label==form[0])
  {
    return 1
  }
  else
  {
    throw('Either the label content of "choose a program "is wrong or the for is wrong or it is not following the order')
  }

}

const checkSelect1 = ()=>{
  const select = document.querySelectorAll('select')[0];
  const form = document.querySelector('form').children;
  if (select==null)
  {
    throw('select is missing')
  }
  // throw(`${select.getAttribute('name')},${select.getAttribute('id')}`)
  if (!(select.getAttribute('name')=='course' && select.getAttribute('id')=='course'))
  {
    throw('Attribtues of select are not correct')
  }
  if(!(select.querySelectorAll('option').length==4)){
    throw('Select is missing some options')

  }

  const opt = select.querySelectorAll('option')
  if (!(opt[0].getAttribute('value')=='placement program' &&opt[0].textContent=='Placement Program' && opt[1].getAttribute('value')=='cp' &&opt[1].textContent=='Master Competitive Programming'  && opt[2].getAttribute('value')=='full stack' &&opt[2].textContent=='Full Stack Program' && opt[3].getAttribute('value')=='other' &&opt[3].textContent=='Other'   ))
  {
    throw('the content of the options is not correct or the attributes given are wrong')
  }

  const sChild = select.children
  if( !(sChild[0]==opt[0] && sChild[1]==opt[1] && sChild[2]==opt[2] && sChild[3]==opt[3]))
  {
    throw('The options donot follow the order')
  }
  if (form[1]!=select)
  {
    throw('The select donot follow the order')

  }
  return 1
}
const checkBr1 =()=>{
  const brs = document.querySelectorAll('br');
  const form = document.querySelector('form').children;
  if (brs==null)
  {
    throw('No brs in the form')
  }

  if (brs[0]==form[2] && brs[1]==form[3])
  {
    return 1
  }
  else
  {
    throw('Either brs after 1st select are missing or they dont follow the order')
  }
}

const checkLabel2 = ()=>{
  const label = document.querySelectorAll('label')[1];
  const form = document.querySelector('form').children;
  if (label==null)
  {
    throw('No 2nd label inside the form')
  }
  // throw(`${label.textContent}, ${form[0].textContent}`)
  if (label.textContent=='Choose a Company:' && label.getAttribute('for')=='company' && label==form[4])
  {
    return 1
  }
  else
  {
    throw('Either the label content of "Choose a Company:" is wrong or the for is wrong or it is not following the order')
  }
}
const checkSelect2 = ()=>{
  const select = document.querySelectorAll('select')[1];
  const form = document.querySelector('form').children;
  if (select==null)
  {
    throw('2nd select is missing')
  }
  if (!(select.getAttribute('name')=='company' && select.getAttribute('id')=='company'))
  {
    throw('Attribtues of 2nd select are not correct')
  }


  const optgrp = select.querySelectorAll('optgroup')
  if (!(optgrp.length==2 && optgrp[0].getAttribute('label')=='Product Based Companies' && optgrp[1].getAttribute('label')=='Service Based Companies' && select.children[0]==optgrp[0] && select.children[1]==optgrp[1]))
  {
    throw('either the opt grp are extra or missing , or the attributes of the optgrp is not correct and third case maybe that they dont follow the order')
  }

  let opt =[0,0] 
  opt[0] = optgrp[0].querySelectorAll('option')
  opt[1] = optgrp[1].querySelectorAll('option')

  if (!(opt[0].length==3 &&opt[1].length==3))
  {
    throw('some options are missing in the 2nd select')
  }


  if (!(opt[0][0].getAttribute('value')=='apple' &&opt[0][0].textContent=='Apple' && opt[0][1].getAttribute('value')=='microsoft' &&opt[0][1].textContent=='Microsoft'  && opt[0][2].getAttribute('value')=='amazon' &&opt[0][2].textContent=='Amazon' ))
  {
    throw('the content of the of first opt group is wrong or the order is wrong')
  }
  if (!(opt[1][0].getAttribute('value')=='tcs' &&opt[1][0].textContent=='TCS' && opt[1][1].getAttribute('value')=='hcl' &&opt[1][1].textContent=='HCL'  && opt[1][2].getAttribute('value')=='wipro' &&opt[1][2].textContent=='Wipro' ))
  {
    throw('the content of the of second opt group is wrong or the order is wrong')
  }

  if (form[5]!=select)
  {
    throw('The 2nd select donot follow the order')

  }
  return 1
}
const checkBr2 = ()=>{
  const brs = document.querySelectorAll('br');
  const form = document.querySelector('form').children;
  if (brs==null || brs.length!=4)
  {
    throw('No brs in the form')
  }
  // throw(`${label.textContent}, ${form[0].textContent}`)
  if (brs[2]==form[6] && brs[3]==form[7])
  {
    return 1
  }
  else
  {
    throw('Either brs after the 2nd select are missing or they dont follow the order')
  }
}

const checkSubmit = ()=>{
  const input = document.querySelector('input');
  const form = document.querySelector('form').children;
  if (input==null)
  {
    throw('No input inside the form')
  }
  if (input.getAttribute('type')=='submit' && form[8]==input)
  {
    return 1
  }
  else
  {
    throw('Either the submit input attributes are wrong or it is not following the order')
  }
}


helper('Form tag',checkForm)
helper('Label for "Choose a Program:"',checkLabel1)
helper('First Select tag',checkSelect1)
helper('2 Line breaks after first select',checkBr1)
helper('Label for "Choose a Company:"',checkLabel2)
helper('Second Select tag',checkSelect2)
helper('2 Line breaks after Second select',checkBr2)
helper('Submit',checkSubmit)


