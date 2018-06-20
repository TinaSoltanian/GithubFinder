class GitHub{
    constructor(){
        this.client_id = '26a0ce5002d2f3540e85';
        this.client_secret = '909da966536e7aa09cbc59116b94c5b823703667';
    }

    async getUsers(user)    {
        const profileResponse = await 
        fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&&client_secret=${this.client_secret}`);

         const profile = await profileResponse.json();

        return {profile};
    }
}