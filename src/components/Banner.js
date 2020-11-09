import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
      content = 
        (
          <>
          <Link className="primary-button" to='/view'>View Tickets</Link>
          <Link className="primary-button" to='/submit'>Submit Ticket</Link>
          <p className="orange">Signed in as: {this.props.name} ({this.props.email}) in {this.props.location}</p>
          </>
        )
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