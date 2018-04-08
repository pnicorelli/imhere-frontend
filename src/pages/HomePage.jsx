import React from 'react';
import { Redirect } from 'react-router-dom'
import Storage from '../Utils/Storage';
import MenuBar from '../Components/MenuBar';

class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: Storage.getUser()
    }
  }

  render() {
    return <div>

      {
        //Auth only
        !this.state.user
        ? <Redirect to="/login" />
      : <Redirect to="/checkin" />
      }
      
    </div>;

  }
};

export default HomePage;
