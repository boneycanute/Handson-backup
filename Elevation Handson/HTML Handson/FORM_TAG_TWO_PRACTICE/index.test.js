const { JSDOM } = require('jsdom');
const { window } = new JSDOM();
globalThis.Node = window.Node;

const launchBrowser = async () => await puppeteer.launch();
const createPage = async browser => await browser.newPage();
const closeBrowser = async browser => await browser.close();
const closePage = async page => await page.close();

function helper(title, fxn) {
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
    });
  });
}
const check1H1 = ()=>{
  const h1 = document.querySelector('h1');
  const body = document.querySelector('body').children;
  if (h1==null)
  {
    throw('No h1 in the body')
  }

  if (h1.textContent=='Apply for Mango Company' && h1==body[0])
  {
    return 1
  }
  else
  {
    throw('Either the h1 content is wrong or it is not following the order')
  }
}

const checkForm = ()=>{
  const body = document.querySelector('body').children;
  const form = document.querySelector('form');
  if (form==null)
  {
    throw('Form is missing')
  }
  if (body[1]==form && form.getAttribute('action')=='result.html')
  {
    return 1
  }
  else
  {
    throw(' the form is wrong or it is not following the order')
  }
}


const checkLabel1 =()=>{
  const label = document.querySelectorAll('label')[0];
  const form = document.querySelector('form').children;
  if (label==null)
  {
    throw('1st label inside the form is missing')
  }

  if (label.textContent=='First Name' && label.getAttribute('for')=='fname' && label==form[0])
  {
    return 1
  }
  else
  {
    throw('Either the first name label content is wrong or the for is wrong or it is not following the order')
  }

}
const checkFname = ()=>{
  const input = document.querySelectorAll('input')[0];
  const form = document.querySelector('form').children;
  if (input==null)
  {
    throw('No input for first name inside the form')
  }
  if (input.getAttribute('type')=='text'&&input.getAttribute('id')=='fname' &&input.getAttribute('placeholder')=='first name' &&input.getAttribute('name')=='first name'  && form[1]==input)
  {
    return 1
  }
  else
  {
    throw('Either the first name input attributes are wrong  or it is not following the order')
  }

}
const checkBr0 = ()=>{
  const brs = document.querySelectorAll('br');
  const form = document.querySelector('form').children;
  if (brs==null)
  {
    throw('No Brs in Webpage')
  }
  if (brs[0]==form[2] && brs[1]==form[3])
  {
    return 1
  }
  else
  {
    throw('Either Brs after first name are missing or they dont follow the order')
  }

}

const checkLabel2 =()=>{
  const label = document.querySelectorAll('label')[1];
  const form = document.querySelector('form').children;
  if (label==null)
  {
    throw('Missing the label for the last name')
  }
  if (label.textContent=='Last Name' && label.getAttribute('for')=='lname' && label==form[4])
  {
    return 1
  }
  else
  {
    throw('Either the label content is wrong or the for is wrong or it is not following the order')
  }
}
const checkLname = ()=>{
  const input = document.querySelectorAll('input')[1];
  const form = document.querySelector('form').children;
  if (input==null)
  {
    throw('Missing the input for last name in the form')
  }
  if (input.getAttribute('type')=='text'&&input.getAttribute('id')=='lname' &&input.getAttribute('placeholder')=='last name' &&input.getAttribute('name')=='last name'  && form[5]==input)
  {
    return 1
  }
  else
  {
    throw('Either the input for last name is wrong or attributes are wrong  or it is not following the order')
  }

}
const checkBr1 = ()=>{
  const brs = document.querySelectorAll('br');
  const form = document.querySelector('form').children;
  if (brs==null)
  {
    throw('Missing brs after the last name input')
  }
  if (brs[2]==form[6] && brs[3]==form[7])
  {
    return 1
  }
  else
  {
    throw('Either brs are missing or they dont follow the order')
  }
}
const checkLabel3 = ()=>{
  const label = document.querySelectorAll('label')[2];
  const form = document.querySelector('form').children;
  if (label==null)
  {
    throw('No labels in the form')
  }
  if (label.textContent=='Email' && label.getAttribute('for')=='email' && label==form[8])
  {
    return 1
  }
  else
  {
    throw('Either the label for email is missing or wrong or the for is wrong or it is not following the order')
  }
}
const checkEmail = ()=>{
  const input = document.querySelectorAll('input')[2];
  const form = document.querySelector('form').children;
  if (input==null)
  {
    throw('Missing the input for email in the form')
  }
  if (input.getAttribute('type')=='email'&&input.getAttribute('id')=='email' &&input.getAttribute('placeholder')=='Email' &&input.getAttribute('name')=='email'  && form[9]==input)
  {
    return 1
  }
  else
  {
    throw('Either Missing the input for email or it is wrong  or it is not following the order')
  }
}

