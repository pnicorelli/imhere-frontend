import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import Storage from '../Utils/Storage';
import MenuBar from '../Components/MenuBar';

class LogoutPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: Storage.getUser()
    }
    this.logout = this.logout.bind(this);
  }

  logout(){
    Storage.wipeEvething();
    this.props.history.push('/');
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

        <Grid className="pageContent">
          <Row>
            <Col mdOffset={4} md={4}>
              If you click the button below nothing serious will happend but you'll need a new login.
            </Col>
          </Row>
          <Row>
            <Col mdOffset={4} md={4}>
              &nbsp;
            </Col>
          </Row>
          <Row>
            <Col mdOffset={4} md={4} className="text-center">
              <Button bsStyle="danger" onClick={this.logout}>Logout</Button>
            </Col>
          </Row>
        </Grid>
      </div>;

    }
  };

  export default LogoutPage;
