const puppeteer = require('puppeteer');
const path = require('path');
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

describe('Html Self Closing Tags Testing', () => {
    let browser;
    let page;

    beforeAll(async () => {
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

    test('check that body contains only five children', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const imgExists = await page.evaluate(() => {
            const body = document.querySelector('body');
            if (body.children.length !== 5) return false;
            return true;
        });
        expect(imgExists).toBe(true);
    });

    test('contains an img tag with src, alt, width and height as given in instructions', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const imgExists = await page.evaluate(() => {
            const body = document.querySelector('body');
            const firstImg = document.querySelector("img[src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/navbar/logoPrepBytes.svg']")
            if (!firstImg) return false;
            if (body.children[0] !== firstImg) return false;
            if (firstImg.getAttribute('width') !== '300px' || firstImg.getAttribute('height') !== '150px' || firstImg.getAttribute('alt') !== 'prepbytes-logo') return false;
            return true;
        });
        expect(imgExists).toBe(true);
    });

    test('contains an "hr" tag after image', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const body = document.querySelector('body');
            const firstImg = document.querySelector("img[src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/navbar/logoPrepBytes.svg']")
            const hr = firstImg.nextElementSibling;
            if (body.children[1] !== hr) return false;
            if (hr.tagName !== 'HR') return false;
            return true;
        });
        expect(check).toBe(true);
    });

    test('contains an "h1" tag after hr having text as given in instructions', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const body = document.querySelector('body');
            const firstImg = document.querySelector("img[src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/navbar/logoPrepBytes.svg']")
            const hr = firstImg.nextElementSibling;
            const firstH1 = hr.nextElementSibling;
            if (body.children[2] !== firstH1) return false;
            if (firstH1.tagName !== 'H1' || firstH1.textContent !== 'Lorem ipsum dolor sit amet') return false;
            return true;
        });
        expect(check).toBe(true);
    });

    test('contains br tag after h1', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const body = document.querySelector('body');
            const firstImg = document.querySelector("img[src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/navbar/logoPrepBytes.svg']")
            const hr = firstImg.nextElementSibling;
            const firstH1 = hr.nextElementSibling;
            if (body.children[2] !== firstH1) return false;
            if (firstH1.tagName !== 'H1' || firstH1.textContent !== 'Lorem ipsum dolor sit amet') return false;
            const br = firstH1.nextElementSibling;
            if (!br) return false;
            if (br.tagName !== "BR") return false;

            return true;
        });
        expect(check).toBe(true);
    });

    test('contains another h1 tag after br having text as given in instructions', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const body = document.querySelector('body');
            const firstImg = document.querySelector("img[src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/navbar/logoPrepBytes.svg']")
            const hr = firstImg.nextElementSibling;
            const firstH1 = hr.nextElementSibling;
            if (body.children[2] !== firstH1) return false;
            if (firstH1.tagName !== 'H1' || firstH1.textContent !== 'Lorem ipsum dolor sit amet') return false;
            const br = firstH1.nextElementSibling;
            if (!br) return false;
            if (br.tagName !== "BR") return false;
            const secondH1 = br.nextElementSibling;
            if (!secondH1) return false;
            if (secondH1.tagName !== 'H1' || secondH1.textContent !== 'Lorem ipsum dolor sit amet') return false;
            return true;
        });
        expect(check).toBe(true);
    });
});