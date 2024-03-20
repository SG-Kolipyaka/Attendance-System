import React, { Component } from 'react';
import { Route ,Routes} from 'react-router-dom';
import SignUp from '../Components/SignUp';
import AttendanceList from '../Components/AttendanceList';
import MarkAtt from '../Components/MarkAtt';
import Login from '../Components/Login';
import PrivateRoute from './PrivateRoute';

  
class AllRoutes extends Component {
  render() {
    return (
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<SignUp />} />
      <Route path='/' element={<PrivateRoute><AttendanceList /></PrivateRoute>} />
      <Route path='/markatt' element={<PrivateRoute><MarkAtt /></PrivateRoute>} />
      </Routes>
    );
  }
}

export default AllRoutes;
