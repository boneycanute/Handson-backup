/** @jest-environment jsdom */
test('Checking Created TextNode',()=>{
    document.body.innerHTML=
    `
    <div>
    <p class="cont"> Inner content containing some random stuff</p>    
    </div>
    <section>
    <p class="cont"> Inner content containing some random stuff part 2</p>    
    </section>
    <div>
    <p class="cont"> Inner content containing some random stuff part 3</p>    
    </div>
    `
    const {AddText}=require('./index.js');
    const out=AddText().innerHTML;
    expect(out).toBe(" Inner content containing some random stuff This is my created text content.");
})

test('Checking Created Element',()=>{
    document.body.innerHTML=
    `
    <div>
    <p class="cont"> Inner content containing some random stuff</p>    
    </div>
    <section>
    <p class="cont"> Inner content containing some random stuff part 2</p>    
    </section>
    <div>
    <p class="cont"> Inner content containing some random stuff part 3</p>    
    </div>
    `
    const {AddElement}=require('./index.js');
    const out=AddElement().innerHTML;
    expect(out).toBe(" Inner content containing some random stuff part 2<span>(Added Content)</span>");
})