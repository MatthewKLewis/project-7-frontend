import UserCard from './subcomponents/UserCard'
import React from "react";
const axios = require('axios')
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class Users extends React.Component {
  constructor() {
    super();
    this.state = {usersArray: "", usersArrayLoaded: false};
  }

  componentDidMount = () => {
    //Grab a list of all users and put it in state's allUsersArray
    axios.get('https://problemticket.herokuapp.com/dispatchers/manifest')
        .then((res)=> {
          //console.log(res)
          this.setState({usersArray: res.data, usersArrayLoaded: true})
        })
        
  };

  render() {
    var usersList = ""
    if (this.state.usersArrayLoaded) {
      usersList = this.state.usersArray.map((user, i)=> { 
        return (<UserCard key={i} username={user.username} id={user._id} email={user.email} role={user.role} avatarHash={user.avatar}/>)
      });
    }

    return (
      <div className="View">
      <div className="sort-button-container bg-muted">
          <button className="tertiary-button orange">Sort By:</button>  
          <button className="tertiary-button">Role</button>
        </div>
      {usersList}
      </div>
    )}
}

export default Users;
