const APIKEY = "65c462bccca7362a2c653d5c";
document.addEventListener("DOMContentLoaded",function(){

let leaderboardRows = {};
createLeaderboard();

function createLeaderboard(){
    let settings = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-apikey": APIKEY,
            "Cache-Control": "no-cache"    
        },
    };
    fetch("https://fedass2-63de.restdb.io/rest/user-info",settings)
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
            let userName = data[i].userName;
            let highestStreak = data[i].highestStreak;
            leaderboardRows[userName] = highestStreak;
        }
        console.log(leaderboardRows);
        getLeaderboard();
    });
}
// display top 20 leaderboard
function getLeaderboard(limit = 20){
    let rows = "";
    let sortedUsernames = Object.keys(leaderboardRows).sort((a, b) => leaderboardRows[b] - leaderboardRows[a]);
    for (var i = 0; i < sortedUsernames.length && i < limit; i++){
        let userName = sortedUsernames[i];
        let highestStreak = leaderboardRows[userName];
        rows = `${rows}<tr>
        <td>${i+1}</td>
        <td>${userName}</td>
        <td>${highestStreak}</td></tr>`;
    }
    document.getElementById("leaderboard-content").getElementsByTagName("tbody")[0].innerHTML = rows;
}

});