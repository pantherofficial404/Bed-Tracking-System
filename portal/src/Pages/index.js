import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from 'Pages/Home';
import Login from 'Pages/Login';
import Product from 'Pages/Product';

// const PrivateRouter = ({component,...rest})=>{
//     const render = (props)=> {
//         let redirectUrl = '/login';
//     }Login
// }

class Root extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/Product' component={Product} />
        </Switch>
      </Router>
    );
  }
}
export default Root;
