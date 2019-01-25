import React, { Component } from 'react';
import './App.css';


// ------------------- Button Component ----------------------------------------------
class Button extends Component{
  
  clickAction = () => {
    this.props.onClickFunction(this.props.incrementValue)
  }
  
  render(){
    return(
      <button onClick={this.clickAction}>
        +{this.props.incrementValue}
      </button>
    );
  }
}

// ------------------- Label Component ----------------------------------------------
const Label = (props) => {
  return(
    <p>
      {props.text}
    </p>
  );
}

// ------------------- App Component ----------------------------------------------
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter : 0
    }
  }
  
  handleClick = (incrementValue) => {
      this.setState((prevState)=>{
        return{
        counter : prevState.counter +incrementValue
        }
      }
      )
    }

  render() {
    return (
      <div className="App">
      <Button incrementValue={1} onClickFunction = {this.handleClick}></Button>
      <Button incrementValue={5} onClickFunction = {this.handleClick}></Button>
      <Button incrementValue={10} onClickFunction = {this.handleClick}></Button>
      <Button incrementValue={100} onClickFunction = {this.handleClick}></Button>
      <Button incrementValue={1000} onClickFunction = {this.handleClick}></Button>
      <Label text = {this.state.counter}></Label>
      </div>
    );
  }
}

export default App;
