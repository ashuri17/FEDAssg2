    document.addEventListener("DOMContentLoaded",function(){
        const APIKEY = "65bf3321b4ef994fc436669e"
        document.getElementById("final-create").addEventListener("click", function(e){
            e.preventDefault();
            let userName = document.getElementById("create-username").value;
            let email = document.getElementById("create-email").value;
            let password = document.getElementById("create-password").value;
            let userData = {
                "userName": userName,
                "userEmail": email,
                "userPassword": password,
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
        })
    })