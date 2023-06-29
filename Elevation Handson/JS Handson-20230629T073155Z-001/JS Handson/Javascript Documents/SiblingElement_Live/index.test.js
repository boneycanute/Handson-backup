const puppeteer = require('puppeteer');
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

const launchBrowser = async() => await puppeteer.launch();
const createPage = async(browser) => await browser.newPage();
const closeBrowser = async(browser) => await browser.close();
const closePage = async(page) => await page.close();

const folderPath = __dirname;

describe('Test Suite Title', () => {
    let browser, page, container;

    beforeAll(async() => {
        // browser = await launchBrowser();
        browser = await puppeteer.launch({ args: ["--no-sandbox"], headless: "new" });
        page = await createPage(browser);
        await page.goto(`file://${folderPath}/source/index.html`);
        container = await page.$('#container'); // Retrieve the container element
    });

    afterAll(async() => {
        await closePage(page);
        await closeBrowser(browser);
    });

    test('Check when highlight button is clicked', async() => {
        await page.waitForSelector('#highlightBtn');
        await page.click('#highlightBtn');

        await page.waitForTimeout(500);

        let prevElement = await page.evaluate(() => {
            const centerDiv = document.querySelector('#centerDiv');
            const previousSibling = centerDiv.previousElementSibling;
            return previousSibling ? previousSibling.style.backgroundColor : null;
        });

        let nextElement = await page.evaluate(() => {
            const centerDiv = document.querySelector('#centerDiv');
            const previousSibling = centerDiv.nextElementSibling;
            return previousSibling ? previousSibling.style.backgroundColor : null;
        });
        expect(prevElement).toBe('yellow');
        expect(nextElement).toBe('yellow');
    });

});