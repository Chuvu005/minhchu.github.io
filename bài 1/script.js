function Time() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var time_of_day = "";

    if (hour >= 12) {
        time_of_day = "PM";
    } else {
        time_of_day = "AM";
    }

    if (hour == 0) {
        hour = 12;
    } else {
        if (hour > 12) {
            hour = hour - 12;
        }
    }
    hour = update(hour);
    minute = update(minute);
    second = update(second)

    document.getElementById("Electronic-clock").innerText = hour + ":" + minute + ":" + second + " "+ time_of_day ;
    setTimeout(Time,1000);
}




function update(a) {
    if (a<10) {
        return "0" + a;
    } else {
        return a ;
    }
}
Time();