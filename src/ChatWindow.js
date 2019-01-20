import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ChatWindow extends Component {
  state = {
  newMessage : ''
  }
  
   /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = () => {
    return (this.state.newMessage==='') ;
  };

 sendMsg = (e) => {
 	this.props.sendMessage({username: this.props.user.username , text : this.state.newMessage})
 }

addMessage = (e) => {
  const msg = e.target.value;
  console.log("=="+msg);
 this.setState({newMessage :msg });
}
  
    render() {
      const {messages,user} = this.props;
        return(
        	<div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{user.username}</div>

            <ul className="message-list">
              {messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === user.username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>

            <div>
              <form className="input-group">
                <input type="text" className="form-control" placeholder="Enter your message..." onChange={this.addMessage} value={this.state.newMessage}/>
                <div className="input-group-append">
                  <button type="button" className="btn submit-button" disabled={this.isDisabled()} onClick={this.sendMsg}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        );
    }
}
ChatWindow.PropTypes = {
user : PropTypes.string.isRequired,
messages : PropTypes.array.isRequired,
sendMessage : PropTypes.func.isRequired
}
export default ChatWindow;