function startTimer(duration,display) {
    var timer=duration;
    var minutes;
    var seconds;
    setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
            console.log(minutes);
            console.log(seconds);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent = minutes + ":" + seconds;
    
            if (--timer < 0) {
                timer = duration;
            }
    },1000);
}


window.onload=function () {
    var fiveminutes=60*5;
    var display=document.querySelector("#time");
    startTimer(fiveminutes,display);
}
