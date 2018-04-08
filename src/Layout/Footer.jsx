import React from 'react';


class Footer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <div className="footer">
      Do you like this service? It's a Proof-of-Concept, you can get the code on <a target="_blank" href="https://github.com/pnicorelli/imhere-frontend">github</a>
    </div>;

  }
};

export default Footer;
