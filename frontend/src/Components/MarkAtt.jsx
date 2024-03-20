import React, { Component } from 'react';
import "../css/MarkAtt.css"

class MarkAtt extends Component {
  constructor(props) {
    super(props);
    this.state = {
obj:{ rollno: '',
status: 'absent'},
message:"Mark The Attendance"
    };
  }
  fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/attendance/mark", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem("token")
        },
        body: JSON.stringify(this.state.obj)
      });
      const data = await response.json();
       this.setState({message:data.message})
     console.log(data.message)
    } catch (error) {
      console.error("Error:", error);
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      obj: {
        ...prevState.obj,
        [name]: value
      }
    }));
  }

  handleSubmit = async(e) => {
    e.preventDefault();
    await this.fetchData();
    this.setState({
      obj: { rollno: '', status: 'absent' },
    });
  }

  render() {
    return (
      <div className="mark-att-container">
        <h2>{this.state.message}</h2>
        <form className="mark-att-form" onSubmit={this.handleSubmit}>
          <div className="mark-att-input">
            <label htmlFor="rollno">Roll No:</label>
            <input
              type="number"
              id="rollno"
              name="rollno"
              value={this.state.rollno}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="mark-att-input">
            <label htmlFor="status">Status:</label>
            <select
              id="status"
              name="status"
              value={this.state.status}
              onChange={this.handleChange}
            >
              <option value="present">Present</option>
              <option value="absent">Absent</option>
            </select>
          </div>
          <button className="mark-att-button" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default MarkAtt;
