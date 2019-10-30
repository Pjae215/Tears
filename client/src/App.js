import React, { Component, Register } from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NoMatch from './components/NoMatch';
import Layout from './components/Layout';
import NavigationBar from './components/Navbar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import axios from 'axios';
import Gallery from './pages/Gallery'
// import {Footer} from './components/Footer';



class App extends Component {
  state = {}
//Put the functions that communicate with the server here:
//SignUp New User
handleFormSubmit = (req) => {
  console.log('this is from the app component', req)
  axios.post('/user', req).then(response => {
    console.log(response)
  })

  return (
    <Register handleFormSubmit={this.handleFormSubmit}/>
  );
}




//this is what is rendered on the front end 
  render() {
    return (
      
      <React.Fragment>
        <NavigationBar/>
        <Layout>
        <Router>
        <Switch>
          <Route exact path ="/" component = {Home} />
          <Route exact path ="/SignIn" component = {SignIn} />
          <Route exact path ="/SignUp" component = {SignUp} />
          <Route exact path ="/Matches" component = {Gallery} />
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
