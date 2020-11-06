import React from "react";
//const dotenv = require('dotenv')
//const queryString = require('querystring')

class Banner extends React.Component {
  constructor() {
    super();
    this.state = {user: ""};
  }

  render() {

    var content = '';
    if (this.props.show) {
        content = <p className="orange">Signed in as: {this.props.name} ({this.props.email}) </p>
    }

  return (
    <div className="title">
      <h1 className="">Problem Ticket Submitter</h1>
      {content}
    </div>
  );
  }
}

export default Banner;