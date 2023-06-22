/** @jest-environment jsdom */
test('Getting complete text content',()=>{
    document.body.innerHTML=
    `
    <div>
    Hello<span>Students</span>  
    </div>
    <ul>
    <li class="litem">I hope you are enjoying the process of learning javascript.</li>
    <li class="litem">Always ask your mentors if you are facing any doubts.<span style="display:none"> Dont Work Hard</span></li>
    <li class="litem">Javascript is one of the most important topics for placements.</li>
    </ul>
    `
    const {getTextContent}=require('./index.js');
    const out=getTextContent();
    expect(out).toBe("Javascript is one of the most important topics for placements.");
});
test('Changing Visible Text Content',()=>{
    document.body.innerHTML=
    `
    <div>
    Hello<span>Students</span>  
    </div>
    <ul>
    <li class="litem">I hope you are enjoying the process of learning javascript.</li>
    <li class="litem">Always ask your mentors if you are facing any doubts.<span style="display:none"> Dont Work Hard</span></li>
    <li class="litem">Javascript is one of the most important topics for placements.</li>
    </ul>
    `
    const {getVisibleContent}=require('./index.js');
    let out=getVisibleContent()[0].innerText;
    expect(out).toBe("firstlistText");
});