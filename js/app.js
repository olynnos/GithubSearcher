const github = new Github;
const ui = new UI;

const searchUser = document.getElementById("searchUser");

searchUser.addEventListener("keyup", (e) => {
  // GET input text
  const userText = e.target.value;

  if(userText !== ""){
    // Make http call
    github.getUser(userText)
      .then(data => {
        if(data.profile.message === "Not Found"){
          //Show alert
        }else{
          //Show profile
          ui.showProfile(data.profile);
        }
      })
  }else{
    //Clear profile
  }
})