
function checkquerySelector(){
    const temp=document.querySelector('#second .mycontent');
    return temp;
}
function checkquerySelectorAll(){
    const temp=document.querySelectorAll('li');
    return temp;
}
module.exports={checkquerySelector,checkquerySelectorAll};