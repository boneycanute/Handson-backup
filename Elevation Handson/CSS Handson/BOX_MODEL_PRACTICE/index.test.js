const puppeteer = require('puppeteer');
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

describe('CSS Box Model Testing', () => {
    let browser;
    let page;

    beforeAll(async() => {
        browser = await puppeteer.launch({ args: ["--no-sandbox"], headless: true });
    });
    //
    afterAll(async() => {
        await browser.close();
    });

    beforeEach(async() => {
        page = await browser.newPage();
    });

    afterEach(async() => {
        await page.close();
    });

    test('check the properties of body element', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const style = await page.evaluate(() => {
            const ele = document.querySelector('body');
            if (window.getComputedStyle(ele).fontFamily !== "Arial") return false;
            if (window.getComputedStyle(ele).margin !== "0px") return false;
            if (window.getComputedStyle(ele).padding !== "20px") return false;
            if (window.getComputedStyle(ele).backgroundColor !== "rgb(242, 242, 242)") return false;
            return true;
        });
        expect(style).toBe(true);
    });

    test('check the properties of element with class="container"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const style = await page.evaluate(() => {
            const ele = document.querySelector('.container');
            if (window.getComputedStyle(ele).border !== "2px solid rgb(221, 221, 221)") return false;
            if (window.getComputedStyle(ele).width !== "800px") return false;
            if (window.getComputedStyle(ele).margin !== "0px 250px") return false;
            if (window.getComputedStyle(ele).padding !== "40px") return false;
            if (window.getComputedStyle(ele).borderRadius !== "10px") return false;
            if (window.getComputedStyle(ele).boxShadow !== "rgba(0, 0, 0, 0.2) 0px 0px 10px 0px") return false;
            if (window.getComputedStyle(ele).backgroundColor !== "rgb(255, 255, 255)") return false;
            return true;
        });
        expect(style).toBe(true);
    });

    test('check the properties of element with class="header"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const style = await page.evaluate(() => {
            const ele = document.querySelector('.header');
            if (window.getComputedStyle(ele).textAlign !== "center") return false;
            if (window.getComputedStyle(ele).padding !== "20px") return false;
            if (window.getComputedStyle(ele).borderRadius !== "8px") return false;
            if (window.getComputedStyle(ele).color !== "rgb(255, 255, 255)") return false;
            if (window.getComputedStyle(ele).backgroundColor !== "rgb(52, 89, 149)") return false;
            return true;
        });
        expect(style).toBe(true);
    });

    test('check the properties of element with class="content"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const style = await page.evaluate(() => {
            const ele = document.querySelector('.content');
            if (window.getComputedStyle(ele).border !== "1px solid rgb(221, 221, 221)") return false;
            if (window.getComputedStyle(ele).marginTop !== "30px") return false;
            if (window.getComputedStyle(ele).padding !== "20px") return false;
            if (window.getComputedStyle(ele).borderRadius !== "5px") return false;
            if (window.getComputedStyle(ele).backgroundColor !== "rgb(255, 255, 255)") return false;
            return true;
        });
        expect(style).toBe(true);
    });

    test('check the properties of element with class="sidebar"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const style = await page.evaluate(() => {
            const ele = document.querySelector('.sidebar');
            if (window.getComputedStyle(ele).border !== "1px solid rgb(221, 221, 221)") return false;
            if (window.getComputedStyle(ele).borderRadius !== "5px") return false;
            if (window.getComputedStyle(ele).width !== "200px") return false;
            if (window.getComputedStyle(ele).padding !== "20px") return false;
            if (window.getComputedStyle(ele).color !== "rgb(255, 255, 255)") return false;
            if (window.getComputedStyle(ele).backgroundColor !== "rgb(246, 179, 82)") return false;
            return true;
        });
        expect(style).toBe(true);
    });

    test('check the properties of element with class="footer"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const style = await page.evaluate(() => {
            const ele = document.querySelector('.footer');
            if (window.getComputedStyle(ele).marginTop !== "30px") return false;
            if (window.getComputedStyle(ele).padding !== "10px") return false;
            if (window.getComputedStyle(ele).color !== "rgb(255, 255, 255)") return false;
            if (window.getComputedStyle(ele).textAlign !== "center") return false;
            if (window.getComputedStyle(ele).borderRadius !== "8px") return false;
            if (window.getComputedStyle(ele).backgroundColor !== "rgb(52, 89, 149)") return false;
            return true;
        });
        expect(style).toBe(true);
    });

});