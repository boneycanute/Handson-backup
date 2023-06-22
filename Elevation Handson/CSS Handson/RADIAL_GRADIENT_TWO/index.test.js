const puppeteer = require('puppeteer');
const path = require('path');
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

describe('CSS Linear Gradient Testing', () => {
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

    test('checking properties of heading "h1", class="heading"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('.heading');
            if (window.getComputedStyle(ele).textAlign !== "center") return false;
            if (window.getComputedStyle(ele).color !== "rgb(91, 87, 87)") return false;
            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of div having class="parent_div"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('.parent_div');
            if (window.getComputedStyle(ele).display !== "flex") return false;
            if (window.getComputedStyle(ele).justifyContent !== "space-evenly") return false;
            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of div having class="radial_gradient"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('.radial_gradient');
            if (window.getComputedStyle(ele).backgroundImage !== 'radial-gradient(circle at center center, rgb(233, 30, 99), rgb(156, 39, 176))') return false;
            if (window.getComputedStyle(ele).height !== "400px") return false;
            // if (window.getComputedStyle(ele).width !== "352px") return false;
            if (window.getComputedStyle(ele).margin !== "20px") return false;
            if (window.getComputedStyle(ele).display !== "flex") return false;
            if (window.getComputedStyle(ele).alignItems !== "center") return false;
            if (window.getComputedStyle(ele).justifyContent !== "center") return false;
            if (window.getComputedStyle(ele).fontSize !== "34px") return false;
            if (window.getComputedStyle(ele).color !== "rgb(239, 207, 207)") return false;

            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of div having class="repeating_radial_gradient"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('.repeating_radial_gradient');
            // throw window.getComputedStyle(ele).backgroundImage;
            if (window.getComputedStyle(ele).backgroundImage !== 'repeating-radial-gradient(circle at center center, rgb(79, 82, 255), rgb(155, 89, 182) 10%, rgb(155, 89, 182) 20%, rgb(79, 82, 255) 20%)') return false;
            if (window.getComputedStyle(ele).height !== "400px") return false;
            // if (window.getComputedStyle(ele).width !== "352px") return false;
            if (window.getComputedStyle(ele).margin !== "20px") return false;
            if (window.getComputedStyle(ele).display !== "flex") return false;
            if (window.getComputedStyle(ele).alignItems !== "center") return false;
            if (window.getComputedStyle(ele).justifyContent !== "center") return false;
            if (window.getComputedStyle(ele).fontSize !== "34px") return false;
            if (window.getComputedStyle(ele).color !== "rgb(239, 207, 207)") return false;

            return true;
        });
        expect(check).toBeTruthy();
    });

});