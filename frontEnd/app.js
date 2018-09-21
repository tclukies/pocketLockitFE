var loginCredentials;

function accessAPI() {
    fetch("https://pocket-lockit.herokuapp.com/profiles")
        .then(response => response.json())
        // .then(response => {data = response})
        .then(getData);
}
accessAPI();

function getData(data) {
    loginCredentials = data;
}

document.querySelector(".submit").addEventListener("click", compareCredentials);

function compareCredentials(event) {
    event.preventDefault();
    if (
        event.path[1][0].value === loginCredentials.profile[0].username &&
        event.path[1][1].value === loginCredentials.profile[0].password
    ) {
        console.log("true");
        window.location.href = "/lock.html";
    } else {
        console.log("false");
        document.querySelector(".invalid-login").textContent =
            "Incorrect Login. Please Try Again";
    }
}
