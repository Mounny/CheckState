import React, { Component } from 'react'
import Person from './Components/Person'
import "./App.css"

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {Show:false};
  }
  handleClick =() => this.setState({show:! this.state.show})

  render() {
    return (
      <div className="App">
      <h1>Checkpoint React State</h1>
      <button onClick={this.handleClick} >  Show info </button>
      {this.state.show? <Person /> :(<h2>OOps click to show info</h2>)}

      
    </div>
    )
  }
}
