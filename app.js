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
            if (data.Message === "Not Found"){
                // alert that user not found
            }
            else{
                ui.showProfile(data.profile);
            }
        });
    }
    else{
        // clear profile
    }
})