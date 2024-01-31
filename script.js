const countryFlags = {}
let answer;
let streak = 0;
let dailyScore = 0;
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
}
function checkName(){
    let userInput = document.getElementById("userCountry").value;
    if (userInput.toLowerCase() === "help"){
        console.log(answer);
    }
    if (userInput.toLowerCase() === answer.toLowerCase()){
        randomCountry();
        streak++;
        dailyScore += 10;
        console.log(streak);
        console.log(dailyScore);
    }
    document.getElementById("userCountry").value = "";
    document.getElementById("userStreak").textContent = streak;
}
createFlags();