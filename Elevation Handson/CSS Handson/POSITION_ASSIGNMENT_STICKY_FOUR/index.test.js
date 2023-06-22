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
            if (window.getComputedStyle(ele).fontFamily !== "Arial") return false;
            if (window.getComputedStyle(ele).margin !== "0px") return false;
            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of div having class="header"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('.header');
            if (window.getComputedStyle(ele).position !== "sticky") return false;
            if (window.getComputedStyle(ele).top !== "0px") return false;
            if (window.getComputedStyle(ele).backgroundColor !== "rgb(51, 51, 51)") return false;
            if (window.getComputedStyle(ele).color !== "rgb(255, 255, 255)") return false;
            if (window.getComputedStyle(ele).padding !== "20px") return false;
            if (window.getComputedStyle(ele).textAlign !== "center") return false;
            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of div having class="content"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('.content');
            if (window.getComputedStyle(ele).padding !== "40px") return false;
            if (window.getComputedStyle(ele).lineHeight !== "25px") return false;
            if (window.getComputedStyle(ele).backgroundColor !== "rgb(247, 247, 247)") return false;
            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of div having class="section"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('.section');
            if (window.getComputedStyle(ele).marginBottom !== "40px") return false;
            return true;
        });
        expect(check).toBeTruthy();
    });

});