document.addEventListener("DOMContentLoaded",function(){
    const APIKEY = "65bf3321b4ef994fc436669e";
    leaderboardRows = {};
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
    createLeaderboard();
    getLeaderboard();

    
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
            let sortedLeaderboard = leaderboardRows.slice().sort((a, b) => b.highestStreak - a.highestStreak);
            console.log(leaderboardRows);
        })
    }
    function getLeaderboard(limit = 20){
        let rows = "";
        for (var i = 0; i < leaderboardRows.length && i < limit; i++){
            rows = `${rows}<tr>
            <td>${i+1}</td>
            <td>${leaderboardRows.userName}</td>
            <td>${leaderboardRows.highestStreak}</td></tr>`
        }
        document.getElementById("leaderboard-content").getElementsByTagName("tbody")[0].innerHTML = rows;
    }
},1000)
})