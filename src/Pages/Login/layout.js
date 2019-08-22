import React, { Component } from 'react'
import { withStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import style from './style';

class Layout extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Typography variant="body1">Login Screen</Typography>
      </div>
    )
  }
}

export default withStyles(style)(Layout);
