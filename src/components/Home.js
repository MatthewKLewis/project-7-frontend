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
      <div className="Home">
        <Link className="primary-button" to='/view'>View Tickets</Link>
        <Link className="primary-button" to='/submit'>Submit Ticket</Link>
      </div>
    )}
}

export default Home;
