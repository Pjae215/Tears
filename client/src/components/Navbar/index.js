import React from "react";
import {Layout, Header, Navigation, Content} from 'react-mdl'
// import styled from 'styled-components';

// const picOne = require('./bnwcuteeyes.jpg');
// const picTwo = require('./bnwsoreneckguy.jpg');
// const picThree = require('./bnwmessyhair.jpg');

// //don't forget the hash over the d in div
// const Styles = styled.div`

//   Form {
//     padding-top: 20px;
//     background: white;
//     height: 50px;
//     position: relative;
//   }

//   .Label{
//     color: black;
//     &:hover{ color:red; }
//   }

//   }
//   `; 


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
        <Content />
    </Layout>
</div>

  ); 
      };
  
export default NavigationBar;
