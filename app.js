
function updateTimer() {
    var now = new Date();
    var end = new Date("June 20, 2023");

    var timeDiff = end.getTime() - now.getTime();

    var months = (end.getFullYear() - now.getFullYear()) * 12;
    months -= now.getMonth() + 1;
    months += end.getMonth() + 1;
    var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    var totalHours = days * 24 + hours;
    var totalMinutes = totalHours * 60 + minutes;

    // document.getElementById("month").innerHTML = months + "tháng"
    document.getElementById("timer").innerHTML = months + " tháng " + days + " ngày " + hours + " giờ " + minutes + " phút ";
    document.getElementById("total-hours").innerHTML = totalHours + " giờ " + minutes + " phút";
    document.getElementById("total-minutes").innerHTML = totalMinutes + " phút " + seconds + " giây";
}

setInterval(updateTimer, 1000);