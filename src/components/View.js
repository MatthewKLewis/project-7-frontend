import React from "react";
const axios = require("axios");
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class View extends React.Component {
  constructor() {
    super()
    this.state = {
      problemTickets: {},
      dataLoaded: false
    }

    this.render = this.render.bind(this)
  }

  deleteClick = (e) => {
    e.preventDefault();
    console.log(e.currentTarget.value)
    var tempObj = {_id: e.currentTarget.value}
    axios.delete('https://problemticket.herokuapp.com/dispatchers/deleteTicket', tempObj)
      .then((res) => {console.log(res)})
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
    if (this.state.dataLoaded) table = this.state.problemTickets.map((item) => 
    {
      return (
        <div className="ticket" key={item._id}>
          <h3>{item.title} <span className="small">({item._id})</span></h3>
          <hr/>
          <p>Message: {item.message}</p>
          <hr/>
          <p>Created On: {item.createdOn}</p>
          <p>Originator: {item.originator.username}</p>
          <p>Assigned to: {item.assignedTo.username}</p>
          <Link className="secondary-button" to='/modify'>Modify Ticket</Link>
          <button value={item._id} className="secondary-button" onClick={this.deleteClick}><span className="orange">Delete Ticket</span></button>
        </div>
      )
    });

    return (
      <div className="Home">
        <div>{table}</div>
      </div>
    );
  }
}

export default View;
