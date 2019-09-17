import React, { Component } from 'react';
import { withStyles, Typography } from '@material-ui/core';
import axios from 'axios';

import style from './style';
import { Header } from 'Components';

class Layout extends Component {
  handleNavigation = () => {
    this.props.history.push('/product');
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Header />
        <table style={{ width: '50%', marginTop: '20px' }}>
          <tr>
            <th>Productname</th>
            <th>price</th>
          </tr>
          <tr style={{ textAlign: 'center' }}>
            <td>Eve</td>
            <td>Jackson</td>
          </tr>
        </table>
        <br></br>
        <br></br>
        <button onClick={this.productdeti}>product Page</button>
        <button onClick={this.getdata}>product Page</button>
      </div>
    );
  }
}

export default withStyles(style)(Layout);
