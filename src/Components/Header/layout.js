import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import { Typography, AppBar, Toolbar, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import style from './style';

class Layout extends Component {
  // static propTypes: { classes: PropTypes.Validator<object> };

  render() {
    const { classes, title } = this.props;
    return (
        <AppBar position="static">
          <Toolbar className={classes.navigationBar}>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" >
              {title || 'Desiese Finder'}
            </Typography>
            <Button variant="contained" className={classes.button}>
              LogOut
          </Button>
          </Toolbar>
        </AppBar>
      )
    }
  }

Layout.propTypes = {
          classes: PropTypes.object.isRequired,
      };


      export default withStyles(style)(Layout);
