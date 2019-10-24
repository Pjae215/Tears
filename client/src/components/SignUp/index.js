import React from "react";
import { Form, Button, Col} from 'react-bootstrap';
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
  }
  `;

export const SignUp = () => (
    <Styles>

        <Form>
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control id="email" type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridGender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control as="select" id="gender" >
                        <option>Choose...</option>
                        <option>Male</option>
                        <option>Female</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridUsername">
                    <Form.Label>UserName</Form.Label>
                    <Form.Control id="username" type="text" placeholder="Enter a display name" />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control id="password" type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Verify Password</Form.Label>
                    <Form.Control id="password2" type="password" placeholder="Password2" />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridZipMonth">
                    <Form.Label>Birth Month</Form.Label>
                    <Form.Control id="month" placeholder="MM Format" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridDay">
                    <Form.Label>Day of Month</Form.Label>
                    <Form.Control id="day"  placeholder="DD Format" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridYear">
                    <Form.Label>Birth Year</Form.Label>
                    <Form.Control id="year" placeholder="YYYY Format" />
                </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="I am a person" />
            </Form.Group>

            <Button variant="danger btn-md" type="submit">
                Submit 
            </Button>
        </Form>
    </Styles>
)