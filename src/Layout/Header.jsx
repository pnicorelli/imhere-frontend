import React from 'react';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let imgStyle = {
      position: 'absolute',
      top: 0,
      right:0,
      border: 0,
      width: 100,
      zIndex:2
    };

    return <div className="header">
            <a href="https://github.com/pnicorelli/imhere-frontend" target="_blank">
                <img
                  style={imgStyle} src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"
                  alt="Fork me on GitHub" />
            </a>
    </div>;

  }
};

export default Header;
