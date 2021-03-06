import React, { Component } from 'react';
import './dashboard.css';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import Chat from '../chat/chat'
class Dashboard extends Component {
 
  render() {
    return (
      <div className="grid-container">
        
        <div className="header">
        <Header ></Header>
        </div>
        <div className="userlist">
        <Sidebar ></Sidebar>
        </div>
        <div className="chat">
        <Chat></Chat>
        </div>
        

      </div>

    );
  }
}

export default Dashboard;
