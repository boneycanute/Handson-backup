function colorChangeHandler() {
    const heading = document.getElementById("title");
    const parent = heading.parentNode;

    parent.style.backgroundColor = 'red';
}

function childColorHandler() {
    const div = document.getElementById("child");
    const childrens = div.children;

    for(let i in childrens){
        childrens[i].style.color = 'blue';
    }
}
