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
            <p className="orange margin-zero">Signed in as: {this.props.name} ({this.props.email})</p>
            <Link className="secondary-button" to='/view'>View Tickets</Link>
            <Link className="secondary-button" to='/closed'>View Closed Tickets</Link>
            <Link className="secondary-button" to='/submit'>Submit Ticket</Link>
            <Link className="secondary-button" to='/users'>View Users</Link>
          </>
        )
    }
    else {
      content = <p className="orange margin-zero">Sign in to modify and close out tickets</p>
    }

  return (

    <div className="title">
      <div className="flex">
        <h1 className="logo-header">Problem Ticket Submitter</h1>
      </div>
      {content}
    </div>
    

  );
  }
}

export default Banner;