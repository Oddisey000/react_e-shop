import React from 'react';
import './sign-up.styles.scss';

// Importing additional components
import FormInput from '../form-input/form-input.component';
import CustomButton from '../../shared/inversed-btn/inversed-btn.component';

// Importing Firebase related stuff
import { auth, createUserProfileDocument } from '../../../firebase/firebase.utils';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  // Component's logic functions
  handleSubmit = async event => {
    event.preventDefault();

    // Get data from state
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    // Prepare data for firebase and send it
    try {
      // Save response from firebase into user variable
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      // When data preparation by firebase is complete, write a new user into database
      await createUserProfileDocument(user, {displayName});

      // Clear the state and also the form inputs
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch(error) {
      console.log(error.message);
    }
  }

  handleChange = event => {
    // Get data from input field
    const { name, value } = event.target;
    // Dinamicaly change state property name's value
    this.setState({ [name]: value });
  }

  render() {
    // Destructuring all state's data
    const { displayName, email, password, confirmPassword } = this.state;
    return(
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form 
          className="sign-up-form"
          onSubmit={this.handleSubmit}
        >
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            minLength="6"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            minLength="6"
            required
          />
          <CustomButton type="submit">{'Sign up'.toUpperCase()}</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
