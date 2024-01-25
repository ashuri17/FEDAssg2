const countryFlags = {}
createFlags();

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

            countryFlags[flagName] = flagImage;
        }
        console.log(countryFlags);
        
        
    })   
}

function randomCountry(){
    let countryNames = Object.keys(countryFlags);
    console.log(countryNames.length);
    const randomCountry = countryNames[Math.floor(Math.random() * countryNames.length)];
    const randomCountryFlag = countryFlags[randomCountry];
    document.getElementById("flagImage").src=randomCountryFlag;
}
