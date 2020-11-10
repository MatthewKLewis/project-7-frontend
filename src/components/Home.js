import React from "react";
const axios = require('axios')
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {user: ""};
  }

  componentDidMount() {
    var hash = this.props.location.search.substring(6);
    axios.get('https://problemticket.herokuapp.com/login/' + hash.toString())
        .then((res) => this.props.operation(res.data))
  }

  render() {
    return (
      <div className="Component">
        <p className="orange">Updates:</p>
        <p className="white">11/9/2020: Welcome to the Problem Ticket Submitter BETA.</p>
      </div>
    )}
}

export default Home;
