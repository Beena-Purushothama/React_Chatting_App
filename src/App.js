import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow.js';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'John' }];

const messages = [
  { username: 'Amy', text: 'Hi, Jon!' },
  { username: 'Amy', text: 'How are you?' },
  { username: 'John', text: 'Hi, Amy! Good, you?' },
];

class App extends Component {
  
  state = {
    users : [{ username: 'Amy' }, { username: 'John' }],
    messages : [
  { username: 'Amy', text: 'Hi, Jon!' },
  { username: 'Amy', text: 'How are you?' },
  { username: 'John', text: 'Hi, Amy! Good, you?' },
]
    
  }

  sendMessage = (msg) => {
    console.log("msg"+msg);
    this.setState({messages : [...this.state.messages,msg]});
  }

   render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
         <ChatWindow user={this.state.users[0]}  messages={this.state.messages} sendMessage={this.sendMessage}/>
		 <ChatWindow user={this.state.users[1]}  messages={this.state.messages} sendMessage={this.sendMessage}/>
        </div> 
      </div>
    );
  }
}

export default App;
