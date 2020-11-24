import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const axios = require('axios')

class Submit extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '', //STRING
      message: '', //STRING
      originator: '', //REF TO USER
      assignedTo: '', //REF TO USER
      assignedBy: '', //REF TO USER
      createdOn: '', //DATE
      assignedOn: '', //DATE
      optionsArray: []
    }
  }

  onChangeTitle = (e) => { e.preventDefault(); this.setState({title: e.target.value})}
  onChangeMessage = (e) => { e.preventDefault(); this.setState({message: e.target.value})}
  onChangeAssignation = (e) => { e.preventDefault(); console.log(e.currentTarget.value); this.setState({assignedTo: e.currentTarget.value})}
  onSubmit = (e) => {
    e.preventDefault();
    var newProblemTicket = {
      title: this.state.title,
      message: this.state.message,
      originator: this.props.activeUser,
      assignedTo: this.state.assignedTo,
      assignedBy: this.props.activeUser,
      createdOn: Date.now(),
      assignedOn: Date.now()
    }
    console.log(newProblemTicket)
    axios.post('https://problemticket.herokuapp.com/dispatchers/createTicket', newProblemTicket).then(()=> {console.log("submitted.")});
    window.location = '/view'
  }

  componentDidMount = () => {
    //Grab a list of all users and put it in state's allUsersArray
    axios.get('https://problemticket.herokuapp.com/dispatchers/manifest')
        .then((res)=> {
          console.log(res.data)
          this.setState({allUsersArray: res.data});
          var tempOptionsArray = this.state.allUsersArray.map((item)=> {
            return (<option value={item._id} key={item._id}>{item.username} ({item._id})</option>)
          });
          this.setState({optionsArray: tempOptionsArray})
        })
        
  };

  render() {
    return (
      <div className="Component">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
          <h3>New Problem Ticket</h3><hr/>
            <label>Title: </label><br/>
            <input required onChange={this.onChangeTitle} type="name" placeholder="Title"></input>
          </div>
          <div className="form-group">
            <label>Message: </label><br/>
            <textarea required onChange={this.onChangeMessage} type="name" placeholder="Message"></textarea>
          </div>
          <div className="form-group">
            <label>Assign To: </label><br/>
            <select required onChange={this.onChangeAssignation} type="select">
              <option></option>
              <option>000000000000000000000000</option>
              {this.state.optionsArray}
            </select>
          </div>
          <button type="submit" className="secondary-button">Submit</button>
        </form>
      </div>
    );
  }
}

export default Submit;
