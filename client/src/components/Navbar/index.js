import React from "react";
// import {Link} from "react-router-dom"
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

//don't forget the hash over the d in div
const Styles = styled.div` 

  .navbar {
    background-color: #222;
  }

  navbar-brand, navbar-nav .nav-link{
    color: #bbb;

      &:hover{
          color:red;
      }
  }
  `; //closing the hash mark (found next to the #1 on keyboard)

  export const NavigationBar = () => (
      <Styles>
        <Navbar expand='lg'>
          <Navbar.Brand href='/'>Chivalry</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id='basic-navbar-nav'/>
            <Nav className='ml auto'>
              <Nav.Item><Nav.Link href='/'>Home</Nav.Link></Nav.Item>
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
     