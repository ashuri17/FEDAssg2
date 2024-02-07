const APIKEY = "65bf3321b4ef994fc436669e";

document.addEventListener("DOMContentLoaded",function(){
    var userName = localStorage.getItem("userNameKey");
    console.log(userName);
    document.getElementById("display-username").textContent = userName;
    usernameHighestStreak = {};
    getLeaderboard();

})
function getLeaderboard(){
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
        console.log(data);
        for (var i = 0; i < data.length;i++){
            let userName = data[i].userName
            let highestStreak = data[i].highestStreak;
            usernameHighestStreak[userName] = highestStreak;
        }
        console.log(usernameHighestStreak)
        miniLeaderboard();
    })
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