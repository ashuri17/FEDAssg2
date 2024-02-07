document.addEventListener("DOMContentLoaded",function(){
    const APIKEY = "65bf3321b4ef994fc436669e";
    var weeklyDate = new Date("Feb 3,2024,23:36:20");


    var x = setInterval(function(){
    var d = new Date().getTime();
    var distance = weeklyDate - d;
    if (distance < 1000){
        weeklyDate.setDate(weeklyDate.getDate()+ 7);
        distance = weeklyDate - d;
    }
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("countDown").textContent = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

},1000)
leaderboardRows = {};


createLeaderboard();
function createLeaderboard(){
    let settings = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-apikey": APIKEY,
            "Cache-Control": "no-cache"    
        },
    }
    fetch("https://fedassg2-7a05.restdb.io/rest/user-fed",settings)
    .then((response)=>{
        if (!response.ok){
            throw new Error("Something went wrong...");
        }
        else{
            return response.json();
        }
    })
    .then ((data) =>{
        for (var i = 0; i < data.length;i++){
            let userName = data[i].userName
            let highestStreak = data[i].highestStreak;
            leaderboardRows[userName] = highestStreak;
        }
        getLeaderboard();

    })
}
function getLeaderboard(limit = 20, all = true){
    let rows = "";
    let sortedUsernames = Object.keys(leaderboardRows).sort((a, b) => leaderboardRows[b] - leaderboardRows[a]);
    for (var i = 0; i < sortedUsernames.length && i < limit; i++){
        let userName = sortedUsernames[i];
        let highestStreak = leaderboardRows[userName];
        rows = `${rows}<tr>
        <td>${i+1}</td>
        <td>${userName}</td>
        <td>${highestStreak}</td></tr>`
    }
    document.getElementById("leaderboard-content").getElementsByTagName("tbody")[0].innerHTML = rows;
}
})