import React, { Component } from 'react'

export default class Person extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            fullName:"Mounir B Gaied",
            bio:"This is my bio",
            profession:"Web developer",
            imgSrc:"https://th.bing.com/th/id/R.1f3db373a6ece574b07a772d213e459a?rik=%2bY0M7y5ELMcALg&pid=ImgRaw&r=0"
        };
    
      }
  
  
    render() {
    return (
      <div>
        <h2>{this.state.fullName}</h2>
        <h2>{this.state.bio}</h2>
        <h2>{this.state.profession}</h2>
        <img src={this.state.imgSrc} alt='Pic'/>





      </div>
    )
  }
}
