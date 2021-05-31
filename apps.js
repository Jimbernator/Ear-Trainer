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
function playSound2()
{
    var context = new AudioContext()
    var osc = context.createOscillator()
    var g=context.createGain()
    osc.type = "sine" //works
    osc.connect(g)
    osc.frequency.value ==2200
    g.connect(context.destination)
    osc.start()
    g.gain.exponentialRampToValueAtTime(0.00001,context.currentTime+1)
    // setTimeout(() => 
    // {
    //     osc.stop();
    // }, 1000);
}

function example4(frequency,type)
{
    o=context.createOscillator()
    g=context.createGain()
    o.type=type
    o.connect(g)
    o.frequency.value=frequency
    g.connect(context.destination)
    o.start(0)
    g.gain.exponentialRampToValueAtTime(0.00001,context.currentTime+1)
}

function toggleTheme()
{
    playSound2();

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
