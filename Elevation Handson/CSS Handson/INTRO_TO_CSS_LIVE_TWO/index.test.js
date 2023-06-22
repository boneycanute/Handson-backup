const puppeteer = require('puppeteer');
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

describe('CSS Live', () => {
    let browser;
    let page;

    beforeAll(async () => {
      browser = await puppeteer.launch({
        args: ["--no-sandbox"],
        headless: true,
      });
    });

    afterAll(async() => {
        await browser.close();
    });

    beforeEach(async() => {
        page = await browser.newPage();
        const cssFilePath = __dirname + "/source/index.css";
    await page.addStyleTag({ path: cssFilePath });
    });

    afterEach(async() => {
        await page.close();
    });

    test(('H1 heading color, font size and text align'), async () => {
      await page.goto("file://" + __dirname + "/source/index.html");

      const heading = await page.evaluate(() => {
        const h1 = document.querySelector('h1');
        const styles = window.getComputedStyle(h1);
        if(styles.color === 'rgb(255, 0, 0)' && styles.fontSize === '24px' && styles.textAlign === 'center'){
          return true;
        }
        return false;
      })
      expect(heading).toBeTruthy();
    })

    test(('Intro background color and padding'), async () => {
      await page.goto("file://" + __dirname + "/source/index.html");

      const intro = await page.evaluate(() => {
        const int = document.querySelector('#intro');
        const styles = window.getComputedStyle(int);
        if(styles.backgroundColor === 'rgb(255, 255, 0)' && styles.padding === '10px'){
          return true;
        }
        return false;
      })
      expect(intro).toBeTruthy();
    })

    test(("p tag font size"), async () => {
      await page.goto("file://" + __dirname + "/source/index.html");

      const para = await page.evaluate(() => {
        const p = document.querySelector('p');
        const styles = window.getComputedStyle(p);
        if(styles.fontSize === '18px'){
          return true;
        }
        return false;
      })
      expect(para).toBeTruthy();
    })

    test(('Conclude color and text decoration'), async () => {
      await page.goto("file://" + __dirname + "/source/index.html");

      const conc = await page.evaluate(() => {
        const conclude = document.querySelector('#conclude');
        const styles = window.getComputedStyle(conclude);
        if(styles.color === 'rgb(128, 0, 128)' && styles.textDecoration === 'underline solid rgb(128, 0, 128)'){
          return true;
        }
        return false;
      })
      expect(conc).toBeTruthy();
    })

});
