import React from 'react';
import Spinner from 'react-spinkit';

class CustomSpinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: props.message || '',
      color: props.color || 'green',
      type: props.type || 'wordpress'
    }
  }
  render() {
    return <div>
      <Spinner name={this.state.type} color={this.state.color} />{this.state.message}
    </div>;
  }
}

export default CustomSpinner;
