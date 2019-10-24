import React from "react";
// import {Link} from "react-router-dom"
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';
// import {chivalry} from 'chivalry.png';

//don't forget the hash over the d in div
const Styles = styled.div` 

  .navbar {
    background: black;
    height: 100px;
    position: relative;
  }

  .navbar-brand, .navbar-nav .nav-link{
    color: white;
    &:hover{ color:red; }
  }
  `; //closing the hash mark (found next to the #1 on keyboard)

  export const NavigationBar = () => (
      <Styles>
        <Navbar className = "navbar navbar-expand-md fixed-top navbar-dark">
          <Navbar.Brand href='/' > Chivalry
            {/* <img src = {chivalry} width="50" height="30" className="d-inline-block align-top" alt="Chivalry Logo"/> */}
            </Navbar.Brand>
          <Navbar.Toggle type ='button' data-toggle='collapse' data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"/>
          <Navbar.Collapse id='basic-navbar-nav'/>
            <Nav className='ml auto'>
              <Nav.Item><Nav.Link href='/'>Home</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href='/SignIn'>SignIn</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href='/SignUp'>SignUp</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href='/About'>About</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href='/Contact'>Contact</Nav.Link></Nav.Item>
            </Nav>
        </Navbar>
      </Styles>

  );

  
        // <nav className="navbar navbar-expand-md navbar-dark fixed-top" id="mainNav">
        //   <div className="container" id="nav">
        //     <Link className="navbar-brand js-scroll-trigger"><img className="chivalry-logo-black" alt="chivalry-logo-black" src="./assets/images/logo.png" /></Link>
        //     <div className="collapse navbar-collapse" id="navbarResponsive">
        //       <ul className="navbar-nav ml-auto">
        //         <li className="nav-item">
        //           <Link className="nav-link js-scroll-trigger" to="/">Home</Link>
        //         </li>
        //         <li className="nav-item">
        //           <Link className="nav-link js-scroll-trigger" to="/signup">SignUp</Link>
        //         </li>
        //         <li className="nav-item">
        //           <Link className="nav-link js-scroll-trigger" to="/about">About</Link>
        //         </li>
        //         <li className="nav-item">
        //           <Link className="nav-link js-scroll-trigger" to="/contact">Contact</Link>
        //         </li>
        //       </ul>
        //     </div>
        //   </div>
        // </nav>
     