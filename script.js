const countryFlags = {}
let answer;
let highestStreak = 0;
let gameStreak = 0;
let dailyScore = 0;
document.getElementById("userStreak").textContent = gameStreak;
document.querySelector('form').addEventListener("click", function (e){
    e.preventDefault();
})
function createFlags() {
    fetch("https://restcountries.com/v3.1/all")
    .then ((response) => {
        if (!response.ok){
            throw new Error("Something went wrong...");
        }
        return response.json();
    })
    .then ((data) => {
        for (let i = 0; i < data.length; i++){
            let flagImage = data[i].flags.png;
            let flagName = data[i].name.common;

            countryFlags[flagImage] = flagName;
        }
        console.log(countryFlags);      
        randomCountry()  
    })   
}

function randomCountry(){
    let countryKeys = Object.keys(countryFlags);
    let randomCountryFlag = countryKeys[Math.floor(Math.random() * countryKeys.length)];
    document.getElementById("flagImage").src=randomCountryFlag;
    answer = countryFlags[randomCountryFlag];
    console.log(answer);
}
function checkName(){
    let userInput = document.getElementById("userCountry").value;
    if (userInput.toLowerCase() === "help"){
        console.log(answer);
    }
    if (userInput.toLowerCase() === answer.toLowerCase()){
        randomCountry();
        gameStreak++;
        dailyScore += 10;
        console.log(gameStreak);
        console.log(dailyScore);
    }
    else{
        if (highestStreak < gameStreak){
            highestStreak = gameStreak;
        }
        const popupWindow = document.querySelector(".popup");
        const fadedBg = document.querySelector("#faded-bg")
        popupWindow.style.display = 'flex';
        fadedBg.style.display = 'block';
        document.getElementById("gameStreak").textContent = gameStreak;
        gameStreak = 0;
    }
    document.getElementById("userCountry").value = "";
    document.getElementById("userStreak").textContent = gameStreak;
}
createFlags();