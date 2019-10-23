import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Contact from "./components/Contact"
import About from "./components/About"
import Footer from "./components/Footer"
// import Signin from "./components/Signin"
// import Signup from "./components/Signup"
import Wrapper from "./components/Wrapper"

function App() {
  return (
    <Router>
      <div>
      <Navbar/>
      <Wrapper>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/signin" component={Signin} />
      <Route exact path="/signup" component={Signup} /> */}
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/about" component={About} />
      </Wrapper>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
