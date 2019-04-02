import React, { Component } from 'react';
import './sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="user-settings">

          </div>
          <div className="search-container">
            <i class="fa fa-search"></i>

            <input placeholder="Search or start new chat" />
          </div>
        </div>
        <div className="sidebar-content">

        </div>
      </div>
    );
  }
}

export default Sidebar;
