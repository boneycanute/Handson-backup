const puppeteer = require("puppeteer");
const { toMatchImageSnapshot } = require("jest-image-snapshot");
expect.extend({ toMatchImageSnapshot });

const launchBrowser = async() => await puppeteer.launch();
const createPage = async(browser) => await browser.newPage();
const closeBrowser = async(browser) => await browser.close();
const closePage = async(page) => await page.close();

const folderPath = __dirname;

describe("Test Suite Title", () => {
    let browser, page, container;

    beforeAll(async() => {
        // browser = await launchBrowser();
        browser = await puppeteer.launch({ args: ["--no-sandbox"], headless: "new" });
        page = await createPage(browser);
        await page.goto(`file://${folderPath}/source/index.html`);
        container = await page.$("#container"); // Retrieve the container element
    });

    afterAll(async() => {
        await closePage(page);
        await closeBrowser(browser);
    });

    test("Check when show Inner Text button is clicked", async() => {

        await page.waitForSelector("#button1");
        await page.click("#button1");

        await page.waitForTimeout(500);

        const text = await page.evaluate(() => {
            const element = document.querySelector('#output');
            return element.innerText;
        });
        expect(text).toBe('This element has extra spacing on both sides.');
    });

    test("Check when show text Content button is clicked", async() => {

        await page.waitForSelector("#button2");
        await page.click("#button2");

        await page.waitForTimeout(500);

        const text = await page.evaluate(() => {
            const element = document.querySelector('#output');
            return element.textContent;
        });
        expect(text).toBe(" This element has extra spacing on both sides. ");
    });
});