'use strict'

const switcher = document.querySelector('.btn');
const switcher2 = document.querySelector('.btn2');
const switcher3 = document.querySelector('.btn3');

switcher.addEventListener('click', toggleTheme);
switcher2.addEventListener('click', newNote);
switcher3.addEventListener('click', repeatNote);

var context = new AudioContext()
var note = 440;

function newNote()
{
    note = getRandomIntInclusive(110,880);
    playSound(note, "sine");
    this.textContent = note.valueOf();
}

function repeatNote()
{
    playSound(note, "sine");
}

function playSound(frequency,type)
{
    /* Don't create too many of these */
    var osc = context.createOscillator()
    var g=context.createGain()
    osc.type = type
    osc.frequency.value = frequency;
    osc.connect(g)
    g.connect(context.destination)
    osc.start()
    g.gain.exponentialRampToValueAtTime(0.00001,context.currentTime+1)
    // context.close().then(function() {});
    // await context.close();
}

function toggleTheme()
{   
    playSound(note, "sine");

    document.body.classList.toggle('dark-theme')
    document.body.classList.toggle('light-theme')

    var className = document.body.className;
    
    if(className == "light-theme")
    {
        this.textContent = "Dark";
    }
    else
    {
        this.textContent = "Light";
    }
    console.log('current class name: ' + className);
}

//JAM. make this evenly distributed on the exponential.
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }



var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function()
{
  output.innerHTML = this.value;
}