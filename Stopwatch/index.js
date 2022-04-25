var seconds = 00;
var tens = 00;
var OutputsSeconds  =document.getElementById('second');
var OutputsTens  =document.getElementById('tens');
var buttonStart = document.getElementById('btn-start')
var buttonStop = document.getElementById('btn-stop')
var buttonReset = document.getElementById('btn-reset')
var Interval;
buttonStart.addEventListener('click', () =>{
    clearInterval(Interval);
    Interval = setInterval(startTime, 10);
});

buttonStop.addEventListener('click', () =>{
    clearInterval(Interval);
});

buttonReset.addEventListener('click', () =>{
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    OutputsSeconds.innerHTML = seconds;
    OutputsTens.innerHTML = tens;
});

function startTime(){
    tens++;
    if(tens <= 9){
        OutputsTens.innerHTML = "0" + tens;
    }

    if(tens > 9){
        OutputsTens.innerHTML = tens;
    }
    if(tens > 99){
        seconds++;
        OutputsSeconds.innerHTML = "0" + seconds;
        tens = 0;
        OutputsTens.innerHTML = "0" + tens;
    }
    if(seconds > 9){
        OutputsSeconds.innerHTML = seconds;
    }
}