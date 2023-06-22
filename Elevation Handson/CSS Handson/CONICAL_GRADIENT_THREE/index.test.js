const puppeteer = require('puppeteer');
const path = require('path');
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

describe('CSS Conic Gradient Testing', () => {
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

    test('checking properties of heading "h1", id="heading"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('#heading');
            if (window.getComputedStyle(ele).textAlign !== "center") return false;
            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of div having id="parent"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('#parent');
            if (window.getComputedStyle(ele).display !== "flex") return false;
            if (window.getComputedStyle(ele).justifyContent !== "space-evenly") return false;
            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of div having class="section"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('.section');
            if (window.getComputedStyle(ele).margin !== "20px") return false;
            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of div having id="grad1"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('#grad1');
            if (window.getComputedStyle(ele).backgroundImage !== 'conic-gradient(rgb(255, 0, 0), rgb(255, 255, 0), rgb(0, 128, 0))') return false;
            if (window.getComputedStyle(ele).height !== "200px") return false;
            if (window.getComputedStyle(ele).width !== "200px") return false;

            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of div having id="grad2"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('#grad2');
            if (window.getComputedStyle(ele).backgroundImage !== 'conic-gradient(from 90deg, rgb(255, 0, 0), rgb(255, 255, 0), rgb(0, 128, 0))') return false;
            if (window.getComputedStyle(ele).height !== "200px") return false;
            if (window.getComputedStyle(ele).width !== "200px") return false;

            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of div having id="grad3"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('#grad3');
            if (window.getComputedStyle(ele).borderRadius !== '50%') return false;
            if (window.getComputedStyle(ele).backgroundImage !== 'repeating-conic-gradient(rgb(255, 0, 0) 10%, rgb(255, 255, 0) 20%)') return false;
            if (window.getComputedStyle(ele).height !== "200px") return false;
            if (window.getComputedStyle(ele).width !== "200px") return false;

            return true;
        });
        expect(check).toBeTruthy();
    });
});