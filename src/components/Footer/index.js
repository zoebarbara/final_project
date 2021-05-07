import React, { useState } from 'react';

import { FooterNav,
         UlFooter,
         FooterLink,
         ParFooter
        } from './FooterElements';

const Footer = () => {
   
    return (
        <FooterNav>
            <UlFooter>
                <FooterLink to='/home'>Home</FooterLink>
                <FooterLink to='/home'>About</FooterLink>
                <FooterLink to='/home'>Contact</FooterLink>
                <FooterLink to='/home'>Privacy Policy</FooterLink>
            </UlFooter>
            <ParFooter>Privacy Policy &copy;2021, All rights reserved</ParFooter>
        </FooterNav> 
    )
}

export default Footer;
