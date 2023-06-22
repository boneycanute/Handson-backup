const puppeteer = require('puppeteer');
const path = require('path');
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

describe('Html List Testing', () => {
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

    test('Title of the Webpage', async() => {
        // Navigate to the HTML file
        await page.goto('file://'+__dirname+ '/source/index.html');

        const check = await page.evaluate(() => {
            const head = document.querySelector('head')
            for (let i = 0; i < head.children.length; i++) {
                if (head.children[i].tagName === 'TITLE') {
                    if (head.children[i].textContent !== 'Elevation Academy') return false;
                }
            }
            return true;
        });
        expect(check).toBe(true);
    });

    test('Body contains seven children', async() => {
        // Navigate to the HTML file
        await page.goto('file://'+__dirname+ '/source/index.html');

        const check = await page.evaluate(() => {
            const body = document.querySelector('body');
            if (body.children.length !== 7) return false;
            return true;
        });
        expect(check).toBe(true);
    });

    test('Text content of h1 and it should be the first child of body', async() => {

        await page.goto('file://'+__dirname+ '/source/index.html');

        const check = await page.evaluate(() => {
            const body = document.querySelector('body');
            const h1 = body.children[0];
            if (h1.tagName !== 'H1' || h1.textContent !== 'Heading 1') return false;
            return true;
        });
        expect(check).toBe(true);
    });

    test('Text content of h2, h1 tag should be followed by h2 tag', async() => {

        await page.goto('file://'+__dirname+ '/source/index.html');

        const check = await page.evaluate(() => {
            const body = document.querySelector('body');
            const h1 = body.children[0];
            const h2 = h1.nextElementSibling;
            if (!h2) return false;
            if (body.children[1] !== h2) return false;
            if (h2.tagName !== 'H2' || h2.textContent !== 'Heading 2') return false;
            return true;
        });
        expect(check).toBe(true);
    });

    test('Text content of h3, h2 tag should be followed by h3 tag', async() => {

        await page.goto('file://'+__dirname+ '/source/index.html');

        const check = await page.evaluate(() => {
            const body = document.querySelector('body');
            const h1 = body.children[0];
            const h2 = h1.nextElementSibling;
            const h3 = h2.nextElementSibling;
            if (!h3) return false;
            if (body.children[2] !== h3) return false;
            if (h3.tagName !== 'H3' || h3.textContent !== 'Heading 3') return false;
            return true;
        });
        expect(check).toBe(true);
    });

    test('Text content of h4, h3 tag should be followed by h4 tag', async() => {

        await page.goto('file://'+__dirname+ '/source/index.html');

        const check = await page.evaluate(() => {
            const body = document.querySelector('body');
            const h1 = body.children[0];
            const h2 = h1.nextElementSibling;
            const h3 = h2.nextElementSibling;
            const h4 = h3.nextElementSibling;
            if (!h4) return false;
            if (body.children[3] !== h4) return false;
            if (h4.tagName !== 'H4' || h4.textContent !== 'Heading 4') return false;
            return true;
        });
        expect(check).toBe(true);
    });

    test('Text content of h5, h4 tag should be followed by h5 tag', async() => {

        await page.goto('file://'+__dirname+ '/source/index.html');

        const check = await page.evaluate(() => {
            const body = document.querySelector('body');
            const h1 = body.children[0];
            const h2 = h1.nextElementSibling;
            const h3 = h2.nextElementSibling;
            const h4 = h3.nextElementSibling;
            const h5 = h4.nextElementSibling;
            if (!h5) return false;
            if (body.children[4] !== h5) return false;
            if (h5.tagName !== 'H5' || h5.textContent !== 'Heading 5') return false;
            return true;
        });
        expect(check).toBe(true);
    });

    test('Text content of h6, h5 tag should be followed by h6 tag', async() => {

        await page.goto('file://'+__dirname+ '/source/index.html');

        const check = await page.evaluate(() => {
            const body = document.querySelector('body');
            const h1 = body.children[0];
            const h2 = h1.nextElementSibling;
            const h3 = h2.nextElementSibling;
            const h4 = h3.nextElementSibling;
            const h5 = h4.nextElementSibling;
            const h6 = h5.nextElementSibling;
            if (!h6) return false;
            if (body.children[5] !== h6) return false;
            if (h6.tagName !== 'H6' || h6.textContent !== 'Heading 6') return false;
            return true;
        });
        expect(check).toBe(true);
    });

    test('Text content of paragraph tag, h6 tag should be followed by p tag', async() => {

        await page.goto('file://'+__dirname+ '/source/index.html');

        const check = await page.evaluate(() => {
            const body = document.querySelector('body');
            const h1 = body.children[0];
            const h2 = h1.nextElementSibling;
            const h3 = h2.nextElementSibling;
            const h4 = h3.nextElementSibling;
            const h5 = h4.nextElementSibling;
            const h6 = h5.nextElementSibling;
            const p = h6.nextElementSibling;
            if (!p) return false;
            if (body.children[6] !== p) return false;
            if (p.tagName !== 'P' || p.textContent !== 'Lorem ipsum dolor sit amet') return false;
            return true;
        });
        expect(check).toBe(true);
    });


});