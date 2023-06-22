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


    test('checking properties of div having class="parent"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('.parent');
            if (window.getComputedStyle(ele).position !== "relative") return false;
            if (window.getComputedStyle(ele).width !== "400px") return false;
            if (window.getComputedStyle(ele).height !== "400px") return false;
            if (window.getComputedStyle(ele).backgroundColor !== "rgb(211, 211, 211)") return false;
            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of div having class="child1"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('.child1');
            if (window.getComputedStyle(ele).position !== "relative") return false;
            if (window.getComputedStyle(ele).top !== "20px") return false;
            if (window.getComputedStyle(ele).left !== "20px") return false;
            if (window.getComputedStyle(ele).width !== "100px") return false;
            if (window.getComputedStyle(ele).height !== "100px") return false;
            // throw window.getComputedStyle(ele).backgroundColor;
            if (window.getComputedStyle(ele).backgroundColor !== "rgb(255, 0, 0)") return false;
            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of div having class="child2"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('.child2');
            if (window.getComputedStyle(ele).position !== "relative") return false;
            if (window.getComputedStyle(ele).top !== "50px") return false;
            if (window.getComputedStyle(ele).left !== "50px") return false;
            if (window.getComputedStyle(ele).width !== "100px") return false;
            if (window.getComputedStyle(ele).height !== "100px") return false;
            if (window.getComputedStyle(ele).zIndex !== 1)
            // throw window.getComputedStyle(ele).backgroundColor;
                if (window.getComputedStyle(ele).backgroundColor !== "rgb(0, 0, 255)") return false;
            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of div having class="child3"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('.child3');
            if (window.getComputedStyle(ele).position !== "relative") return false;
            if (window.getComputedStyle(ele).top !== "100px") return false;
            if (window.getComputedStyle(ele).left !== "100px") return false;
            if (window.getComputedStyle(ele).width !== "100px") return false;
            if (window.getComputedStyle(ele).height !== "100px") return false;
            // throw window.getComputedStyle(ele).backgroundColor;
            if (window.getComputedStyle(ele).backgroundColor !== "rgb(0, 128, 0)") return false;
            return true;
        });
        expect(check).toBeTruthy();
    });
});