document.addEventListener("DOMContentLoaded",function(){
    var userName = localStorage.getItem("userNameKey");
    console.log(userName);
    document.getElementById("display-username").textContent = userName;
    usernameHighestStreak = {};
})