const checkBr2 = ()=>{
  const brs = document.querySelectorAll('br');
  const form = document.querySelector('form').children;
  if (brs==null)
  {
    throw('No brs in the form')
  }
  if (brs[4]==form[10] && brs[5]==form[11])
  {
    return 1
  }
  else
  {
    throw('Either brs after are missing after email input or they dont follow the order')
  }
}
const checkLabel4 = ()=>{
  const label = document.querySelectorAll('label')[3];
  const form = document.querySelector('form').children;
  if (label==null)
  {
    throw('No label in the form')
  }
  if (label.textContent=='Phone No.' && label.getAttribute('for')=='phone' && label==form[12])
  {
    return 1
  }
  else
  {
    throw('Either the label for Phone no. is wrong or the for is wrong or it is not following the order')
  }
}
const checkPhone = ()=>{
  const input = document.querySelectorAll('input')[3];
  const form = document.querySelector('form').children;
  if (input==null)
  {
    throw('Missing the input for the phone')
  }
  if (input.getAttribute('type')=='phone'&&input.getAttribute('id')=='phone' &&input.getAttribute('placeholder')=='phone no.' &&input.getAttribute('name')=='phone'  && form[13]==input)
  {
    return 1
  }
  else
  {
    throw('Either the Phone no input attributes are wrong  or it is not following the order')
  }
}
const checkBr3 = ()=>{
  const brs = document.querySelectorAll('br');
  const form = document.querySelector('form').children;

  if (brs==null)
  {
    throw('No brs in the form')
  }
  if (brs[6]==form[14] && brs[7]==form[15])
  {
    return 1
  }
  else
  {
    throw('Either brs after phone no are missing or they dont follow the order')
  }
}
const checkGender=() => {
  const form = document.querySelector('form').children
  const label = document.querySelectorAll('label')[4];
    if (label==null)
    {
      throw('No label of Gender in there')
    }
    if( !(label.textContent=='Gender :' && label==form[16]))
    {
      throw('Either the Gender label content is wrong  or it is not following the order')

    }
 
    const input1 = document.querySelectorAll('input')[4];
    if (input1==null)
    {
      throw('No input for the Men radio buttons')
    }

    if (!(input1.getAttribute('value')=='men' && input1.getAttribute('type')=='radio'&&input1.getAttribute('id')=='men'  &&input1.getAttribute('name')=='gender'  && form[17]==input1))
    {
      throw('Either the input 1 of radio buttons attributes are wrong  or it is not following the order')
    }
   
    const label1 = document.querySelectorAll('label')[5];
    if (label1==null)
    {
      throw('No label of Men in there')
    }
    if( !(label1.textContent=='Men' && label1.getAttribute('for')=='men' && label1==form[18]))
    {
      throw('Either the men label content is wrong or the for is wrong or it is not following the order')

    }
    

    const input2 = document.querySelectorAll('input')[5];
    if (input2==null)
    {
      throw('No input for the women radio buttons')
    }

    if (!(input2.getAttribute('value')=='women' && input2.getAttribute('type')=='radio'&&input2.getAttribute('id')=='women'  &&input2.getAttribute('name')=='gender'  && form[19]==input2))
    {
      throw('Either the input 2 of radio buttons attributes are wrong  or it is not following the order')
    }
   
    const label2 = document.querySelectorAll('label')[6];
    if (label2==null)
    {
      throw('No label of womem in there')
    }
    if( !(label2.textContent=='Women' && label2.getAttribute('for')=='women' && label2==form[20]))
    {
      throw('Either the women label content is wrong or the for is wrong or it is not following the order')

    }
    
    const input3 = document.querySelectorAll('input')[6];
    if (input3==null)
    {
      throw('No input for the others radio buttons')
    }

    if (!(input3.getAttribute('value')=='other' && input3.getAttribute('type')=='radio'&&input3.getAttribute('id')=='other'  &&input3.getAttribute('name')=='gender'  && form[21]==input3))
    {
      throw('Either the input 3 of radio buttons attributes are wrong  or it is not following the order')
    }
   
    const label3 = document.querySelectorAll('label')[7];
    if (label3==null)
    {
      throw('No label of other in there')
    }
    if( !(label3.textContent=='Other' && label3.getAttribute('for')=='other' && label3==form[22]))
    {
      throw('Either the other label content is wrong or the for is wrong or it is not following the order')

    }
   return true

    
}
const checkBr4 = ()=>{
  const brs = document.querySelectorAll('br');
  const form = document.querySelector('form').children;
  if (brs==null)
  {
    throw('No brs in the form')
  }
  if (brs[8]==form[23] && brs[9]==form[24])
  {
    return 1
  }
  else
  {
    throw('Either brsafter the radio buttons are missing or they dont follow the order')
  }

}

