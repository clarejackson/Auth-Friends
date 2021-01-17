import React from "react";
import axios from "axios";

class Login extends React.Component {
  state = {
    creadentials: {
      username: '',
      password: '',
      isLoading: ''
    }
  };

  handleChange = e => {
    this.setState({
      creadentials: {
        ...this.state.creadentials,
        [e.target.name]: e.target.value
      }
    });
  };

  render(){
    return (
      <div>
        <form>
          <input
            type="text"
            name="username"
            onChange={this.handleChange}
            />
          <input 
            type="password"
            name="password"
            onChange={this.handleChange}
            />
            <button>Login</button>
        </form>

      </div>
    )
  }


}

export default Login;