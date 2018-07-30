import React, { Component } from 'react';
import { connect } from 'react-redux';
import OppCard from './OppCard';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// Override theme properties to be used by material UI components
const theme = createMuiTheme({
palette: {
  primary: { main: '#AB47BC' },
  secondary: { main: '#3CAFCA' }
}
});

class SignupForm extends Component {

  state = {
    name: '',
    email: '',
    reason: '',
    invalidEmail: false
  };

  // Handle change in name, email, reason
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
    // Reset email field error mark on typing
    if(name === 'email' && this.state.invalidEmail) {
      this.setState({invalidEmail: false});
    }
  };

  // Submit new volunteer signup
  handleSubmit = () => {
    // Set error mark on email field if invalid email
    this.setState({
      invalidEmail : !validateEmail(this.state.email)
    }, () => {
      if(!this.state.invalidEmail) {
       this.setState({
         name: '',
         email: '',
         reason: ''
       });
       // TODO : save signup to backend
      }
    });
  };

  render() {

    const { opp } = this.props;
    const { name, email, reason, invalidEmail } = this.state;

    return (
      <div className='signup-form'>
        <h2>Sign Up for Volunteer Opportunity</h2>
        <h4>Opportunity ID : {opp ? opp.id : ''}</h4>
        {opp ? <OppCard opp={opp} /> : null}
        <MuiThemeProvider theme={theme}>
          <TextField
            label='Full Name'
            style={{width: '60%', marginBottom: '20px'}}
            value={name}
            onChange={this.handleChange('name')}
          />
          <TextField
            label='Email ID'
            helperText='Must be a valid email ID'
            error={invalidEmail}
            style={{width: '60%', marginBottom: '20px'}}
            value={email}
            onChange={this.handleChange('email')}
          />
          <TextField
            label='Cover Letter'
            helperText='Tell us why you wish to sign up in approx 200 words'
            style={{width: '60%', marginBottom: '20px'}}
            multiline
            rowsMax='6'
            value={reason}
            onChange={this.handleChange('reason')}
          />
          <div>
            <Button
              variant='contained'
              disabled={name === '' || email === '' || reason === ''}
              color='secondary'
              onClick={this.handleSubmit}
            >
              Submit
            </Button>
          </div>
          <p>All fields are required</p>
        </MuiThemeProvider>
      </div>
    );
  }
}

// Helper function to validate email using regex
function validateEmail(mail)
{
 return (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail))
}

function mapStateToProps({ opps }, props) {
  const { id } = props.match.params;
  const opp = opps.find((opp) => opp.id === id);
  return {
    opp
  }
}

export default connect(mapStateToProps)(SignupForm);
