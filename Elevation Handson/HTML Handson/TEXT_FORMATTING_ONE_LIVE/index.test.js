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

  test("Count of b, strong, i, em, small, mark, p, sub, sup, br tag", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const tagsCnt = await page.evaluate(() => {
      const b = document.querySelectorAll("b").length;
      const strong = document.querySelectorAll("strong").length;
      const i = document.querySelectorAll("i").length;
      const em = document.querySelectorAll("em").length;
      const small = document.querySelectorAll("small").length;
      const mark = document.querySelectorAll("mark").length;
      const p = document.querySelectorAll("p").length;
      const sub = document.querySelectorAll("sub").length;
      const sup = document.querySelectorAll("sup").length;
      const br = document.querySelectorAll("br").length;
      if (
        b == 1 &&
        strong == 1 &&
        i == 1 &&
        em == 1 &&
        small == 1 &&
        mark == 1 &&
        p == 2 &&
        sub == 1 &&
        sup == 1 &&
        br == 6
      ) {
        return true;
      }
      return false;
    });
    expect(tagsCnt).toBeTruthy();
  });

  test("b tag id and content", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const boldTag = await page.evaluate(() => {
      const bold = document.querySelectorAll("b")[0];
      if (
        bold.id === "bold" &&
        bold.textContent === "The b element is used to make the text bold."
      ) {
        return true;
      }
      return false;
    });
    expect(boldTag).toBeTruthy();
  });

  test("Bold tag should be followed by br tag", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const brTag = await page.evaluate(() => {
      const bTag = document.querySelectorAll("b")[0];
      const br = document.querySelectorAll("br");
      const sibling = bTag.nextElementSibling;
      if (sibling && sibling.tagName === "BR" && sibling === br[0]) {
        return true;
      }
      return false;
    });
    expect(brTag).toBeTruthy();
  });

  test("Strong tag id and content, strong tag previous should be br", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const strongTag = await page.evaluate(() => {
      const strong = document.querySelectorAll("strong")[0];
      const br = document.querySelectorAll("br")[0];
      const sibling = strong.previousElementSibling;
      if (!sibling || sibling !== br) {
        return false;
      }
      if (
        strong.id === "strong" &&
        strong.textContent ===
          "The strong element defines text with strong importance. The content inside strong tag is typically displayed in bold."
      ) {
        return true;
      }
      return false;
    });
    expect(strongTag).toBeTruthy();
  });

  test("Strong tag should be followed by br tag", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const brTag = await page.evaluate(() => {
      const strongTag = document.querySelectorAll("strong")[0];
      const br = document.querySelectorAll("br");
      const sibling = strongTag.nextElementSibling;
      if (sibling && sibling.tagName === "BR" && sibling === br[1]) {
        return true;
      }
      return false;
    });
    expect(brTag).toBeTruthy();
  });

  test("i tag id and content", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const italicTag = await page.evaluate(() => {
      const italic = document.querySelectorAll("i")[0];
      const br = document.querySelectorAll("br")[1];
      const sibling = italic.previousElementSibling;
      if (!sibling || sibling !== br) {
        return false;
      }
      if (
        italic.id === "italic" &&
        italic.textContent ===
          "The i element defines a part of text in alternatice mood or voice. The content inside is displayed in italic."
      ) {
        return true;
      }
      return false;
    });
    expect(italicTag).toBeTruthy();
  });

  test("i tag should be followed by br tag", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const brTag = await page.evaluate(() => {
      const italicTag = document.querySelectorAll("i")[0];
      const br = document.querySelectorAll("br");
      const sibling = italicTag.nextElementSibling;
      if (sibling && sibling.tagName === "BR" && sibling === br[2]) {
        return true;
      }
      return false;
    });
    expect(brTag).toBeTruthy();
  });

  test("em tag id and content", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const emTag = await page.evaluate(() => {
      const em = document.querySelectorAll("em")[0];
      const br = document.querySelectorAll("br")[2];
      const sibling = em.previousElementSibling;
      if (!sibling || sibling !== br) {
        return false;
      }
      if (
        em.id === "emphasize" &&
        em.textContent ===
          "The em element defines a emphasized text. The content inside is typically displayed in italic."
      ) {
        return true;
      }
      return false;
    });
    expect(emTag).toBeTruthy();
  });

  test("em tag should be followed by br tag", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const brTag = await page.evaluate(() => {
      const emTag = document.querySelectorAll("em")[0];
      const br = document.querySelectorAll("br");
      const sibling = emTag.nextElementSibling;
      if (sibling && sibling.tagName === "BR" && sibling === br[3]) {
        return true;
      }
      return false;
    });
    expect(brTag).toBeTruthy();
  });

  test("small tag id and content", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const smallTag = await page.evaluate(() => {
      const small = document.querySelectorAll("small")[0];
      const br = document.querySelectorAll("br")[3];
      const sibling = small.previousElementSibling;
      if (!sibling || sibling !== br) {
        return false;
      }
      if (
        small.id === "small" &&
        small.textContent === "The small element defines some smaller text."
      ) {
        return true;
      }
      return false;
    });
    expect(smallTag).toBeTruthy();
  });

  test("small tag should be followed by br tag", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const brTag = await page.evaluate(() => {
      const smallTag = document.querySelectorAll("small")[0];
      const br = document.querySelectorAll("br");
      const sibling = smallTag.nextElementSibling;
      if (sibling && sibling.tagName === "BR" && sibling === br[4]) {
        return true;
      }
      return false;
    });
    expect(brTag).toBeTruthy();
  });

  test("mark tag id and content", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const markTag = await page.evaluate(() => {
      const mark = document.querySelectorAll("mark")[0];
      const br = document.querySelectorAll("br")[4];
      const sibling = mark.previousElementSibling;
      if (!sibling || sibling !== br) {
        return false;
      }
      if (
        mark.id === "mark" &&
        mark.textContent ===
          "The mark element defines text should be marked or highlighted."
      ) {
        return true;
      }
      return false;
    });
    expect(markTag).toBeTruthy();
  });

  test("mark tag should be followed by br tag", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const brTag = await page.evaluate(() => {
      const markTag = document.querySelectorAll("mark")[0];
      const br = document.querySelectorAll("br");
      const sibling = markTag.nextElementSibling;
      if (sibling && sibling.tagName === "BR" && sibling === br[5]) {
        return true;
      }
      return false;
    });
    expect(brTag).toBeTruthy();
  });

  test("Paragraph tag id and content", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const paraTag = await page.evaluate(() => {
      const pTag1 = document.querySelectorAll("p")[0];
      const pTag2 = document.querySelectorAll("p")[1];
      const br = document.querySelectorAll("br")[5];
      const siblingPtag1 = pTag1.previousElementSibling;
      let check = true;
      if (!siblingPtag1 || siblingPtag1 !== br) {
        check = false;
      }
      if (
        !pTag1.id === "para1" ||
        !pTag1.textContent ===
          "The sub element defines subscript text. Subscript text appears half a character below the normal line and is sometimes rendered in a smaller font."
      ) {
        check = false;
      }
      if (
        !pTag2.id === "para2" ||
        !pTag2.textContent ===
          "The sup element defines superscript text. Superscript text appears half a character above the normal line and is sometimes rendered in a smaller font."
      ) {
        check = false;
      }
      return check === true;
    });
    expect(paraTag).toBeTruthy();
  });

  test("First paragraph tag should be followed by second paragraph tag", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const paraTag = await page.evaluate(() => {
      const pTag1 = document.querySelectorAll("p")[0];
      const pTag2 = document.querySelectorAll("p")[1];
      const sibling = pTag1.nextElementSibling;
      if (sibling && sibling === pTag2 && pTag2.id === "para2") {
        return true;
      }
      return false;
    });
    expect(paraTag).toBeTruthy();
  });

  test("first p tag should contain sub tag", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const containSub = await page.evaluate(() => {
      const sub = document.querySelectorAll("sub")[0];
      const parent = sub.parentNode;
      if (parent && parent.tagName === "P" && parent.id === "para1") {
        return true;
      }
      return false;
    });
    expect(containSub).toBeTruthy();
  });

  test("sub tag id and content", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const subTag = await page.evaluate(() => {
      const sub = document.querySelectorAll("sub")[0];
      if (
        sub.id === "sub" &&
        sub.textContent === "half a character below the normal line"
      ) {
        return true;
      }
      return false;
    });

    expect(subTag).toBeTruthy();
  });

  test("second p tag should contain sup tag", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const containSup = await page.evaluate(() => {
      const sup = document.querySelectorAll("sup")[0];
      const parent = sup.parentNode;
      if (parent && parent.tagName === "P" && parent.id === "para2") {
        return true;
      }
      return false;
    });
    expect(containSup).toBeTruthy();
  });

  test("sup tag id and content", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const supTag = await page.evaluate(() => {
      const sup = document.querySelectorAll("sup")[0];
      if (
        sup.id === "sup" &&
        sup.textContent === "half a character above the normal line"
      ) {
        return true;
      }
      return false;
    });

    expect(supTag).toBeTruthy();
  });

  test("Second para tag next is null", async () => {
    await page.goto("file://" + __dirname + "/source/index.html");

    const pNext = await page.evaluate(() => {
      const p = document.querySelectorAll("p")[1];
      const sibling = p.nextElementSibling;
      if (sibling) {
        return false;
      }
      return true;
    });
    expect(pNext).toBeTruthy();
  });
});
