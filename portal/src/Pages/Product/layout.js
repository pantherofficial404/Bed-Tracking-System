import React from 'react';
import axios from 'axios';

import { Header } from 'Components';
import Config from 'Config';

class Layout extends React.Component {
  state = {
    productName: '',
    price: '',
    isAdded: false
  };

  handleInput = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = async () => {
    //   Data From The User
    const { productName, price } = this.state;

    // Api Code
    await axios.post(`${Config.SERVER_URL}/product`, {
      productName,
      price
    });

    // Clear The State
    this.setState({
      productName: '',
      price: '',
      isAdded: true
    });
  };
  render() {
    return (
      <div>
        <Header title='Product Page' />
        <br />
        <input
          id='productName'
          value={this.state.productName}
          placeholder='product name'
          onChange={this.handleInput}
        />
        <br />
        <br />
        <input
          id='price'
          value={this.state.price}
          placeholder='price'
          onChange={this.handleInput}
        />
        <br />
        <br />
        <button onClick={this.handleSubmit}>Submit</button>
        {this.state.isAdded && <p>Data Saved</p>}
      </div>
    );
  }
}

export default Layout;
