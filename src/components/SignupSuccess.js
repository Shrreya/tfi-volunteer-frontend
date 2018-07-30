import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

// Override theme properties to be used by button components
const theme = createMuiTheme({
  palette: {
    primary: { main: '#3CAFCA' }
  }
});

class SignupSuccess extends Component {

  render() {

    return (
      <div className='success-page'>
        <h2>Thanks! Signed up successfully.</h2>
        <MuiThemeProvider theme={theme}>
          <Button
            variant='outlined'
            size='small'
            color='primary'
            style={{margin: '5px'}}
            component={Link}
            to={`/`}
          >
            Back to Home
          </Button>
          <Button
            variant='outlined'
            size='small'
            color='primary'
            style={{margin: '5px'}}
            component={Link}
            to={`/search`}
          >
            Search more
          </Button>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default SignupSuccess;
