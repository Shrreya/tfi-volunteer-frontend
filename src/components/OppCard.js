import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import LocationIcon from '@material-ui/icons/LocationOn';
import TimeIcon from '@material-ui/icons/Schedule';
import CardActions from '@material-ui/core/CardActions';
import SignUpIcon from '@material-ui/icons/ThumbUp';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

// Styles to be applied to card components
const styles = theme => ({
  card: {
    minWidth: '40%',
    maxWidth: '60%',
    margin: 'auto',
    backgroundColor: '#E0E0E066'
  },
  title: {
    color: '#3CAFCA',
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
});

// Color to be applied to various components
const theme = createMuiTheme({
palette: {
  primary: { main: '#3CAFCA' }
}
});

class OppCard extends Component {

  state = { expanded: false };

  // Handle click on expand button
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {

    const { classes, opp } = this.props;

    return (
      <div className='opp-card'>
        <Card className={classes.card}>
          <CardHeader
            title={opp.get('title')}
            subheader={`Posted on ${opp.createdAt.toLocaleDateString()}`}
            classes={{title: classes.title}}/>
          <CardContent>
            <div className='info-list'>
              <MuiThemeProvider theme={theme}>
                <div className='info'>
                  <LocationIcon color='primary'/>
                  <Typography>{opp.get('location')}</Typography>
                </div>
                <div className='info'>
                  <TimeIcon color='primary'/>
                  <Typography>{`${opp.get('hours')} hrs/day`}</Typography>
                </div>
              </MuiThemeProvider>
            </div>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <MuiThemeProvider theme={theme}>
              <IconButton
                color='primary'
                component={Link}
                to={`/signup/${opp.id}`}
              >
                <SignUpIcon />
              </IconButton>
            </MuiThemeProvider>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label='Show more'
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout='auto' unmountOnExit>
            <CardContent>
              <Typography paragraph>
                {opp.get('description')}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

OppCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OppCard);
