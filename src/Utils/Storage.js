let Storage = {

  wipeEvething: ()=>{
    localStorage.clear();
  },

  setToken: ( token )=>{
    localStorage.setItem('token', token);
  },

  getToken: ()=>{
    return localStorage.getItem('token') || false;
  },

  setUser: ( user )=>{
    localStorage.setItem('user.email', user.email);
    localStorage.setItem('user.domain', user.domain);
    localStorage.setItem('user.id', user.id);
  },

  getUser: ()=>{
    let user = false;
    let userId = localStorage.getItem('user.id') || false;
    if( userId ){
      user = {
        id: localStorage.getItem('user.id'),
        email: localStorage.getItem('user.email'),
        domain: localStorage.getItem('user.domain')
      }
    }
    return user;
  }

};

export default Storage;
