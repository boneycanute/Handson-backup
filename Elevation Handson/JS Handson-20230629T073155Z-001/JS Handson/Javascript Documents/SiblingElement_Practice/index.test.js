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
        await page.waitForSelector('#homeBtn');
        await page.click('#homeBtn');

        await page.waitForTimeout(500);

        let prevElementBG = await page.evaluate(() => {
            const centerDiv = document.querySelector('#homeBtn');
            const previousSibling = centerDiv.previousElementSibling;
            return previousSibling ? previousSibling.style.backgroundColor : null;
        });

        let prevElementCL = await page.evaluate(() => {
            const centerDiv = document.querySelector('#homeBtn');
            const previousSibling = centerDiv.previousElementSibling;
            return previousSibling ? previousSibling.style.color : null;
        });

        let prevElementMargin = await page.evaluate(() => {
            const centerDiv = document.querySelector('#homeBtn');
            const previousSibling = centerDiv.previousElementSibling;
            return previousSibling ? previousSibling.style.margin : null;
        });

        let prevElementWidth = await page.evaluate(() => {
            const centerDiv = document.querySelector('#homeBtn');
            const previousSibling = centerDiv.previousElementSibling;
            return previousSibling ? previousSibling.style.width : null;
        });

        let prevElementPadding = await page.evaluate(() => {
            const centerDiv = document.querySelector('#homeBtn');
            const previousSibling = centerDiv.previousElementSibling;
            return previousSibling ? previousSibling.style.padding : null;
        });

        let nextElement = await page.evaluate(() => {
            const centerDiv = document.querySelector('#project1');
            const previousSibling = centerDiv.firstElementChild;
            return previousSibling ? previousSibling.style.borderRadius : null;
        });

        let thirdElement = await page.evaluate(() => {
            const centerDiv = document.querySelector('#project2Heading');
            const previousSibling = centerDiv.nextElementSibling;
            return previousSibling ? previousSibling.style.backgroundColor : null;
        });
        expect(prevElementBG).toBe('rgb(84, 104, 104)');
        expect(prevElementCL).toBe('white');
        expect(prevElementMargin).toBe('auto auto 20px');
        expect(prevElementWidth).toBe('50%');
        expect(prevElementPadding).toBe('5px');
        expect(nextElement).toBe('10px');
        expect(thirdElement).toBe('yellow');
    });

});