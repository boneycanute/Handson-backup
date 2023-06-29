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

    test("Check when add button is clicked", async() => {

        const initialChildCount = await page.$$eval('#list li', (elements) => elements.length);
        // Click the "Add Child" button
        await page.waitForSelector(".addBtn");
        await page.click(".addBtn");

        await page.waitForTimeout(500);

        // Get the updated number of child elements
        const updatedChildCount = await page.$$eval('#list li', (elements) => elements.length);
        const lastEleTag = await page.evaluate(() => {
            const list = document.querySelector('#list');
            return list.lastElementChild.tagName;
        });

        const lastEleText = await page.evaluate(() => {
            const list = document.querySelector('#list');
            return list.lastElementChild.textContent;
        });

        // Verify that the child count has increased by 1
        expect(updatedChildCount).toBe(initialChildCount + 1);
        expect(lastEleTag).toBe('LI');
        expect(lastEleText).toBe('New Item');

    });

    test("Check when remove button is clicked", async() => {

        const initialChildCount = await page.$$eval('#list li', (elements) => elements.length);
        // Click the "Add Child" button
        await page.waitForSelector(".removeBtn");
        await page.click(".removeBtn");

        await page.waitForTimeout(500);

        // Get the updated number of child elements
        const updatedChildCount = await page.$$eval('#list li', (elements) => elements.length);


        // Verify that the child count has increased by 1
        expect(updatedChildCount).toBe(initialChildCount - 1);

    });
});