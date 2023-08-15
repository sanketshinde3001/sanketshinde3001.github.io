function bubblegen(){
var clutter = "";

for(var i = 1; i <= 152 ; i++)
{
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`
}

document.querySelector("#pbot ").innerHTML = clutter
}

var timer = 60;
function time(){
    setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector('#timerval').textContent = timer;
        }
        else{
            clearInterval(timer);
            document.querySelector('#pbot').innerHTML =`<h1 id="over">GAME OVER</h1>`;
        }
    },1000);
}

var hitnum = 0;
var scorenum = 0;
function hitgen(){
    hitnum = Math.floor(Math.random()*10)
    document.querySelector('#hitval').textContent = hitnum;

}

function scoregen(){
    scorenum += 10;
    document.querySelector('#scoreval').textContent = scorenum;
}

// scoregen()
var seleted ;
function onpress(){
    document.querySelector('#pbot').addEventListener("click" , function(dets){
        seleted = Number(dets.target.textContent)
        if(hitnum === seleted)
        {
            scoregen();
            hitgen();
            bubblegen();
        }
    }
    )
}

onpress()


hitgen()
time()
bubblegen()
