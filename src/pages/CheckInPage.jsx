import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Grid, Row, Col} from 'react-bootstrap';
import Storage from '../Utils/Storage';
import MenuBar from '../Components/MenuBar';
import CustomSpinner from '../Components/CustomSpinner';
import CheckButton from '../Components/CheckButton';
import ApiWrapper from '../Utils/ApiWrapper';

class CheckInPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: Storage.getUser(),
      status: null,
      lastCheckIn: null
    }
    this.getStatus = this.getStatus.bind(this);
    this.check = this.check.bind(this);
    this.getStatus();
  }

  componentDidMount() {
    setInterval( () => {
      this.setState({
        curTime : new Date().toLocaleString()
      })
    },1000)
  }

  async getStatus(){
    const api = new ApiWrapper;
    let status = await api.getStatus();

    this.setState({
      status: status.status,
      lastCheckIn: status.checkIn
    })
  }

  async check(operation){
    console.log(operation);
    const api = new ApiWrapper;
    this.setState({
      status: null,
      lastCheckIn: status.checkIn
    });

    let result;
    if( operation === 'in'){
      result = await api.checkIn();
    } else {
      result = await api.checkOut();
    }
    if( result ){
      this.getStatus();
    } else {
      alert('error');
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
          <Col mdOffset={4} md={4} className="text-center">
            {
              this.state.status === null
              ? <CustomSpinner />
            : <CheckButton status={this.state.status} lastCheckIn={this.state.lastCheckIn} check={this.check}/>
            }
          </Col>
        </Row>
        <Row>
          <Col mdOffset={4} md={4} className="text-center">
            <h6>Now is {this.state.curTime}</h6>
          </Col>
        </Row>
      </Grid>

    </div>;

  }
};

export default CheckInPage;
