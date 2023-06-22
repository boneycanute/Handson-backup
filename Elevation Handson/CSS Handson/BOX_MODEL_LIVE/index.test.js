const puppeteer = require('puppeteer');
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

describe('CSS Box Model Testing', () => {
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

    test('check border width of element with class="box"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const style = await page.evaluate(() => {
            const ele = document.querySelector('.box');
            return window.getComputedStyle(ele).borderWidth;
        });
        expect(style).toBe('8px');
    });

    test('check border style of element with class="box"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const style = await page.evaluate(() => {
            const ele = document.querySelector('.box');
            return window.getComputedStyle(ele).borderStyle;
        });
        expect(style).toBe('solid');
    });

    test('check border color of element with class="box"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const style = await page.evaluate(() => {
            const ele = document.querySelector('.box');
            return window.getComputedStyle(ele).borderColor;
        });
        expect(style).toBe('rgb(127, 124, 124)');
    });

    test('check padding of element with class="box"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const style = await page.evaluate(() => {
            const ele = document.querySelector('.box');
            return window.getComputedStyle(ele).padding;
        });
        expect(style).toBe('20px');
    });

    test('check margin of element with class="box"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const style = await page.evaluate(() => {
            const ele = document.querySelector('.box');
            return window.getComputedStyle(ele).margin;
        });
        expect(style).toBe('30px');
    });

    test('check backgroundColor of element with class="box"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const style = await page.evaluate(() => {
            const ele = document.querySelector('.box');
            return window.getComputedStyle(ele).backgroundColor;
        });
        expect(style).toBe('rgb(75, 133, 234)');
    });

    test('check backgroundColor for element with id="content"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const style = await page.evaluate(() => {
            const ele = document.querySelector('#content')
            return window.getComputedStyle(ele).backgroundColor;
        });
        expect(style).toBe('rgb(145, 224, 145)');
    });
});