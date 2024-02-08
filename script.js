document.addEventListener("DOMContentLoaded",(event) => {
    console.log("Document has fired up!");
});
const APIKEY = "65c462bccca7362a2c653d5c";	
const countryFlags = {};
let answer;                      //randomized country flag image name    
let highestStreak;                  
let gameStreak = 0;
let dailyScore;                  
let differenceDaily;
let totalScore;       
let userDate;       //necessary for daily resetting of dailyScore and differenceDaily 
let userID;         //necessary for updatePlayer()

let now = new Date().toLocaleDateString(); //for resetting of dailyScore and differenceDaily values
document.getElementById("userStreak").textContent = gameStreak;
document.querySelector('form').addEventListener("click", function (e){ //disable form default
    e.preventDefault();
});
let playerName = localStorage.getItem("userNameKey"); //grab the player name from local storage


//Instantiating of flags.png along with its corresponding name

function createFlags() {
    fetch("https://restcountries.com/v3.1/all")
    .then ((response) => {
        if (!response.ok){
            throw new Error("Something went wrong...");
        }
        else{
            return response.json();
        }
    })
    .then ((data) => {
        for (let i = 0; i < data.length; i++){
            let flagImage = data[i].flags.png;
            let flagName = data[i].name.common;

            countryFlags[flagImage] = flagName;
        }
        console.log(countryFlags);      
        randomCountry();
    });
}

//Generate random country flag along with its answer
function randomCountry(){
    let countryKeys = Object.keys(countryFlags);
    let randomCountryFlag = countryKeys[Math.floor(Math.random() * countryKeys.length)];
    document.getElementById("flagImage").src=randomCountryFlag;
    answer = countryFlags[randomCountryFlag];
    console.log(answer);
}
//check if user input is the same as the name of the country flag
function checkName(){
    let userInput = document.getElementById("userCountry").value;
    if (userInput.toLowerCase() === answer.toLowerCase()){
        randomCountry();        //the moment user gets correct, update userDate to today's date
        gameStreak++;
        dailyScore += 10;
        let today = new Date();
        var year = today.getFullYear();
        console.log(year);
        var month = ('0' + (today.getMonth()+1)).slice(-2);
        console.log(month);
        var days = ('0' + today.getDate()).slice(-2);
        userDate = month + '/' + days + '/' + year;

        if(dailyScore >= 100){
            dailyScore = 100;       //cap dailyScore at 100
        }

    }
    // if user input does not match the name of the country flag
    else{
        if (highestStreak < gameStreak){
            highestStreak = gameStreak;     //modify user's highest streak
        }
        const popupWindow = document.querySelector(".popup");   
        const fadedBg = document.querySelector("#faded-bg");
        popupWindow.style.display = 'flex';     //enable popups when player loses
        fadedBg.style.display = 'block';
        document.getElementById("gameStreak").textContent = gameStreak; //display streak of current game session
        if (differenceDaily == 0){
            totalScore += dailyScore;
        }
        else{
            
            totalScore += (dailyScore - differenceDaily); //ensures that totalScore is tabulated correctly
        } 
        differenceDaily = dailyScore;           //dailyScore = differenceDaily for totalScore
        gameStreak = 0; 
        updatePlayer();
    }
    
    document.getElementById("userCountry").value = "";      //clear the input box for user convenience
    document.getElementById("userStreak").textContent = gameStreak;     //update the game's data
    document.getElementById("userDailyScore").textContent = dailyScore;
}
// get player's stats from DB
function getPlayer(){
    let settings = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-apikey": APIKEY,
            "Cache-Control": "no-cache"
        },
    };
    fetch(`https://fedass2-63de.restdb.io/rest/user-info?q={"userName":"${playerName}"}`,settings)
    .then((response)=>{
        if (!response.ok){
            throw new Error("Something went wrong...");
        }
        else{
            return response.json();
        }
    })
    .then ((data) =>{
        userDate = data[0].date;
        let checkUserDate = new Date(userDate).toDateString();
        let nowDate = new Date(now).toDateString();
        if (checkUserDate !== nowDate){
            dailyScore = 0;
            differenceDaily = 0;
        }
        else{
            dailyScore = data[0].dailyScore;
            differenceDaily = data[0].differenceDaily;
        }

        highestStreak = data[0].highestStreak;
        totalScore = data[0].totalScore;
        userID = data[0]._id;
        document.getElementById("userDailyScore").textContent = dailyScore;
    });
}
// Update player stats
function updatePlayer(){
    let playerData = {
        "highestStreak": highestStreak,
        "dailyScore": dailyScore,               
        "totalScore": totalScore,               //necessary fields that will change
        "differenceDaily": differenceDaily,
        "date": userDate
    };
    let settings = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "x-apikey": APIKEY,
            "Cache-Control": "no-cache"
        },
        body: JSON.stringify(playerData)
    };
    fetch(`https://fedass2-63de.restdb.io/rest/user-info/${userID}`,settings)
    .then((response)=>{
        if (!response.ok){
            throw new Error("Something went wrong...");
        }
        else{
            return response.json();
        }
    })
    .then ((data) =>{
        alert("Player data has been updated!");
        //enable links on popup window
        let lostButtons = document.getElementsByClassName("lost-button");
        for (let i = 0; i < lostButtons.length; i++){
            lostButtons[i].style.pointerEvents = "auto";
        }
    });
}
createFlags();
getPlayer();