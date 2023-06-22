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

    test(('I1 width, height and border'), async () => {
      await page.goto("file://" + __dirname + "/source/index.html");

      const img = await page.evaluate(() => {
        const i = document.querySelector('#I1');
        const styles = getComputedStyle(i);
        if(styles.width === '500px' && styles.height === '500px' && styles.border === '1px solid rgb(0, 0, 0)'){
          return true;
        }
        return false;
      })
      expect(img).toBeTruthy();
    })

    test(('I2 width, height and border'), async () => {
      await page.goto("file://" + __dirname + "/source/index.html");

      const img = await page.evaluate(() => {
        const i = document.querySelector('#I2');
        const styles = getComputedStyle(i);
        if(styles.width === '500px' && styles.height === '500px' && styles.border === '1px solid rgb(0, 0, 0)'){
          return true;
        }
        return false;
      })
      expect(img).toBeTruthy();
    })

    test(('I3 width, height and border'), async () => {
      await page.goto("file://" + __dirname + "/source/index.html");

      const img = await page.evaluate(() => {
        const i = document.querySelector('#I3');
        const styles = getComputedStyle(i);
        if(styles.width === '500px' && styles.height === '500px' && styles.border === '1px solid rgb(0, 0, 0)'){
          return true;
        }
        return false;
      })
      expect(img).toBeTruthy();
    })

    test(('I4 width, height and border'), async () => {
      await page.goto("file://" + __dirname + "/source/index.html");

      const img = await page.evaluate(() => {
        const i = document.querySelector('#I4');
        const styles = getComputedStyle(i);
        if(styles.width === '500px' && styles.height === '500px' && styles.border === '1px solid rgb(0, 0, 0)'){
          return true;
        }
        return false;
      })
      expect(img).toBeTruthy();
    })

    test(('a, anchor tag text-decoration and backgroud-color'), async () => {
      await page.goto("file://" + __dirname + "/source/index.html");

      const anchor = await page.evaluate(() => {
        const a = document.querySelector('a');
        const styles = getComputedStyle(a);
        if(styles.textDecoration === 'none solid rgb(0, 0, 238)' && styles.backgroundColor === 'rgb(255, 255, 0)'){
          return true;
        }
        return false;
      })
      expect(anchor).toBeTruthy();
    })

    test(('Para, color and font-size'), async () => {
      await page.goto("file://" + __dirname + "/source/index.html");

      const para = await page.evaluate(() => {
        const p = document.querySelector('.para');
        const styles = getComputedStyle(p);
        if(styles.color === 'rgb(128, 0, 128)' && styles.fontSize === '18px'){
          return true;
        }
        return false;
      })
      expect(para).toBeTruthy();
    })

});

