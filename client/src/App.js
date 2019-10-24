import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './components/Home';
import {About} from './components/About';
import {Contact} from './components/Contact';
import {NoMatch} from './components/NoMatch';
import {Layout} from './components/Layout';
import {NavigationBar} from './components/Navbar';
import {SignIn} from './components/SignIn';
import {SignUp} from './components/SignUp';
// import {Footer} from './components/Footer';


class App extends Component {
  render() {
    return (
      //instead of a wrapper we'll use the built in component of fragment
      <React.Fragment>
        <NavigationBar/>
        <Layout>
        <Router>
        <Switch>
          <Route exact path ="/" component = {Home} />
          <Route exact path ="/SignIn" component = {SignIn} />
          <Route exact path ="/SignUp" component = {SignUp} />
          <Route exact path ="/About" component = {About} />
          <Route exact path ="/Contact" component = {Contact} />
          <Route component= {NoMatch} />
        </Switch>
        </Router>
        </Layout>
      </React.Fragment>
     
    );
  }
}

export default App;
