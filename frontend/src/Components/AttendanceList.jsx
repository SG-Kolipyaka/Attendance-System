import React, { Component } from 'react';
import "../css/AttendanceList.css"

class AttendanceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attendanceData: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/attendance/all", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem("token")
        }
      });
      const data = await response.json();
      if (response.ok) {
        this.setState({ attendanceData: data.attendance });
      } else {
        console.error("Error fetching attendance data:", data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  render() {
    return (
      <div>
        <h2>Attendance List</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Roll No</th>
              <th>Status</th>
              <th>User ID</th>
            </tr>
          </thead>
          <tbody>
            {this.state.attendanceData.map((entry) => (
              <tr key={entry._id}>
                <td>{entry.date}</td>
                <td>{entry.rollno}</td>
                <td>{entry.status}</td>
                <td>{entry.userid}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default AttendanceList;
