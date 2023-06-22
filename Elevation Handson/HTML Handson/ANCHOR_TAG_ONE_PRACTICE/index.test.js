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

  test('Count of anchor tags should be 9', async () => {
    await page.goto("file://" + __dirname + '/source/index.html');

    const anchorCnt = await page.evaluate(() => {
      return document.querySelectorAll('a').length;
    })
    expect(anchorCnt).toBe(9);
  })

  test('First anchor tag content and id', async () => {
    await page.goto("file://" + __dirname + '/source/index.html');

    const anchorCnt = await page.evaluate(() => {
      const anchorTag = document.querySelectorAll('a')[0];
      if(anchorTag.textContent === 'Open in new Tab' && anchorTag.id === 'newtab'){
        return true;
      }
      return false;
    })
    expect(anchorCnt).toBeTruthy();
  })

  test('Second anchor tag content and id', async () => {
    await page.goto("file://" + __dirname + '/source/index.html');

    const anchorCnt = await page.evaluate(() => {
      const anchorTag = document.querySelectorAll('a')[1];
      if(anchorTag.textContent === 'Open in same Tab' && anchorTag.id === 'sametab'){
        return true;
      }
      return false;
    })
    expect(anchorCnt).toBeTruthy();
  })

  test('Third anchor tag content and id', async () => {
    await page.goto("file://" + __dirname + '/source/index.html');

    const anchorCnt = await page.evaluate(() => {
      const anchorTag = document.querySelectorAll('a')[2];
      if(anchorTag.textContent === 'Mail Us' && anchorTag.id === 'mailus'){
        return true;
      }
      return false;
    })
    expect(anchorCnt).toBeTruthy();
  })

  test('Fourth anchor tag content', async () => {
    await page.goto("file://" + __dirname + '/source/index.html');

    const anchorCnt = await page.evaluate(() => {
      const anchorTag = document.querySelectorAll('a')[3];
      if(anchorTag.textContent === 'Call Us' && anchorTag.id === 'callus'){
        return true;
      }
      return false;
    })
    expect(anchorCnt).toBeTruthy();
  })

  test('First anchor tag href', async () => {
    await page.goto("file://" + __dirname + '/source/index.html');

    const anchorCnt = await page.evaluate(() => {
      return document.querySelectorAll('a')[0].href;
    })
    expect(anchorCnt).toBe("https://www.prepbytes.com/");
  })

  test('Second anchor tag href', async () => {
    await page.goto("file://" + __dirname + '/source/index.html');

    const anchorCnt = await page.evaluate(() => {
      return document.querySelectorAll('a')[1].href;
    })
    expect(anchorCnt).toBe("https://www.prepbytes.com/");
  })

  test('Third anchor tag href', async () => {
    await page.goto("file://" + __dirname + '/source/index.html');

    const anchorCnt = await page.evaluate(() => {
      return document.querySelectorAll('a')[2].href;
    })
    expect(anchorCnt).toBe("mailto:abc@gmail.com");
  })

  test('Fourth anchor tag href', async () => {
    await page.goto("file://" + __dirname + '/source/index.html');

    const anchorCnt = await page.evaluate(() => {
      return document.querySelectorAll('a')[3].href;
    })
    expect(anchorCnt).toBe("tel:+911234567899");
  })

  test('First anchor tag target', async () => {
    await page.goto("file://" + __dirname + '/source/index.html');

    const anchorCnt = await page.evaluate(() => {
      return document.querySelectorAll('a')[0].target;
    })
    expect(anchorCnt).toBe("_blank");
  })

  test('Second anchor tag target', async () => {
    await page.goto("file://" + __dirname + '/source/index.html');

    const anchorCnt = await page.evaluate(() => {
      return document.querySelectorAll('a')[1].target;
    })
    expect(anchorCnt).toBe("_self");
  })

  test('Anchor tag with id newtab should be followed by anchor tag with id sametab', async() => {
    await page.goto("file://" + __dirname + '/source/index.html');
    
    const anchorCnt = await page.evaluate(() => {
      const firstAnchor = document.querySelectorAll('a')[0];
      const secondAnchor = firstAnchor.nextElementSibling;
      if(secondAnchor && secondAnchor.tagName === 'A' && secondAnchor.id === 'sametab'){
        return true;
      }
      return false;
    })
    expect(anchorCnt).toBeTruthy();
  })

  test('Anchor tag with id sametab should be followed by anchor tag with id mailus', async() => {
    await page.goto("file://" + __dirname + '/source/index.html');
    
    const anchorCnt = await page.evaluate(() => {
      const secondAnchor = document.querySelectorAll('a')[1];
      const thirdAnchor = secondAnchor.nextElementSibling;
      if(thirdAnchor && thirdAnchor.tagName === 'A' && thirdAnchor.id === 'mailus'){
        return true;
      }
      return false;
    })
    expect(anchorCnt).toBeTruthy();
  })

  test('Anchor tag with id mailus should be followed by anchor tag with id callus', async() => {
    await page.goto("file://" + __dirname + '/source/index.html');
    
    const anchorCnt = await page.evaluate(() => {
      const thirdAnchor = document.querySelectorAll('a')[2];
      const forthAnchor = thirdAnchor.nextElementSibling;
      if(forthAnchor && forthAnchor.tagName === 'A' && forthAnchor.id === 'callus'){
        return true;
      }
      return false;
    })
    expect(anchorCnt).toBeTruthy();
  })

  test('Anchor tag with id callus next should be null', async() => {
    await page.goto("file://" + __dirname + '/source/index.html');

    const anchorCnt = await page.evaluate(() => {
      const forthAnchor = document.querySelectorAll('a')[3];
      const last = forthAnchor.nextElementSibling;
      if(last){
        return false;
      }
      return true;
    })
    expect(anchorCnt).toBeTruthy();
  })

  test('Count of center tags is 2', async () => {
    await page.goto("file://" + __dirname + '/source/index.html');

    const anchorCnt = await page.evaluate(() => {
      return document.querySelectorAll('center').length;
    })
    expect(anchorCnt).toBe(2);
  })

  test(('All anchor tags should be enclosed within center tag'), async() => {
    await page.goto("file://" + __dirname + '/source/index.html');

    const anchorEnclosed = await page.evaluate(() => {
      const centerTag = document.querySelectorAll('center');
      const anchorTag = document.querySelectorAll('a');
      if(centerTag[0].contains(anchorTag[0]) && centerTag[0].contains(anchorTag[1]) && centerTag[0].contains(anchorTag[2]) && centerTag[0].contains(anchorTag[3]) && centerTag[1].contains(anchorTag[4]) && centerTag[1].contains(anchorTag[5]) && centerTag[1].contains(anchorTag[6]) && centerTag[1].contains(anchorTag[7]) && centerTag[1].contains(anchorTag[8])){
        return true;
      }
      return false;
    })
    expect(anchorEnclosed).toBeTruthy();
  })

  test(('First center tag should be followed by Br tag'), async () => {
    await page.goto("file://" + __dirname + '/source/index.html');

    const isBr = await page.evaluate(() => {
      const centerTag = document.querySelectorAll('center')[0];
      const brTag = centerTag.nextElementSibling;
      if(brTag && brTag.tagName === 'BR'){
        return true;
      }
      return false;
    })
    expect(isBr).toBeTruthy();
  })

  test('Text content of all anchor tags', async () => {
    await page.goto("file://" + __dirname + '/source/index.html');

    const anchorCnt = await page.evaluate(() => {
      const text1 = document.querySelectorAll('a')[4].textContent;
      const text2 = document.querySelectorAll('a')[5].textContent;
      const text3 = document.querySelectorAll('a')[6].textContent;
      const text4 = document.querySelectorAll('a')[7].textContent;

      if(text1 === 'Go to image 1' && text2 === 'Go to image 2' && text3 === 'Go to image 3' && text4 === 'Go to image 4'){
        return true;
      }
      return false;
    })
    expect(anchorCnt).toBeTruthy();
  })

  test('Href of all anchor tags', async () => {
    await page.goto("file://" + __dirname + '/source/index.html');

    const anchorCnt = await page.evaluate(() => {
      const anchorId5 = document.querySelectorAll('a')[4].href;
      const anchorId6 = document.querySelectorAll('a')[5].href;
      const anchorId7 = document.querySelectorAll('a')[6].href;
      const anchorId8 = document.querySelectorAll('a')[7].href;
      const anchorId9 = document.querySelectorAll('a')[8].href;
      const len = anchorId5.length;
      const size = anchorId9.length;
      const str1 = anchorId5[len-2] + anchorId5[len-1];
      const str2 = anchorId6[len-2] + anchorId6[len-1];
      const str3 = anchorId7[len-2] + anchorId7[len-1];
      const str4 = anchorId8[len-2] + anchorId8[len-1];
      const str5 = anchorId9[size-3] + anchorId9[size-2] + anchorId9[size-1];
      if(str1 === 'I1' && str2 === 'I2' && str3 === 'I3' && str4 === 'I4' && str5=='top'){
        return true;
      }
      return false;
    })
    expect(anchorCnt).toBeTruthy();
  })

  test('Count of paragraph tags is 4', async () => {
    await page.goto("file://" + __dirname + '/source/index.html');

    const anchorCnt = await page.evaluate(() => {
      return document.querySelectorAll('p').length;
    })
    expect(anchorCnt).toBe(4);
  })

  test('First paragraph tag attributes', async () => {
    await page.goto("file://" + __dirname + '/source/index.html');

    const paraCont = await page.evaluate(() => {
      const pAtt = document.querySelectorAll('p')[0];
      return [pAtt.id, pAtt.textContent];
    })
    expect(paraCont).toEqual(["text1", "Image 1"])
  })

  test('Second paragraph tag attributes', async () => {
    await page.goto("file://" + __dirname + '/source/index.html');

    const paraCont = await page.evaluate(() => {
      const pAtt = document.querySelectorAll('p')[1];
      return [pAtt.id, pAtt.textContent];
    })
    expect(paraCont).toEqual(["text2", "Image 2"])
  })

  test('Third paragraph tag attributes', async () => {
    await page.goto("file://" + __dirname + '/source/index.html');

    const paraCont = await page.evaluate(() => {
      const pAtt = document.querySelectorAll('p')[2];
      return [pAtt.id, pAtt.textContent];
    })
    expect(paraCont).toEqual(["text3", "Image 3"])
  })

  test('Fourth para tag attributes', async () => {
    await page.goto("file://" + __dirname + '/source/index.html');

    const paraCont = await page.evaluate(() => {
      const pAtt = document.querySelectorAll('p')[3];
      return [pAtt.id, pAtt.textContent];
    })
    expect(paraCont).toEqual(["text4", "Image 4"])
  })
  
  test('count of image tags is 4', async () => {
    await page.goto("file://" + __dirname + '/source/index.html');

    const imgCnt = await page.evaluate(() => {
      return document.querySelectorAll('img').length;
    })
    expect(imgCnt).toBe(4);
  })

  test('First image tag attributes', async () => {
    await page.goto("file://" + __dirname + '/source/index.html');

    const imgCnt = await page.evaluate(() => {
      const imageAttr = document.querySelectorAll('img')[0];
      return [imageAttr.width, imageAttr.height, imageAttr.id, imageAttr.src];
    })
    expect(imgCnt).toEqual([500, 500, "I1", "https://images.unsplash.com/photo-1680936613337-fc829882b375?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"]);
  })

  test('Second image tag attributes', async () => {
    await page.goto("file://" + __dirname + '/source/index.html');

    const imgCnt = await page.evaluate(() => {
      const imageAttr = document.querySelectorAll('img')[1];
      return [imageAttr.width, imageAttr.height, imageAttr.id, imageAttr.src];
    })
    expect(imgCnt).toEqual([500, 500, "I2", "https://images.unsplash.com/photo-1681206805985-143701648cad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"]);
  })

  test('Third image tag attributes', async () => {
    await page.goto("file://" + __dirname + '/source/index.html');

    const imgCnt = await page.evaluate(() => {
      const imageAttr = document.querySelectorAll('img')[2];
      return [imageAttr.width, imageAttr.height, imageAttr.id, imageAttr.src];
    })
    expect(imgCnt).toEqual([500, 500, "I3", "https://plus.unsplash.com/premium_photo-1675098651752-9a568b4e5f86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"]);
  })

  test('Fourth image tag attributes', async () => {
    await page.goto("file://" + __dirname + '/source/index.html');

    const imgCnt = await page.evaluate(() => {
      const imageAttr = document.querySelectorAll('img')[3];
      return [imageAttr.width, imageAttr.height, imageAttr.id, imageAttr.src];
    })
    expect(imgCnt).toEqual([500, 500, "I4", "https://images.unsplash.com/photo-1681115085351-4c207e8e4ff9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxODJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"]);
  })

  test(('First br tag should be followed by center tag'), async() => {
    await page.goto("file://" + __dirname + '/source/index.html');

    const centerCnt = await page.evaluate(() => {
      const brTag = document.querySelectorAll('br');
      const centerTag = brTag[0].nextElementSibling;
      if(centerTag && centerTag.tagName === 'CENTER'){
        return true;
      }
      return false;
    })
    expect(centerCnt).toBeTruthy();
  })

  test(('8th anchor tag should be followed by a br tag'), async () => {
    await page.goto("file://" + __dirname + '/source/index.html');

    const brCnt = await page.evaluate(() => {
      const anchorTag = document.querySelectorAll('a');
      const brTag = anchorTag[7].nextElementSibling;
      if(brTag && brTag.tagName === 'BR'){
        return true;
      }
      return false;
    })
    expect(brCnt).toBeTruthy();
  })

  test(('2nd br tag should be followed by paragraph tag'), async () => {
    await page.goto("file://" + __dirname + '/source/index.html');

    const paraCnt = await page.evaluate(() => {
      const brTag = document.querySelectorAll('br');
      const paraTag = brTag[1].nextElementSibling;
      if(paraTag && paraTag.tagName === 'P'){
        return true;
      }
      return false;
    })
    expect(paraCnt).toBeTruthy();
  })

  test(('1st paragraph tag should be followed by image tag'), async () => {
    await page.goto("file://" + __dirname + '/source/index.html');

    const imageCnt = await page.evaluate(() => {
      const paraTag = document.querySelectorAll('p');
      const imageTag = paraTag[0].nextElementSibling;
      if(imageTag && imageTag.tagName === 'IMG'){
        return true;
      }
      return false;
    })
    expect(imageCnt).toBeTruthy();
  })

  test(('1st image tag should be followed by br tag'), async () => {
    await page.goto("file://" + __dirname + '/source/index.html');

    const brCnt = await page.evaluate(() => {
      const imageTag = document.querySelectorAll('img');
      const brTag = imageTag[0].nextElementSibling;
      if(brTag && brTag.tagName === 'BR'){
        return true;
      }
      return false;
    })
    expect(brCnt).toBeTruthy();
  })

  test(('3rd br tag should be followed by paragraph tag'), async () => {
    await page.goto("file://" + __dirname + '/source/index.html');

    const paraCnt = await page.evaluate(() => {
      const brTag = document.querySelectorAll('br');
      const paraTag = brTag[2].nextElementSibling;
      if(paraTag && paraTag.tagName === 'P'){
        return true;
      }
      return false;
    })
    expect(paraCnt).toBeTruthy();
  })

  test(('2nd paragraph tag should be followed by image tag'), async () => {
    await page.goto("file://" + __dirname + '/source/index.html');

    const imageCnt = await page.evaluate(() => {
      const paraTag = document.querySelectorAll('p');
      const imageTag = paraTag[1].nextElementSibling;
      if(imageTag && imageTag.tagName === 'IMG'){
        return true;
      }
      return false;
    })
    expect(imageCnt).toBeTruthy();
  })

  test(('2nd image tag should be followed by br tag'), async () => {
    await page.goto("file://" + __dirname + '/source/index.html');

    const brCnt = await page.evaluate(() => {
      const imageTag = document.querySelectorAll('img');
      const brTag = imageTag[1].nextElementSibling;
      if(brTag && brTag.tagName === 'BR'){
        return true;
      }
      return false;
    })
    expect(brCnt).toBeTruthy();
  })

  test(('4th br tag should be followed by paragraph tag'), async () => {
    await page.goto("file://" + __dirname + '/source/index.html');

    const paraCnt = await page.evaluate(() => {
      const brTag = document.querySelectorAll('br');
      const paraTag = brTag[3].nextElementSibling;
      if(paraTag && paraTag.tagName === 'P'){
        return true;
      }
      return false;
    })
    expect(paraCnt).toBeTruthy();
  })

  test(('3rd paragraph tag should be followed by image tag'), async () => {
    await page.goto("file://" + __dirname + '/source/index.html');

    const imageCnt = await page.evaluate(() => {
      const paraTag = document.querySelectorAll('p');
      const imageTag = paraTag[2].nextElementSibling;
      if(imageTag && imageTag.tagName === 'IMG'){
        return true;
      }
      return false;
    })
    expect(imageCnt).toBeTruthy();
  })

  test(('Third image tag should be followed by br tag'), async () => {
    await page.goto("file://" + __dirname + '/source/index.html');

    const brCnt = await page.evaluate(() => {
      const imageTag = document.querySelectorAll('img');
      const brTag = imageTag[2].nextElementSibling;
      if(brTag && brTag.tagName === 'BR'){
        return true;
      }
      return false;
    })
    expect(brCnt).toBeTruthy();
  })

  test(('5th br tag should be followed by paragraph tag'), async () => {
    await page.goto("file://" + __dirname + '/source/index.html');

    const paraCnt = await page.evaluate(() => {
      const brTag = document.querySelectorAll('br');
      const paraTag = brTag[4].nextElementSibling;
      if(paraTag && paraTag.tagName === 'P'){
        return true;
      }
      return false;
    })
    expect(paraCnt).toBeTruthy();
  })

  test(('4th paragraph tag should be followed by br tag'), async () => {
    await page.goto("file://" + __dirname + '/source/index.html');

    const imageCnt = await page.evaluate(() => {
      const paraTag = document.querySelectorAll('p');
      const imageTag = paraTag[3].nextElementSibling;
      if(imageTag && imageTag.tagName === 'IMG'){
        return true;
      }
      return false;
    })
    expect(imageCnt).toBeTruthy();
  })

  test(('4th image tag should be followed by br tag'), async () => {
    await page.goto("file://" + __dirname + '/source/index.html');

    const brCnt = await page.evaluate(() => {
      const imageTag = document.querySelectorAll('img');
      const brTag = imageTag[3].nextElementSibling;
      if(brTag && brTag.tagName === 'BR'){
        return true;
      }
      return false;
    })
    expect(brCnt).toBeTruthy();
  })

  test(('6th br tag should be followed by anchor tag'), async () => {
    await page.goto("file://" + __dirname + '/source/index.html');

    const anchorCnt = await page.evaluate(() => {
      const brTag = document.querySelectorAll('br');
      const anchorTag = brTag[5].nextElementSibling;
      if(anchorTag && anchorTag.tagName === 'A'){
        return true;
      }
      return false;
    })
    expect(anchorCnt).toBeTruthy();
  })

  test(('Second center tag next should be null'), async () => {
    await page.goto("file://" + __dirname + '/source/index.html');

    const centerNext = await page.evaluate(() => {
      const center = document.querySelectorAll('center')[1];
      const sibling = center.nextElementSibling;
      if(sibling){
        return false;
      }
      return true;
    })
    expect(centerNext).toBeTruthy();
  })

  test(('Ninth anchor tag next is null'), async () => {
    await page.goto("file://" + __dirname + '/source/index.html');

    const anchorNext = await page.evaluate(() => {
      const anchor = document.querySelectorAll('a')[8];
      const sibling = anchor.nextElementSibling;
      if(sibling){
        return false;
      }
      return true;
    })
    expect(anchorNext).toBeTruthy();
  })

  test(('Third anchor tag next is null'), async () => {
    await page.goto("file://" + __dirname + '/source/index.html');

    const anchorNext = await page.evaluate(() => {
      const anchor = document.querySelectorAll('a')[3];
      const sibling = anchor.nextElementSibling;
      if(sibling){
        return false;
      }
      return true;
    })
    expect(anchorNext).toBeTruthy();
  })

});