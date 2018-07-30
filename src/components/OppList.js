import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import OppCard from './OppCard';

class OppList extends Component {

  state = {
    query: '',
    opps: []
  };

  handleChange = event => {
    const query = event.target.value;
    // Show all opportunities if no search query entered
    if (query === '') {
      this.setState({
        query,
        opps: this.props.opps
      });
    }

    // Filter opportunities by checking search query on title & location
    else {
      this.setState({
        query
      });
      const filteredOpps = this.props.opps
        .filter(opp => opp.get('title').toLowerCase().includes(query.toLowerCase())
        || opp.get('location').toLowerCase().includes(query.toLowerCase()));
      this.setState({
        opps: filteredOpps
      });
    }
  }

  render() {

    const { query } = this.state;
    // Fetch opps from state or props
    const opps = this.state.opps.length > 0 || query.length > 0
      ? this.state.opps
      : this.props.opps;

    return (
      <div className='opp-list-container'>
        <div>
          <TextField
            label="Search"
            helperText="Use keyword or location"
            value={query}
            onChange={this.handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon/>
                </InputAdornment>
              ),
            }}
            style={{width: '50%', margin: '20px'}}
          />
        </div>
        <ul className='opp-list'>
          {
            opps.map((opp) => (
              <OppCard key={opp.id} opp={opp}/>
            ))
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ opps }) {
  return { opps };
}

export default connect(mapStateToProps)(OppList);
