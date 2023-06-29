const puppeteer = require('puppeteer');
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

const launchBrowser = async () => await puppeteer.launch({ args: ["--no-sandbox"], headless: "new" });
const createPage = async (browser) => await browser.newPage();
const closeBrowser = async (browser) => await browser.close();
const closePage = async (page) => await page.close();

const folderPath = __dirname;

describe('Test Suite Title', () => {
  let browser, page, container;

  beforeAll(async () => {
    browser = await launchBrowser();
    page = await createPage(browser);
    await page.goto(`file://${folderPath}/source/index.html`);
    container = await page.$('#container');
  });

  afterAll(async () => {
    await closePage(page);
    await closeBrowser(browser);
  });

  test('Adding tasks', async () => {
    const tasks = ['Task 11', 'Task 22', 'Task 33'];

    for (const task of tasks) {
      await page.type('#todo-input', task);
      await page.click('#add-btn');
      await page.waitForSelector('.todo-item');
      const todoItems = await page.$$('.todo-item');
      // const h1 = await.page.$$('h1')
      // const 
      expect(todoItems.length).toBe(tasks.indexOf(task) + 1);
      const labelText = await todoItems[todoItems.length - 1].$eval('label', (label) => label.textContent);
      expect(labelText).toBe(task);
    }
    const todoItems = await page.$$('.todo-item');
    expect(todoItems.length).toBe(3);

    await page.click('.todo-item:nth-child(1) input[type="checkbox"]');
    await page.click('.todo-item:nth-child(2) input[type="checkbox"]');
    await page.click('.todo-item:nth-child(3) input[type="checkbox"]');

    await page.waitForTimeout(500);
    await page.click('#delete-btn');
  
  });
  
  test('Removing selected tasks', async () => {
    const tasks = ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5'];
  
    for (const task of tasks) {
      await page.type('#todo-input', task);
      await page.click('#add-btn');
      await page.waitForSelector('.todo-item');
    }
  
    await page.click('.todo-item:nth-child(1) input[type="checkbox"]');
    await page.click('.todo-item:nth-child(3) input[type="checkbox"]');
    await page.click('#delete-btn');
    await page.waitForTimeout(500);
  
    const remainingTasks = ['Task 2', 'Task 4', 'Task 5'];
    const todoItems = await page.$$('.todo-item');
    expect(todoItems.length).toBe(remainingTasks.length);
    for (let i = 0; i < todoItems.length; i++) {
      const labelText = await todoItems[i].$eval('label', (label) => label.textContent);
      expect(labelText).toBe(remainingTasks[i]);
    }
  
    await page.click('.todo-item:nth-child(1) input[type="checkbox"]');
    await page.click('.todo-item:nth-child(2) input[type="checkbox"]');
    await page.waitForTimeout(500);

    await page.click('#delete-btn');
  
    const remainingTodoItems = await page.$$('.todo-item');
    expect(remainingTodoItems.length).toBe(1);
    const labelText = await remainingTodoItems[0].$eval('label', (label) => label.textContent);
    expect(labelText).toBe('Task 5');
  });
  
  
});
