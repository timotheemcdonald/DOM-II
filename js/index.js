// Your code goes here
// * [ ] `mouseover`
// * [ ] `keydown`
// * [ ] `wheel`
// * [ ] `drag / drop`
// * [ ] `load`
// * [ ] `focus`
// * [ ] `resize`
// * [ ] `scroll`
// * [ ] `select`
// * [ ] `dblclick`

const intro = document.querySelector('.intro');
const hOne  =  document.querySelector('h1');
const hTwo = document.querySelector('h2');

//one
intro.addEventListener('mouseover',function() {
    hOne.style.color = 'crimson';
})
//two
intro.addEventListener('mouseout', function(){
    hOne.style.color= 'black';
})

const funTitle = document.querySelector('.logo-heading');

//three
funTitle.addEventListener('dblclick',function(){
    hTwo.style.color = 'crimson';
})

const busPhoto = document.getElementById('busPhoto');

//four
busPhoto.addEventListener('wheel', function(){
    busPhoto.style.borderRadius = '50%';
})

const movePhoto = document.querySelector('.img-fluid.rounded');

//five
movePhoto.addEventListener('mousemove', function(){
    document.body.style.background = 'black';
})

const revertBack = document.querySelector('.text-content')


revertBack.addEventListener('mousemove', function(){
    document.body.style.background = 'white';
})

const escapeButton = document.querySelectorAll('.btn');

//six
document.addEventListener('keydown', function(){
    for (i = 0; i < escapeButton.length; i++){
        escapeButton[i].textContent = 'Escape!';
    }
})

//seven
const pText = document.querySelectorAll('p');
pText.forEach((pText) => {
    pText.addEventListener('copy',function(){
        pText.textContent = 'copy cat';
    });
});

//eight & prevent default in a nested event
const pick = document.querySelector('#pick');
pick.addEventListener('contextmenu', function(event){
        event.preventDefault();
        pick.textContent = "Go to Hawaii";
        pick.addEventListener('contextmenu', function(event){
            event.preventDefault();
            pick.textContent = "Or Visit the Great wall!";
        })
  
})

//nine
window.addEventListener('resize', function(){
    document.body.style.background = 'crimson';
})

//ten
escapeButton[0].addEventListener('click',  function(){
    escapeButton[0].textContent = 'Let\'s Do This!';
})
escapeButton[1].addEventListener('click',  function(){
    escapeButton[1].textContent = 'Let\'s Do This!';
})
escapeButton[2].addEventListener('click',  function(){
    escapeButton[2].textContent = 'Let\'s Do This!';
})



//preventdefault
const linksVar = document.querySelector('.nav-link');
linksVar.addEventListener('click',function(event){
    event.preventDefault()
})