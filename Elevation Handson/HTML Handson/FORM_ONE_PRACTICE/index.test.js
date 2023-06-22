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

    test('contains a form tag with action attribute', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const body = document.querySelector('body');
            const form = body.children[0];
            if (!form) return false;
            if (form.tagName !== 'FORM' || form.getAttribute('action') !== '#') return false;

            return true;
        });

        expect(check).toBe(true);
    });

    test('check for a heading using "h2" tag in form having text as given in instructions', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const body = document.querySelector('body');
            const form = body.children[0];
            const h2 = form.children[0];
            if (!h2) return false;
            if (h2.tagName !== 'H2' || h2.textContent !== 'Example Form') return false;
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
            const h2 = form.children[0];
            const nameLabel = h2.nextElementSibling;
            if (!nameLabel) return false;
            if (nameLabel.getAttribute('for') !== 'name' || nameLabel.textContent !== 'Name:' || nameLabel.tagName !== 'LABEL') return false;
            const nameInput = nameLabel.nextElementSibling;
            if (!nameInput) return false;
            if (nameInput.getAttribute('type') !== 'text' || nameInput.getAttribute('id') !== 'name' || nameInput.tagName !== 'INPUT' || nameInput.getAttribute('name') !== 'name') return false;
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
            const h2 = form.children[0];
            const nameLabel = h2.nextElementSibling;
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
            const emailLabel = form.children[5];
            const emailInput = form.children[6];
            if (!emailLabel) return false;
            if (emailLabel.getAttribute('for') !== 'email' || emailLabel.textContent !== 'Email:' || emailLabel.tagName !== 'LABEL') return false;
            if (emailLabel.nextElementSibling !== emailInput) return false;
            if (!emailInput) return false;
            if (emailInput.getAttribute('type') !== 'email' || emailInput.getAttribute('id') !== 'email' || emailInput.tagName !== 'INPUT' || emailInput.getAttribute('name') !== 'email') return false;
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
            const passLabel = form.children[9];
            const passInput = form.children[10];
            if (!passLabel) return false;
            if (passLabel.getAttribute('for') !== 'password' || passLabel.textContent !== 'Password:' || passLabel.tagName !== 'LABEL') return false;
            if (passLabel.nextElementSibling !== passInput) return false;
            if (!passInput) return false;
            if (passInput.getAttribute('type') !== 'password' || passInput.getAttribute('id') !== 'password' || passInput.tagName !== 'INPUT' || passInput.getAttribute('name') !== 'password') return false;
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

    test('check for label and input tag for phone field, followed by two br tags', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const body = document.querySelector('body');
            const form = body.children[0];
            const contactLabel = form.children[13];
            const contactInput = form.children[14];
            if (!contactLabel) return false;
            if (contactLabel.getAttribute('for') !== 'phone' || contactLabel.textContent !== 'Phone Number:' || contactLabel.tagName !== 'LABEL') return false;
            if (contactLabel.nextElementSibling !== contactInput) return false;
            if (!contactInput) return false;
            if (contactInput.getAttribute('type') !== 'tel' || contactInput.getAttribute('id') !== 'phone' || contactInput.tagName !== 'INPUT' || contactInput.getAttribute('name') !== 'phone') return false;
            const br7 = contactInput.nextElementSibling;
            if (!br7) return false;
            if (br7.tagName !== 'BR') return false;
            const br8 = br7.nextElementSibling;
            if (!br8) return false;
            if (br8.tagName !== 'BR') return false;
            return true;
        });

        expect(check).toBe(true);
    });

    test('ccheck for label and input tag for date field, followed by two br tags', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const body = document.querySelector('body');
            const form = body.children[0];
            const dateLabel = form.children[17];
            const dateInput = form.children[18];
            if (!dateLabel) return false;
            if (dateLabel.getAttribute('for') !== 'date' || dateLabel.textContent !== 'Date:' || dateLabel.tagName !== 'LABEL') return false;
            if (dateLabel.nextElementSibling !== dateInput) return false;
            if (!dateInput) return false;
            if (dateInput.getAttribute('type') !== 'date' || dateInput.getAttribute('id') !== 'date' || dateInput.tagName !== 'INPUT' || dateInput.getAttribute('name') !== 'date') return false;
            const br9 = dateInput.nextElementSibling;
            if (!br9) return false;
            if (br9.tagName !== 'BR') return false;
            const br10 = br9.nextElementSibling;
            if (!br10) return false;
            if (br10.tagName !== 'BR') return false;
            return true;
        });

        expect(check).toBe(true);
    });


    test('check for label and input tag for time field, followed by two br tags', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const body = document.querySelector('body');
            const form = body.children[0];
            const timeLabel = form.children[21];
            const timeInput = form.children[22];
            if (!timeLabel) return false;
            if (timeLabel.getAttribute('for') !== 'time' || timeLabel.textContent !== 'Time:' || timeLabel.tagName !== 'LABEL') return false;
            if (timeLabel.nextElementSibling !== timeInput) return false;
            if (!timeInput) return false;
            if (timeInput.getAttribute('type') !== 'time' || timeInput.getAttribute('id') !== 'time' || timeInput.tagName !== 'INPUT' || timeInput.getAttribute('name') !== 'time') return false;
            const br11 = timeInput.nextElementSibling;
            if (!br11) return false;
            if (br11.tagName !== 'BR') return false;
            const br12 = br11.nextElementSibling;
            if (!br12) return false;
            if (br12.tagName !== 'BR') return false;
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
            const genderLabel = form.children[25];
            const br1 = form.children[26];
            const maleInput = form.children[27];
            const maleLabel = form.children[28];
            const br2 = form.children[29];
            const femaleInput = form.children[30];
            const femaleLabel = form.children[31];
            const br3 = form.children[32];
            const otherInput = form.children[33];
            const otherLabel = form.children[34];
            const br4 = form.children[35];
            const br5 = form.children[36];

            if (!genderLabel) return false;
            if (genderLabel.getAttribute('for') !== 'gender' || genderLabel.textContent !== 'Gender:' || genderLabel.tagName !== 'LABEL') return false;

            if (!br1) return false;
            if (br1.tagName !== 'BR') return false;

            if (!maleInput) return false;
            if (maleInput.getAttribute('type') !== 'radio' || maleInput.getAttribute('id') !== 'male' || maleInput.tagName !== 'INPUT' || maleInput.getAttribute('name') !== 'gender' || maleInput.getAttribute('value') !== 'male') return false;

            if (!maleLabel) return false;
            if (maleLabel.getAttribute('for') !== 'male' || maleLabel.textContent !== 'Male' || maleLabel.tagName !== 'LABEL') return false;

            if (!br2) return false;
            if (br2.tagName !== 'BR') return false;

            if (!femaleInput) return false;
            if (femaleInput.getAttribute('type') !== 'radio' || femaleInput.getAttribute('id') !== 'female' || femaleInput.tagName !== 'INPUT' || femaleInput.getAttribute('name') !== 'gender' || femaleInput.getAttribute('value') !== 'female') return false;

            if (!femaleLabel) return false;
            if (femaleLabel.getAttribute('for') !== 'female' || femaleLabel.textContent !== 'Female' || femaleLabel.tagName !== 'LABEL') return false;

            if (!br3) return false;
            if (br3.tagName !== 'BR') return false;

            if (!otherInput) return false;
            if (otherInput.getAttribute('type') !== 'radio' || otherInput.getAttribute('id') !== 'other' || otherInput.tagName !== 'INPUT' || otherInput.getAttribute('name') !== 'gender' || otherInput.getAttribute('value') !== 'other') return false;

            if (!otherLabel) return false;
            if (otherLabel.getAttribute('for') !== 'other' || otherLabel.textContent !== 'Other' || otherLabel.tagName !== 'LABEL') return false;

            if (!br4) return false;
            if (br4.tagName !== 'BR') return false;
            if (!br5) return false;
            if (br5.tagName !== 'BR') return false;

            return true;
        });

        expect(check).toBe(true);
    });

    test('check for textarea section as given in instructions', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const body = document.querySelector('body');
            const form = body.children[0];
            const textLabel = form.children[37];
            const br1 = form.children[38];
            const textInput = form.children[39];
            const br2 = form.children[40];
            const br3 = form.children[41];

            if (!textLabel) return false;
            if (textLabel.getAttribute('for') !== 'textarea' || textLabel.textContent !== 'Textarea:' || textLabel.tagName !== 'LABEL') return false;

            if (!br1) return false;
            if (br1.tagName !== 'BR') return false;

            if (!textInput) return false;
            if (textInput.getAttribute('id') !== 'textarea' || textInput.tagName !== 'TEXTAREA' || textInput.getAttribute('name') !== 'textarea') return false;

            if (!br2) return false;
            if (br2.tagName !== 'BR') return false;

            if (!br3) return false;
            if (br3.tagName !== 'BR') return false;

            return true;
        });
        expect(check).toBe(true);
    });

    test('check for checkbox(Interests) section as given in instructions', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const body = document.querySelector('body');
            const form = body.children[0];
            const interestLabel = form.children[42];
            const br1 = form.children[43];
            const musicInput = form.children[44];
            const musicLabel = form.children[45];
            const br2 = form.children[46];
            const bookInput = form.children[47];
            const bookLabel = form.children[48];
            const br3 = form.children[49];
            const movieInput = form.children[50];
            const movieLabel = form.children[51];
            const br4 = form.children[52];
            const br5 = form.children[53];

            if (!interestLabel) return false;
            if (interestLabel.getAttribute('for') !== 'interests' || interestLabel.textContent !== 'Interests:' || interestLabel.tagName !== 'LABEL') return false;

            if (!br1) return false;
            if (br1.tagName !== 'BR') return false;

            if (!musicInput) return false;
            if (musicInput.getAttribute('type') !== 'checkbox' || musicInput.getAttribute('id') !== 'music' || musicInput.tagName !== 'INPUT' || musicInput.getAttribute('name') !== 'hobby1' || musicInput.getAttribute('value') !== 'music') return false;

            if (!musicLabel) return false;
            if (musicLabel.getAttribute('for') !== 'music' || musicLabel.textContent !== 'Music' || musicLabel.tagName !== 'LABEL') return false;

            if (!br2) return false;
            if (br2.tagName !== 'BR') return false;

            if (!bookInput) return false;
            if (bookInput.getAttribute('type') !== 'checkbox' || bookInput.getAttribute('id') !== 'books' || bookInput.tagName !== 'INPUT' || bookInput.getAttribute('name') !== 'hobby2' || bookInput.getAttribute('value') !== 'books') return false;

            if (!bookLabel) return false;
            if (bookLabel.getAttribute('for') !== 'books' || bookLabel.textContent !== 'Books' || bookLabel.tagName !== 'LABEL') return false;

            if (!br3) return false;
            if (br3.tagName !== 'BR') return false;

            if (!movieInput) return false;
            if (movieInput.getAttribute('type') !== 'checkbox' || movieInput.getAttribute('id') !== 'movies' || movieInput.tagName !== 'INPUT' || movieInput.getAttribute('name') !== 'hobby3' || movieInput.getAttribute('value') !== 'movies') return false;

            if (!movieLabel) return false;
            if (movieLabel.getAttribute('for') !== 'movies' || movieLabel.textContent !== 'Movies' || movieLabel.tagName !== 'LABEL') return false;

            if (!br4) return false;
            if (br4.tagName !== 'BR') return false;
            if (!br5) return false;
            if (br5.tagName !== 'BR') return false;

            return true;
        });

        expect(check).toBe(true);
    });

    test('check for submit and reset buttons', async() => {
        // Navigate to the HTML file
        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {
            const body = document.querySelector('body');
            const form = body.children[0];
            const submitBtn = form.children[54];
            const resetBtn = form.children[55];

            if (!submitBtn) return false;
            if (submitBtn.getAttribute('type') !== 'submit' || submitBtn.getAttribute('value') !== 'Submit') return false;

            if (!resetBtn) return false;
            if (resetBtn.getAttribute('type') !== 'reset' || resetBtn.getAttribute('value') !== 'Reset') return false;

            return true;
        });

        expect(check).toBe(true);
    });

});