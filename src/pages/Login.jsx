import React from 'react';
import { Grid, Row, Col, Button, Form, FormGroup, FormControl} from 'react-bootstrap';
import Spinner from 'react-spinkit';
import ApiWrapper from '../Utils/ApiWrapper';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mailSent: false,
      mail: '',
      validEmail: 'warning',
      message: '',
      mailSending: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.signin = this.signin.bind(this);
  }

  handleChange(event) {
    let rx = /\S+@\S+\.\S+/;
    let isValid = rx.test(event.target.value) ? 'success' : 'warning';
    this.setState({
      mail: event.target.value,
      validEmail: isValid
    });
  }

  async signin(){
    this.setState({
      mailSending: true
    })
    const api = new ApiWrapper;
    let sending = await api.login(this.state.mail);
    let message = (sending)
        ? 'Check '+this.state.mail+' ( try in the spam folder too :) )'
        : 'Whoops... got some trouble sending the email';
    this.setState({
      mailSent: sending,
      message: message
    });
  }

  render() {
    return <div>

      <Grid className="pageContent">
        <Row>
          <Col mdOffset={4} md={4}>
            <h4 className="text-center">
              If you Sign-In you'll receive a mail with an instant access link to use with this service.
              <br />
              No password / No username
            </h4>

            {
              this.state.mailSent
              ? <h2  className="text-center">{this.state.message}</h2>
              : <Form horizontal>
                  <FormGroup controlId="formHorizontalEmail" validationState={this.state.validEmail}>
                      <FormControl className="text-center" type="email" placeholder="me@company.com" value={this.state.mail}  onChange={this.handleChange} />
                  </FormGroup>

                  <FormGroup>
                    <Col className="text-center">
                      {
                        this.state.mailSending
                        ? <Spinner name='wordpress' color='green'/>
                        : <Button bsStyle="info" onClick={this.signin} disabled={this.state.validEmail!=='success'}>Sign-In</Button>
                      }
                    </Col>
                  </FormGroup>
                </Form>
            }
            <h5 className="text-center">
              This is intended to work well with your company email.
              But hey, those webpages are just a prototype. Play as you like.
            </h5>
          </Col>
        </Row>
      </Grid>
    </div>;

  }
};

export default Login;
