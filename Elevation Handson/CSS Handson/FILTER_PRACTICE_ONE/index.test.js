const puppeteer = require("puppeteer");
const { toMatchImageSnapshot } = require("jest-image-snapshot");
expect.extend({ toMatchImageSnapshot });

describe("CSS Text Formatting Live", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      args: ["--no-sandbox"],
      headless: true,
    });
  });
  
  afterAll(async () => {    
    await browser.close();
  });

  beforeEach(async () => {
    page = await browser.newPage();
    const cssFilePath = __dirname + "/source/index.css";
    await page.addStyleTag({ path: cssFilePath });
  });

  afterEach(async () => {
    await page.close();
  });

  test("Body font-family and background-color", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const body = await page.evaluate(() => {
      const b = document.querySelector("body");
      const styles = window.getComputedStyle(b);
      if(styles.fontFamily === 'Verdana, Geneva, Tahoma, sans-serif' && styles.backgroundColor === 'rgb(109, 232, 220)'){
        return true;
      }
      return false;
    });
    expect(body).toBeTruthy();
  });
  
  test("h1 font-size, text-align and color", async() => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const h1 = await page.evaluate(() => {
      const h = document.querySelector("h1");
      const styles = window.getComputedStyle(h);
      if(styles.fontSize === '50px' && styles.textAlign === 'center' && styles.color === 'rgb(255, 255, 255)'){
        return true;
      }
      return false;
    })
    expect(h1).toBeTruthy();
  })

  test("Class div1 margin-left", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const d = await page.evaluate(() => {
      const div = document.querySelector(".div1");
      const styles = window.getComputedStyle(div);
      if(styles.marginLeft === '300px'){
        return true;
      }
      return false;
    })
    expect(d).toBeTruthy();
  })

  test("Class img width, height and margin-left", async() => {
        await page.goto("file://" + __dirname + "/source/index.html");


    const d = await page.evaluate(() => {
      const img = document.querySelector(".img");
      const styles = window.getComputedStyle(img);
      if(styles.width === '200px' && styles.height === '200px' && styles.marginLeft === '3px'){
        return true;
      }
      return false;
    })
    expect(d).toBeTruthy();
  })

  test("Class one filter", async() => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const d =await page.evaluate(() => {
      const one = document.querySelector(".one");
      const styles = window.getComputedStyle(one);
      if(styles.filter === 'hue-rotate(90deg)'){
        return true;
      }
      return false;
    })
    expect(d).toBeTruthy();
  })

  test("Class two filter", async() => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const d = await page.evaluate(() => {
      const two = document.querySelector(".two");
      const styles = window.getComputedStyle(two);
      if(styles.filter === 'invert(1)'){
        return true;
      }
      return false;
    })
    expect(d).toBeTruthy();
  })

  test("Class three filter", async() => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const d = await page.evaluate(() => {
      const three = document.querySelector(".three");
      const styles = window.getComputedStyle(three);
      if(styles.filter === 'opacity(0.3)'){
        return true;
      }
      return false;
    })
    expect(d).toBeTruthy();
  })

  test("Class four filter", async() => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const d = await page.evaluate(() => {
      const four = document.querySelector(".four");
      const styles = window.getComputedStyle(four);
  
      if(styles.filter === 'saturate(8)'){
        return true;
      }
      return false;
    })
    expect(d).toBeTruthy();
  })

  test("Class five filter", async() => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const d = await page.evaluate(() => {
      const five = document.querySelector(".five");
      const styles = window.getComputedStyle(five);
      if(styles.filter === 'sepia(1)'){
        return true;
      }
      return false;
    })
    expect(d).toBeTruthy();
  })

  test("Span position, bottom, left and color", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");
    
    const d = await page.evaluate(() => {
      const span = document.querySelector("span");
      const styles = window.getComputedStyle(span);
      if(styles.position === 'relative' && styles.bottom === '100px' && styles.left === '50px' && styles.color === 'rgb(59, 144, 228)'){
        return true;
      }
      return false;
    })
    expect(d).toBeTruthy();
  })

});
