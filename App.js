import React, { Component } from 'react'
import Dashboard from './Dashboard'
import Info from './Info'
import Visitors from './Visitors'
import "./App.css"

export default class App extends Component {
  render() {
    return (
    <div id="app">
      <div id="dashboard">
       <Dashboard/> 
      </div>
       <div id="info-container">
         <Info/>
         {/* <Info/>
         <Info/> */}
         </div>
      <div id="visitors-container">
        <Visitors/>
      </div>

    </div>
    )
  }
}
