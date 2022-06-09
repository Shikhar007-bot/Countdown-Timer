
var hour = 00;
var minute = 00;
var second = 00;
var millisecond = 00;

var run;

document.form_main.start.onclick = () => start();
document.form_main.pause.onclick = () => pause();

function start() 
{
    pause();
    run = setInterval(() => {
        timer();
    }, 10);
}

function pause() {
    clearInterval(run);
}

function timer() {
    if((millisecond += 10) == 1000) {
        millisecond = 0;
        second = second+1;
    }
    if(second == 60) {
        second = 0;
        minute++;
    }
    if(minute == 60) {
        minute = 0;
        hour++;
    }
    document.getElementById('hour').innerText = returnData(hour);
    document.getElementById('minute').innerText = returnData(minute);
    document.getElementById('second').innerText = returnData(second);
    document.getElementById('millisecond').innerText = returnData(millisecond);
}

function returnData(input){
    return input > 10 ? input : `0${input}`
}