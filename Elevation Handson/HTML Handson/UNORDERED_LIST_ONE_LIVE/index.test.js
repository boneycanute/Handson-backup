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

    test('check for heading using h2 tag', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');
        const h2Exists = await page.evaluate(() => {
            const body = document.querySelector('body');
            const h2 = body.children[0];
            if (!h2) return false;
            if (h2.tagName !== 'H2' || h2.textContent !== 'Unordered List') return false;
            return true;
        });
        expect(h2Exists).toBe(true);
    });

    // type : 'disc'
    test('contains an unordered list of type "disc" with four list items', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const body = document.querySelector('body');
            const h2 = body.children[0];
            const ulDisc = h2.nextElementSibling;
            if (!ulDisc) return false;
            if (body.children[1] !== ulDisc) return false;
            if (ulDisc.tagName !== 'UL' || ulDisc.getAttribute('type') !== "disc") return false;
            if (ulDisc.children.length !== 4) return false;
            for (let i = 0; i < 4; i++) {
                if (ulDisc.children[i].tagName !== 'LI') return false;
            }
            if (ulDisc.children[0].textContent !== 'Item 1') return false;
            if (ulDisc.children[1].textContent !== 'Item 2') return false;
            if (ulDisc.children[2].textContent !== 'Item 3') return false;
            if (ulDisc.children[3].textContent !== 'Item 4') return false;

            return true;
        });

        expect(check).toBe(true);
    });

    // type : 'square'
    test('contains an unordered list of type "square" with four list items', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const body = document.querySelector('body');
            const h2 = body.children[0];
            const ulDisc = h2.nextElementSibling;
            const ulSquare = ulDisc.nextElementSibling;
            if (!ulSquare) return false;
            if (body.children[2] !== ulSquare) return false;
            if (ulSquare.tagName !== 'UL' || ulSquare.getAttribute('type') !== "square") return false;
            if (ulSquare.children.length !== 4) return false;
            for (let i = 0; i < 4; i++) {
                if (ulSquare.children[i].tagName !== 'LI') return false;
            }
            if (ulSquare.children[0].textContent !== 'Item 1') return false;
            if (ulSquare.children[1].textContent !== 'Item 2') return false;
            if (ulSquare.children[2].textContent !== 'Item 3') return false;
            if (ulSquare.children[3].textContent !== 'Item 4') return false;

            return true;
        });

        expect(check).toBe(true);
    });

    // type : 'circle'
    test('contains an unordered list of type "circle" with four list items', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const body = document.querySelector('body');
            const h2 = body.children[0];
            const ulDisc = h2.nextElementSibling;
            const ulSquare = ulDisc.nextElementSibling;
            const ulCircle = ulSquare.nextElementSibling;
            if (!ulCircle) return false;
            if (body.children[3] !== ulCircle) return false;
            if (ulCircle.tagName !== 'UL' || ulCircle.getAttribute('type') !== "circle") return false;
            if (ulCircle.children.length !== 4) return false;
            for (let i = 0; i < 4; i++) {
                if (ulCircle.children[i].tagName !== 'LI') return false;
            }
            if (ulCircle.children[0].textContent !== 'Item 1') return false;
            if (ulCircle.children[1].textContent !== 'Item 2') return false;
            if (ulCircle.children[2].textContent !== 'Item 3') return false;
            if (ulCircle.children[3].textContent !== 'Item 4') return false;
            return true;
        });

        expect(check).toBe(true);
    });

    // type : 'none'
    test('contains an unordered list of type "none" with four list items', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const body = document.querySelector('body');
            const h2 = body.children[0];
            const ulDisc = h2.nextElementSibling;
            const ulSquare = ulDisc.nextElementSibling;
            const ulCircle = ulSquare.nextElementSibling;
            const ulNone = ulCircle.nextElementSibling;
            if (!ulNone) return false;
            if (body.children[4] !== ulNone) return false;
            if (ulNone.tagName !== 'UL' || ulNone.getAttribute('type') !== "none") return false;
            if (ulNone.children.length !== 4) return false;
            for (let i = 0; i < 4; i++) {
                if (ulNone.children[i].tagName !== 'LI') return false;
            }
            if (ulNone.children[0].textContent !== 'Item 1') return false;
            if (ulNone.children[1].textContent !== 'Item 2') return false;
            if (ulNone.children[2].textContent !== 'Item 3') return false;
            if (ulNone.children[3].textContent !== 'Item 4') return false;
            return true;
        });
        expect(check).toBe(true);
    });
});