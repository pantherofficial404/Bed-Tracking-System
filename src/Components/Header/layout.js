import React, { Component } from 'react'
import { withStyles } from '@material-ui/core';
import { Typography, AppBar, Toolbar } from '@material-ui/core';

import style from './style';

class Layout extends Component {
  render() {
    const { classes, title } = this.props;
    return (
      <AppBar position="static">
        <Toolbar className={classes.navigationBar}>
          <Typography variant="h6">
            {title || 'Bed Tracking System'}
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(style)(Layout);
