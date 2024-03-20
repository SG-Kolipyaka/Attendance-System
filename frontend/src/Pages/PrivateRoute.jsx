import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

class PrivateRoute extends Component {
  render() {
    const token = localStorage.getItem("token");
    if (token) {
      return this.props.children;
    } else {
      return (  
        <div>
          <Navigate to="/login" />
        </div>
      );
    }
  }
}

export default PrivateRoute;
