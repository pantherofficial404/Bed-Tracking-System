import React, { Component } from 'react'
import { withStyles, CssBaseline, Container, Avatar } from '@material-ui/core';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import AccountCircle from '@material-ui/icons/AccountCircle';
import  LockIcon  from '@material-ui/icons/Lock';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Typography, TextField, Button } from '@material-ui/core';
import style from './style';

class Layout extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Container maxWidth="xs">
        <CssBaseline/>
        <div className={classes.container}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" className={classes.Typography}>
          Sign In
        </Typography>
        <form className={classes.from} noValidate>
        <TextField
            className={classes.textField}
            margin="normal"
            fullWidth
            variant="outlined"
            placeholder="Enter Your Password"
            autoComplete="email"
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
            fullWidth
            type="password"
            variant="outlined"
            placeholder="Enter Your Password"
            InputProps={{
              startAdornment: (
                <InputAdornment className={classes.icon} position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
          />
           <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
           <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.btnsubmit}
          >
            Sign In
          </Button>
          {/* <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.btnsubmit}
          >
            Create New Account
          </Button> */}
        </form>
        </div>
      </Container>

    )
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(style)(Layout);
