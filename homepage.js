const APIKEY = "65c462bccca7362a2c653d5c";

document.addEventListener("DOMContentLoaded",function() {
    var userName = localStorage.getItem("userNameKey");
    console.log(userName);
    document.getElementById("display-username").textContent = userName;
    let usernameHighestStreak = {};
    getLeaderboard();

});
function getLeaderboard(){
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
        console.log(data);
        for (var i = 0; i < data.length;i++){
            let userName = data[i].userName;
            let highestStreak = data[i].highestStreak;
            usernameHighestStreak[userName] = highestStreak;
        }
        miniLeaderboard();
    });
}
function miniLeaderboard(limit = 3){
    let row = "";
    let sortedUsernames = Object.keys(usernameHighestStreak).sort((a, b) => usernameHighestStreak[b] - usernameHighestStreak[a]);
    for (var i = 0; i < sortedUsernames.length && i < limit; i++) {
        let userName = sortedUsernames[i];
        row = `<h2>#${i+1}: ${userName}</h2>`;
        $("#mini-leaderboard").append(row);
    }
}

function redirectToPlayPage() { 
    if (window.location.pathname.endsWith('loading.html')) { 
        setTimeout(function() { 
            window.location.href = 'game.html'; 
        }, 5000); 
    } 
} 
redirectToPlayPage();