const APIKEY = "65bf3321b4ef994fc436669e";	
let totalScore;
let userID;
let playerName = localStorage.getItem("userNameKey"); //grab the player name from local storage


function showPopup(popupId, fadedBgId) {
    var popup = document.getElementById(popupId);
    var fadedBg = document.getElementById(fadedBgId);
    popup.style.display = 'block';
    fadedBg.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closePopup(popupId, fadedBgId) {
    var popup = document.getElementById(popupId);
    var fadedBg = document.getElementById(fadedBgId);
    popup.style.display = 'none';
    fadedBg.style.display = 'none';
    document.body.style.overflow = 'auto';
}

document.getElementById('faded-bg').addEventListener('click', function() {
    closePopup('popup1', 'faded-bg');
});

document.getElementById('faded-bg2').addEventListener('click', function() {
    closePopup('popup2', 'faded-bg2');
});

document.getElementById('faded-bg3').addEventListener('click', function() {
    closePopup('popup3', 'faded-bg3');
});

document.getElementById('faded-bg4').addEventListener('click', function() {
    closePopup('popup4', 'faded-bg4');
});


// get player's stats from DB
function getPlayer(){
    let settings = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-apikey": APIKEY,
            "Cache-Control": "no-cache"
        },
    }
    fetch(`https://fedassg2-7a05.restdb.io/rest/user-fed?q={"userName":"${playerName}"}`,settings)
    .then((response)=>{
        if (!response.ok){
            throw new Error("Something went wrong...");
        }
        else{
            return response.json();
        }
    })
    .then ((data) =>{
        totalScore = data[0].totalScore;
        document.getElementById("userTotalScore").textContent = totalScore;
    })
}
// Update player stats
function checkout(){
    if (totalScore < 10) {
        alert("Insufficient Points!");
        return;
    }
    totalScore -= 10;
    document.getElementById("userTotalScore").textContent = totalScore;
    let playerData = {
        "totalScore": totalScore,
    }
    let settings = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "x-apikey": APIKEY,
            "Cache-Control": "no-cache"
        },
        body: JSON.stringify(playerData)
    }
    fetch(`https://fedassg2-7a05.restdb.io/rest/user-fed/${userID}`,settings)
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
    })
}
getPlayer();