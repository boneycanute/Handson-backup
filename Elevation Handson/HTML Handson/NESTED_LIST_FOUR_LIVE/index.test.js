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

    test('check for a heading using h2 tag having text as "Nested List"', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const h2Exists = await page.evaluate(() => {
            if (Boolean(document.querySelector('h2'))) {
                const text = document.querySelector('h2').textContent;
                if (text === 'Nested List') return true;
                return false;
            }
        });
        expect(h2Exists).toBe(true);
    });

    test('check for an unordered list of type square', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {

            const body = document.querySelector('body');
            if (!body) return false;
            if (body.children.length > 2) return false;

            const ulSquare = document.querySelector('ul[type="square"]');
            if (!ulSquare) return false;
            if (body.children[1] !== ulSquare) return false;

            return true;
        });
        expect(check).toBe(true);

    });

    test('check for a list using "li" tag having text "Frontend" as first child of above unordered list', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const ulSquare = document.querySelector('ul[type="square"]');
            const li = document.querySelector('li')
            if (ulSquare.children[0] != li) return false;
            if (li.textContent != 'Frontend') return false;
            return true;
        });
        expect(check).toBe(true);

    });

    test('check for ordered list of type "A" having four child lists as given in instructions', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {

            const ulSquare = document.querySelector('ul[type="square"]');

            const olA = document.querySelector('ol[type="A"]');
            if (!olA) return false;
            if (ulSquare.children[1] !== olA) return false;
            if (olA.children.length !== 4) return false;
            const li2 = document.querySelectorAll('ol[type="A"] li');
            // check childrens of olA
            if (olA.children.length !== li2.length) {
                return false;
            }
            for (var i = 0; i < olA.children.length; i++) {
                if (li2[i].tagName !== "LI") return false;
            }
            if (olA.children[0].textContent !== 'HTML') return false;
            if (olA.children[1].textContent !== 'CSS') return false;
            if (olA.children[2].textContent !== 'Javascript') return false;
            if (olA.children[3].textContent !== 'React') return false;

            return true;
        });
        expect(check).toBe(true);

    });

    test('check for a list having "li" tag and text as "Backend"', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {

            const ulSquare = document.querySelector('ul[type="square"]');
            const li3 = document.querySelector('ol[type="A"]+li')
            if (!li3) return false;
            if (ulSquare.children[2] !== li3) return false;
            if (li3.textContent !== 'Backend') return false;

            return true;
        });
        expect(check).toBe(true);

    });

    test('check for unordered list of type "disc" having two children lists as given in instructions', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {

            const ulSquare = document.querySelector('ul[type="square"]');

            const ulDisc = document.querySelector('ul[type="disc"]');
            if (!ulDisc) return false;
            if (ulSquare.children[3] !== ulDisc) return false;
            if (ulDisc.children.length !== 2) return false;
            const li4 = document.querySelectorAll('ul[type="disc"] li');
            // check childrens of ulDisc
            if (ulDisc.children.length !== li4.length) {
                return false;
            }
            for (var i = 0; i < ulDisc.children.length; i++) {
                if (li4[i].tagName !== "LI") return false;
            }
            if (ulDisc.children[0].textContent !== 'Nodejs') return false;
            if (ulDisc.children[1].textContent !== 'Expressjs') return false;

            return true;
        });
        expect(check).toBe(true);
    });

    test('check for list having text as "Database"', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {

            const ulSquare = document.querySelector('ul[type="square"]');

            // database line
            const li5 = document.querySelector('ul[type="disc"]+li')
            if (!li5) return false;
            if (ulSquare.children[4] !== li5) return false;
            if (li5.textContent !== 'Database') return false;

            return true;
        });
        expect(check).toBe(true);

    });

    test('check for ordered list of type="i" having three children lists as given in instructions', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {

            const ulSquare = document.querySelector('ul[type="square"]');

            // oli
            const oli = document.querySelector('ol[type="i"]');
            if (!oli) return false;
            if (ulSquare.children[5] !== oli) return false;
            if (oli.children.length !== 3) return false;
            const li6 = document.querySelectorAll('ol[type="i"] li');
            // check childrens of olA
            if (oli.children.length !== li6.length) {
                return false;
            }
            for (var i = 0; i < oli.children.length; i++) {
                if (li6[i].tagName !== "LI") return false;
            }
            if (oli.children[0].textContent !== 'Mongodb') return false;
            if (oli.children[1].textContent !== 'Postgresql') return false;
            if (oli.children[2].textContent !== 'Sql') return false;

            return true;
        });
        expect(check).toBe(true);

    });

});