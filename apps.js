'use strict'

const switcher = document.querySelector('.btn');






switcher.addEventListener('click', toggleTheme);

function playSound()
{
    var context = new AudioContext()
    var osc = context.createOscillator()
    osc.type = "sine"
    osc.frequency.value ==220
    osc.connect(context.destination)
    osc.start()

    setTimeout(() => 
    {
        osc.stop();
    }, 1000);
}

function toggleTheme()
{
    playSound();

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
