import React, { Component } from 'react';
import './App.css';
import Login from "./Login";
import MainContainer from "./MainContainer";

class App extends Component {
  constructor(){
    super();

  this.state = {
    loggedIn: false,
    username:  ""
    }//closing this.state object
  } //closing constructor

  //**create login method (function) that will hold "setState" object -->in index.js the handle Change method holds "setState" object
login = (username) => {
  console.log('login function in app is working', username);

  this.setState({
    username: username,
    loggedIn: true
  });
}

  render() {
    console.log(this.state, ' inside of app component')
    return (
      <div className="App">
       {this.state.loggedIn ? <MainContainer username={this.state.username}/> : <Login login={this.login}/>}
      </div>
    );
  }
}
export default App;
