
var isStatus = document.querySelector("h3");
var btn = document.querySelector("#Add");
var check = 0;

btn.addEventListener("click", function () {
    if (check == 0) {
        isStatus.innerHTML = "Friends";
        isStatus.style.color = "green";
        btn.innerHTML= "Remove Friend"
        check = 1;
    }
    else{
        isStatus.innerHTML = "Stranger";
        isStatus.style.color = "Red";
        btn.innerHTML= "Add Friend"
        check = 0;
    }

})