document.addEventListener("DOMContentLoaded", function () {
    const APIKEY = "65bf3321b4ef994fc436669e";
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
            if (isValid) {
                alert("Logged in succesfully!");
                localStorage.setItem("userNameKey",attemptUsername);
                window.location.href = "homepage.html";
            } 
            else {
                alert("Invalid credentials!")
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
            }
            fetch("https://fedassg2-7a05.restdb.io/rest/user-fed", settings)
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
    })
});
