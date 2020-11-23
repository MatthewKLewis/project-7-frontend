import React from "react";
const axios = require('axios')
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class User extends React.Component {
  constructor() {
    super();
    this.state = {user: ""};
  }

  componentDidMount() {
    var hash = this.props.location.search;
    console.log(hash)
    //axios.get('https://problemticket.herokuapp.com/' + hash.toString()).then((res) => this.props.operation(res.data))
  }

  render() {
    return (
      <div className="View">
        <p className="orange">Specific User:</p>
      </div>
    )}
}

export default User;
