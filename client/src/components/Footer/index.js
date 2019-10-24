import React from "react";
import {FooterSection, FooterLinkList} from 'react-mdl';

    export const Footer = () => (
      <Footer size="mini">
        <FooterSection type="left" logo="Title">
        <FooterLinkList>
            <a href="/">Help</a>
            <a href="/">Privacy & Terms</a>
        </FooterLinkList>
        </FooterSection>
        </Footer>
    )