clock = document.getElementById('clock');
msj = document.getElementById('message');

setInterval(setTime,1000);

function setTime(){
    let date = new Date();
    let hour = date.getHours();
    let time_str = date.toTimeString()
    let time = time_str.slice(0,8);
    let message = time_str.slice(18)
    hour < 12 ?  time += " AM" : time += " PM";
    clock.innerHTML = time;
    msj.innerHTML = message;
}

