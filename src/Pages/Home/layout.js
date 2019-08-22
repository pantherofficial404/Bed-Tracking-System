import React, { Component } from 'react'
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

import style from './style';
import Header from '../../Components/Header/layout';

class Layout extends Component {
  static propTypes: { classes: PropTypes.Validator<object> };

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

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(style)(Layout);
