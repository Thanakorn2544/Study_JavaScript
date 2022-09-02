function digitalClock(se){
    let hrs = ~~(se / 3600);
    let mins = ~~((se % 3600) / 60);
    let secs = ~~se % 60;
    let time = "";
    
    time += "" + (hrs < 10 ? "0" : "") + "" + (hrs >= 24 ? "00" : hrs);
    time += ":" + (mins < 10 ? "0" : "") + "" + mins;
    time += ":" + (secs < 10 ? "0" : "") + "" + secs;

    return time;
}

const prompt = require('prompt-sync')();
let sec = prompt("input:");

console.log(digitalClock(sec));