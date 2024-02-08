document.addEventListener("DOMContentLoaded", function () {
    const APIKEY = "65c462bccca7362a2c653d5c";
    document.getElementById("final-sign-in").addEventListener("click", function (e) {
        e.preventDefault();
        let attemptUsername = document.getElementById("sign-username").value;
        let attemptPassword = document.getElementById("sign-password").value;

        let userNamePassword = [];
        setup();

        function checkValidity() {
            let isValid = false;
            console.log(userNamePassword);
            for (var i = 0; i < userNamePassword.length; i++) {
                if (attemptUsername === userNamePassword[i].userName && attemptPassword === userNamePassword[i].password) {
                    isValid = true;
                    break;
                }
            }
            // username and password match with user object in RestDB
            if (isValid) {
                alert("Logged in succesfully!");
                localStorage.setItem("userNameKey",attemptUsername);
                window.location.href = "homepage.html";
            } 
            else {
                alert("Invalid credentials!");
                //clear the input boxes
                document.getElementById("sign-username").value = "";
                document.getElementById("sign-password").value = "";

            }
        }

        function setup() {
            let settings = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "x-apikey": APIKEY,
                    "Cache-Control": "no-cache"
                }
            };
            fetch("https://fedass2-63de.restdb.io/rest/user-info", settings)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Something went wrong...");
                    } else {
                        return response.json();
                    }
                })
                .then((data) => {
                    for (var i = 0; i < data.length; i++) {
                        let userName = data[i].userName;
                        let password = data[i].userPassword;
                        userNamePassword.push({ userName, password });
                    }
                    checkValidity(attemptUsername, attemptPassword);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        }
    });
});
