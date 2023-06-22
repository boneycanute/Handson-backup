const puppeteer = require('puppeteer');
const path = require('path');
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
            if (window.getComputedStyle(ele).padding !== "0px") return false;
            if (window.getComputedStyle(ele).boxSizing !== "border-box") return false;
            if (window.getComputedStyle(ele).color !== "rgb(62, 62, 62)") return false;
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

    test('checking properties of div having class="grid-container"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('.grid-container');
            if (window.getComputedStyle(ele).display !== "grid") return false;
            if (window.getComputedStyle(ele).gap !== "30px") return false;
            if (window.getComputedStyle(ele).gridAutoColumns !== "auto") return false;
            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of div having class="grid-item"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('.grid-item');
            if (window.getComputedStyle(ele).display !== "flex") return false;
            if (window.getComputedStyle(ele).alignItems !== "center") return false;
            if (window.getComputedStyle(ele).justifyContent !== "center") return false;
            if (window.getComputedStyle(ele).margin !== "10px") return false;
            if (window.getComputedStyle(ele).padding !== "10px") return false;
            if (window.getComputedStyle(ele).fontSize !== "18px") return false;
            if (window.getComputedStyle(ele).backgroundColor !== "rgb(65, 176, 163)") return false;
            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of div having id="item1"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('#item1');
            if (window.getComputedStyle(ele).gridColumnStart !== "1") return false;
            if (window.getComputedStyle(ele).gridColumnEnd !== "4") return false;
            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of div having id="item2"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('#item2');
            if (window.getComputedStyle(ele).gridRowStart !== "2") return false;
            if (window.getComputedStyle(ele).gridRowEnd !== "4") return false;
            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of div having id="item8"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('#item8');
            if (window.getComputedStyle(ele).gridArea !== "4 / 2 / span 2 / span 2") return false;
            return true;
        });
        expect(check).toBeTruthy();
    });


});