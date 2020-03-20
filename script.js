'use strict';

var contentAll = document.getElementById('color-content-all');
var currColor = document.getElementById('curr-color-buttons');
var addBtn = document.getElementById('add-btn');
var dropdown = document.getElementById('colors-dropdown');
var removeBtn = document.getElementById('remove-current-btn');


init();

function init(){
    for(var i = 0; i < color.length; i++){
        createColorOption(color[i]);
    }
    createColorButton('red');
    createColorButton('yellow');
    createColorButton('green');
}

addBtn.addEventListener('click', function(){
    var selectedColor = dropdown.value;
    createColorButton(selectedColor);
    removeColorOption(selectedColor);   
});

removeBtn.addEventListener('click', function(){
    var currColor = document.body.style.backgroundColor;
    removeColorBtn(currColor);
    createColorOption(currColor);
});

function createColorOption(name){
    var colorOption = document.createElement('option');
    colorOption.innerText = name;
    colorOption.value = name;
    colorOption.classList.add('color');
    dropdown.appendChild(colorOption)
}

// creates a new option  of a given colorand adds it to the dropdown
//1- create an option
//2- set the options value to a given color
//3- set the options innet text to be the given color
//4- add the option to the dropdown in the DOM

function createColorButton(name){
    var addBtn = document.createElement('button');
    addBtn.innerText = name;
    addBtn.id = name + '-btn';
    addBtn.classList.add('color');
    addBtn.style.backgroundColor = name;
     
    addBtn.addEventListener('click', function(){
        document.body.style.backgroundColor = name;
    });
    document.getElementById('color-content-all').appendChild(addBtn)
}
  
// creates a new button of a given color and adds it to the color-btns container
// 1-create a button
// 2- set the buttons text to say the color name
// 3- set style of button to have background color of the given color
// 4- assign an id of <*color-name-here*>-btn
// 5- create a event listener on this button that sets the background color to be the color
// 6- append to DOM

// remove an option of a given color from the dropdown
function removeColorOption(color){
    var option = document.querySelector('#colors-dropdown > [value="' + color + '"]');
    option.remove();
    console.log(option);
}

function removeColorBtn(color){
    var btn = document.getElementById(color +'-btn');
    btn.remove();
    document.body.style.backgroundColor = 'white';  
}
