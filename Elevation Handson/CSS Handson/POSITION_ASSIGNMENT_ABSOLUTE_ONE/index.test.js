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
            if (window.getComputedStyle(ele).fontFamily !== "monospace") return false;
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

    test('checking properties of div having class="mainDiv"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('.mainDiv');
            if (window.getComputedStyle(ele).display !== "flex") return false;
            if (window.getComputedStyle(ele).gap !== "30px") return false;
            if (window.getComputedStyle(ele).justifyContent !== "space-evenly") return false;
            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of div having class="normal1"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('.normal1');
            if (window.getComputedStyle(ele).position !== "relative") return false;
            if (window.getComputedStyle(ele).width !== "300px") return false;
            if (window.getComputedStyle(ele).height !== "300px") return false;
            if (window.getComputedStyle(ele).padding !== "20px") return false;
            if (window.getComputedStyle(ele).backgroundColor !== "rgb(173, 216, 230)") return false;
            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of div having class="relative"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('.relative');
            if (window.getComputedStyle(ele).position !== "relative") return false;
            if (window.getComputedStyle(ele).top !== "150px") return false;
            if (window.getComputedStyle(ele).left !== "150px") return false;
            if (window.getComputedStyle(ele).width !== "200px") return false;
            if (window.getComputedStyle(ele).height !== "200px") return false;
            if (window.getComputedStyle(ele).padding !== "20px") return false;
            if (window.getComputedStyle(ele).backgroundColor !== "rgb(144, 238, 144)") return false;
            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of div having class="absolute"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('.absolute');
            if (window.getComputedStyle(ele).position !== "absolute") return false;
            if (window.getComputedStyle(ele).top !== "150px") return false;
            if (window.getComputedStyle(ele).left !== "150px") return false;
            if (window.getComputedStyle(ele).width !== "200px") return false;
            if (window.getComputedStyle(ele).height !== "200px") return false;
            if (window.getComputedStyle(ele).padding !== "20px") return false;
            if (window.getComputedStyle(ele).backgroundColor !== "rgb(144, 238, 144)") return false;
            return true;
        });
        expect(check).toBeTruthy();
    });
});