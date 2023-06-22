const puppeteer = require('puppeteer');
const path = require('path');
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

describe('Test project', () => {
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

  test(('count of tags'), async () =>{
    await page.goto('file://'+__dirname + '/source/index.html');

    const count = await page.evaluate(() => {
      const bTag = document.querySelectorAll('b').length;
      const pTag = document.querySelectorAll('p').length;
      const iTag = document.querySelectorAll('i').length;
      const subTag = document.querySelectorAll('sub').length;
      const supTag = document.querySelectorAll('sup').length;
      const markTag = document.querySelectorAll('mark').length;
      const strongTag = document.querySelectorAll('strong').length;
      if(bTag == 1 && pTag == 4 && iTag == 1 && subTag == 1 && supTag ==1 && markTag == 1 && strongTag == 1){
        return true;
      }
      return false;
    })
    expect(count).toBeTruthy();
  })

  test(('b tag content and next tag to b is p'), async () => {
    await page.goto('file://'+__dirname + '/source/index.html');

    const bTag = await page.evaluate(() => {
      const b = document.querySelectorAll('b')[0];
      let check = true;
      if(b.textContent !== 'Front End Technologies of Full Stack'){
        check = false;
      }
      const sibling = b.nextElementSibling;
      if(!sibling || !sibling.tagName === 'P'){
        check = false;
      }
      return check === true;
    })
    expect(bTag).toBeTruthy();
  })

  test(('first p tag content and id'), async () => {
    await page.goto('file://'+__dirname + '/source/index.html');

    const pTag = await page.evaluate(() => {
      const p = document.querySelectorAll('p')[0];
      if(p.id == "text1" && p.textContent === 'The part of the website orz visible to the user is known as the front end and a full stack developer is expected to know a set of languages and frameworks to execute the front end part of the website which are as follows.'){
        return true;
      }
      return false;
    })
    expect(pTag).toBeTruthy();
  })

  test(('strong tag should be next to first p tag'), async () => {
    await page.goto('file://'+__dirname + '/source/index.html');

    const pTagNext = await page.evaluate(() => {
      const pTag = document.querySelectorAll('p')[0];
      const sibling = pTag.nextElementSibling;
      if(sibling && sibling.tagName == 'STRONG'){
        return true;
      }
      return false;
    })
    expect(pTagNext).toBeTruthy();
  })

  test(('strong tag content and id'), async () => {
    await page.goto('file://'+__dirname + '/source/index.html');

    const strongCont = await page.evaluate(() => {
      const strong = document.querySelectorAll('strong')[0];
      if(strong.id === 'strong' && strong.textContent === '1. HTML ( Hypertext Markup Language )'){
        return true;
      }
      return false;
    })
    expect(strongCont).toBeTruthy();
  })

  test(('strong next is second p tag'), async () => {
    await page.goto('file://'+__dirname + '/source/index.html');

    const strongNext = await page.evaluate(() => {
      const strong = document.querySelectorAll('strong')[0];
      const sibling = strong.nextElementSibling;
      if(sibling && sibling.tagName === 'P'){
        return true;
      }
      return false;
    })
    expect(strongNext).toBeTruthy();
  })

  test(('second p tag content and id'), async () => {
    await page.goto('file://'+__dirname + '/source/index.html');

    const pTag = await page.evaluate(() => {
      const p = document.querySelectorAll('p')[1];
      if(p.id == "text2" && p.textContent === 'HTML is a markup language used for the content that will show up on the users end and it is a basic block of web development used to add words, paragraphs and tables to the webpage. HTML is picked for full stack enthusiasts who start from scratch'){
        return true;
      }
      return false;
    })
    expect(pTag).toBeTruthy();
  })

  test(('second para next is mark tag'), async () => {
    await page.goto('file://'+__dirname + '/source/index.html');

    const pTag = await page.evaluate(() => {
      const p = document.querySelectorAll('p')[1];
      const sibling = p.nextElementSibling;
      if(sibling && sibling.tagName === 'MARK'){
        return true;
      }
      return false;
    })
    expect(pTag).toBeTruthy();
  })

  test(('mark tag id and content'), async () => {
    await page.goto('file://'+__dirname + '/source/index.html');

    const markTag = await page.evaluate(() => {
      const mark = document.querySelectorAll('mark')[0];
      if(mark.id === 'mark' && mark.textContent === '2. CSS ( Cascade Styling Sheet )'){
        return true;
      }
      return false;
    })
    expect(markTag).toBeTruthy();
  })

  test(('mark tag next is p tag'), async () => {
    await page.goto('file://'+__dirname + '/source/index.html');

    const pTag = await page.evaluate (() => {
      const mark = document.querySelectorAll('mark')[0];
      const sibling = mark.nextElementSibling;
      if(sibling && sibling.tagName === 'P'){
        return true;
      }
      return false;
    })
    expect(pTag).toBeTruthy();
  })

  test(('third p tag content and id'), async () => {
    await page.goto('file://'+__dirname + '/source/index.html');

    const pTag = await page.evaluate(() => {
      const p = document.querySelectorAll('p')[2];
      if(p.id == "text3" && p.textContent === 'CSS is used to style the website to make it attractive and readable to the user. CSS includes properties to include border, margin, and padding to different elements of the website having different properties using class and id.'){
        return true;
      }
      return false;
    })
    expect(pTag).toBeTruthy();
  })

  test(('sup tag content and its parent'), async () => {
    await page.goto('file://'+__dirname + '/source/index.html');

    const supTag = await page.evaluate(() => {
      const sup = document.querySelectorAll('sup')[0];
      let check = true;
      if(sup.textContent !== 'is used to style the website to make it attractive and readable'){
        check = false;
      }
      const parent = sup.parentNode;
      if(!parent || parent.tagName !== 'P' || parent.id !== 'text3'){
        check = false;
      }
      return check === true;
    })
    expect(supTag).toBeTruthy();
  })

  test(('i tag is followed by third p tag'), async () => {
    await page.goto('file://'+__dirname + '/source/index.html');

    const para3Next = await page.evaluate(() => {
      const para = document.querySelectorAll('p')[2];
      const sibling = para.nextElementSibling;
      if(sibling && sibling.tagName === 'I'){
        return true;
      }
      return false;
    })
    expect(para3Next).toBeTruthy();
  })

  test(('i tag id and content'), async () => {
    await page.goto('file://'+__dirname + '/source/index.html');

    const iTag = await page.evaluate(() => {
      const i = document.querySelectorAll('i')[0];
      if(i.id === 'italic' && i.textContent === '3. JavaScript'){
        return true;
      }
      return false;
    })
    expect(iTag).toBeTruthy();
  })

  test(('i tag next is fourth p tag'), async () => {
    await page.goto('file://'+__dirname + '/source/index.html');

    const iNext = await page.evaluate(() => {
      const iTag = document.querySelectorAll('i')[0];
      const sibling  = iTag.nextElementSibling;
      if(sibling && sibling.tagName === 'P'){
        return true;
      }
      return false;
    })
    expect(iNext).toBeTruthy();
  })

  test(('fourth p tag id and content'), async () => {
    await page.goto('file://'+__dirname + '/source/index.html');

    const pCont = await page.evaluate (() => {
      const pTag = document.querySelectorAll('p')[3];
      if(pTag.id === 'text4' && pTag.textContent === 'Javascript is a scripting language used to increase the functionality and features of a website. Javascript manipulates the behaviour of the website along with the power to make it more interactive.'){
        return true;
      }
      return false;
    })
    expect(pCont).toBeTruthy();
  })

  test(('sub tag content and parent'), async () => {
    await page.goto('file://'+__dirname + '/source/index.html');

    const subTag = await page.evaluate(() => {
      const sub = document.querySelectorAll('sub')[0];
      const parent = sub.parentNode;
      let check = true;
      if(sub.textContent !== 'is a scripting language used to increase the functionality and features'){
        check = false;
      }
      if(!parent || parent.tagName !== 'P' || parent.id !== 'text4'){
        check = false;
      }
      return check === true;
    })
    expect(subTag).toBeTruthy();
  })

  test(('fourth p next sibling should be null'), async () => {
    await page.goto('file://'+__dirname + '/source/index.html');

    const pNext = await page.evaluate(() => {
      const p = document.querySelectorAll('p')[3];
      const sibling = p.nextElementSibling;
      if(sibling){
        return false;
      }
      return true;
    })
    expect(pNext).toBeTruthy();
  })

});