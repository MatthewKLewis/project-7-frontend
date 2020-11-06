import React from "react";
const axios = require("axios");

class View extends React.Component {
  constructor() {
    super()
    this.state = {
      problemTickets: {},
      dataLoaded: false
    }

    this.render = this.render.bind(this)
  }

  componentDidMount = () => {
    console.log('fetching tickets')
    axios
      .get("https://problemticket.herokuapp.com/dispatchers/")
      .then((data) => {
        this.setState({problemTickets: data.data, dataLoaded: true})
        console.log(this.state.problemTickets[0].message)
      });
  };

  render() {

    var table = 'loading...'
    if (this.state.dataLoaded) table = this.state.problemTickets[0].message;

    return (
      <div className="View">
        <p>views</p>
        <p>{table}</p>
      </div>
    );
  }
}

export default View;
