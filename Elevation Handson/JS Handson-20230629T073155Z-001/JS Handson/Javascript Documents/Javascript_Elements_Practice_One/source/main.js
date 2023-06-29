function submitChanges() {
    const btn = document.getElementById('homeBtn');
    const btnParent = btn.parentElement;
    btnParent.style.backgroundColor = 'lightblue';
}

function textUnderline() {
    const head = document.getElementById('heading');
    const headParent = head.parentElement;
    const childs = Array.from(headParent.children);
    for(let i in childs){
        childs[i].style.textDecoration = 'underline';
    }
}