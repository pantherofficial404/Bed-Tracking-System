import React, { Component } from 'react'
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

import style from './style';

class Layout extends Component {
  static propTypes: { classes: PropTypes.Validator<object> };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Typography variant="body1">Login Screen</Typography>
      </div>
    )
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(style)(Layout);
