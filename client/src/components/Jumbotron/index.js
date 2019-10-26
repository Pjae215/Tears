import React from "react";
// import {Link} from "react-router-dom"
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import {messyhairImage} from '../../assets/messyhairImage.jpg';

const Styles = styled.div`
.jumbo{
    background: url(${messyhairImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #ccc;
    height:200px;
    position:relative;
    z-index: -2;
}

.overlay{
    background-color: black;
    opacity: 0.6;
    position:absolute;
    top: 0;
    left: 0;
    right:0;
    bottom: 0;
    z-index: -1;

}
`;

function Jumbotron() {
    return (
        <Styles>
        <Jumbo fluid className='Jumbo'>
            <div className='overlay'></div>
            <Container>
                <h2>Hello World</h2>
                <p>This should be a picture</p>
            </Container>
        </Jumbo>
    </Styles>)
  }
  
  export default Jumbotron;