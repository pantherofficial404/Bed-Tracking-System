import React, { Component } from 'react';
import { withStyles, Typography } from '@material-ui/core';
import axios from 'axios';
import Config from 'Config';
import style from './style';
import { Header } from 'Components';
import expressFirebase from 'express-firebase';

expressFirebase.connect({
  apiKey: "AIzaSyClNj0DJgcEJUVYJ6GUDt4evTWfaa9_aK0",
  authDomain: "fir-8c243.firebaseapp.com",
  databaseURL: "https://fir-8c243.firebaseio.com",
  projectId: "fir-8c243",
  storageBucket: "fir-8c243.appspot.com",
  messagingSenderId: "255974233649",
  appId: "1:255974233649:web:9402b696253a881ccfe710"
})
class Layout extends Component {
  state = {
    product :[],
    isLoaded:false,
    image:''
  }
  handleNavigation = () => {
    this.props.history.push('/product');
  };

  async componentDidMount(){
    const response = await axios.get(`${Config.SERVER_URL}/product`);
    const products = response.data.data.products;
    this.setState({
      product:products,
      isLoaded:true
    })
  }
  handleFile = (e)=>{
    this.setState({
      image:e.target.files[0],
    })
  }

  handleImageUpload = async ()=>{
    const response = await expressFirebase.uploadFile(this.state.image.name,this.state.image);
    await axios.post(`${Config.SERVER_URL}/product`,{
      productName:response,
      price:200,
    });
    console.log("Data Saved");
  }
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
         {!this.state.isLoaded &&
         <div>
           Data is Loading....
         </div>}
         {this.state.isLoaded && this.state.product.map(product=>(
           <tr>
             <img src={product.productName} height="100" width="100"/>
             <td>{product.price}</td>
           </tr>
         ))}
        </table>
        <br></br>
        <br></br>
        <input type="file" onChange={this.handleFile}/>
        <button onClick={this.handleImageUpload}>Submit</button>
      </div>
    );
  }
}

export default withStyles(style)(Layout);
