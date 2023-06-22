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


    test('check for heading using h2 tag having content as "Ordered List"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const h2Exists = await page.evaluate(() => {
            const body = document.querySelector('body');
            const h2 = body.children[0];
            if (!h2) return false;
            if (h2.tagName !== 'H2' || h2.textContent !== "Ordered List") return false;
            return true;
        });
        expect(h2Exists).toBe(true);
    });

    test('check for an ordered list of type "1" and set start attribute to "10" and add 4 list items in it as per instructions', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        // Test that the script sets the innerHTML of the #app element to "Hello, World!"
        const check = await page.evaluate(() => {
            const body = document.querySelector('body');
            const h2 = body.children[0];
            const ol1 = h2.nextElementSibling;
            if (!ol1) return false;
            if (body.children[1] !== ol1) return false;
            if (ol1.getAttribute('type') !== '1' || ol1.getAttribute('start') !== '10' || ol1.tagName !== 'OL') return false;
            if (ol1.children.length !== 4) return false;
            for (let i = 0; i < 4; i++) {
                if (ol1.children[i].tagName !== 'LI') return false;
            }
            if (ol1.children[0].textContent !== 'Item 1') return false;
            if (ol1.children[1].textContent !== 'Item 2') return false;
            if (ol1.children[2].textContent !== 'Item 3') return false;
            if (ol1.children[3].textContent !== 'Item 4') return false;

            return true;
        });
        expect(check).toBe(true);
    });

    // type : 'A'
    test('check for an ordered list of type "A" and add 4 list items in it as per instructions', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const body = document.querySelector('body');
            const h2 = body.children[0];
            const ol1 = h2.nextElementSibling;
            const olA = ol1.nextElementSibling;
            if (!olA) return false;
            if (body.children[2] !== olA) return false;
            if (olA.getAttribute('type') !== 'A' || olA.tagName !== 'OL') return false;
            if (olA.children.length !== 4) return false;
            for (let i = 0; i < 4; i++) {
                if (olA.children[i].tagName !== 'LI') return false;
            }
            if (olA.children[0].textContent !== 'Item 1') return false;
            if (olA.children[1].textContent !== 'Item 2') return false;
            if (olA.children[2].textContent !== 'Item 3') return false;
            if (olA.children[3].textContent !== 'Item 4') return false;

            return true;
        });
        expect(check).toBe(true);
    });

    // type : 'a'
    test('check for an ordered list of type "a" and add 4 list items in it as per instructions', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const body = document.querySelector('body');
            const h2 = body.children[0];
            const ol1 = h2.nextElementSibling;
            const olA = ol1.nextElementSibling;
            const ola = olA.nextElementSibling;
            if (!ola) return false;
            if (body.children[3] !== ola) return false;
            if (ola.getAttribute('type') !== 'a' || ola.tagName !== 'OL' || !ola.hasAttribute('reversed')) return false;
            if (ola.children.length !== 4) return false;
            for (let i = 0; i < 4; i++) {
                if (ola.children[i].tagName !== 'LI') return false;
            }
            if (ola.children[0].textContent !== 'Item 1') return false;
            if (ola.children[1].textContent !== 'Item 2') return false;
            if (ola.children[2].textContent !== 'Item 3') return false;
            if (ola.children[3].textContent !== 'Item 4') return false;

            return true;
        });
        expect(check).toBe(true);
    });

    // type : 'I'
    test('check for an ordered list of type "I" and add 4 list items in it as per instructions', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const body = document.querySelector('body');
            const h2 = body.children[0];
            const ol1 = h2.nextElementSibling;
            const olA = ol1.nextElementSibling;
            const ola = olA.nextElementSibling;
            const olI = ola.nextElementSibling;
            if (!olI) return false;
            if (body.children[4] !== olI) return false;
            if (olI.getAttribute('type') !== 'I' || ola.tagName !== 'OL') return false;
            if (olI.children.length !== 4) return false;
            for (let i = 0; i < 4; i++) {
                if (olI.children[i].tagName !== 'LI') return false;
            }
            if (olI.children[0].textContent !== 'Item 1') return false;
            if (olI.children[1].textContent !== 'Item 2') return false;
            if (olI.children[2].textContent !== 'Item 3') return false;
            if (olI.children[3].textContent !== 'Item 4') return false;

            return true;
        });
        expect(check).toBe(true);
    });

    // type : 'i'
    test('check for an ordered list of type "i" and add 4 list items in it as per instructions', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const body = document.querySelector('body');
            const h2 = body.children[0];
            const ol1 = h2.nextElementSibling;
            const olA = ol1.nextElementSibling;
            const ola = olA.nextElementSibling;
            const olI = ola.nextElementSibling;
            const oli = olI.nextElementSibling;
            if (!oli) return false;
            if (body.children[5] !== oli) return false;
            if (oli.getAttribute('type') !== 'i' || oli.tagName !== 'OL') return false;
            if (oli.children.length !== 4) return false;
            for (let i = 0; i < 4; i++) {
                if (oli.children[i].tagName !== 'LI') return false;
            }
            if (oli.children[0].textContent !== 'Item 1') return false;
            if (oli.children[1].textContent !== 'Item 2') return false;
            if (oli.children[2].textContent !== 'Item 3') return false;
            if (oli.children[3].textContent !== 'Item 4') return false;

            return true;
        });
        expect(check).toBe(true);
    });
});