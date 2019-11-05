import React from "react";

import styled from 'styled-components';
import HomeImage from '../../Images/HomeImage.jpg';

const Styles = styled.div`
body{
    background: url(${HomeImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #ccc;
    height:200px;
    position:relative;
    z-index: -2;
}

.overlay{
    background-color: white;
    opacity: 0.6;
    position:absolute;
    top: 0;
    left: 0;
    right:0;
    bottom: 0;
    z-index: -1;

}
.bg{
  background-image: url("https://mdbootstrap.com/img/Photos/Horizontal/Nature/full page/img(20).jpg");
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
`;

function Home() {
  return (
    <Styles>
<div>
  <h2>Chivalry</h2></div>

  <div className="bg"></div>
  </Styles>
  );
}


export default Home;