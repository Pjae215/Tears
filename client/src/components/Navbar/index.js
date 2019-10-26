import React from "react";
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl'



function NavigationBar () {
      return(
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
      };
  
export default NavigationBar;