const checkAge = ()=>{
  const label = document.querySelectorAll('label')[8];
  const form = document.querySelector('form').children;
  if (label==null)
  {
    throw('No label inside the form')
  }
  if (!(label.textContent=='Age' && label.getAttribute('for')=='age' && label==form[25]))
  {
    throw('Either the Age label content is wrong or the for is wrong or it is not following the order')
  }
 

  const input = document.querySelectorAll('input')[7];
  if (input==null)
  {
    throw('No input inside the form')
  }
  if (input.getAttribute('type')=='number'&&input.getAttribute('id')=='age'&&input.getAttribute('min')=='1'   &&input.getAttribute('max')=='50'  &&input.getAttribute('name')=='age'  && form[26]==input)
  {
    return 1
  }
  else
  {
    throw('Either the Age input attributes are wrong  or it is not following the order')
  }

}

const checkBr5 = ()=>{
  const brs = document.querySelectorAll('br');
  const form = document.querySelector('form').children;
  if (brs==null)
  {
    throw('No brs in the form')
  }
  if (brs[10]==form[27] && brs[11]==form[28])
  {
    return 1
  }
  else
  {
    throw('Either brs after Age input are missing or they dont follow the order')
  }

}

const checkDob = ()=>{
  const label = document.querySelectorAll('label')[9];
  const form = document.querySelector('form').children;
  if (label==null)
  {
    throw('No label inside the form')
  }
  if (!(label.textContent=='Date of Birth' && label.getAttribute('for')=='dob' && label==form[29]))
  {
    throw('Either the DOB label content is wrong or the for is wrong or it is not following the order')
  }
 

  const input = document.querySelectorAll('input')[8];
  if (input==null)
  {
    throw('No input inside the form')
  }
  if (input.getAttribute('type')=='date'&&input.getAttribute('id')=='dob'&&input.getAttribute('name')=='dob'  && form[30]==input)
  {
    return 1
  }
  else
  {
    throw('Either the Date input attributes are wrong  or it is not following the order')
  }

}
const checkBr6 = ()=>{
  const brs = document.querySelectorAll('br');
  const form = document.querySelector('form').children;
  if (brs==null)
  {
    throw('No brs in the form')
  }
  if (brs[12]==form[31] && brs[13]==form[32])
  {
    return 1
  }
  else
  {
    throw('Either brs after date input are missing or they dont follow the order')
  }


}
const checkSelect = ()=>{

  const label = document.querySelectorAll('label')[10];
  const form = document.querySelector('form').children;
  if (label==null)
  {
    throw('No label inside the form')
  }
  if (!(label.textContent=='Select the role:' && label.getAttribute('for')=='role' && label==form[33]))
  {
    throw('Either the DOB label content is wrong or the for is wrong or it is not following the order')
  }
 
  const select = document.querySelectorAll('select')[0];
  if (select==null)
  {
    throw('select is missing')
  }
  // throw(`${select.getAttribute('name')},${select.getAttribute('id')}`)
  if (!(select.getAttribute('name')=='role' && select.getAttribute('id')=='role'))
  {
    throw('Attribtues of select are not correct')
  }


  const optgrp = select.querySelectorAll('optgroup')
  if (!(optgrp.length==2 && optgrp[0].getAttribute('label')=='Technical Role' && optgrp[1].getAttribute('label')=='Other Role' && select.children[0]==optgrp[0] && select.children[1]==optgrp[1]))
  {
    throw('either the opt grp are extra or missing , or the attributes of the optgrp is not correct and third case maybe that they dont follow the order')
  }

  let opt =[0,0] 
  opt[0] = optgrp[0].querySelectorAll('option')
  opt[1] = optgrp[1].querySelectorAll('option')

  if (!(opt[0].length==3 &&opt[1].length==3))
  {
    throw('some options are missing in this select')
  }


  if (!(opt[0][0].getAttribute('value')=='tce' &&opt[0][0].textContent=='Techinical Content Engineer' && opt[0][1].getAttribute('value')=='sde' &&opt[0][1].textContent=='Software Developement Engineer'  && opt[0][2].getAttribute('value')=='graphic designer' &&opt[0][2].textContent=='Graphic designer' ))
  {
    throw('the content of the of first opt group is wrong or the order is wrong')
  }
  if (!(opt[1][0].getAttribute('value')=='consultant' &&opt[1][0].textContent=='Consultant' && opt[1][1].getAttribute('value')=='Sales' &&opt[1][1].textContent=='Salesperson'  && opt[1][2].getAttribute('value')=='analyst' &&opt[1][2].textContent=='Buisness Analyst' ))
  {
    throw('the content of the of second opt group is wrong or the order is wrong')
  }

  if (form[34]!=select)
  {
    throw('The select donot follow the order')

  }
  return 1


}
const checkBr7 = ()=>{
  const brs = document.querySelectorAll('br');
  const form = document.querySelector('form').children;
  if (brs==null)
  {
    throw('No brs in the form')
  }
  if (brs[14]==form[35] && brs[15]==form[36])
  {
    return 1
  }
  else
  {
    throw('Either brs after select are missing or they dont follow the order')
  }
}
const checkBoxes=() => {
  const form = document.querySelector('form').children
  const label = document.querySelectorAll('label')[11];
    if (label==null)
    {
      throw('No label of Checkboxes in there')
    }
    if( !(label.textContent=='Skills :' && label==form[37]))
    {
      throw('Either the Checkbox label content is wrong  or it is not following the order')

    }
 
    const input1 = document.querySelectorAll('input')[9];
    if (input1==null)
    {
      throw('No input for the dsa Check boxes')
    }

    if (!(input1.getAttribute('value')=='dsa' && input1.getAttribute('type')=='checkbox'&&input1.getAttribute('id')=='dsa'  &&input1.getAttribute('name')=='skills'  && form[38]==input1))
    {
      throw('Either the input 1 of checkboxes attributes are wrong  or it is not following the order')
    }
   
    const label1 = document.querySelectorAll('label')[12];
    if (label1==null)
    {
      throw('No label of dsa in there')
    }
    if( !(label1.textContent=='Data structures and Algorithms' && label1.getAttribute('for')=='dsa' && label1==form[39]))
    {
      throw('Either the dsa label content is wrong or the for is wrong or it is not following the order')

    }
    

    const input2 = document.querySelectorAll('input')[10];
    if (input2==null)
    {
      throw('No input for the full stack radio buttons')
    }

    if (!(input2.getAttribute('value')=='Full Stack' && input2.getAttribute('type')=='checkbox'&&input2.getAttribute('id')=='fullStack'  &&input2.getAttribute('name')=='skills'  && form[40]==input2))
    {
      throw('Either the input 2 of checkboxes attributes are wrong  or it is not following the order')
    }
   
    const label2 = document.querySelectorAll('label')[13];
    if (label2==null)
    {
      throw('No label of full stack in there')
    }
    if( !(label2.textContent=='Full Stack' && label2.getAttribute('for')=='fullStack' && label2==form[41]))
    {
      throw('Either the full stack label content is wrong or the for is wrong or it is not following the order')

    }
    
    const input3 = document.querySelectorAll('input')[11];
    if (input3==null)
    {
      throw('No input for the Core subjects checkbox')
    }

    if (!(input3.getAttribute('value')=='Core Subjects' && input3.getAttribute('type')=='checkbox'&&input3.getAttribute('id')=='CoreSubjects'  &&input3.getAttribute('name')=='skills'  && form[42]==input3))
    {
      throw('Either the input 3 of checkboxes attributes are wrong  or it is not following the order')
    }
   
    const label3 = document.querySelectorAll('label')[14];
    if (label3==null)
    {
      throw('No label of core subjects in there')
    }
    if( !(label3.textContent=='Core Subjects' && label3.getAttribute('for')=='CoreSubjects' && label3==form[43]))
    {
      throw('Either the other label content is wrong or the for is wrong or it is not following the order')

    }
   return true

    
}
const checkBr8 = ()=>{
  const brs = document.querySelectorAll('br');
  const form = document.querySelector('form').children;
  if (brs==null)
  {
    throw('No brs in the form')
  }
  if (brs[16]==form[44] && brs[17]==form[45])
  {
    return 1
  }
  else
  {
    throw('Either brs after checkboxes are missing or they dont follow the order')
  }
}
const checkSubmit = ()=>{
  const input = document.querySelectorAll('input')[12];
  const form = document.querySelector('form').children;
  if (input==null)
  {
    throw('No input inside the form')
  }
  if (input.getAttribute('type')=='submit' && form[46]==input)
  {
    return 1
  }
  else
  {
    throw('Either the input attributes are wrong  or it is not following the order')
  }

}

