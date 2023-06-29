const puppeteer = require('puppeteer');
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

const launchBrowser = async () => await puppeteer.launch({ args: ["--no-sandbox"], headless: "new" });
const createPage = async (browser) => await browser.newPage();
const closeBrowser = async (browser) => await browser.close();
const closePage = async (page) => await page.close();

const folderPath = __dirname;
describe('Test Suite Title', () => {
  let browser, page, container;

  beforeAll(async () => {
    browser = await launchBrowser();
    page = await createPage(browser);
    await page.goto(`file://${folderPath}/source/index.html`);
    container = await page.$('#container');
  });


  afterAll(async () => {
    await closePage(page);
    await closeBrowser(browser);
  });


  test('Hover check', async () => {
    await page.waitForSelector('#circle');
    let circle = await page.$('#circle');
    let text = await page.$('#text');
    let circleTrans = await page.evaluate(el => el.style.transform, circle);
    let textContent= await page.evaluate(el => el.textContent, text);

    expect(circleTrans).toBe('');
    expect(textContent).toBe('Click or hover over the circle to see the effect');

    await page.hover('#circle'); 
    await page.waitForTimeout(500);
    const circleDiv = await page.$('#circle');
    const textDiv = await page.$('#text');
    circleTrans = await page.evaluate(el => el.style.transform, circleDiv);
    textContent= await page.evaluate(el => el.textContent, textDiv);

    expect(circleTrans).toBe('scale(2)');
    expect(textContent).toBe('Hovering over the circle!');
  });

  test('Click check', async () => {
    const circle = await page.$('.circle');
    const text = await page.$('.text');
    await circle.click();
    let newTextContent = await text.evaluate((element) => element.textContent);
    expect(newTextContent).toBe('Circle is clicked!');
    await circle.click();
    newTextContent = await text.evaluate((element) => element.textContent);
    expect(newTextContent).toBe('Click or hover over the circle to see the effect');
  });
  test('Mouseout check', async () => {
    const circle = await page.$('.circle');
    const text = await page.$('.text');
    await circle.hover();
    await circle.hover({ steps: 10 });
    await page.mouse.move(0, 0);
    const circleStyle = await circle.evaluate((element) => element.style.transform);
    const newTextContent = await text.evaluate((element) => element.textContent);
    expect(circleStyle).toBe('scale(1)');
    expect(newTextContent).toBe('Click or hover over the circle to see the effect');
  });

});

