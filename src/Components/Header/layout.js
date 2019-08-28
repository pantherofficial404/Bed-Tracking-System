import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import { Typography, AppBar, Toolbar, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import style from './style';
import {Link} from 'react-router-dom';
class Layout extends Component {
  render() {
    const { classes } = this.props;
    return (
        <AppBar position="static">
          <Toolbar className={classes.navigationBar}>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="normal" >
              {'DesieseFinder'}
            </Typography>
            <div className={classes.AppBarstyle}>
      <Link to='/login'>
            <Button variant="contained" className={classes.button}>
              LogOut
          </Button>
        </Link>
      <Link to="/about">
          <Button variant="contained" className={classes.button}>
              About Us
          </Button>
      </Link>
          </div>
          </Toolbar>
        </AppBar>
      )
    }
  }

Layout.propTypes = {
          classes: PropTypes.object.isRequired,
      };


      export default withStyles(style)(Layout);
