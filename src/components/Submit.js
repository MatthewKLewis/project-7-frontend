import React from "react";

class Submit extends React.Component {
  constructor() {
    super()
    this.state = {optionsArray: []}
  }

  componentDidMount = () => {
    //load all users into a list that populated the assign dropdown in the form.
    var tempOptionsArray = this.props.users.map((item)=> {
      return (<option>{item.username} ({item._id})</option>)
    })

    this.setState({optionsArray: tempOptionsArray})
  };

  render() {
    return (
      <div className="Component">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
          <h3>New Problem Ticket</h3><hr/>
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
              {this.state.optionsArray}
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
