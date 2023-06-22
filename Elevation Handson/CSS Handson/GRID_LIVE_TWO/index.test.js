const puppeteer = require('puppeteer');
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

describe('CSS Grid Testing', () => {
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
            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of h1 having class="container"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('.container');
            if (window.getComputedStyle(ele).display !== "grid") return false;
            if (window.getComputedStyle(ele).gridTemplateColumns !== "185px 555px") return false;
            if (window.getComputedStyle(ele).gridTemplateRows !== "119.875px 357.812px 90px") return false;
            if (window.getComputedStyle(ele).gap !== "20px") return false;
            if (window.getComputedStyle(ele).minHeight !== "600px") return false;
            if (window.getComputedStyle(ele).padding !== "20px") return false;
            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of div having class="header"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('.header');
            if (window.getComputedStyle(ele).gridColumn !== "1 / -1") return false;
            if (window.getComputedStyle(ele).textAlign !== "center") return false;
            if (window.getComputedStyle(ele).padding !== "20px") return false;
            if (window.getComputedStyle(ele).backgroundColor !== "rgb(51, 51, 51)") return false;
            if (window.getComputedStyle(ele).color !== "rgb(255, 255, 255)") return false;
            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of div having class="sidebar"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('.sidebar');
            if (window.getComputedStyle(ele).padding !== "20px") return false;
            if (window.getComputedStyle(ele).backgroundColor !== "rgb(244, 244, 244)") return false;
            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of div having id="main-content"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('.main-content');
            if (window.getComputedStyle(ele).display !== "grid") return false;
            if (window.getComputedStyle(ele).gap !== "20px") return false;
            if (window.getComputedStyle(ele).gridTemplateColumns !== "267.5px 267.5px") return false;
            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of div having class="item"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('.item');
            if (window.getComputedStyle(ele).padding !== "20px") return false;
            if (window.getComputedStyle(ele).textAlign !== "center") return false;
            if (window.getComputedStyle(ele).fontSize !== "20px") return false;
            if (window.getComputedStyle(ele).backgroundColor !== "rgb(76, 175, 80)") return false;
            if (window.getComputedStyle(ele).color !== "rgb(255, 255, 255)") return false;

            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of div having class="item1"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('.item1');
            if (window.getComputedStyle(ele).gridColumn !== "1 / 3") return false;
            if (window.getComputedStyle(ele).backgroundColor !== "rgb(76, 175, 80)") return false;
            if (window.getComputedStyle(ele).color !== "rgb(255, 255, 255)") return false;
            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of div having class="item2"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('.item2');
            if (window.getComputedStyle(ele).backgroundColor !== "rgb(33, 150, 243)") return false;
            if (window.getComputedStyle(ele).color !== "rgb(255, 255, 255)") return false;

            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of div having class="item3"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('.item3');
            if (window.getComputedStyle(ele).backgroundColor !== "rgb(255, 152, 0)") return false;
            if (window.getComputedStyle(ele).color !== "rgb(255, 255, 255)") return false;

            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of div having class="item4"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('.item4');
            if (window.getComputedStyle(ele).backgroundColor !== "rgb(244, 67, 54)") return false;
            if (window.getComputedStyle(ele).color !== "rgb(255, 255, 255)") return false;

            return true;
        });
        expect(check).toBeTruthy();
    });

    test('checking properties of div having class="footer"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ele = document.querySelector('.footer');
            if (window.getComputedStyle(ele).backgroundColor !== "rgb(51, 51, 51)") return false;
            if (window.getComputedStyle(ele).color !== "rgb(255, 255, 255)") return false;
            if (window.getComputedStyle(ele).gridColumn !== "1 / -1") return false;
            if (window.getComputedStyle(ele).textAlign !== "center") return false;
            if (window.getComputedStyle(ele).padding !== "20px") return false;
            return true;
        });
        expect(check).toBeTruthy();
    });


});