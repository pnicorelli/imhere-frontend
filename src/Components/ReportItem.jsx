import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Grid, Row, Col, Collapse, Button } from 'react-bootstrap';
import './ReportItem.css';


function TableRow(props){
  const data = props.data;
  const listItems = data.map((item,key) =>{
    return <Row key={key}>
      <Col md={4}>{item.checkin}</Col>
      <Col md={4}>{item.checkout}</Col>
      <Col md={1}>{item.hours}</Col>
    </Row>;
  });
  return (
    <Grid>
      <Row>
        <Col md={4}>CheckIn</Col>
        <Col md={4}>CheckOut</Col>
        <Col md={1}>Hours</Col>
      </Row>
      {listItems}

    </Grid>
  );
}
class ReportItem extends React.Component {
  constructor(props) {
    super(props);
    let user = props.data[0];
    let shifts = props.data[1];

    let sumHour = ( acc, curr ) => acc + parseFloat(curr.hours);
    let total = shifts.reduce(sumHour, 0);
    this.state = {
      user: user,
      shifts:shifts,
      total: total,
      open: false
    }
  }

  render() {
    return <div className="reportItem">
      <div  className="item">
        <div className="name">
          {this.state.user}
        </div>
        <div className="hours">
          Total <b>{this.state.total}</b>
        </div>
        <div className="btn">
          <Button onClick={() => this.setState({ open: !this.state.open })}>
            {
              this.state.open
                ? <div>Close</div>
                : <div>Open</div>
            }
          </Button>
        </div>
      </div>
      <Collapse in={this.state.open} >
        <div className="tbl">
          <TableRow data={this.state.shifts} />
        </div>
      </Collapse>
    </div>;
  }
}

export default ReportItem;
