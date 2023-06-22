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
const checkNav = ()=>{
  let div = document.querySelector('div');
  let body = document.querySelector('body').children;
  if (div==null)
  {
    throw('Div which is container of links is missing');
  }
  if (body[0]!=div)
  {
    throw('div doesnot follows order')
  }

  const spans = div.querySelectorAll('a')
  const par =div.querySelectorAll('span')

  if (spans.length!=5)
  {
    throw('Not enough spans or spans are extra')
  }
  
  if (!(spans[0].textContent=='Home' && spans[1].textContent=='About Us' && spans[2].textContent=='Gallery' && spans[3].textContent=='Programs' && spans[4].textContent=='Contact Us' && spans[0]==par[0].children[0] && spans[1]==par[1].children[0] && spans[2]==par[2].children[0] && spans[3]==par[3].children[0] && spans[4]==par[4].children[0]))
  {
    throw('Either the content is wrong or the order is not right')
  }
  for (let i = 0; i < par.length - 1; i++) {
    if (!par[i].textContent.includes(' ')) {
      throw('Need spaces in between the links. Use two spaces.');
    }
  }
  return 1
}
const checkImage = ()=>{
  const image = document.querySelector('img');
  if (image==null)
  {
    console.log('image is missing');
    return 0
  }
  const width = image.getAttribute('width')
  const height = image.getAttribute('height')
  const src = image.getAttribute('src')
  const alt = image.getAttribute('alt')
  const aSrc = 'https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/navbar/logoPrepBytes.svg'
  if (! (src==aSrc && width=='400' && height=='400' && alt=='Prepbytes' ))
  {
    throw('image is missing some attributes or maybe some attributes are wrong');
  }

  return 1
}
helper('Navbar',checkNav)
helper('Image of Prepbytes',checkImage)

