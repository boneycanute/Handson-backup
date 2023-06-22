const puppeteer = require('puppeteer');
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

describe('CSS Units Testing', () => {
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
            if (window.getComputedStyle(ele).fontSize !== "18px") return false;
            if (window.getComputedStyle(ele).color !== "rgb(51, 51, 51)") return false;
            if (window.getComputedStyle(ele).width !== "800px") return false;
            if (window.getComputedStyle(ele).height !== "600px") return false;
            if (window.getComputedStyle(ele).backgroundColor !== "rgb(244, 244, 244)") return false;
            if (window.getComputedStyle(ele).display !== "flex") return false;
            if (window.getComputedStyle(ele).justifyContent !== "center") return false;
            if (window.getComputedStyle(ele).alignItems !== "center") return false;
            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of h1 having class="heading"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('.heading');
            if (window.getComputedStyle(ele).marginBottom !== "24px") return false;
            if (window.getComputedStyle(ele).color !== "rgb(0, 123, 255)") return false;
            if (window.getComputedStyle(ele).fontSize !== "40px") return false;
            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of div having class="container"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('.container');
            if (window.getComputedStyle(ele).textAlign !== "center") return false;
            if (window.getComputedStyle(ele).padding !== "32px") return false;
            if (window.getComputedStyle(ele).backgroundColor !== "rgb(255, 255, 255)") return false;
            if (window.getComputedStyle(ele).borderRadius !== "8px") return false;
            if (window.getComputedStyle(ele).boxShadow !== "rgba(0, 0, 0, 0.1) 0px 2px 6px 0px") return false;

            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of paragraph tag having class="text"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('.text');
            if (window.getComputedStyle(ele).fontSize !== "19.2px") return false;
            if (window.getComputedStyle(ele).lineHeight !== "28.8px") return false;
            if (window.getComputedStyle(ele).color !== "rgb(102, 102, 102)") return false;

            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of paragraph having class="highlight"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('.highlight');
            if (window.getComputedStyle(ele).fontSize !== "32px") return false;
            if (window.getComputedStyle(ele).width !== "355.938px") return false;
            if (window.getComputedStyle(ele).backgroundColor !== "rgb(255, 255, 204)") return false;
            if (window.getComputedStyle(ele).color !== "rgb(51, 51, 51)") return false;
            if (window.getComputedStyle(ele).padding !== "8px") return false;
            if (window.getComputedStyle(ele).borderRadius !== "4px") return false;
            if (window.getComputedStyle(ele).marginTop !== "32px") return false;

            return true;
        });
        expect(check).toBeTruthy();
    });

});