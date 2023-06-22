function AddText(){
    let mydiv=document.querySelector('.cont');
    let temp=document.createTextNode(" This is my created text content.");
    //Write Code Above this line only
    mydiv.appendChild(temp);
    return mydiv;
}
function AddElement(){
    let neededdiv=document.querySelector('section .cont');
    let newelem=document.createElement('span');
    let newcontent=document.createTextNode("(Added Content)");
        
    //Write Code Above this line only
    newelem.appendChild(newcontent);
    neededdiv.appendChild(newelem);
    return neededdiv;
}
//AddElement();
//AddText();
module.exports={AddText,AddElement};