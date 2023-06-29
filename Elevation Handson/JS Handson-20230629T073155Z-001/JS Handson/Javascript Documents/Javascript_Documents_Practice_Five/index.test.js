const puppeteer = require('puppeteer');
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });
let browser;
let page;
const launchBrowser = async () => await puppeteer.launch({ args: ["--no-sandbox"], headless: "new" });
const createPage = async (browser) => await browser.newPage();
const closeBrowser = async (browser) => await browser.close();
const closePage = async (page) => await page.close();

const folderPath = __dirname;
describe('Test Suite Title', () => {
  beforeAll(async () => {
    browser = await launchBrowser();
    page = await createPage(browser);
    await page.goto(`file://${folderPath}/source/index.html`);
  });
  afterAll(async () => {
    await closePage(page);
    await closeBrowser(browser);
  });
  test('Check the Images and Captions', async () => {
    var imageData = [
      {
        url: "https://images.unsplash.com/photo-1663256139088-c722b93af1b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
        caption: "Beautiful Sunset"
      },
      {
        url: "https://plus.unsplash.com/premium_photo-1668736594236-4c6042c673b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1121&q=80",
        caption: "City Lights"
      },
      {
        url: "https://plus.unsplash.com/premium_photo-1686314406088-f25c0cf842ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=726&q=80",
        caption: "Nature's Serenity"
      },
      {
        url: "https://images.unsplash.com/photo-1663256139088-c722b93af1b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
        caption: "Beautiful Sunset"
      },
      {
        url: "https://plus.unsplash.com/premium_photo-1668736594236-4c6042c673b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1121&q=80",
        caption: "City Lights"
      },
      {
        url: "https://plus.unsplash.com/premium_photo-1686314406088-f25c0cf842ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=726&q=80",
        caption: "Nature's Serenity"
      }
    ];

    for (let i =0;i<imageData.length;i++)
    {
      let data = imageData[i]
      let imageSrc = data.url
      let caption = data.caption

      const imageElement = (await page.$$('.gallery-item > img'))[i]
      const captionElement = (await page.$$('.gallery-item > p'))[i]
      let src = await page.evaluate((element) => {
        return element.src;
        }, imageElement);
      let captionText = await page.evaluate((element) => {
        return element.textContent;
        }, captionElement);
      expect(src).toBe(imageSrc)
      expect(captionText).toBe(caption)
    }
  });
});
