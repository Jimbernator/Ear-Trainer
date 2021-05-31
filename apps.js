'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', toggleTheme);

var context = new AudioContext()

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
    var freq = getRandomFrequency(110,880);
    playSound(freq, "sine");

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

function getRandomFrequency(min, max)
{
    return Math.floor( min + Math.random() * (max - min) );
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }