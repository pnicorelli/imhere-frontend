import React from 'react';
import { Redirect, Link } from 'react-router-dom'
import { Grid, Row, Col} from 'react-bootstrap';
import Storage from '../Utils/Storage';
import MenuBar from '../Components/MenuBar';
import ReportItem from '../Components/ReportItem';
import CustomSpinner from '../Components/CustomSpinner';
import ApiWrapper from '../Utils/ApiWrapper';

function ReportsList(props){
  const pObj = props.people;
  const people = Object.entries(pObj);
  const listItems = people.map((item,key) =>{
    return <Col key={key} md={12}>
      <ReportItem data={item} />
    </Col>
  });
  return (
    <div>{listItems}</div>
  );
}

class ReportsPage extends React.Component {

  constructor(props) {
    super(props);
    let d = new Date();
    this.state = {
      user: Storage.getUser(),
      reports: null,
      year: d.getFullYear(),
      month: d.getMonth()+1
    }
    this.loadReports = this.loadReports.bind(this);
    this.loadReports();
  }

  async loadReports(){
    const api = new ApiWrapper;
    let reports = await api.getMonthlyReports(this.state.year, this.state.month);
    this.setState({
      reports: reports
    })
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
              <Col mdOffset={2} md={8} className="text-center">
                <h1>Month shift for {this.state.year} / {this.state.month}</h1>
              </Col>
            </Row>
            <Row>
              <Col mdOffset={1} md={10} className="text-center">
                {
                  this.state.reports
                  ? <ReportsList people={this.state.reports}/>
                  : <CustomSpinner message="loading resource"/>
                }
              </Col>
            </Row>
          </Grid>
      </div>;

    }
  };

  export default ReportsPage;
