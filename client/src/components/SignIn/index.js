import React from "react";
import {Form, Button} from 'react-bootstrap';
import styled from 'styled-components';
// import {chivalry} from 'chivalry.png';

//don't forget the hash over the d in div
const Styles = styled.div` 

  Form {
    padding-top: 20px;
    background: white;
    height: 50px;
    position: relative;
  }

  .Label{
    color: black;
    &:hover{ color:red; }
  }
  `; 

  export const SignIn = () => (
    <Styles>
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email Address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" id='email' />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text></Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" id='password'/>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    View Your Profile
  </Button>
</Form>
</Styles>
  )