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
`;

function Home() {
  return (
    <Styles>
<div>
  <h2>Chivalry</h2>

  <p>Why do we use it?
 The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
  
</div>
</Styles>
  );
}

export default Home;