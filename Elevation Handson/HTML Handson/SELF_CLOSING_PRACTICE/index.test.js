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

    test('check for body contains seven children', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const imgExists = await page.evaluate(() => {
            const body = document.querySelector('body');
            if (body.children.length !== 7) return false;
            return true;
        });
        expect(imgExists).toBe(true);
    });

    test('check for heading tag using "h1" tag having text as given in instructions', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const body = document.querySelector('body');
            const firstH1 = body.children[0];
            if (firstH1.tagName !== 'H1' || firstH1.textContent !== 'Lorem ipsum dolor sit amet') return false;
            return true;
        });
        expect(check).toBe(true);
    });

    test('check for an horizontal rule "hr" tag', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const body = document.querySelector('body');
            const firstH1 = body.children[0];
            const hr = firstH1.nextElementSibling;
            if (body.children[1] !== hr) return false;
            if (hr.tagName !== 'HR') return false;
            return true;
        });
        expect(check).toBe(true);
    });


    test('check for an img tag(first image) with given instructions after hr', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const imgExists = await page.evaluate(() => {
            const body = document.querySelector('body');
            const firstH1 = body.children[0];
            const hr = firstH1.nextElementSibling;
            const firstImg = document.querySelector('img[src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/start_my_coding_journey.webp"]')
            if (!firstImg) return false;
            if (body.children[2] !== firstImg) return false;
            if (firstImg.getAttribute('width') !== '300px' || firstImg.getAttribute('height') !== '150px' || firstImg.getAttribute('alt') !== 'start-coding') return false;
            return true;
        });
        expect(imgExists).toBe(true);
    });

    test('check for a br tag after first image', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const body = document.querySelector('body');
            const firstH1 = body.children[0];
            const hr = firstH1.nextElementSibling;
            const firstImg = document.querySelector('img[src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/start_my_coding_journey.webp"]')
            const br = firstImg.nextElementSibling;
            if (!br) return false;
            if (br.tagName !== "BR") return false;
            if (body.children[3] !== br) return false;
            return true;
        });
        expect(check).toBe(true);
    });

    test('check for an img tag(second image) with given instructions after br', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const imgExists = await page.evaluate(() => {
            const body = document.querySelector('body');
            const firstH1 = body.children[0];
            const hr = firstH1.nextElementSibling;
            const firstImg = document.querySelector('img[src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/start_my_coding_journey.webp"]')
            const br = firstImg.nextElementSibling;
            const secondIng = document.querySelector('img[src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/prepare_for_campus.webp"]')
            if (!secondIng) return false;
            if (body.children[4] !== secondIng) return false;
            if (secondIng.getAttribute('width') !== '300px' || secondIng.getAttribute('height') !== '150px' || secondIng.getAttribute('alt') !== 'prepare-for-campus') return false;
            return true;
        });
        expect(imgExists).toBe(true);
    });


    test('check for an hr tag(second) after second Image tag', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const body = document.querySelector('body');
            const firstH1 = body.children[0];
            const firstImg = document.querySelector('img[src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/start_my_coding_journey.webp"]')
            const secondImg = document.querySelector('img[src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/prepare_for_campus.webp"]')
            const hr = secondImg.nextElementSibling;
            if (body.children[5] !== hr) return false;
            if (hr.tagName !== 'HR') return false;
            return true;
        });
        expect(check).toBe(true);
    });

    test('check for second heading tag having "h1" tag after hr', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const body = document.querySelector('body');
            const secondImg = document.querySelector('img[src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/prepare_for_campus.webp"]')
            const hr = secondImg.nextElementSibling;
            const secondH1 = hr.nextElementSibling;
            if (body.children[6] !== secondH1) return false;
            if (!secondH1) return false;
            if (secondH1.tagName !== 'H1' || secondH1.textContent !== 'Lorem ipsum dolor sit amet') return false;
            return true;
        });
        expect(check).toBe(true);
    });

});