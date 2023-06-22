const puppeteer = require('puppeteer');
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

    test('checking properties of div having class="linear_gradient"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('.linear_gradient');
            if (window.getComputedStyle(ele).backgroundImage !== 'linear-gradient(90deg, rgb(79, 82, 255), rgb(155, 89, 182))') return false;
            if (window.getComputedStyle(ele).height !== "200px") return false;
            if (window.getComputedStyle(ele).margin !== "20px") return false;
            if (window.getComputedStyle(ele).display !== "flex") return false;
            if (window.getComputedStyle(ele).alignItems != "center") return false;
            if (window.getComputedStyle(ele).justifyContent != "center") return false;
            if (window.getComputedStyle(ele).fontSize != "30px") return false;

            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of div having class="repeating_linear_gradient"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('.repeating_linear_gradient');
            // throw window.getComputedStyle(ele).backgroundImage;
            if (window.getComputedStyle(ele).backgroundImage !== 'repeating-linear-gradient(to right, rgb(111, 220, 247), rgb(118, 111, 247) 20px, rgb(246, 141, 141) 20px, rgb(241, 139, 139) 40px)') return false;
            if (window.getComputedStyle(ele).height !== "200px") return false;
            if (window.getComputedStyle(ele).margin !== "20px") return false;
            if (window.getComputedStyle(ele).display !== "flex") return false;
            if (window.getComputedStyle(ele).alignItems != "center") return false;
            if (window.getComputedStyle(ele).justifyContent != "center") return false;
            if (window.getComputedStyle(ele).fontSize != "30px") return false;

            return true;
        });
        expect(check).toBeTruthy();
    });
});