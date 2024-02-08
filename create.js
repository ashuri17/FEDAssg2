document.addEventListener("DOMContentLoaded",function(){
    const APIKEY = "65c42c7286354f09ac464716"
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
            let today = new Date("01/01/2024");
            var year = today.getFullYear();
            var month = ('0' + (today.getMonth()+1)).slice(-2);
            var days = ('0' + today.getDate()).slice(-2);
            formattedDate = days + '/' + month + '/' + year;
            let userData = {
                "userName": userName,
                "userEmail": email,
                "userPassword": password,
                "highestStreak": 0,
                "dailyScore": 0,
                "totalScore": 0,
                "differenceDaily": 0,
                "date": formattedDate
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
            fetch("https://fedass2-0db0.restdb.io/rest/user-info",settings)
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