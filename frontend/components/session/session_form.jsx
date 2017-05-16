import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      name: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === 'login') {
      return (
        <div>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      );
    } else {
      return (
        <div>
          Have an account? <Link to="/login">Log in</Link>
        </div>
      );
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    if (this.props.formType === 'login'){
      return (
        <div>
          <h1>Login page</h1>
          <figure className="logo"></figure>
          <form onSubmit={this.handleSubmit} >
            <br/>

            {this.renderErrors()}
            <div>
              <br/>
              <label>
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('name')}
                  placeholder="Full Name"
                />
              </label>
              <br/>
              <label>
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  placeholder="Username"
                />
              </label>
              <br/>
              <label>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="Password"
                />
              </label>
              <br/>
              <input type="submit" value="Log in" />
              <br/>
              OR
              <br/>
            <button>Demo ID Log In</button>
            </div>
          </form>

            <div>
              {this.navLink()}
            </div>

        </div>
      );
    } else {
      return (
        <div>
          <h1>Signup page</h1>
        </div>
      );

    }
  }
}

export default withRouter(SessionForm);