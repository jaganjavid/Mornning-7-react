class UI {
    constructor(){
        this.profile = document.getElementById("profile");
    }

    // Display profile to ui

    showProfile(user){
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">
                        View Profile
                    </a>
                </div>
                <div class="col-md-9">
                    <span class="badge bg-primary">Pubilc Repos : ${user.public_repos}</span>
                    <span class="badge bg-success">Pubilc Gists : ${user.public_gists}</span>
                    <span class="badge bg-info">Followers : ${user.followers}</span>
                    <span class="badge bg-warning">Following : ${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company : ${user.company}</li>
                        <li class="list-group-item">location : ${user.location}</li>
                        <li class="list-group-item">twitter : ${user.twitter_username}</li>
                        <li class="list-group-item">type : ${user.type}</li>
                    </ul>
                </div>
            </div>
        </div>
        `
    }

    showAlert(message, className){
        this.clearAlert();
        const div = document.createElement("div");

        div.className = className;

        div.appendChild(document.createTextNode(message));

        const container = document.querySelector(".form-container");
        const getUserTop = document.querySelector(".user-show");

        container.insertBefore(div, getUserTop);

        // SET TIME OUT 
        setTimeout(() => {
            document.querySelector(".alert").remove();
            this.clearAlert();
        }, 3000)

    }

    // clear alert message
    clearAlert(){
        const currentAlert = document.querySelector(".alert");

        if(currentAlert){
            currentAlert.remove();
        }
    }
}