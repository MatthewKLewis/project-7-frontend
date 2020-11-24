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

    var tempObj = {"_id": e.currentTarget.value.toString()}

    axios.delete('https://problemticket.herokuapp.com/dispatchers/deleteTicket', { data: tempObj, headers: {} })
      .then((res) => {console.log(res)})
  }

  componentDidMount = () => {
    console.log('fetching tickets')
    axios
      .get("https://problemticket.herokuapp.com/dispatchers/")
      .then((data) => {
        this.setState({problemTickets: data.data, dataLoaded: true})
      });
  };

  render() {
    var table = 'loading...'
    if (this.state.dataLoaded) table = this.state.problemTickets.map((item) => 
    {
      var modifyButton = ""
      if (!this.props.show) modifyButton = <button disabled={true} className="secondary-button disabled">Modify Ticket</button> 
      if (this.props.show)  modifyButton =  <Link className="secondary-button" params={item._id} to={`/modify/${item._id}`}>Modify Ticket</Link>

      var closeOutButton = ""
      if (!this.props.show) closeOutButton = <button disabled={true} className="secondary-button disabled">Close Out Ticket</button>
      if (this.props.show)  closeOutButton =  <Link className="secondary-button" params={item._id} to={`/modify/${item._id}`}>Close Out Ticket</Link>

      return (
        <div className="ticket" key={item._id}>
          <h3>{item.title} <span className="small">({item._id})</span></h3>
          <hr/>
          <p>Message: {item.message}</p>
          <hr/>
          <p>Created On: {item.createdOn}</p>
          <p>Originator: {item.originator.username}</p>
          <p>Assigned to: {item.assignedTo.username}</p>
          <p>Assigned by: {item.assignedBy.username}</p>
          {modifyButton}
          {closeOutButton}
        </div>
      )
    });

    return (
      <div className="View">
        <div className="sort-button-container">
          <button className="tertiary-button orange">Sort By:</button>  
          <button className="tertiary-button">Oldest › Newest</button>
          <button className="tertiary-button">Originator</button>
          <button className="tertiary-button">Assigned To</button>
          </div>
        {table}
      </div>
    );
  }
}

export default View;
