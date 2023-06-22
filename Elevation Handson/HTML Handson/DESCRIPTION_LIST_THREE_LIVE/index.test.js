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

    test('check for heading having h2 tag and text as "Description List"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const h2Exists = await page.evaluate(() => {
            if (Boolean(document.querySelector('h2'))) {
                const text = document.querySelector('h2').textContent;
                if (text === 'Description List') return true;
                return false;
            }
        });
        expect(h2Exists).toBe(true);
    });

    test('check for description list tag', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const body = document.querySelector('body');
            if (!body) return false;
            if (body.children.length !== 2) return false;
            const h2 = body.children[0];
            if (!h2) return false;
            if (h2.textContent !== 'Description List' || h2.tagName !== "H2") return false;
            const dl = document.querySelector('dl');
            if (!dl) return false;
            if (body.children[1] !== dl) return false;
            return true;
        });
        expect(check).toBe(true);
    });

    test('check for first dt and dd tag along with their text', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const dl = document.querySelector('dl');

            if (dl.children[0].textContent !== 'HTML') return false;
            if (dl.children[1].textContent !== 'Hypertext Markup Language, is a markup language for the web that defines the structure of web pages') return false;
            return true;
        });
        expect(check).toBe(true);
    });

    test('check for second dt and dd tag along with their text', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const dl = document.querySelector('dl');
            if (dl.children[2].textContent !== 'CSS') return false;
            if (dl.children[3].textContent !== 'CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes') return false;
            return true;
        });
        expect(check).toBe(true);
    });

    test('check for third dt and dd tag along with their text', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const dl = document.querySelector('dl');
            if (dl.children[4].textContent !== 'Javascript') return false;
            if (dl.children[5].textContent !== 'JavaScript is a high-level, dynamic, interpreted programming language that is commonly used for creating interactive client-side and server-side web applications') return false;
            return true;
        });
        expect(check).toBe(true);
    });

    test('check for fourth dt and dd tag along with their text', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const dl = document.querySelector('dl');
            if (dl.children[6].textContent !== 'Nodejs') return false;
            if (dl.children[7].textContent !== "Nodejs is a cross-platform, open-source, server-side runtime environment built on Chrome's V8 JavaScript engine") return false;
            return true;
        });
        expect(check).toBe(true);
    });

    test('check for overall structure as given in instructions', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const body = document.querySelector('body');
            if (!body) return false;
            if (body.children.length !== 2) return false;
            const h2 = body.children[0];
            if (!h2) return false;
            if (h2.textContent !== 'Description List' || h2.tagName !== "H2") return false;
            const dl = document.querySelector('dl');
            if (!dl) return false;
            if (body.children[1] !== dl) return false;
            if (dl.children.length !== 8) return false;
            for (let i = 0; i < dl.children.length; i++) {
                if (i % 2 == 0) {
                    if (dl.children[i].tagName !== 'DT') return false;
                } else {
                    if (dl.children[i].tagName !== 'DD') return false;
                }
            }
            if (dl.children[0].textContent !== 'HTML') return false;
            if (dl.children[1].textContent !== 'Hypertext Markup Language, is a markup language for the web that defines the structure of web pages') return false;
            if (dl.children[2].textContent !== 'CSS') return false;
            if (dl.children[3].textContent !== 'CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes') return false;
            if (dl.children[4].textContent !== 'Javascript') return false;
            if (dl.children[5].textContent !== 'JavaScript is a high-level, dynamic, interpreted programming language that is commonly used for creating interactive client-side and server-side web applications') return false;
            if (dl.children[6].textContent !== 'Nodejs') return false;
            if (dl.children[7].textContent !== "Nodejs is a cross-platform, open-source, server-side runtime environment built on Chrome's V8 JavaScript engine") return false;
            return true;
        });
        expect(check).toBe(true);
    });
});