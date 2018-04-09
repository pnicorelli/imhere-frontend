import React from 'react';
import { Redirect, Link } from 'react-router-dom'
import { Grid, Row, Col} from 'react-bootstrap';
import Storage from '../Utils/Storage';
import MenuBar from '../Components/MenuBar';
import CustomSpinner from '../Components/CustomSpinner';
import PeopleBadge from '../Components/PeopleBadge';
import ApiWrapper from '../Utils/ApiWrapper';

function PeopleList(props){
  const people = props.people;
  const listItems = people.map((item,key) =>
    <Col key={key} md={6}>
      <PeopleBadge name={item} />
    </Col>
  );
  return (
    <div>{listItems}</div>
  );
}

class WhoPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: Storage.getUser(),
      people: null
    }
    this.loadPeopleOnline = this.loadPeopleOnline.bind(this);
    this.loadPeopleOnline();
  }

  async loadPeopleOnline(){
    const api = new ApiWrapper;
    let people = await api.getWho();
    this.setState({
      people: people
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
              <h1>Colleagues on duty</h1>
            </Col>
          </Row>
          <Row>
            <Col mdOffset={2} md={8} className="text-center">
              {
                this.state.people
                ? <PeopleList people={this.state.people}/>
                : <CustomSpinner message="loading resource"/>
              }
            </Col>
          </Row>
        </Grid>
      </div>;

    }
  };

  export default WhoPage;
