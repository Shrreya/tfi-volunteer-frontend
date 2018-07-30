import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleSaveOpp } from '../actions/shared';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SubtractCircleIcon from '@material-ui/icons/RemoveCircle';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

// Override theme properties to be used by material UI components
const theme = createMuiTheme({
palette: {
  primary: { main: '#AB47BC' },
  secondary: { main: '#3CAFCA' }
}
});

class CreateForm extends Component {

  state = {
    title: '',
    description: '',
    hours: 4,
    location: 'none'
  };

  // Handle change in title, description, location
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  // Handle daily hours update, limited between 1-8
  updateHours = (operation) => {
    if (operation === '+') {
      this.setState((state) => ({
        hours: state.hours === 8 ? state.hours : state.hours + 1
      }));
    } else {
      this.setState((state) => ({
        hours: state.hours === 1 ? state.hours : state.hours - 1
      }));
    }
  };

  // Submit new volunteer opportunity
  handleSubmit = () => {
    const opp = this.state;
    this.setState({
      title: '',
      description: '',
      hours: 4,
      location: 'none'
    });
    this.props.dispatch(handleSaveOpp(opp));
  };

  render() {

    const { title, description, hours, location } = this.state;
    const { cities } = this.props;

    return (
      <div className='create-form'>
        <h2>Create Volunteer Opportunity</h2>
        <MuiThemeProvider theme={theme}>
          <TextField
            label='Title'
            helperText='Should be short & easy to understand'
            style={{width: '60%', marginBottom: '20px'}}
            multiline
            rowsMax='2'
            value={title}
            onChange={this.handleChange('title')}
          />
          <TextField
            label='Description'
            helperText='More details in 5-6 lines'
            style={{width: '60%', marginBottom: '20px'}}
            multiline
            rowsMax='6'
            value={description}
            onChange={this.handleChange('description')}
          />
          <div style={{marginBottom: '10px'}}>
            <span className='content'>Daily Hours</span>
            <IconButton
              color='secondary'
              aria-label='Subtract'
              onClick={() => this.updateHours('-')}>
              <SubtractCircleIcon />
            </IconButton>
            <span className='content'>{hours}</span>
            <IconButton
              color='secondary'
              aria-label='Add'
              onClick={() => this.updateHours('+')}>
              <AddCircleIcon />
            </IconButton>
          </div>
          <div style={{marginBottom: '20px'}}>
            <Select value={location} onChange={this.handleChange('location')}>
              <MenuItem value='none' disabled>
                City?
              </MenuItem>
              {
                cities.map((city) => (
                  <MenuItem key={city.id} value={city.get('name')}>
                    {city.get('name')}
                  </MenuItem>
                ))
              }
            </Select>
          </div>
          <Button
            variant='contained'
            disabled={title === '' || description === '' || location === 'none'}
            color='secondary'
            onClick={this.handleSubmit}
          >
            Submit
          </Button>
          <p>All fields are required</p>
        </MuiThemeProvider>
      </div>
    );
  }
}

function mapStateToProps({ cities }) {
  return { cities };
}

export default connect(mapStateToProps)(CreateForm);
