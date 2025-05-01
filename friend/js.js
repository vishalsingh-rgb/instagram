
var istatus = document.querySelector("h5");
        var addFriendBtn = document.querySelector("#add");
        var removeBtn = document.querySelector("#remove");

        addFriendBtn.addEventListener("click", function () {
            istatus.innerHTML = "Friends";
            istatus.style.color = "green";
            alert("sent you an friends requst!");     
        });

        removeBtn.addEventListener("click", function () {
            istatus.innerHTML = "Stranger";
            istatus.style.color = "red";
            alert("Now you are unfriends!");     
        });
