const APIKEY = "65c42c7286354f09ac464716";
document.addEventListener("DOMContentLoaded",function(){

leaderboardRows = {};
userNameID = {};
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
    fetch("https://fedass2-0db0.restdb.io/rest/user-info",settings)
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
            let userID = data[i]._id;
            leaderboardRows[userName] = highestStreak;
            userNameID[userName] = userID;
        }
        console.log(leaderboardRows);
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

