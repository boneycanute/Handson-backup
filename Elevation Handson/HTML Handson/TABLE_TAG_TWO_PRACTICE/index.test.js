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
  const title = document.querySelector('title').textContent
  if(title=='Tables with rowspan/colspan practice2')
  {
    return 1
  }return 0
}
const checkAttibutes =()=>{
    // Test that the script sets the innerHTML of the #app element to "Hello, World!"
    const table =document.querySelector('table')
    if (table == null)
    {
      throw('Table doesnot exists')
    }else
  {
    const border = document.querySelector('table').getAttribute('border')
    const cellspacing  = document.querySelector('table').getAttribute('cellspacing')
    const cellpadding = document.querySelector('table').getAttribute('cellpadding')
    const bgcolor = document.querySelector('table').getAttribute('bgcolor')
    const align = document.querySelector('table').getAttribute('align')
    if (table && border=='2'&& cellpadding=='4' && cellspacing=='4' && align=='center' && bgcolor == 'skyblue')
    {
      return 1
    }return 0
}}
const checkThead = ()=>{
  let ans = 0
  const thread = document.querySelector('thead');
  if (thread!=null)
  {
    ans = 1
  }

  const trs =  document.querySelector('thead').querySelectorAll('tr')
  if (trs.length!=2)
  {
    throw('some trs are missing in row 1')
  }

  const th1 = trs[0].querySelectorAll('th')
  const th2 = trs[1].querySelectorAll('th')
  if (th1[0].textContent=='Name' && th1[1].textContent=='Grades'&& th1[2].textContent=='Average' && th1[0].getAttribute('rowspan')=='2'&& th1[1].getAttribute('colspan')=='3' && th1[2].getAttribute('rowspan')=='2')
  {
    ans = 1
  }
  else
  {
    throw('Either the content is wrong or missing in 1st row 1st tr')

  }
  if (th2[0].textContent=='English' && th2[1].textContent=='Computer'&& th2[2].textContent=='Math' )
  {
    ans =1
  }else
  {
    throw('Either the content is wrong or missing in 1st row 2nd tr')

  }

  return ans
}
const checkTbody = ()=>{
  let ans = 0
  const tbody = document.querySelector('tbody');

  if (tbody!=null)
  {
    ans = 1
  }
  else
  {
    throw('Tbody doesnot exsists')
  }




  const trs = document.querySelector('tbody').querySelectorAll('tr');
  if (trs.length==3)
  {
    const td1 = trs[0].querySelectorAll('td')
    const td2 = trs[1].querySelectorAll('td')
    const td3 = trs[2].querySelectorAll('td')
    if (td1.length!=5)
    {
      throw('missing in tr1')
    }
    if (td2.length!=3)
    {
      throw('missing in tr2')
    }

    if (td3.length!=5)
    {
      throw('missing in tr3')
    }
    if (td1[0].textContent=='John Doe' && td1[1].textContent=='85' && td1[2].textContent=='90' && td1[3].textContent=='80'&& td1[4].textContent=='85' && td1[0].getAttribute('rowspan')=='2' &&  td1[4].getAttribute('rowspan')=='2')
    {
      ans = 1
    }
    else
    {
      throw('either content is wrong or the colspan or rowspan are missing in tbody row 1')

    }

    if (td2[0].textContent=='90' && td2[1].textContent=='80' && td2[2].textContent=='90' )
    {
      ans = 1
    }
    else
    {
      throw(' content is wrong in tbody row 2')

    }


    if (td3[0].textContent=='Williamson' && td3[1].textContent=='95' && td3[2].textContent=='85'&& td3[3].textContent=='90'&& td3[4].textContent=='90' )
    {
      ans = 1
    }
    else
    {
      throw(' content is wrong in tbody row 3')

    }
  }
  else
  {
    throw('Trs are missing or extra')
  }


return ans
}

helper('Title',checkTitle)
helper('Table with some attributes',checkAttibutes)
helper('Thead in the table',checkThead)
helper('Tbody in the table',checkTbody)
/*

You are given an array of variable pairs equations and an array of real numbers values, where equations[i] = [Ai, Bi] and values[i] represent the equation Ai / Bi = values[i]. Each Ai or Bi is a string that represents a single variable.

You are also given some queries, where queries[j] = [Cj, Dj] represents the jth query where you must find the answer for Cj / Dj = ?.

Return the answers to all queries. If a single answer cannot be determined, return -1.0.

Note: The input is always valid. You may assume that evaluating the queries will not result in division by zero and that there is no contradiction.

 

Example 1:

Input: equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
Output: [6.00000,0.50000,-1.00000,1.00000,-1.00000]
Explanation: 
Given: a / b = 2.0, b / c = 3.0
queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ?
return: [6.0, 0.5, -1.0, 1.0, -1.0 ]
Example 2:

Input: equations = [["a","b"],["b","c"],["bc","cd"]], values = [1.5,2.5,5.0], queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]
Output: [3.75000,0.40000,5.00000,0.20000]
Example 3:

Input: equations = [["a","b"]], values = [0.5], queries = [["a","b"],["b","a"],["a","c"],["x","y"]]
Output: [0.50000,2.00000,-1.00000,-1.00000]
 

Constraints:

1 <= equations.length <= 20
equations[i].length == 2
1 <= Ai.length, Bi.length <= 5
values.length == equations.length
0.0 < values[i] <= 20.0
1 <= queries.length <= 20
queries[i].length == 2
1 <= Cj.length, Dj.length <= 5
Ai, Bi, Cj, Dj consist of lower case English letters and digits.


from collections import defaultdict as dq

class Solution:
    def dfs(self,cur,des,visited,grid):
      if cur==des:
        return [1,1]
      visited[cur] = 1
      for i in grid[cur]:
        node = i[0]
        cost = i[1][1]
        check = i[1][0]
        if visited[node]==0:
          ans = self.dfs(node,des,visited,grid)
          if ans!=[-1,-1]:
            if check==1:
              return [ans[0],ans[1]*cost]
            else:
              return [ans[0]*cost,ans]
      return [-1,-1]

    def calcEquation(self, eq: List[List[str]], val: List[float], ques: List[List[str]]) -> List[float]:
      grid = dq(list)
      k = 0   
      fin  = []
      grid2 = dq(list)
      exist = dq(int)

      for i in eq:
        grid[i[0]].append([i[1],[0,val[k]]])
        grid[i[1]].append([i[0],[1,val[k]]])
        exist[i[0]]=1
        exist[i[1]] =1
        k+=1
      for i in ques:
        visited = dq(int)
        pos = i[0]
        des = i[1]
        if exist[pos]==0 or exsist[des]==0:
          ans.append(-1)
          continue
        ans = self.dfs(pos,des,visited,grid)        
        fin.append(ans[0]/ans[1])

      return fin
      
*/