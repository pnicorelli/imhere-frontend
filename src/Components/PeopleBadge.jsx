import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Grid, Col } from 'react-bootstrap';
import './PeopleBadge.css';

class PeopleBadge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name || ''
    }
  }

  render() {
    return <div className="peopleBadge">
      <Col md={4} className="icon">
        <FontAwesome name="user" size="4x" className="hfa" inverse/>
      </Col>
      <Col md={8} className="name">
        {this.state.name}
      </Col>
    </div>;
  }
}

export default PeopleBadge;
