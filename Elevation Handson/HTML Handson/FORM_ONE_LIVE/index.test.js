const puppeteer = require('puppeteer');
const path = require('path');
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

describe('Html Form Testing', () => {
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

    test('contains a form tag', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const body = document.querySelector('body');
            const form = body.children[0];
            if (!form) return false;
            if (form.tagName !== 'FORM') return false;
            return true;
        });
        expect(check).toBe(true);
    });

    test('check for label and input tag for name field', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const body = document.querySelector('body');
            const form = body.children[0];
            const nameLabel = form.children[0];
            if (!nameLabel) return false;
            if (nameLabel.getAttribute('for') !== 'name' || nameLabel.textContent !== 'Name:' || nameLabel.tagName !== 'LABEL') return false;
            const nameInput = nameLabel.nextElementSibling;
            if (!nameInput) return false;
            if (nameInput.getAttribute('type') !== 'text' || nameInput.getAttribute('id') !== 'name' || nameInput.tagName !== 'INPUT' || nameInput.getAttribute('name') !== 'Name') return false;
            return true;
        });

        expect(check).toBe(true);
    });


    test('check for two "br" tags after name field', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const body = document.querySelector('body');
            const form = body.children[0];
            const nameLabel = form.children[0];
            const nameInput = nameLabel.nextElementSibling;
            const br1 = nameInput.nextElementSibling;
            if (!br1) return false;
            if (br1.tagName !== 'BR') return false;
            const br2 = br1.nextElementSibling;
            if (!br2) return false;
            if (br2.tagName !== 'BR') return false;
            return true;
        });

        expect(check).toBe(true);
    });

    test('check for label and input tag for email field, followed by two "br" tags', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const body = document.querySelector('body');
            const form = body.children[0];
            const emailLabel = form.children[4];
            const emailInput = form.children[5];
            if (!emailLabel) return false;
            if (emailLabel.getAttribute('for') !== 'email' || emailLabel.textContent !== 'Email:' || emailLabel.tagName !== 'LABEL') return false;
            if (emailLabel.nextElementSibling !== emailInput) return false;
            if (!emailInput) return false;
            if (emailInput.getAttribute('type') !== 'text' || emailInput.getAttribute('id') !== 'email' || emailInput.tagName !== 'INPUT' || emailInput.getAttribute('name') !== 'Email') return false;
            const br3 = emailInput.nextElementSibling;
            if (!br3) return false;
            if (br3.tagName !== 'BR') return false;
            const br4 = br3.nextElementSibling;
            if (!br4) return false;
            if (br4.tagName !== 'BR') return false;
            return true;
        });

        expect(check).toBe(true);
    });

    test('check for label and input tag for password field, followed by two br tags', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const body = document.querySelector('body');
            const form = body.children[0];
            const passLabel = form.children[8];
            const passInput = form.children[9];
            if (!passLabel) return false;
            if (passLabel.getAttribute('for') !== 'password' || passLabel.textContent !== 'Password:' || passLabel.tagName !== 'LABEL') return false;
            if (passLabel.nextElementSibling !== passInput) return false;
            if (!passInput) return false;
            if (passInput.getAttribute('type') !== 'password' || passInput.getAttribute('id') !== 'password' || passInput.tagName !== 'INPUT' || passInput.getAttribute('name') !== 'Password') return false;
            const br5 = passInput.nextElementSibling;
            if (!br5) return false;
            if (br5.tagName !== 'BR') return false;
            const br6 = br5.nextElementSibling;
            if (!br6) return false;
            if (br6.tagName !== 'BR') return false;
            return true;
        });

        expect(check).toBe(true);
    });


    test('check for radio button(Gender) section as given in instructions', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const body = document.querySelector('body');
            const form = body.children[0];
            const languageLabel = form.children[12];
            const br1 = form.children[13];
            const htmlInput = form.children[14];
            const htmlLabel = form.children[15];
            const br2 = form.children[16];
            const cssInput = form.children[17];
            const cssLabel = form.children[18];
            const br3 = form.children[19];
            const jsInput = form.children[20];
            const jsLabel = form.children[21];
            const br4 = form.children[22];
            const br5 = form.children[23];

            if (!languageLabel) return false;
            if (languageLabel.getAttribute('for') !== 'gender' || languageLabel.textContent !== 'Select Your Favourite Language:' || languageLabel.tagName !== 'LABEL') return false;

            if (!br1) return false;
            if (br1.tagName !== 'BR') return false;

            if (!htmlInput) return false;
            if (htmlInput.getAttribute('type') !== 'radio' || htmlInput.getAttribute('id') !== 'html' || htmlInput.tagName !== 'INPUT' || htmlInput.getAttribute('name') !== 'fav_language' || htmlInput.getAttribute('value') !== 'HTML') return false;

            if (!htmlLabel) return false;
            if (htmlLabel.getAttribute('for') !== 'html' || htmlLabel.textContent !== 'HTML' || htmlLabel.tagName !== 'LABEL') return false;

            if (!br2) return false;
            if (br2.tagName !== 'BR') return false;

            if (!cssInput) return false;
            if (cssInput.getAttribute('type') !== 'radio' || cssInput.getAttribute('id') !== 'css' || cssInput.tagName !== 'INPUT' || cssInput.getAttribute('name') !== 'fav_language' || cssInput.getAttribute('value') !== 'CSS') return false;

            if (!cssLabel) return false;
            if (cssLabel.getAttribute('for') !== 'css' || cssLabel.textContent !== 'CSS' || cssLabel.tagName !== 'LABEL') return false;

            if (!br3) return false;
            if (br3.tagName !== 'BR') return false;

            if (!jsInput) return false;
            if (jsInput.getAttribute('type') !== 'radio' || jsInput.getAttribute('id') !== 'javascript' || jsInput.tagName !== 'INPUT' || jsInput.getAttribute('name') !== 'fav_language' || jsInput.getAttribute('value') !== 'JavaScript') return false;

            if (!jsLabel) return false;
            if (jsLabel.getAttribute('for') !== 'javascript' || jsLabel.textContent !== 'JavaScript' || jsLabel.tagName !== 'LABEL') return false;

            if (!br4) return false;
            if (br4.tagName !== 'BR') return false;
            if (!br5) return false;
            if (br5.tagName !== 'BR') return false;

            return true;
        });

        expect(check).toBe(true);
    });


    test('check for checkbox(Vehicles) section as given in instructions', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const body = document.querySelector('body');
            const form = body.children[0];
            const vehicleLabel = form.children[24];
            const br1 = form.children[25];
            const vehicle1Input = form.children[26];
            const vehicle1Label = form.children[27];
            const br2 = form.children[28];
            const vehicle2Input = form.children[29];
            const vehicle2Label = form.children[30];
            const br3 = form.children[31];
            const vehicle3Input = form.children[32];
            const vehicle3Label = form.children[33];
            const br4 = form.children[34];
            const br5 = form.children[35];

            if (!vehicleLabel) return false;
            if (vehicleLabel.getAttribute('for') !== 'vehicles' || vehicleLabel.textContent !== 'Select Vehicles You Have:' || vehicleLabel.tagName !== 'LABEL') return false;

            if (!br1) return false;
            if (br1.tagName !== 'BR') return false;

            if (!vehicle1Input) return false;
            if (vehicle1Input.getAttribute('type') !== 'checkbox' || vehicle1Input.getAttribute('id') !== 'bike' || vehicle1Input.tagName !== 'INPUT' || vehicle1Input.getAttribute('name') !== 'vehicle1' || vehicle1Input.getAttribute('value') !== 'Bike') return false;

            if (!vehicle1Label) return false;
            if (vehicle1Label.getAttribute('for') !== 'bike' || vehicle1Label.textContent !== 'Bike' || vehicle1Label.tagName !== 'LABEL') return false;

            if (!br2) return false;
            if (br2.tagName !== 'BR') return false;

            if (!vehicle2Input) return false;
            if (vehicle2Input.getAttribute('type') !== 'checkbox' || vehicle2Input.getAttribute('id') !== 'car' || vehicle2Input.tagName !== 'INPUT' || vehicle2Input.getAttribute('name') !== 'vehicle2' || vehicle2Input.getAttribute('value') !== 'Car') return false;

            if (!vehicle2Label) return false;
            if (vehicle2Label.getAttribute('for') !== 'car' || vehicle2Label.textContent !== 'Car' || vehicle2Label.tagName !== 'LABEL') return false;

            if (!br3) return false;
            if (br3.tagName !== 'BR') return false;

            if (!vehicle3Input) return false;
            if (vehicle3Input.getAttribute('type') !== 'checkbox' || vehicle3Input.getAttribute('id') !== 'boat' || vehicle3Input.tagName !== 'INPUT' || vehicle3Input.getAttribute('name') !== 'vehicle3' || vehicle3Input.getAttribute('value') !== 'Boat') return false;

            if (!vehicle3Label) return false;
            if (vehicle3Label.getAttribute('for') !== 'boat' || vehicle3Label.textContent !== 'Boat' || vehicle3Label.tagName !== 'LABEL') return false;

            if (!br4) return false;
            if (br4.tagName !== 'BR') return false;
            if (!br5) return false;
            if (br5.tagName !== 'BR') return false;

            return true;
        });

        expect(check).toBe(true);
    });

    test('check for submit button', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const body = document.querySelector('body');
            const form = body.children[0];
            const submitBtn = form.children[36];

            if (!submitBtn) return false;
            if (submitBtn.getAttribute('type') !== 'submit' || submitBtn.getAttribute('value') !== 'Submit') return false;

            return true;
        });

        expect(check).toBe(true);
    });

});