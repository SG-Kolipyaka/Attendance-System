import React, { Component } from 'react'
import NavBar from './Pages/NavBar'
import AllRoutes from './Pages/AllRoutes'

export class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <AllRoutes/>
      </div>
    )
  }
}

export default App
