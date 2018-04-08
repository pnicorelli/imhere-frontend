import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import Storage from '../Utils/Storage';
import MenuBar from '../Components/MenuBar';

class CheckInPage extends React.Component {

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

      <Grid className="pageContent">
        <Row>
          <Col mdOffset={4} md={4}>
            dddd
          </Col>
        </Row>
      </Grid>

    </div>;

  }
};

export default CheckInPage;
