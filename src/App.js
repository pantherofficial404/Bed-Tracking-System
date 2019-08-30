import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/layout';
import Login from './Pages/Login/layout';
import About from './Pages/About/layout';
import Scan from './Pages/Scan/layout';
import Signup from './Pages/SingUp/layout';
class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/About" component={About} />
          <Route exact path="/scan" component={Scan} />
          <Route exact path="/SignUp" component={Signup} />
        </Switch>
      </Router>
    );
  }
}

export default App;
