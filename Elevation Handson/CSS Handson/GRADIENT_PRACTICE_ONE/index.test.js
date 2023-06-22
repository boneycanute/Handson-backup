const puppeteer = require('puppeteer');
const path = require('path');
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

describe('CSS Gradient Testing', () => {
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
            if (window.getComputedStyle(ele).flexWrap !== "wrap") return false;
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
            if (window.getComputedStyle(ele).margin !== "30px") return false;
            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of div having class="linear-gradient"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('.linear-gradient');
            if (window.getComputedStyle(ele).backgroundImage !== 'linear-gradient(to right, rgb(255, 0, 0), rgb(255, 255, 0), rgb(255, 165, 0))') return false;
            if (window.getComputedStyle(ele).height !== "200px") return false;
            if (window.getComputedStyle(ele).width !== "300px") return false;

            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of div having class="repeating-linear-gradient"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('.repeating-linear-gradient');
            if (window.getComputedStyle(ele).backgroundImage !== 'repeating-linear-gradient(to right, rgb(0, 0, 255), rgb(0, 255, 0) 10%, rgb(128, 0, 128) 20%)') return false;
            if (window.getComputedStyle(ele).height !== "200px") return false;
            if (window.getComputedStyle(ele).width !== "300px") return false;

            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of div having class="radial-gradient"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('.radial-gradient');
            if (window.getComputedStyle(ele).backgroundImage !== 'radial-gradient(circle at center center, rgb(0, 128, 128), rgb(0, 0, 128))') return false;
            if (window.getComputedStyle(ele).height !== "200px") return false;
            if (window.getComputedStyle(ele).width !== "300px") return false;

            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of div having class="repeating-radial-gradient"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('.repeating-radial-gradient');
            // throw window.getComputedStyle(ele).backgroundImage;
            if (window.getComputedStyle(ele).backgroundImage !== 'repeating-radial-gradient(circle at center center, rgb(255, 192, 203), rgb(230, 230, 250) 20%, rgb(255, 255, 255) 40%)') return false;
            if (window.getComputedStyle(ele).height !== "200px") return false;
            if (window.getComputedStyle(ele).width !== "300px") return false;

            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of div having class="conic-gradient"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('.conic-gradient');
            // throw window.getComputedStyle(ele).backgroundImage;
            if (window.getComputedStyle(ele).backgroundImage !== 'conic-gradient(from 180deg, rgb(0, 0, 0), rgb(255, 255, 255))') return false;
            if (window.getComputedStyle(ele).height !== "200px") return false;
            if (window.getComputedStyle(ele).width !== "300px") return false;

            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of div having class="repeating-conic-gradient"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('.repeating-conic-gradient');
            // throw window.getComputedStyle(ele).backgroundImage;
            if (window.getComputedStyle(ele).backgroundImage !== 'repeating-conic-gradient(from 180deg, rgb(128, 128, 128) 0%, rgb(255, 255, 255) 25%, rgb(0, 0, 0) 50%)') return false;
            if (window.getComputedStyle(ele).height !== "200px") return false;
            if (window.getComputedStyle(ele).width !== "300px") return false;

            return true;
        });
        expect(check).toBeTruthy();
    });


});