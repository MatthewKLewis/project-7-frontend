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
    var badgeStyle = 'role-badge'
    if (this.props.role == 'dispatcher') badgeStyle += " bg-orange"
    else if (this.props.role == 'user')  badgeStyle += " bg-muted"

    return (
      <div className="ticket">
        <h3 className="user-name">{this.props.username}</h3>
        <div className={badgeStyle}>{this.props.role}</div>
        <p className="muted margin-zero">{this.props.id}</p>
        <p>{this.props.email}</p>
        <p className="orange">Tickets:</p>
      </div>
    )}
}

export default UserCard;