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



    test('check for an ordered list of type="i", add reversed attribute to it', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {

            const body = document.querySelector('body');
            if (!body) return false;
            if (body.children.length !== 1) return false;

            const oli = body.children[0];
            if (!oli) return false;
            if (oli.getAttribute('type') !== 'i' || oli.tagName !== 'OL' || !oli.hasAttribute('reversed')) return false;

            return true;
        });
        expect(check).toBe(true);
    });



    test('check for list inside the ordered list of type="i" having text content "List 1"', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {

            const body = document.querySelector('body');

            // checking section 1
            const oli = body.children[0];

            // check childrens of olI
            const li1 = oli.children[0];
            if (!li1) return false;
            if (!li1.innerHTML.includes('List 1')) return false;

            return true;
        });
        expect(check).toBe(true);
    });


    test('check for br tag inside list having text content "List 1"', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {

            const body = document.querySelector('body');
            const oli = body.children[0];
            const li1 = oli.children[0];
            const br1 = li1.children[0];

            if (!br1) return false;
            if (br1.tagName !== 'BR') return false;

            return true;
        });
        expect(check).toBe(true);
    });




    test('check for unordered list of type="square", having three lists, inside list having text content "List 1" as given in instructions', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {

            const body = document.querySelector('body');
            const oli = body.children[0];
            const li1 = oli.children[0];
            const br1 = li1.children[0];

            const ulSquare = li1.children[1];
            if (!ulSquare) return false;
            if (ulSquare.getAttribute('type') !== 'square') return false;
            if (ulSquare.children.length !== 3) return false;

            for (let i = 0; i < ulSquare.children.length; i++) {
                if (ulSquare.children[i].tagName !== 'LI') return false;
            }
            if (ulSquare.children[0].textContent !== 'item1') return false;
            if (ulSquare.children[1].textContent !== 'item2') return false;
            if (ulSquare.children[2].textContent !== 'item3') return false;

            return true;
        });
        expect(check).toBe(true);
    });



    test('check for br tag after the list having text content as "List 1"', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {

            const body = document.querySelector('body');
            const oli = body.children[0];
            const br2 = oli.children[1];
            if (!br2) return false;
            if (br2.tagName !== 'BR') return false;

            return true;
        });
        expect(check).toBe(true);
    });



    test('check for list having text content as "List 2"', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {

            const body = document.querySelector('body');
            const oli = body.children[0];
            const br2 = oli.children[1];
            const li2 = br2.nextElementSibling;
            if (!li2) return false;
            if (!li2.innerHTML.includes('List 2')) return false;

            return true;
        });
        expect(check).toBe(true);
    });



    test('check for br tag inside list having text content "List 2"', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {

            const body = document.querySelector('body');
            const oli = body.children[0];

            const br2 = oli.children[1];
            const li2 = br2.nextElementSibling;
            const br3 = li2.children[0];
            if (!br3) return false;
            if (br3.tagName !== 'BR') return false;

            return true;
        });
        expect(check).toBe(true);
    });



    test('check for unordered list of type="disc" inside the list having text content "List 2" after the br tag', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {

            const body = document.querySelector('body');
            const oli = body.children[0];

            const br2 = oli.children[1];
            const li2 = br2.nextElementSibling;
            const ulDisc = li2.children[1];
            if (!ulDisc) return false;
            if (ulDisc.getAttribute('type') !== 'disc' || ulDisc.tagName !== 'UL') return false;

            return true;
        });
        expect(check).toBe(true);
    });



    test('check for list having text content "item4" inside unordered list of type="square" as given in instructions', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {

            const body = document.querySelector('body');
            const oli = body.children[0];
            const br2 = oli.children[1];
            const li2 = br2.nextElementSibling;
            const ulDisc = li2.children[1];
            const li3 = ulDisc.children[0];
            if (!li3) return false;
            if (li3.tagName !== 'LI' || li3.textContent !== 'item4') return false;

            return true;
        });
        expect(check).toBe(true);
    });



    test('check for ordered list of type="I" having three lists with text content "nested1", "nested2", "nested3" resp as given in instructions', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {

            const body = document.querySelector('body');
            const oli = body.children[0];
            const br2 = oli.children[1];
            const li2 = br2.nextElementSibling;
            const ulDisc = li2.children[1];
            const li3 = ulDisc.children[0];

            const li4 = ulDisc.children[1];
            if (!li4) return false;
            if (li4.tagName !== "LI") return false;

            const olI = li4.children[0];
            if (!olI) return false;
            if (olI.getAttribute('type') !== 'I' || olI.tagName !== 'OL') return false;

            if (olI.children.length !== 3) return false;
            for (let i = 0; i < 3; i++) {
                if (olI.children[i].tagName !== 'LI') return false;
            }

            if (olI.children[0].textContent !== 'nested1') return false;
            if (olI.children[1].textContent !== 'nested2') return false;
            if (olI.children[2].textContent !== 'nested3') return false;

            return true;
        });
        expect(check).toBe(true);
    });

    test('check for list having text content as "List 3"', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {

            const body = document.querySelector('body');
            const oli = body.children[0];

            const li5 = oli.children[3];
            if (!li5) return false;
            if (!li5.innerHTML.includes('List 3')) return false;
            return true;
        });
        expect(check).toBe(true);
    });


    test('check for br tag inside list having text content "List 3"', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {

            const body = document.querySelector('body');
            const oli = body.children[0];

            const li5 = oli.children[3];
            const br6 = li5.children[0];
            if (!br6) return false;
            if (br6.tagName !== 'BR') return false;

            return true;
        });
        expect(check).toBe(true);
    });

    test('check for ordered list of type="A" after br tag, inside list having text content "List 3"', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {

            const body = document.querySelector('body');
            const oli = body.children[0];

            const li5 = oli.children[3];
            const olA = li5.children[1];
            if (!olA) return false;
            if (olA.getAttribute('type') !== 'A' || olA.tagName !== 'OL') return false;

            return true;
        });
        expect(check).toBe(true);
    });


    test('check for list tag inside ordered list of type="A", inside list having text content "List 3"', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {

            const body = document.querySelector('body');
            const oli = body.children[0];

            const li5 = oli.children[3];

            const olA = li5.children[1];
            const li6 = olA.children[0];
            if (!li6) return false;
            if (li6.tagName !== 'LI') return false;

            return true;
        });
        expect(check).toBe(true);
    });


    test('check for description list inside list, inside ordered list of type="A", inside list having text content "List 3"', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {

            const body = document.querySelector('body');
            const oli = body.children[0];

            const li5 = oli.children[3];
            const olA = li5.children[1];
            const li6 = olA.children[0];
            const li7 = olA.children[1];

            const child1 = li6.children[0],
                child2 = li7.children[0];
            if (child1.tagName !== 'DL' || child2.tagName !== 'DL') return false;

            if (child1.children.length !== 2 || child2.children.length !== 2) return false;
            const dt1 = child1.children[0],
                dd1 = child1.children[1];
            if (dt1.tagName !== 'DT' || dd1.tagName !== 'DD') return false;
            if (dt1.children.length !== 1) return false;
            if (dt1.children[0].tagName !== "EM") return false;
            if (dt1.children[0].textContent !== 'Prepbytes') return false;
            if (dd1.children.length !== 2) return false;
            if (dd1.children[0].tagName !== "A" || dd1.children[1].tagName !== "A") return false;
            if (dd1.children[0].textContent !== 'Elevation' || dd1.children[0].getAttribute('target') !== '_blank' || dd1.children[0].getAttribute('href') !== 'https://www.prepbytes.com/development-programs/online-full-stack-developer-mern-certification-program') return false;
            if (dd1.children[1].textContent !== 'Zenith' || dd1.children[1].getAttribute('href') !== 'https://www.prepbytes.com/prepbytes-expert-coder/master-competitive-programming') return false;

            // second part
            const dt2 = child2.children[0],
                dd2 = child2.children[1];
            if (dt2.tagName !== 'DT' || dd2.tagName !== 'DD') return false;
            if (dt2.textContent !== 'Logo') return false;
            if (dd2.children.length !== 1) return false;
            if (dd2.children[0].tagName !== 'IMG' || dd2.children[0].getAttribute('src') !== "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/uzxxllgloialmn9mhwfe" || dd2.children[0].getAttribute('alt') !== "prepbytes") return false;

            return true;
        });
        expect(check).toBe(true);
    });


    test('check for "em" tag having text content "Prepbytes", inside list having text content "List 3"', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {

            const body = document.querySelector('body');
            const oli = body.children[0];

            const li5 = oli.children[3];
            const olA = li5.children[1];
            const li6 = olA.children[0];
            const li7 = olA.children[1];
            const child1 = li6.children[0],
                child2 = li7.children[0];
            const dt1 = child1.children[0],
                dd1 = child1.children[1];
            if (dt1.children[0].tagName !== "EM") return false;
            if (dt1.children[0].textContent !== 'Prepbytes') return false;

            return true;
        });
        expect(check).toBe(true);
    });


    test('check for anchor("a") tag having href="https://www.prepbytes.com/development-programs/online-full-stack-developer-mern-certification-program", text content "Evevation", target "_blank" , inside list having text content "List 3"', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {

            const body = document.querySelector('body');
            const oli = body.children[0];

            const li5 = oli.children[3];
            const olA = li5.children[1];
            const li6 = olA.children[0];
            const li7 = olA.children[1];
            const child1 = li6.children[0],
                child2 = li7.children[0];
            const dt1 = child1.children[0],
                dd1 = child1.children[1];
            if (dd1.children[0].textContent !== 'Elevation' || dd1.children[0].getAttribute('target') !== '_blank' || dd1.children[0].getAttribute('href') !== 'https://www.prepbytes.com/development-programs/online-full-stack-developer-mern-certification-program') return false;

            return true;
        });
        expect(check).toBe(true);
    });

    test('check for anchor("a") tag having href="https://www.prepbytes.com/prepbytes-expert-coder/master-competitive-programming", text content "Zenith", inside list having text content "List 3"', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {

            const body = document.querySelector('body');
            const oli = body.children[0];

            const li5 = oli.children[3];
            const olA = li5.children[1];
            const li6 = olA.children[0];
            const li7 = olA.children[1];
            const child1 = li6.children[0],
                child2 = li7.children[0];
            const dt1 = child1.children[0],
                dd1 = child1.children[1];
            if (dd1.children[1].textContent !== 'Zenith' || dd1.children[1].getAttribute('href') !== 'https://www.prepbytes.com/prepbytes-expert-coder/master-competitive-programming') return false;

            return true;
        });
        expect(check).toBe(true);
    });


    test('check for "dt" tag having text content as "Logo"', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {

            const body = document.querySelector('body');
            const oli = body.children[0];

            const li5 = oli.children[3];
            const olA = li5.children[1];
            const li6 = olA.children[0];
            const li7 = olA.children[1];
            const child1 = li6.children[0],
                child2 = li7.children[0];

            const dt2 = child2.children[0],
                dd2 = child2.children[1];
            if (dt2.textContent !== 'Logo') return false;

            if (dd2.children[0].tagName !== 'IMG' || dd2.children[0].getAttribute('src') !== "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/uzxxllgloialmn9mhwfe" || dd2.children[0].getAttribute('alt') !== "prepbytes") return false;
            return true;
        });
        expect(check).toBe(true);
    });

    test('check for "img" tag having src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/uzxxllgloialmn9mhwfe" , alternative text as "prepbytes" ', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {

            const body = document.querySelector('body');
            const oli = body.children[0];

            const li5 = oli.children[3];
            const olA = li5.children[1];
            const li6 = olA.children[0];
            const li7 = olA.children[1];
            const child1 = li6.children[0],
                child2 = li7.children[0];

            const dt2 = child2.children[0],
                dd2 = child2.children[1];
            if (dd2.children[0].tagName !== 'IMG' || dd2.children[0].getAttribute('src') !== "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/uzxxllgloialmn9mhwfe" || dd2.children[0].getAttribute('alt') !== "prepbytes") return false;
            return true;
        });
        expect(check).toBe(true);
    });

    test('checking complete structure', async() => {

        await page.goto('file://' + __dirname + '/source/index.html');

        const check = await page.evaluate(() => {

            const body = document.querySelector('body');
            if (!body) return false;
            if (body.children.length !== 1) return false;

            // checking section 1
            const oli = body.children[0];
            if (!oli) return false;
            if (oli.getAttribute('type') !== 'i' || oli.tagName !== 'OL' || !oli.hasAttribute('reversed')) return false;

            // check childrens of olI
            const li1 = oli.children[0];
            if (!li1) return false;
            if (!li1.innerHTML.includes('List 1')) return false;

            const br1 = li1.children[0];
            if (!br1) return false;
            if (br1.tagName !== 'BR') return false;

            const ulSquare = li1.children[1];
            if (!ulSquare) return false;
            if (ulSquare.getAttribute('type') !== 'square') return false;
            if (ulSquare.children.length !== 3) return false;

            for (let i = 0; i < ulSquare.children.length; i++) {
                if (ulSquare.children[i].tagName !== 'LI') return false;
            }
            if (ulSquare.children[0].textContent !== 'item1') return false;
            if (ulSquare.children[1].textContent !== 'item2') return false;
            if (ulSquare.children[2].textContent !== 'item3') return false;

            const br2 = oli.children[1];
            if (!br2) return false;
            if (br2.tagName !== 'BR') return false;

            const li2 = br2.nextElementSibling;
            if (!li2) return false;
            if (!li2.innerHTML.includes('List 2')) return false;

            const br3 = li2.children[0];
            if (!br3) return false;
            if (br3.tagName !== 'BR') return false;

            const ulDisc = li2.children[1];
            if (!ulDisc) return false;
            if (ulDisc.getAttribute('type') !== 'disc' || ulDisc.tagName !== 'UL') return false;

            const li3 = ulDisc.children[0];
            if (!li3) return false;
            if (li3.tagName !== 'LI' || li3.textContent !== 'item4') return false;

            const li4 = ulDisc.children[1];
            if (!li4) return false;
            if (li4.tagName !== "LI") return false;

            const olI = li4.children[0];
            if (!olI) return false;
            if (olI.getAttribute('type') !== 'I' || olI.tagName !== 'OL') return false;

            if (olI.children.length !== 3) return false;
            for (let i = 0; i < 3; i++) {
                if (olI.children[i].tagName !== 'LI') return false;
            }

            if (olI.children[0].textContent !== 'nested1') return false;
            if (olI.children[1].textContent !== 'nested2') return false;
            if (olI.children[2].textContent !== 'nested3') return false;

            const li5 = oli.children[3];
            if (!li5) return false;
            if (!li5.innerHTML.includes('List 3')) return false;

            const br6 = li5.children[0];
            if (!br3) return false;
            if (br3.tagName !== 'BR') return false;

            const olA = li5.children[1];
            if (!olA) return false;
            if (olA.getAttribute('type') !== 'A' || olA.tagName !== 'OL') return false;

            if (olA.children.length !== 2) return false;

            const li6 = olA.children[0];
            if (!li6) return false;
            if (li6.tagName !== 'LI') return false;

            const li7 = olA.children[1];
            if (!li7) return false;
            if (li7.tagName !== 'LI') return false;

            const child1 = li6.children[0],
                child2 = li7.children[0];
            if (child1.tagName !== 'DL' || child2.tagName !== 'DL') return false;

            if (child1.children.length !== 2 || child2.children.length !== 2) return false;
            const dt1 = child1.children[0],
                dd1 = child1.children[1];
            if (dt1.tagName !== 'DT' || dd1.tagName !== 'DD') return false;
            if (dt1.children.length !== 1) return false;
            if (dt1.children[0].tagName !== "EM") return false;
            if (dt1.children[0].textContent !== 'Prepbytes') return false;
            if (dd1.children.length !== 2) return false;
            if (dd1.children[0].tagName !== "A" || dd1.children[1].tagName !== "A") return false;
            if (dd1.children[0].textContent !== 'Elevation' || dd1.children[0].getAttribute('target') !== '_blank' || dd1.children[0].getAttribute('href') !== 'https://www.prepbytes.com/development-programs/online-full-stack-developer-mern-certification-program') return false;
            if (dd1.children[1].textContent !== 'Zenith' || dd1.children[1].getAttribute('href') !== 'https://www.prepbytes.com/prepbytes-expert-coder/master-competitive-programming') return false;

            // second part
            const dt2 = child2.children[0],
                dd2 = child2.children[1];
            if (dt2.tagName !== 'DT' || dd2.tagName !== 'DD') return false;
            if (dt2.textContent !== 'Logo') return false;
            if (dd2.children.length !== 1) return false;
            if (dd2.children[0].tagName !== 'IMG' || dd2.children[0].getAttribute('src') !== "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/uzxxllgloialmn9mhwfe" || dd2.children[0].getAttribute('alt') !== "prepbytes") return false;

            return true;
        });
        expect(check).toBe(true);
    });
});