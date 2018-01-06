class UI {
  constructor(){
    this.profile = document.getElementById("profile");
  }

  showProfile(user){
    this.profile.innerHTML = `
      <div class="row">
        <div class="col s12 m12">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <ul class="collection">
                <li class="collection-item avatar">
                  <img src="${user.avatar_url}" class="circle">
                  <span class="title black-text">${user.login}</span>
                  <p>               
                    <a href="${user.html_url}" class="btn red" target="_blank">View profile</a> <br>
                    <br>
                    <div class="chip black white-text"> Public Repos: ${user.public_repos}</div>
                    <div class="chip">Followers: ${user.followers}</div>
                    <div class="chip">Followings: ${user.following}</div>
                  </p>
                </li>
              </ul>
            </div>     
          </div>
        </div>
      </div>
    `;
  }
}