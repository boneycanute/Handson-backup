const puppeteer = require("puppeteer");
const path = require("path");
const { toMatchImageSnapshot } = require("jest-image-snapshot");
expect.extend({ toMatchImageSnapshot });

describe("Test project", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({ args: ["--no-sandbox"], headless: "new" });
  });

  afterAll(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    page = await browser.newPage();
  });

  afterEach(async () => {
    await page.close();
  });

  test("Count of anchor tags should be 4", async () => {
    await page.goto("file://"+__dirname + '/source/index.html');

    const anchorCnt = await page.evaluate(() => {
      return document.querySelectorAll("a").length;
    });
    expect(anchorCnt).toBe(4);
  });

  test("Text Content of anchor tags", async () => {
    await page.goto("file://"+__dirname + '/source/index.html');

    const anchorCnt = await page.evaluate(() => {
      const text1 = document.querySelectorAll("a")[0].textContent;
      const text2 = document.querySelectorAll("a")[1].textContent;
      const text3 = document.querySelectorAll("a")[2].textContent;
      const text4 = document.querySelectorAll("a")[3].textContent;

      if (
        text1 === "Go to image 1" &&
        text2 === "Go to image 2" &&
        text3 === "Go to image 3" &&
        text4 === "Go to image 4"
      ) {
        return true;
      }
      return false;
    });
    expect(anchorCnt).toBeTruthy();
  });

  test("HREF of all anchor tags", async () => {
    await page.goto("file://"+__dirname + '/source/index.html');

    const anchorCnt = await page.evaluate(() => {
      const anchorId1 = document.querySelectorAll("a")[0].href;
      const anchorId2 = document.querySelectorAll("a")[1].href;
      const anchorId3 = document.querySelectorAll("a")[2].href;
      const anchorId4 = document.querySelectorAll("a")[3].href;
      const len = anchorId1.length;
      const str1 = anchorId1[len - 2] + anchorId1[len - 1];
      const str2 = anchorId2[len - 2] + anchorId2[len - 1];
      const str3 = anchorId3[len - 2] + anchorId3[len - 1];
      const str4 = anchorId4[len - 2] + anchorId4[len - 1];
      if (str1 === "B1" && str2 === "B2" && str3 === "B3" && str4 === "B4") {
        return true;
      }
      return false;
    });
    expect(anchorCnt).toBeTruthy();
  });

  test("Count of paragraph tags should be 4", async () => {
    await page.goto("file://"+__dirname + '/source/index.html');

    const anchorCnt = await page.evaluate(() => {
      return document.querySelectorAll("p").length;
    });
    expect(anchorCnt).toBe(4);
  });

  test("Attributes of first paragraph tag", async () => {
    await page.goto("file://"+__dirname + '/source/index.html');

    const paraCont = await page.evaluate(() => {
      const pAtt = document.querySelectorAll("p")[0];
      return [pAtt.id, pAtt.textContent];
    });
    expect(paraCont).toEqual(["text1", "Image 1"]);
  });

  test("Attributes of second paragraph tag", async () => {
    await page.goto("file://"+__dirname + '/source/index.html');

    const paraCont = await page.evaluate(() => {
      const pAtt = document.querySelectorAll("p")[1];
      return [pAtt.id, pAtt.textContent];
    });
    expect(paraCont).toEqual(["text2", "Image 2"]);
  });

  test("Attributes of third paragraph tag", async () => {
    await page.goto("file://"+__dirname + '/source/index.html');

    const paraCont = await page.evaluate(() => {
      const pAtt = document.querySelectorAll("p")[2];
      return [pAtt.id, pAtt.textContent];
    });
    expect(paraCont).toEqual(["text3", "Image 3"]);
  });

  test("Attributes of forth paragraph tag", async () => {
    await page.goto("file://"+__dirname + '/source/index.html');

    const paraCont = await page.evaluate(() => {
      const pAtt = document.querySelectorAll("p")[3];
      return [pAtt.id, pAtt.textContent];
    });
    expect(paraCont).toEqual(["text4", "Image 4"]);
  });

  test("Count of image tags should be 4", async () => {
    await page.goto("file://"+__dirname + '/source/index.html');

    const imgCnt = await page.evaluate(() => {
      return document.querySelectorAll("img").length;
    });
    expect(imgCnt).toBe(4);
  });

  test("Attributes of first image tag", async () => {
    await page.goto("file://"+__dirname + '/source/index.html');

    const imgCnt = await page.evaluate(() => {
      const imageAttr = document.querySelectorAll("img")[0];
      return [imageAttr.width, imageAttr.height, imageAttr.id, imageAttr.src];
    });
    expect(imgCnt).toEqual([
      500,
      500,
      "B1",
      "https://images.unsplash.com/photo-1681317165845-dca7dd915eb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80head(web).svg",
    ]);
  });

  test("Attributes of second image tag", async () => {
    await page.goto("file://"+__dirname + '/source/index.html');

    const imgCnt = await page.evaluate(() => {
      const imageAttr = document.querySelectorAll("img")[1];
      return [imageAttr.width, imageAttr.height, imageAttr.id, imageAttr.src];
    });
    expect(imgCnt).toEqual([
      500,
      500,
      "B2",
      "https://images.unsplash.com/photo-1681306635626-3fbbf16b1016?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
    ]);
  });

  test("Attributes of third image tag", async () => {
    await page.goto("file://"+__dirname + '/source/index.html');

    const imgCnt = await page.evaluate(() => {
      const imageAttr = document.querySelectorAll("img")[2];
      return [imageAttr.width, imageAttr.height, imageAttr.id, imageAttr.src];
    });
    expect(imgCnt).toEqual([
      500,
      500,
      "B3",
      "https://images.unsplash.com/photo-1681186018205-bf4d312c2b90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
    ]);
  });

  test("Attributes of fourth image tag", async () => {
    await page.goto("file://"+__dirname + '/source/index.html');

    const imgCnt = await page.evaluate(() => {
      const imageAttr = document.querySelectorAll("img")[3];
      return [imageAttr.width, imageAttr.height, imageAttr.id, imageAttr.src];
    });
    expect(imgCnt).toEqual([
      500,
      500,
      "B4",
      "https://images.unsplash.com/photo-1681138568071-d5ad7f3fd4e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
    ]);
  });

  test("After 4th anchor tag there should be a br tag", async () => {
    await page.goto("file://"+__dirname + '/source/index.html');

    const brCnt = await page.evaluate(() => {
      const anchorTag = document.querySelectorAll("a");
      const brTag = anchorTag[3].nextElementSibling;
      if (brTag && brTag.tagName === "BR") {
        return true;
      }
      return false;
    });
    expect(brCnt).toBeTruthy();
  });

  test("After first br tag there should be a paragraph tag", async () => {
    await page.goto("file://"+__dirname + '/source/index.html');

    const paraCnt = await page.evaluate(() => {
      const brTag = document.querySelectorAll("br");
      const paraTag = brTag[0].nextElementSibling;
      if (paraTag && paraTag.tagName === "P") {
        return true;
      }
      return false;
    });
    expect(paraCnt).toBeTruthy();
  });

  test("After first paragraph tag there should a image tag", async () => {
    await page.goto("file://"+__dirname + '/source/index.html');

    const imageCnt = await page.evaluate(() => {
      const paraTag = document.querySelectorAll("p");
      const imageTag = paraTag[0].nextElementSibling;
      if (imageTag && imageTag.tagName === "IMG") {
        return true;
      }
      return false;
    });
    expect(imageCnt).toBeTruthy();
  });

  test("After first image tag there should be a br tag", async () => {
    await page.goto("file://"+__dirname + '/source/index.html');

    const brCnt = await page.evaluate(() => {
      const imageTag = document.querySelectorAll("img");
      const brTag = imageTag[0].nextElementSibling;
      if (brTag && brTag.tagName === "BR") {
        return true;
      }
      return false;
    });
    expect(brCnt).toBeTruthy();
  });

  test("After second br tag there should be a paragraph tag", async () => {
    await page.goto("file://"+__dirname + '/source/index.html');

    const paraCnt = await page.evaluate(() => {
      const brTag = document.querySelectorAll("br");
      const paraTag = brTag[1].nextElementSibling;
      if (paraTag && paraTag.tagName === "P") {
        return true;
      }
      return false;
    });
    expect(paraCnt).toBeTruthy();
  });

  test("After second p tag there should be a image tag", async () => {
    await page.goto("file://"+__dirname + '/source/index.html');

    const imageCnt = await page.evaluate(() => {
      const paraTag = document.querySelectorAll("p");
      const imageTag = paraTag[1].nextElementSibling;
      if (imageTag && imageTag.tagName === "IMG") {
        return true;
      }
      return false;
    });
    expect(imageCnt).toBeTruthy();
  });

  test("After second image tag there should be a br tag", async () => {
    await page.goto("file://"+__dirname + '/source/index.html');

    const brCnt = await page.evaluate(() => {
      const imageTag = document.querySelectorAll("img");
      const brTag = imageTag[1].nextElementSibling;
      if (brTag && brTag.tagName === "BR") {
        return true;
      }
      return false;
    });
    expect(brCnt).toBeTruthy();
  });

  test("After third br tag there should be a paragraph tag", async () => {
    await page.goto("file://"+__dirname + '/source/index.html');

    const paraCnt = await page.evaluate(() => {
      const brTag = document.querySelectorAll("br");
      const paraTag = brTag[2].nextElementSibling;
      if (paraTag && paraTag.tagName === "P") {
        return true;
      }
      return false;
    });
    expect(paraCnt).toBeTruthy();
  });

  test("After 3rd paragraph tag there should be a image tag", async () => {
    await page.goto("file://"+__dirname + '/source/index.html');

    const imageCnt = await page.evaluate(() => {
      const paraTag = document.querySelectorAll("p");
      const imageTag = paraTag[2].nextElementSibling;
      if (imageTag && imageTag.tagName === "IMG") {
        return true;
      }
      return false;
    });
    expect(imageCnt).toBeTruthy();
  });

  test("After 3rd image tag there should be a br tag", async () => {
    await page.goto("file://"+__dirname + '/source/index.html');

    const brCnt = await page.evaluate(() => {
      const imageTag = document.querySelectorAll("img");
      const brTag = imageTag[2].nextElementSibling;
      if (brTag && brTag.tagName === "BR") {
        return true;
      }
      return false;
    });
    expect(brCnt).toBeTruthy();
  });

  test("After 4th br tag there should be a paragraph tag", async () => {
    await page.goto("file://"+__dirname + '/source/index.html');

    const paraCnt = await page.evaluate(() => {
      const brTag = document.querySelectorAll("br");
      const paraTag = brTag[3].nextElementSibling;
      if (paraTag && paraTag.tagName === "P") {
        return true;
      }
      return false;
    });
    expect(paraCnt).toBeTruthy();
  });

  test("After 4th paragraph tag there should be a image tag", async () => {
    await page.goto("file://"+__dirname + '/source/index.html');

    const imageCnt = await page.evaluate(() => {
      const paraTag = document.querySelectorAll("p");
      const imageTag = paraTag[3].nextElementSibling;
      if (imageTag && imageTag.tagName === "IMG") {
        return true;
      }
      return false;
    });
    expect(imageCnt).toBeTruthy();
  });

  test("There should be nothing after 4th image tag", async () => {
    await page.goto("file://"+__dirname + '/source/index.html');

    const imgNext = await page.evaluate(() => {
      const img = document.querySelectorAll("img")[3];
      const sibling = img.nextElementSibling;
      if (sibling) {
        return false;
      }
      return true;
    });
    expect(imgNext).toBeTruthy();
  });
});