const puppeteer = require('puppeteer');
const folderPath = __dirname;

helper('First H1',check1H1);
helper('Form tag',checkForm);

helper('Label for "First Name"',checkLabel1);
helper('Input for first name',checkFname);
helper('2 Line breaks after Input for fname',checkBr0);

helper('Label for "Last Name"',checkLabel2);
helper('Input for last name',checkLname);
helper('2 Line breaks after Input for Lname',checkBr1);

helper('Label for "Email"',checkLabel3);
helper('Input for email',checkEmail)
helper('2 Line breaks after Input for Email',checkBr2);

helper('Label for "Phone No."',checkLabel4);
helper('Input for phone',checkPhone)
helper('2 Line breaks after Input for Phone',checkBr3);

helper('Input Gender, its label, its further input as a radio and their labels',checkGender);
helper('2 Line breaks after Gender inputs',checkBr4);

helper('Age input',checkAge);
helper('2 Line breaks after Input for Age',checkBr5);

helper('Date input',checkDob);
helper('2 Line breaks after Input for Date',checkBr6);

helper('Input Role as a select',checkSelect);
helper('2 Line breaks after Input for Role',checkBr7);

helper('Input Skills, its label, its further input as a checkbox and their labels',checkBoxes);

helper('2 Line breaks after Input for Skills',checkBr8);
helper('Submit',checkSubmit);
