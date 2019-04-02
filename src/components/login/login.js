import React, { Component } from 'react';
import './login.css';
import {  withRouter} from 'react-router-dom'
class Login extends Component {

    OnLogin = () => {
      this.props.history.push('/dashboard')
    }

  render() {
    
    return (
      <div className="login-background">
        <div className="login-container">
            <div className="login-title">
              <h4>Login</h4>
            </div>

            <div className="text-box">                
              <input  placeholder="User Name" className="form-controller input-border" />
            </div>
            <div className="text-box">                
              <input type="password" placeholder="Password" className="form-controller input-border" />
            </div>
            <div className="login-footer">
                <button type="submit" className="btn btn-default" onClick={this.OnLogin}>Login</button>
                <a href="javascript:void(0)">Forgot password</a>
            </div>

        </div>
      </div>
    );
  }
}

export default withRouter(Login);
