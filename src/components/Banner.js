import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//const dotenv = require('dotenv')
//const queryString = require('querystring')
import mainLogo from '../ticket.png';

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
            <p className="orange">Signed in as: {this.props.name} ({this.props.email})</p>
            <Link className="secondary-button" to='/view'>View Tickets</Link>
            <Link className="secondary-button" to='/submit'>Submit Ticket</Link>
          </>
        )
    }

  return (
    <div className="title">
      <img className="logo" src={mainLogo} alt="logo"/>
      <h1 className="logo-header">Problem Ticket Submitter</h1>
      {content}
    </div>
  );
  }
}

export default Banner;