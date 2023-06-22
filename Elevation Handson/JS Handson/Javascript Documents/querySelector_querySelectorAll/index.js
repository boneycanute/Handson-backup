
function checkquerySelector(){
    const temp=document.querySelector('#first .mycontent');
    return temp;
}
function checkquerySelectorAll(){
    const temp=document.querySelectorAll('#third li');
    return temp;
}
module.exports={checkquerySelector,checkquerySelectorAll};