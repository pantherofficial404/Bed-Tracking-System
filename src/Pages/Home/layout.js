import React, { Component } from 'react'
import { withStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import style from './style';
import Header from '../../Components/Header/layout';

class Layout extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Header />
        <Typography variant="body1">Home Screen</Typography>
      </div>
    )
  }
}

export default withStyles(style)(Layout);
