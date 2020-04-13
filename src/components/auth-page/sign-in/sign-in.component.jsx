import React from 'react';
import './sign-in.styles.scss';

// Custom imports
import FormInput from '../form-input/form-input.component';
import CustomButton from '../../shared/inversed-btn/inversed-btn.component';
import { signInWithGoogle } from '../../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  // Prevent default behavior of form submitting and make both input fields empty
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({email: '', password: ''});
  }

  // Take wathever user insert into form and dynamicaly set state
  // If user change password the name will be password, if email - name will be email
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return(
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            type="email" 
            name="email"
            handleChanges={this.handleChange}
            value={this.state.email}
            label="email"
            required 
          />
          <FormInput 
            type="password" 
            name="password"
            handleChanges={this.handleChange}
            value={this.state.password}
            label="password"
            required 
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            {/** Send isGoogleSignIn as props to apply aditional styling CustomButton component */}
            <CustomButton
              type="reset"
              onClick={signInWithGoogle} 
              isGoogleSignIn
            >
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;
