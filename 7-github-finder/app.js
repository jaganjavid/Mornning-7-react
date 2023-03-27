// INIT GITHUB
const github = new Github();

const ui = new UI();


const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let userInput = document.querySelector("#user").value;

    if (userInput !== "") {
        github.getUser(userInput)
            .then(data => {
                if(data.profile.message === "Not Found"){
                    ui.showAlert("User Not Found", "alert alert-danger mt-3");
                    return false;
                } else {
                    ui.showProfile(data.profile);
                    document.querySelector("#user").value = "";
                }
                
        })
    }
})


