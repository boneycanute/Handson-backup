
function getVisibleContent(){
    let cont=document.querySelectorAll('.litem');
    cont.forEach((item,index)=>{
        if(index===1){
            item.innerText="newText";
        }
    })
    return cont;
   
}
function getTextContent(){
    let cont=document.querySelectorAll('.litem');
    console.log(cont[1].textContent);
    return (cont[1].textContent);
}
module.exports={getVisibleContent,getTextContent};