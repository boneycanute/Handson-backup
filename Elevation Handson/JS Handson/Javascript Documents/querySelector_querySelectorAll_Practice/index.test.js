/** @jest-environment jsdom */
test('Query Selector checker',()=>{
    document.body.innerHTML=
    `
    <div  id="first">
    <h1>First id first Headline</h1>
    <h1>First id second Headline</h1>
    <h1 class='mycontent'>To Confuse the student </h1>
    </div>
    <div id="second">
    <h1>Second id first Headline</h1>
    <h1>Second id second Headline</h1>
    <h1 class='mycontent'>Needed Headline</h1>
    </div>
    `
    const {checkquerySelector}=require('./index.js');
    const out=checkquerySelector().innerHTML;
    expect(out).toBe("Needed Headline");
})
test('Query Selector All checker',()=>{
    document.body.innerHTML=
    `
    <ul>
    <li class="litem">List Item 1</li>
    <li class="litem">List Item 2</li>
    <li class="litem">List Item 3</li>
    </ul>
    `
    const {checkquerySelectorAll}=require('./index.js');
    let out=checkquerySelectorAll();
    out=out instanceof NodeList;
    expect(out).toBe(true);
})