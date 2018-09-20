var loginCredentials

function accessAPI() {
    var data
        fetch("https://pocket-lockit.herokuapp.com/profiles")
        .then(response => response.json())
        // .then(response => {data = response})
        .then(getData)
}
accessAPI()

function getData(data){
    loginCredentials = data
}

document.querySelector(".submit").addEventListener("click", compareCredentials)

function compareCredentials(event){
    event.preventDefault();
    console.log(event.path[1][0].value)
    console.log(loginCredentials)
}



// function compareLogin(res) {
//     // console.log(res)

//     var usernameVal = document.getElementById("").value;
// }
