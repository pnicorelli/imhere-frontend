import React from 'react';
import { Redirect, Link } from 'react-router-dom'
import Spinner from 'react-spinkit';
import Storage from '../Utils/Storage';
import ApiWrapper from '../Utils/ApiWrapper';

class SignUp extends React.Component {

  constructor(props) {
    super(props);
    Storage.setToken(props.match.params.token);
    this.checkToken = this.checkToken.bind(this);
    this.state = {
      status: true
    }
    this.checkToken();
  }

  async checkToken(){
    const api = new ApiWrapper;
    let backendStatus = await api.checkBackend();
    if( backendStatus ){
      let user = await api.getProfile();
      if( user ){
        console.log(user);
        Storage.setUser(user);
        this.props.history.push('/');
        return;
      }
    }
    this.setState({
      status: false
    })
  }

  render() {
    return <div>
      {
        this.status
          ? <div><Spinner name='wordpress' color='green'/>...checking the token</div>
          : <div>
            Invalid Token, please retry to <Link to="/login">login</Link>
        </div>
      }
    </div>
  }
};

export default SignUp;
