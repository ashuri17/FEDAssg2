var weeklyDate = new Date("Feb 3, 2024 23:50:30");
var x = setInterval(function(){
    var d = new Date().getTime();
    var distance = weeklyDate - d;
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("countDown").textContent = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    if (distance < 1000){
        weeklyDate.setDate(weeklyDate.getDate() + 7);
    }
},1000) 