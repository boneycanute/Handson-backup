
function getVisibleContent(){
    let cont=document.querySelectorAll('.litem');
    cont.forEach((item,index)=>{
        if(index===0){
            item.innerText="firstlistText";
        }
    })
    return cont;
   
}
function getTextContent(){
    let cont=document.querySelectorAll('.litem');
    console.log(cont[2].textContent);
    return (cont[2].textContent);
}
module.exports={getVisibleContent,getTextContent};