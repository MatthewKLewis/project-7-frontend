import Axios from "axios";
import React from "react";
import axios from "axios";
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class UserCard extends React.Component {

  componentDidMount() {
    //fetch the discord avatar for the user WITH this.props.avatarHash
    // axios.get(`https://cdn.discordapp.com/avatars/user_id/${this.props.avatar}.png`)
    //   .then((res) => {console.log(res)})
  }

  render() {
    return (
      <div className="ticket">
        <p className="muted">{this.props.id}</p>
        <h2>{this.props.username}</h2>
        <p>{this.props.role}</p>
        <p>{this.props.email}</p>
        <p className="orange">Tickets:</p>
      </div>
    )}
}

export default UserCard;