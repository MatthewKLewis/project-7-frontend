import React from "react";
const axios = require("axios");

class Modify extends React.Component {
  constructor() {
    super()
    this.state = {
      problemTickets: {},
      dataLoaded: false
    }

    this.render = this.render.bind(this)
  }

  componentDidMount = () => {
  };

  render() {
    return (
      <div className="Component">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
          <h3>Modify Problem Ticket</h3><hr/>
            <label>Title: </label><br/>
            <input required onChange={this.XXX} type="name" placeholder="Title"></input>
          </div>
          <div className="form-group">
            <label>Message: </label><br/>
            <textarea required onChange={this.XXX} type="name" placeholder="Message"></textarea>
          </div>
          <div className="form-group">
            <label>Assign To: </label><br/>
            <select required onChange={this.XXX} type="select">
              <option></option>
              <option>User</option>
            </select>
          </div>
          <button type="submit" className="secondary-button">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default Modify;
