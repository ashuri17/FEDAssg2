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
        randomCountry();
        displayOptions();
    })   
}

function displayOptions() {
    const countryNames = Object.keys(countryFlags);
    const radioButtons = document.querySelectorAll('.btn-check');
    const labels = document.querySelectorAll('.btn.btn-secondary');

    // Randomly select a country as the correct answer
    correctAnswer = countryNames[Math.floor(Math.random() * countryNames.length)];

    radioButtons.forEach((radio, index) => {
        const randomCountry = countryNames[index];
        radio.value = randomCountry;
    });

    labels.forEach((label, index) => {
        const randomCountry = countryNames[index];
        label.textContent = randomCountry;
    });

    // Clear any previously selected radio button
    radioButtons.forEach(radio => {
        radio.checked = false;
    });
}

// Add an event listener to each radio button for handling clicks
document.querySelectorAll('.btn-check').forEach(radio => {
    radio.addEventListener('click', () => checkAnswer(radio.value));
});

function checkAnswer(chosenAnswer) {
    // Compare the chosen answer with the correct answer
    if (chosenAnswer === correctAnswer) {
        alert('Correct!');
        // You may want to fetch a new set of options or perform other actions here
    } else {
        alert('Incorrect. Try again!');
        // You may want to handle incorrect answers differently, e.g., show the correct answer
    }
    // You can continue the game or reset it as needed
    displayOptions();
}

function randomCountry(){
    let countryNames = Object.keys(countryFlags);
    console.log(countryNames.length);
    const randomCountry = countryNames[Math.floor(Math.random() * countryNames.length)];
    const randomCountryFlag = countryFlags[randomCountry];
    document.getElementById("flagImage").src=randomCountryFlag;
}