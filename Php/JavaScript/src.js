'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }


    console.log(className);
});

const switcher2 = document.querySelector('.btn2');

switcher2.addEventListener('click',function(){
    alert("Hello world");
});

const txt1 = document.querySelector('.txt1')
const tx2 = document.querySelector('.txt2')