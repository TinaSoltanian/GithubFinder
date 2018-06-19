const searchUser = document.getElementById('searchUser');

console.log(searchUser);

searchUser.addEventListener('keyup', (e) => {
    if (e.target.value !== '')
    {
        //Call gitapi fetch data
        GitHub github = new GitHub;
    }
    else{
        //alert user not found
    }
})