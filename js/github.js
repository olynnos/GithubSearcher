class Github{
  constructor(){
    this.client_id = '316cb4cec30bd7b0ee6d';
    this.client_secret = '2348120c9f26906f81429d0f315d8038d5235a5c';
  }

  //using async to get a user
  async getUser(user){
    const profileResponse = await fetch (`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return{
      // profile: profile. In ES6 if both are the same, use only one.
      profile
    }
  }
}