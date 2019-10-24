import React from "react";
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl'

// import {Link} from "react-router-dom"
// import {Nav, Navbar} from 'react-bootstrap';
// import styled from 'styled-components';
// import hammockcouple from './hammockcouple'


  export const NavigationBar = () => (
      /* Uses a transparent header that draws on top of the layout's background */
<div style={{height: '300px', position: 'relative'}}>
  <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
        <Header transparent title="Chivalry" style={{color: 'white'}}>
            <Navigation>
            <a href='/'>Home</a>
                <a href='/SignIn'>SignIn</a>
                <a href='/SignUp'>SignUp</a>
                <a href='/About'>About</a>
                <a href='/Contact'>Contact</a>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href='/'>Home</a>
                <a href='/SignIn'>SignIn</a>
                <a href='/SignUp'>SignUp</a>
                <a href='/About'>About</a>
                <a href='/Contact'>Contact</a>
            </Navigation>
        </Drawer>
        <Content />
    </Layout>
</div>
        
     

  );

// <Styles>
//<Navbar className = "navbar navbar-expand-md fixed-top navbar-dark">
//           <Navbar.Brand href='/' > Chivalry
//             {/* <img src = {chivalry} width="50" height="30" className="d-inline-block align-top" alt="Chivalry Logo"/> */}
//             </Navbar.Brand>
//           <Navbar.Toggle type ='button' data-toggle='collapse' data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"/>
//           <Navbar.Collapse id='basic-navbar-nav'/>
//             <Nav className='ml auto'>
//               <Nav.Item><Nav.Link href='/'>Home</Nav.Link></Nav.Item>
//               <Nav.Item><Nav.Link href='/SignIn'>SignIn</Nav.Link></Nav.Item>
//               <Nav.Item><Nav.Link href='/SignUp'>SignUp</Nav.Link></Nav.Item>
//               <Nav.Item><Nav.Link href='/About'>About</Nav.Link></Nav.Item>
//               <Nav.Item><Nav.Link href='/Contact'>Contact</Nav.Link></Nav.Item>
//             </Nav>
//         </Navbar>
 //</Styles>