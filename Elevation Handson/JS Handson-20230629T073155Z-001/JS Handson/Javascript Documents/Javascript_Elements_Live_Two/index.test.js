const puppeteer = require('puppeteer');
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

describe('Test Suite Title', () => {
  let browser, page;

  beforeAll(async () => {
    browser = await puppeteer.launch({ args: ["--no-sandbox"], headless: "new" });
    page = await browser.newPage();
    await page.goto('file://' + __dirname + '/source/index.html');
  });

  afterAll(async () => {
    await page.close();
    await browser.close();
  });

  test('First child element should have red color', async () => {
    const color = await page.evaluate(() => {
      const firstChildElement = document.getElementById('parent').firstElementChild;
      return getComputedStyle(firstChildElement).color;
    });

    expect(color).toBe("rgb(255, 0, 0)");
  });

  test('Last child element should have blue color', async () => {
    const color = await page.evaluate(() => {
      const lastChildElement = document.getElementById('parent').lastElementChild;
      return getComputedStyle(lastChildElement).color;
    });

    expect(color).toBe("rgb(0, 0, 255)");
  });

  test('First child node should have updated text content', async () => {
    const textContent = await page.evaluate(() => {
      const firstChildNode = document.getElementById('parent').firstChild;
      return firstChildNode.textContent;
    });

    expect(textContent).toBe('0th child as text');
  });

  test('Last child node should have updated text content', async () => {
    const textContent = await page.evaluate(() => {
      const lastChildNode = document.getElementById('parent').lastChild;
      return lastChildNode.textContent;
    });

    expect(textContent).toBe('nth child as text');
  });
});
