import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css'

//Component Imports
import Home from "./components/Home";
import Banner from "./components/Banner";
import View from "./components/View"
import Submit from "./components/Submit"
import Modify from "./components/Modify"

//Axios
const axios = require('axios')

/*
*
* About to Migrate this Project and Work on v 2.0
*
*
*/

class App extends React.Component {
  constructor() {
    super();
    this.state = {user: {
      _id: "",
      id: "",
      username: "",
      avatar: "",
      discriminator: "",
      public_flags: 0,
      flags: 0,
      email: "",
      verified: false,
      locale: "en-US"
    },
    loggedIn: false,
    allUsersArray: []
    };
  }

  receiveUser = (data) => {
    
    //Sets the active user to be the data object received from Discord
    this.setState({ user: {
      id: data.id,
      username: data.username,
      avatar: data.avatar,
      discriminator: data.discriminator,
      public_flags: data.public_flags,
      flags: data.flags,
      email: data.email,
      verified: data.verified,
      locale: data.locale
    },
    loggedIn: true
    })

    //Create a user based on the Discord user
    axios.post('https://problemticket.herokuapp.com/dispatchers/createUser', {
      usernumber: this.state.user.id,
      username: this.state.user.username,
      email: this.state.user.email,
      avatar: this.state.user.avatar,
      location: this.state.user.location
    }).then((res)=> {
      console.log(res);
      var tempNewUser = {...this.state.user} //copy old object
      tempNewUser._id = res.data //change _id only
      this.setState({user: {...tempNewUser}}) //set user with proper _id to state

      //Saves the user info in local storage:
      localStorage.setItem('userInLocalStorage', JSON.stringify(this.state.user));
      console.log('user saved to local storage')
    });

    //Grab a list of all users and put it in state's  allUsersArray
    axios.get('https://problemticket.herokuapp.com/dispatchers/manifest')
      .then((res)=> {this.setState({allUsersArray: res})})
  }

  //attempt to get user from local storage
  componentDidMount() {
    var tempLocalStorageUser = JSON.parse(localStorage.getItem('userInLocalStorage'));
    if (tempLocalStorageUser) this.setState({user: tempLocalStorageUser, loggedIn:true})
  }

  render() {
    return (
      <div className="App">
        <Banner name={this.state.user.username} email={this.state.user.email} location={this.state.user.location} show={this.state.loggedIn}/>

        <Route exact path="/home"
          render={(routerProps) => {
            return <Home {...routerProps} operation={this.receiveUser}/>;
          }}
        />

        <Route exact path="/"
          render={(routerProps) => {
            return (
            <>
              <div className="login-button-container">
                <a className="primary-button" href="https://problemticket.herokuapp.com/">Discord Log In</a>
                <a className="primary-button" href="/view">Skip Log-in</a>
              </div>
            </>
            )}}
        />

        <Route exact path="/view"
          render={(routerProps) => {
            return (
            <View />          
            )}}
        />

        <Route exact path="/submit"
          render={(routerProps) => {
            return (
            <Submit {...routerProps} activeUser={this.state.user._id}/>             
            )}}
        />

        <Route exact path="/modify/:id"
          render={(routerProps) => {
            return (
            <Modify {...routerProps}/>             
            )}}
        />
        <div className="Footer">
          <p className="muted">░ ░ ░ Made by Matthew Knight Lewis 2020 ░ ░ ░</p>
        </div>
      </div>
    );
  }
}

export default App;

// https://problemticket.herokuapp.com/dispatchers/manifest to GET a manifest of all USERS
// https://problemticket.herokuapp.com/dispatchers/         to GET a list of all TICKETS
// https://problemticket.herokuapp.com/dispatchers/createUser        to POST a NEW USER