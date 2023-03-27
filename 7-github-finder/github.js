class Github {
    constructor(){
        this.cliend_id = "17c4547012e6ad7812a9";
        this.client_secret = "7426a4ee5c196c8d34a5e3d01509b2df0bab0ad9";
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.cliend_id}
        &client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}