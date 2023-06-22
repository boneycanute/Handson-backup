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

    test('check for an ordered list of type="I" having five children as given in instructions', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {

            const body = document.querySelector('body');
            if (!body) return false;
            if (body.children.length !== 5) return false;

            // checking section 1
            const olI = document.querySelector('ol[type="I"]');
            if (!olI) return false;
            if (body.children[0] !== olI) return false;

            // check childrens of olI
            if (olI.children.length !== 5) return false;
            const li1 = document.querySelectorAll('ol[type="I"] li');
            if (olI.children.length !== li1.length) {
                return false;
            }
            for (var i = 0; i < olI.children.length; i++) {
                if (li1[i].tagName !== "LI") return false;
            }
            if (olI.children[0].textContent !== 'ol item1') return false;
            if (olI.children[1].textContent !== 'ol item2') return false;
            if (olI.children[2].textContent !== 'ol item3') return false;
            if (olI.children[3].textContent !== 'ol item4') return false;
            if (olI.children[4].textContent !== 'ol item5') return false;

            return true;
        });
        expect(check).toBe(true);

    });

    test('check for an unordered list of type="disc" having five children list as given in instructions', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {

            const body = document.querySelector('body');

            // checking section 2
            const ulDisc = document.querySelector('ul[type="disc"]');
            if (!ulDisc) return false;
            if (body.children[1] !== ulDisc) return false;

            // check childrens of ulDisc
            if (ulDisc.children.length !== 5) return false;
            const li2 = document.querySelectorAll('ul[type="disc"] li');
            if (ulDisc.children.length !== li2.length) {
                return false;
            }
            for (var i = 0; i < ulDisc.children.length; i++) {
                if (li2[i].tagName !== "LI") return false;
            }
            if (ulDisc.children[0].textContent !== 'ul item1') return false;
            if (ulDisc.children[1].textContent !== 'ul item2') return false;
            if (ulDisc.children[2].textContent !== 'ul item3') return false;
            if (ulDisc.children[3].textContent !== 'ul item4') return false;
            if (ulDisc.children[4].textContent !== 'ul item5') return false;
            return true;
        });
        expect(check).toBe(true);

    });

    test('check for description list using tag "dl" and having four pairs of dt and dd as given in instructions', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {

            const ulDisc = document.querySelector('ul[type="disc"]');

            // checking section 3
            const dl1 = ulDisc.nextElementSibling;
            if (dl1.tagName !== "DL") return false;
            if (dl1.children.length !== 8) return false;
            for (let i = 0; i < dl1.children.length; i++) {
                if (i % 2 === 0) {
                    if (dl1.children[i].tagName !== 'DT') return false;
                } else {
                    if (dl1.children[i].tagName !== 'DD') return false;
                }
            }
            if (dl1.children[0].textContent !== 'Data Term') return false;
            if (dl1.children[1].textContent !== 'Data Definition') return false;
            if (dl1.children[2].textContent !== 'Java') return false;
            if (dl1.children[3].textContent !== 'is a programming language and platform') return false;
            if (dl1.children[4].textContent !== 'Javascript') return false;
            if (dl1.children[5].textContent !== 'is a scripting language') return false;
            if (dl1.children[6].textContent !== 'SQL') return false;
            if (dl1.children[7].textContent !== 'is a query language') return false;

            return true;
        });
        expect(check).toBe(true);

    });

    test('check for ordered list of type="A" having "reversed" attribute as given in instructions', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {

            const body = document.querySelector('body');

            // checking section 4
            const ulA = document.querySelector('ol[type="A"],ol[reversed]');
            if (!ulA) return false;
            if (body.children[3] !== ulA) return false;

            // check children of ulA
            if (ulA.children.length !== 5) return false;
            const li3 = document.querySelectorAll('ol[reversed] li');
            if (ulA.children.length !== li3.length) {
                return false;
            }
            for (var i = 0; i < ulA.children.length; i++) {
                if (li3[i].tagName !== "LI") return false;
            }
            if (ulA.children[0].textContent !== 'reversed ol item1') return false;
            if (ulA.children[1].textContent !== 'reversed ol item2') return false;
            if (ulA.children[2].textContent !== 'reversed ol item3') return false;
            if (ulA.children[3].textContent !== 'reversed ol item4') return false;
            if (ulA.children[4].textContent !== 'reversed ol item5') return false;
            return true;
        });
        expect(check).toBe(true);

    });


    test('check for ordered list of type="1" having two lists as ordered list of type="A" and another is description list', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {

            const ulA = document.querySelector('ol[type="A"],ol[reversed]');

            // checking section 5
            const ol1 = ulA.nextElementSibling;
            if (!ol1) return false;
            if (ol1.tagName !== 'OL' || ol1.getAttribute("type") !== '1') return false;
            if (ol1.children.length !== 2) return false;
            const li4 = ol1.children[0],
                li5 = ol1.children[1];
            if (!li4 || !li5) return false;
            if (li4.tagName !== "LI" || li5.tagName !== 'LI') return false;
            const child1 = li4.children[0],
                child2 = li5.children[0];
            if (child1.getAttribute('type') !== 'A' || child1.tagName !== 'OL') return false;
            if (child2.tagName !== "DL") return false;
            if (child1.children.length !== 3) return false;
            for (let i = 0; i < 3; i++) {
                if (child1.children[i].tagName !== "LI") return false;
            }
            if (child1.children[0].textContent !== 'item1') return false;
            if (child1.children[1].textContent !== 'item2') return false;
            if (child1.children[2].textContent !== 'item3') return false;

            if (child2.children.length !== 4) return false;
            for (let i = 0; i < 4; i++) {

                if (i % 2 == 0) {
                    if (child2.children[i].tagName !== 'DT') return false;
                } else {
                    if (child2.children[i].tagName !== 'DD') return false;
                }
            }
            if (child2.children[0].textContent !== 'title1') return false;
            if (child2.children[1].textContent !== 'definition1') return false;
            if (child2.children[2].textContent !== 'title2') return false;
            if (child2.children[3].textContent !== 'definition2') return false;
            return true;
        });
        expect(check).toBe(true);

    });


    test('check for complete given structure as per instructions', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {

            const body = document.querySelector('body');
            if (!body) return false;
            if (body.children.length !== 5) return false;

            // checking section 1
            const olI = document.querySelector('ol[type="I"]');
            if (!olI) return false;
            if (body.children[0] !== olI) return false;

            // check childrens of olI
            if (olI.children.length !== 5) return false;
            const li1 = document.querySelectorAll('ol[type="I"] li');
            if (olI.children.length !== li1.length) {
                return false;
            }
            for (var i = 0; i < olI.children.length; i++) {
                if (li1[i].tagName !== "LI") return false;
            }
            if (olI.children[0].textContent !== 'ol item1') return false;
            if (olI.children[1].textContent !== 'ol item2') return false;
            if (olI.children[2].textContent !== 'ol item3') return false;
            if (olI.children[3].textContent !== 'ol item4') return false;
            if (olI.children[4].textContent !== 'ol item5') return false;

            // checking section 2
            const ulDisc = document.querySelector('ul[type="disc"]');
            if (!ulDisc) return false;
            if (body.children[1] !== ulDisc) return false;

            // check childrens of ulDisc
            if (ulDisc.children.length !== 5) return false;
            const li2 = document.querySelectorAll('ul[type="disc"] li');
            if (ulDisc.children.length !== li2.length) {
                return false;
            }
            for (var i = 0; i < ulDisc.children.length; i++) {
                if (li2[i].tagName !== "LI") return false;
            }
            if (ulDisc.children[0].textContent !== 'ul item1') return false;
            if (ulDisc.children[1].textContent !== 'ul item2') return false;
            if (ulDisc.children[2].textContent !== 'ul item3') return false;
            if (ulDisc.children[3].textContent !== 'ul item4') return false;
            if (ulDisc.children[4].textContent !== 'ul item5') return false;

            // checking section 3
            const dl1 = ulDisc.nextElementSibling;
            if (dl1.tagName !== "DL") return false;
            if (dl1.children.length !== 8) return false;
            for (let i = 0; i < dl1.children.length; i++) {
                if (i % 2 === 0) {
                    if (dl1.children[i].tagName !== 'DT') return false;
                } else {
                    if (dl1.children[i].tagName !== 'DD') return false;
                }
            }
            if (dl1.children[0].textContent !== 'Data Term') return false;
            if (dl1.children[1].textContent !== 'Data Definition') return false;
            if (dl1.children[2].textContent !== 'Java') return false;
            if (dl1.children[3].textContent !== 'is a programming language and platform') return false;
            if (dl1.children[4].textContent !== 'Javascript') return false;
            if (dl1.children[5].textContent !== 'is a scripting language') return false;
            if (dl1.children[6].textContent !== 'SQL') return false;
            if (dl1.children[7].textContent !== 'is a query language') return false;

            // checking section 4
            const ulA = document.querySelector('ol[type="A"],ol[reversed]');
            if (!ulA) return false;
            if (body.children[3] !== ulA) return false;

            // check children of ulA
            if (ulA.children.length !== 5) return false;
            const li3 = document.querySelectorAll('ol[reversed] li');
            if (ulA.children.length !== li3.length) {
                return false;
            }
            for (var i = 0; i < ulA.children.length; i++) {
                if (li3[i].tagName !== "LI") return false;
            }
            if (ulA.children[0].textContent !== 'reversed ol item1') return false;
            if (ulA.children[1].textContent !== 'reversed ol item2') return false;
            if (ulA.children[2].textContent !== 'reversed ol item3') return false;
            if (ulA.children[3].textContent !== 'reversed ol item4') return false;
            if (ulA.children[4].textContent !== 'reversed ol item5') return false;

            // checking section 5
            const ol1 = ulA.nextElementSibling;
            if (!ol1) return false;
            if (ol1.tagName !== 'OL' || ol1.getAttribute("type") !== '1') return false;
            if (ol1.children.length !== 2) return false;
            const li4 = ol1.children[0],
                li5 = ol1.children[1];
            if (!li4 || !li5) return false;
            if (li4.tagName !== "LI" || li5.tagName !== 'LI') return false;
            const child1 = li4.children[0],
                child2 = li5.children[0];
            if (child1.getAttribute('type') !== 'A' || child1.tagName !== 'OL') return false;
            if (child2.tagName !== "DL") return false;
            if (child1.children.length !== 3) return false;
            for (let i = 0; i < 3; i++) {
                if (child1.children[i].tagName !== "LI") return false;
            }
            if (child1.children[0].textContent !== 'item1') return false;
            if (child1.children[1].textContent !== 'item2') return false;
            if (child1.children[2].textContent !== 'item3') return false;

            if (child2.children.length !== 4) return false;
            for (let i = 0; i < 4; i++) {

                if (i % 2 == 0) {
                    if (child2.children[i].tagName !== 'DT') return false;
                } else {
                    if (child2.children[i].tagName !== 'DD') return false;
                }
            }
            if (child2.children[0].textContent !== 'title1') return false;
            if (child2.children[1].textContent !== 'definition1') return false;
            if (child2.children[2].textContent !== 'title2') return false;
            if (child2.children[3].textContent !== 'definition2') return false;
            return true;
        });
        expect(check).toBe(true);

    });

});