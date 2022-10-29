const listsClick = 'li';
const emptyDiv = '.msg';
let number = '+2348077289562';
const btnNav = document.querySelector('.btn-primary');
const btn = document.querySelectorAll('.btn-one');

let _listsClick = document.querySelectorAll(`${listsClick}`);
let _emptyDiv = document.querySelector(`${emptyDiv}`);

btnNav.addEventListener('click', change)
function change(){
   btnNav.innerHTML = `${number}`;
   setTimeout(() => {
    btnNav.innerHTML = 'CONTACT ME';
   },5000);
}

btn[0].addEventListener('click', slide);

function slide(){
    _emptyDiv.classList.add('empty')
    _emptyDiv.innerHTML = 'HI I AM A WEB DEVELOPER';
}

btn[1].addEventListener('click', slideIn);

function slideIn(){
    _emptyDiv.classList.add('empty')
    _emptyDiv.innerHTML = 'HI I AM A FULL STACK DEVELOPER';
}

btn[2].addEventListener('click', slideInTwo);

function slideInTwo(){
    _emptyDiv.classList.add('empty')
    _emptyDiv.innerHTML = 'HI I AM AN APP DEVELOPER';
}

btn[3].addEventListener('click', slideInThree);

function slideInThree(){
    _emptyDiv.classList.add('empty')
    _emptyDiv.innerHTML = 'HI I AM A VIDEO EDITOR';
}

btn[4].addEventListener('click', slideInFour);

function slideInFour(){
    _emptyDiv.classList.add('empty')
    _emptyDiv.innerHTML = 'HI I AM GOOD AT MS OFFICE';
}