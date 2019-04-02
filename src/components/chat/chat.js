import React, { Component } from 'react';
import './chat.css';

class Chat extends Component {
  render() {
    return (
     <div className="contact-info">
       <div className="chat-header">

       </div>
       <div className="chat-body">
       </div>
       <div className="chat-footer">
       <div className="search-container">
            <input placeholder="Type a message" />
          </div>
       </div>
     </div>
    );
  }
}

export default Chat;
