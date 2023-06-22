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
            if (window.getComputedStyle(ele).padding !== "16px") return false;
            if (window.getComputedStyle(ele).lineHeight !== "25.6px") return false;
            if (window.getComputedStyle(ele).backgroundColor !== "rgb(245, 245, 245)") return false;
            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of h1 having class="heading"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('.heading');
            if (window.getComputedStyle(ele).marginBottom !== "16px") return false;
            if (window.getComputedStyle(ele).color !== "rgb(51, 51, 51)") return false;
            if (window.getComputedStyle(ele).textAlign !== "center") return false;
            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of paragraph tag having class="text"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');
        const check = await page.evaluate(() => {
            const ele = document.querySelector('.text');
            if (window.getComputedStyle(ele).marginBottom !== "24px") return false;
            if (window.getComputedStyle(ele).backgroundColor !== "rgb(255, 255, 255)") return false;
            if (window.getComputedStyle(ele).color !== "rgb(85, 85, 85)") return false;
            if (window.getComputedStyle(ele).padding !== "16px") return false;
            if (window.getComputedStyle(ele).borderRadius !== "5px") return false;
            if (window.getComputedStyle(ele).boxShadow !== "rgba(0, 0, 0, 0.1) 0px 2px 4px 0px") return false;
            if (window.getComputedStyle(ele).backgroundImage !== "linear-gradient(rgb(248, 248, 248), rgb(234, 234, 234))") return false;
            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of paragraph having class="highlight"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('.highlight');
            if (window.getComputedStyle(ele).backgroundColor !== "rgb(248, 248, 248)") return false;
            if (window.getComputedStyle(ele).padding !== "16px") return false;
            if (window.getComputedStyle(ele).borderRadius !== "5px") return false;
            if (window.getComputedStyle(ele).boxShadow !== "rgba(0, 0, 0, 0.1) 0px 2px 4px 0px") return false;
            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of paragraph having class="quote"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('.quote');
            if (window.getComputedStyle(ele).fontStyle !== "italic") return false;
            if (window.getComputedStyle(ele).backgroundColor !== "rgb(255, 255, 255)") return false;
            if (window.getComputedStyle(ele).color !== "rgb(136, 136, 136)") return false;
            if (window.getComputedStyle(ele).padding !== "16px") return false;
            if (window.getComputedStyle(ele).borderRadius !== "5px") return false;
            if (window.getComputedStyle(ele).boxShadow !== "rgba(0, 0, 0, 0.1) 0px 2px 4px 0px") return false;
            if (window.getComputedStyle(ele).backgroundImage !== "linear-gradient(rgb(248, 248, 248), rgb(234, 234, 234))") return false;
            return true;
        });
        expect(check).toBeTruthy();
    });
});