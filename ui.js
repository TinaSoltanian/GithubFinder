class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    const html = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3"> 
                    <img class="img-fluid mb-2" src="${
                      user.avatar_url
                    }"                   
                    <a href="${user.html_url}" 
                    target="_blank" class="btn btn-primary btn-block">View Profile</a>
                </div>
                <div class="col-md-9">     
                    <span class="badge badge-primary">
                    Public Repos: ${user.public_repos}</span>               

                    <span class="badge badge-secondary">
                    Public Gists: ${user.public_gitsts}</span>               

                    <span class="badge badge-success">
                    Followers: ${user.followers}</span>   

                    <span class="badge badge-info">
                    Following: ${user.following}</span>  
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group=item">Company: ${
                          user.company
                        }</li>
                        <li class="list-group=item">Website/Blog: ${
                          user.blog
                        }</li>
                        <li class="list-group=item">Locatiion: ${
                          user.location
                        }</li>
                        <li class="list-group=item">Member since: ${
                          user.created_at
                        }</li>
                    </ul>                                
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos
        </h3>
        <div id="repos"></div>
        `;

    this.profile.innerHTML = html;
  }

  clearProfile() {
    this.profile.innerHTML = "";
  }

  showRepos(repos){
    let output = '';

    repos.forEach((repo) => {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href=${repo.html_url} target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge badge-primary">
              Stars: ${repo.stargazers_count}</span>               

              <span class="badge badge-secondary">
              Watchers: ${repo.watchers_count}</span>               

              <span class="badge badge-success">
              Forks: ${repo.forks_count}</span>              
            </div>
          </div>
        </div>
      `; 
    });


    // show repos
    document.getElementById('repos').innerHTML = output;
  }

  // remove alert
  removeAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
        currentAlert.remove();
    }
  }

  showAlert(message, className) {
    this.removeAlert();

    // create new div element for showing alert
    const div = document.createElement("div");

    // set new div class
    div.className = className;

    // set the message
    div.appendChild(document.createTextNode(message));

    const searchContainer = document.querySelector(".searchContainer");
    const search = document.querySelector(".search");

    searchContainer.insertBefore(div, search);
    setTimeout(() => {
      this.removeAlert();
    }, 2000);
  }
}
