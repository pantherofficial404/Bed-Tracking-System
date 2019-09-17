import React, { Component } from 'react';
import { withStyles, Typography, TextField, Button } from '@material-ui/core';
import style from './style';
import axois from 'axios';

class Layout extends Component {
  state = {
    username: '',
    password: ''
  };
  onClickLogin = async () => {
    const response = await axois.post('http://localhost:8080/api/1.0/login', {
      username: this.state.username,
      password: this.state.password
    });
    console.log(response);
    console.log(response);
  };

  render() {
    const { classes } = this.props;
    const { username, password } = this.state;
    return (
      <div className={classes.container}>
        <Typography variant='h5'>Login Screen</Typography>
        <form className={classes.formContainer}>
          <div className={classes.inputContainer}>
            <TextField
              required
              placeholder='Enter Username'
              className={classes.textFieldStyle}
              margin='normal'
              value={username}
              onChange={e => this.setState({ username: e.target.value })}
            />

            <TextField
              required
              placeholder='Enter password'
              className={classes.textFieldStyle}
              margin='normal'
              value={password}
              type='password'
              onChange={e => this.setState({ password: e.target.value })}
            />
            <div>
              <Button
                onClick={this.onClickLogin}
                variant='contained'
                color='primary'
                className={classes.buttonStyle}
              >
                Login
              </Button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withStyles(style)(Layout);
