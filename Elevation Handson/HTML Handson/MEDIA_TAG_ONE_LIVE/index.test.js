const { JSDOM } = require('jsdom');
const { window } = new JSDOM();
globalThis.Node = window.Node;

const launchBrowser = async () => await puppeteer.launch();
const createPage = async browser => await browser.newPage();
const closeBrowser = async browser => await browser.close();
const closePage = async page => await page.close();
const puppeteer = require('puppeteer');
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });
const folderPath = __dirname;

function helper(title, fxn,time=5000) {
  describe('Test project', () => {
    let browser, page;

    beforeAll(async () => {
      browser = await puppeteer.launch({ args: ["--no-sandbox"], headless: "new" });
      page = await createPage(browser);
    });

    afterAll(async () => {
      await closePage(page);
      await closeBrowser(browser);
    });

    test(`${title}`, async () => {
      await page.goto(`file://${folderPath}/source/index.html`);
      const valid = await page.evaluate(fxn);
      expect(valid).toBeTruthy();
    },time);
  });
}
const checkTitle = ()=>{
  const title =document.querySelector('title').textContent;

  if (title == 'Webpage with Iframe, Audio, and Video')
  {return 1
  }
  return 0
}
const check1H1 = ()=>{
  const h1 =  document.querySelectorAll('h1')[0].textContent

  if (h1 == null)
  {
    throw('H1 doesnot exists')
  }else

 if(h1=='Webpage with Iframe, Audio, and Video')
 {
  return 1
 }
 return 0
}
const checkIframe = ()=>{
    const iframe = document.querySelector('iframe');
    if (iframe==null)
    {
      console.log('iframe is missing');
      return 0
    }
    const width = iframe.getAttribute('width')
    const height = iframe.getAttribute('height')
    const src = iframe.getAttribute('src')
    const aSrc = 'https://www.youtube.com/embed/LDUH4oWeI9A'
    if (! (src==aSrc && width=='560' && height=='315'  ))
    {
      console.log('iframe is missing some attributes or maybe some attributes are wrong');
    return  0
    }

    return 1

}
const checkAudio = ()=>{
  const audio = document.querySelector('audio');
  if (audio==null)
  {
    console.log('Audio is missing');
    return 0
  }

  const controls = audio.getAttribute('controls')
  const src = audio.getAttribute('src')
  const aSrc = 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3'

  if (! (src==aSrc  && controls!=null ))
  {
    console.log('Audio is missing some attributes or maybe some attributes are wrong');
   return  0
  }

  return 1

}
const checkVideo = ()=>{
  const video = document.querySelector('video');
  if (video==null)
  {
    console.log('Video is missing');
    return 0
  }
  const controls = video.getAttribute('controls')
  const src = video.querySelector('source').getAttribute('src')
  const type = video.querySelector('source').getAttribute('type')

  const aSrc = 'https://media.w3.org/2010/05/sintel/trailer.mp4'
  if (! ( controls=='true' && type=='video/mp4' && src==aSrc))
  {
    console.log('Video is missing some attributes or maybe some attributes are wrong');
   return  0
  }

  return 1
}
const checkOrder = ()=>{
  const body = document.querySelector('body').children

  const h1Elements = document.querySelectorAll('h1')
  const iframeElement = document.querySelector('iframe')
  const audioElement = document.querySelector('audio')
  const videoElement = document.querySelector('video')
  const br = document.querySelectorAll('br')
  if( body[0]==h1Elements[0] && body[1]==iframeElement && body[2]==br[0] && body[3]==audioElement && body[4]==br[1] && body[5]==videoElement)
  {
    return 1
  }
  return 0
}
helper("Title is 'Webpage with Iframe, Audio, and Video'",checkTitle)
helper("1st H1",check1H1)
helper("Iframe tag",checkIframe)
helper("Audio tag",checkAudio)
helper("Video tag",checkVideo)
helper("Order of elements",checkOrder)
