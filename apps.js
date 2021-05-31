'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', toggleTheme);

function playSound(frequency,type)
{
    var context = new AudioContext()
    var osc = context.createOscillator()
    var g=context.createGain()
    osc.type = type
    osc.frequency.value = frequency;
    osc.connect(g)
    g.connect(context.destination)
    osc.start()
    g.gain.exponentialRampToValueAtTime(0.00001,context.currentTime+1)
}

function toggleTheme()
{
    playSound(220, "sine");

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
