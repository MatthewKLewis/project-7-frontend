import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css'

//Component Imports
import Home from "./components/Home";
import Banner from "./components/Banner";

class App extends React.Component {
  constructor() {
    super();

    this.state = { user: {
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
    loggedIn: false
    };
  }

  // When Discord's login page redirects 
  receiveUser = (data) => {
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
  }

  render() {
    var browserUser = this.state.user

    return (
      <div className="App">
        <Banner name={browserUser.username} email={browserUser.email} show={this.state.loggedIn}/>

        <Route exact path="/home"
          render={(routerProps) => {
            return <Home {...routerProps} operation={this.receiveUser}/>;
          }}
        />

        <Route exact path="/"
          render={(routerProps) => {
            return (
            <div className="login-button-container">
              <a className="primary-button" href="https://problemticket.herokuapp.com/">Discord Log In</a>
            </div>            
            )}}
        />

        <Route exact path="/view"
          render={(routerProps) => {
            return (
            <div className=" "> XXX</div>            
            )}}
        />

        <Route exact path="/submit"
          render={(routerProps) => {
            return (
            <div className=" "> XXX</div>            
            )}}
        />

        <Route exact path="/modify"
          render={(routerProps) => {
            return (
            <div className=" "> XXX</div>            
            )}}
        />

        <Route exact path="/delete"
          render={(routerProps) => {
            return (
            <div className=" "> XXX</div>            
            )}}
        />

      </div>
    );
  }
}

export default App;



// https://problemticket.herokuapp.com/dispatchers/manifest to GET a manifest of all USERS
// https://problemticket.herokuapp.com/dispatchers/         to GET a list of all TICKETS