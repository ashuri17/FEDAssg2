    document.addEventListener("DOMContentLoaded",function(){
        const APIKEY = "65bf3321b4ef994fc436669e"
        document.getElementById("final-create").addEventListener("click", function(e){
            e.preventDefault();
            let userName = document.getElementById("create-username").value;
            let email = document.getElementById("create-email").value;
            let password = document.getElementById("create-password").value;
            if (password.length < 8 && userName.length < 12){
                alert("Password should be at least 8 characters long!");
                document.getElementById("create-username").value = "";
                document.getElementById("create-email").value = "";
                document.getElementById("create-password").value = "";
            }
            else{
                let userData = {
                    "userName": userName,
                    "userEmail": email,
                    "userPassword": password,
                    "highestStreak": 0,
                    "dailyScore": 0,
                    "totalScore": 0,
                }
                localStorage.setItem("userNameKey",userName);
                let settings = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "x-apikey": APIKEY,
                        "Cache-Control": "no-cache"
                    },
                    body: JSON.stringify(userData),
                }
                fetch("https://fedassg2-7a05.restdb.io/rest/user-fed",settings)
                .then((response)=>{
                    if (!response.ok){
                        alert("Username has been taken!");
                        document.getElementById("create-username").value = "";
                        document.getElementById("create-email").value = "";
                        document.getElementById("create-password").value = "";
                        throw new Error("Something went wrong...");
                    }
                    else{
                        return response.json();
                    }
                })
                .then ((data) =>{
                    console.log(data);
                    window.location.href = "homepage.html"
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                });
            } 
        })
    })