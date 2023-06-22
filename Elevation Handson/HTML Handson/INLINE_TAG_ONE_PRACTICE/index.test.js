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
const checkSpan1 = ()=>{
  const span = document.querySelectorAll('span')[0];
  if (span==null)
  {
    throw('span is missing');
  }
  const img = span.querySelector('img')
  if (img==null)
  {
    throw('image is missing');
  }
  const width = img.getAttribute('width')
  const height = img.getAttribute('height')
  const src = img.getAttribute('src')
  const aSrc = 'https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/navbar/logoPrepBytes.svg'
  if (! (src==aSrc && width=='500' && height=='500' ))
  {
    throw('image is missing some attributes or maybe some attributes are wrong');
  }

  return 1
}
const checkIframe = ()=>{
  const span = document.querySelectorAll('span')[1];
  if (span==null)
  {
    throw('span is missing');
  }
  const iframe = span.querySelector('iframe')
  if (iframe==null)
  {
    throw('image is missing');
  }
  const width = iframe.getAttribute('width')
  const height = iframe.getAttribute('height')
  const src = iframe.getAttribute('src')
  const aSrc = 'https://mycode.prepbytes.com'
  if (! (src==aSrc && width=='500' && height=='500' ))
  {
    throw('iframe is missing some attributes or maybe some attributes are wrong');
  }

  return 1

}

helper('1st span containing Prepbytes logo',checkSpan1)
helper('2nd span consisting of Iframe tag',checkIframe)