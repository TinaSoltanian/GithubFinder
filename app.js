// Init Github
const github = new GitHub;

// Init UI
const ui = new UI;

// Find the input
const searchUser = document.getElementById('searchUser');

// delegate keyup event to input
searchUser.addEventListener('keyup', (e) => {
    const user = e.target.value;
    if (user !== '')
    {
        //Call gitapi fetch data
        github.getUsers(user)
        .then(data => {
            if (data.profile.message === "Not Found"){
                // alert that user not found
                ui.showAlert(data.profile.message, 'alert alert-danger');
                
                // clear profile
                ui.clearProfile();
            }
            else{
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        });
    }
    else{
        // clear profile
        ui.clearProfile();
    }
})