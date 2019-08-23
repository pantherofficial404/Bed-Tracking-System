import React, { Component } from 'react'
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import avatar from './avtar.svg';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Typography, TextField,Button } from '@material-ui/core';
import style from './style';
class Layout extends Component {
  // static propTypes: { classes: PropTypes.Validator<object> };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>

        <img src={avatar} className={classes.avatar}></img>
        <Typography className={classes.SystemTitle}>
          Login To Bad Tracking System
        </Typography>
        <form className={classes.formContent}>
          <TextField
            className={classes.textField}
            margin="normal"
            variant="outlined"
            placeholder="Enter Your Email"
            InputProps={{
              startAdornment: (
                <InputAdornment className={classes.icon} position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
            <TextField
            className={classes.textField}
            margin="normal"
            variant="outlined"
            placeholder="Password"
            InputProps={{
              startAdornment: (
                <InputAdornment className={classes.icon} position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
           />
          <div className={classes.center}>
          <Button variant="contained" style={{background:'#1e90ff',color:"white"}} className={classes.button}>
        LOGIN
      </Button>
      </div>
        </form>
      </div>

    )
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(style)(Layout);
