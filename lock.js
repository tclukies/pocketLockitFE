var socket = io(); //load socket.io-client and connect to the host that serves the page

window.addEventListener("load", function(){ //when page loads
    var lightbox = document.getElementById("light"); 
    lightbox.addEventListener("change", function() { //add event listener for when checkbox changes
      socket.emit("light", Number(this.checked)); //send button status to server (as 1 or 0)
    });
  });
  socket.on('light', function (data) { //get button status from client
    document.getElementById("light").checked = data; //change checkbox according to push button on Raspberry Pi
    socket.emit("light", data); //send push button status to back to server
  });

document.querySelector("#open-lock").addEventListener("click", unlock);

function unlock(event) {
    event.preventDefault();

    document.getElementById("open-lock").classList.add("hidden")
    document.getElementById("closed-lock").classList.remove("hidden")
    

    var postObject = {
        lock_id: 1,
        status: "unlocked",
        location: "1, 1"
    };

    var postOptions = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(postObject)
    };
    fetch("https://pocket-lockit.herokuapp.com/lock_log", postOptions)
        .then(response => response.json())
        .catch(function(error) {
            console.log(error);
        });
}

document.querySelector("#closed-lock").addEventListener("click", lock);

function lock(event) {
    event.preventDefault();

    document.getElementById("closed-lock").classList.add("hidden")
    document.getElementById("open-lock").classList.remove("hidden")

    var postObject = {
        lock_id: 1,
        status: "locked",
        location: "1, 1"
    };

    var postOptions = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(postObject)
    };
    fetch("https://pocket-lockit.herokuapp.com/lock_log", postOptions)
        .then(response => response.json())
        .catch(function(error) {
            console.log(error);
        });
}

document.querySelector(".lock-log").addEventListener("click", lockLog);

function lockLog(event) {
    event.preventDefault();
    window.location.href = "/lockLog.html";
}

document.querySelector(".sign-out").addEventListener("click", signOut);

function signOut(event) {
    event.preventDefault();
    window.location.href = "/index.html";
}
