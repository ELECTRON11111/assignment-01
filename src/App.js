import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOuput/UserOutput';

class App extends Component {
  state = {username : "jon bellion"}

  changeEventHandler = (e) => {
    this.setState({
      username: e.target.value 
    });
  }

  render() {
    return (
      <div>
        <UserInput name = {this.state.username} change = {this.changeEventHandler}/>
        <UserOutput name = {this.state.username}/>
        <UserOutput name = {this.state.username}/>
        <UserOutput name = {this.state.username}/>
      </div>
    )
  }
}

export default App;
