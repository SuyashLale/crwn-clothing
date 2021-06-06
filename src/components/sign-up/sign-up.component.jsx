import React from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signUpStart } from "../../redux/user/user.actions";
import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    const { signUpStart } = this.props;

    //if passwords dont match, return from the method
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    signUpStart({ email, password, displayName });
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span className="subtitle">Sign up with email and password</span>

        <form onSubmit={this.handleSubmit} className="sign-up-form">
          <FormInput
            label="Display Name"
            name="displayName"
            value={displayName}
            type="text"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label="Email"
            name="email"
            value={email}
            type="email"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label="Password"
            name="password"
            value={password}
            type="password"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label="Confirm Password"
            name="confirmPassword"
            value={confirmPassword}
            type="password"
            handleChange={this.handleChange}
            required
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
