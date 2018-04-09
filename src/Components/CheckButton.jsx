import React from 'react';
import Spinner from 'react-spinkit';
import { Button } from 'react-bootstrap';

class CheckButton extends React.Component {
  constructor(props) {
    super(props);
    let showElapsed = (props.status === 'in')
    this.state = {
      status: props.status || 'out',
      lastCheckIn: props.lastCheckIn || null,
      showElapsed: showElapsed
    }
    this.checkOut = this.checkOut.bind(this);
    this.checkIn = this.checkIn.bind(this);
  }


  checkOut() {
      this.props.check('out');
  }

  checkIn() {
      this.props.check('in');
  }

  render() {
    return <div>

      {
        this.state.showElapsed
        ? <h5>You checkin on {this.state.lastCheckIn}</h5>
        : null
      }

      {
        this.state.status === 'in'
        ? <Button bsStyle="danger" bsSize="large" onClick={this.checkOut}>CheckOut</Button>
        : <Button bsStyle="success" bsSize="large" onClick={this.checkIn}>CheckIn</Button>
      }


    </div>;
  }
}

export default CheckButton;
