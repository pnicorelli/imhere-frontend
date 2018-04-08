import React from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import {LinkContainer } from 'react-router-bootstrap';

import Storage from '../Utils/Storage';
import './MenuBar.css';

class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: Storage.getUser()
    }
  }

  render() {
    const navbarStyle = {zIndex:0};
    return <div>

              <Navbar collapseOnSelect style={navbarStyle}>
                <Navbar.Header>
                  <Navbar.Brand className="navTitle">
                    @{this.state.user.domain}<small> - I'm HERE!</small>
                  </Navbar.Brand>
                  <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                  <Nav pullRight>
                    <LinkContainer to="/checkin">
                      <NavItem>CheckIn / CheckOut</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/who">
                      <NavItem>who</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/reports">
                      <NavItem>reports</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/logout">
                      <NavItem>logout</NavItem>
                    </LinkContainer>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
    </div>;

  }
};

export default MenuBar;
