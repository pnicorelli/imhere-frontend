import React from 'react';
import { Redirect, Link } from 'react-router-dom'
import Storage from '../Utils/Storage';
import MenuBar from '../Components/MenuBar';

class WhoPage extends React.Component {

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
          : null
        }
        <MenuBar />
        WHO
      </div>;

    }
  };

  export default WhoPage;
