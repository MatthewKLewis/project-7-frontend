import React from "react";
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
      optionsArray: []}
  }

  onChangeTitle = (e) => { e.preventDefault(); this.setState({title: e.target.value})}
  onChangeMessage = (e) => { e.preventDefault(); this.setState({message: e.target.value})}
  onChangeAssignation = (e) => { e.preventDefault(); this.setState({assignedTo: e.target.value})}
  onSubmit = (e) => {
    e.preventDefault();
    var newProblemTicket = {
      title: this.state.title,
      message: this.state.message,
      originator: this.state.originator,
      assignedTo: this.state.assignedTo,
      assignedBy: this.state.assignedBy,
      createdOn: Date.now(),
      assignedOn: Date.now()
    }
    console.log(newProblemTicket)

    axios.post('https://problemticket.herokuapp.com/dispatchers/createTicket', newProblemTicket);

    window.location = '/'
  }

  componentDidMount = () => {
    // //load all users into a list that populated the assign dropdown in the form.
    // var tempOptionsArray = this.props.users.map((item)=> {
    //   return (<option>{item.username} ({item._id})</option>)
    // })

    // this.setState({optionsArray: tempOptionsArray})
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
              {/* {this.state.optionsArray} */}
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

export default Submit;
