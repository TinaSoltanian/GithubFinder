class GitHub{
    constructor(){
        this.client_id = '26a0ce5002d2f3540e85';
        this.client_secret = '909da966536e7aa09cbc59116b94c5b823703667';
        this.count_per_page = 5;
        this.sort = 'Created: asc';
    }

    async getUsers(user, repo)    {
        const profileResponse = await 
        fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&&client_secret=${this.client_secret}`);

        const repoResponse = 
        await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.count_per_page}
             &sort=${this.sort}&client_id=${this.client_id}&&client_secret=${this.client_secret}`);

         const profile = await profileResponse.json();
         const repos = await repoResponse.json();

        return {
            profile,
            repos
        };
    }
}