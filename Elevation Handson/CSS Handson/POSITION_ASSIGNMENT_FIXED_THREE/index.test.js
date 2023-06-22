const puppeteer = require('puppeteer');
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

describe('CSS Position Testing', () => {
    let browser;
    let page;

    beforeAll(async() => {
        browser = await puppeteer.launch({ args: ["--no-sandbox"], headless: "new" });
    });

    afterAll(async() => {
        await browser.close();
    });

    beforeEach(async() => {
        page = await browser.newPage();
    });

    afterEach(async() => {
        await page.close();
    });

    test('checking properties of body', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('body');
            if (window.getComputedStyle(ele).fontFamily !== "monospace") return false;
            if (window.getComputedStyle(ele).margin !== "0px") return false;
            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of h1 having class="heading"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('.heading');
            if (window.getComputedStyle(ele).textAlign !== "center") return false;
            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of div having class="mainDiv"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('.mainDiv');
            if (window.getComputedStyle(ele).display !== "flex") return false;
            if (window.getComputedStyle(ele).justifyContent !== "center") return false;
            if (window.getComputedStyle(ele).height !== "600px") return false;
            if (window.getComputedStyle(ele).padding !== "20px") return false;
            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of div having class="content"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('.content');
            if (window.getComputedStyle(ele).fontSize !== "22px") return false;
            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of div having class="fixedDiv"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('.fixedDiv');
            if (window.getComputedStyle(ele).position !== "fixed") return false;
            if (window.getComputedStyle(ele).right !== "50px") return false;
            if (window.getComputedStyle(ele).bottom !== "50px") return false;
            if (window.getComputedStyle(ele).padding !== "20px") return false;
            if (window.getComputedStyle(ele).backgroundColor !== "rgb(173, 216, 230)") return false;
            return true;
        });
        expect(check).toBeTruthy();
    });

});