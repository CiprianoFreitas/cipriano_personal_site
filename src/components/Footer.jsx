import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const FooterStyle = styled.footer`
    ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`;

const Footer = () => (
    <FooterStyle>&copy; 2019 by Cipriano Freitas in Amsterdam 🚲</FooterStyle>
);

export default Footer;
