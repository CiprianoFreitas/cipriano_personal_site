import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Parallax } from 'react-spring/renderprops-addons.cjs';

// Components
import Layout from '../components/Layout';

// Elements
import Inner from '../elements/Inner';
import { Title, BigTitle } from '../elements/Titles';

// Views
import Hero from '../views/Hero';
import About from '../views/About';
import Contact from '../views/Contact';

const ColouredLink = styled.a`
    ${tw`px-2 py-1 text-white underline`}
`;

const BlueLink = styled(ColouredLink)`
    ${tw`bg-blue-dark hover:bg-blue-darker`}
`;

const RedLink = styled(ColouredLink)`
    ${tw`bg-red hover:bg-red-light`}
`;

const YellowLink = styled(ColouredLink)`
    ${tw`bg-yellow hover:bg-yellow-dark`}
`;

const AboutHero = styled.div`
    ${tw`flex flex-col lg:flex-row items-center mt-8`};
`;

const AboutSub = styled.span`
    ${tw`text-white pt-12 lg:pt-0 text-2xl font-sans`};
`;

const ContactText = styled.p`
    ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`;

const Footer = styled.footer`
    ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`;

const Index = () => (
    <>
        <Layout />
        <Parallax pages={3}>
            <Hero offset={0}>
                <BigTitle>
                    Hi, <br /> I'm Cipri. 👋🏻
                </BigTitle>
                <AboutHero>
                    <AboutSub>
                        <p>
                            My name is Cipriano Freitas and I currently live in
                            Amsterdam helping people book their travels at{' '}
                            <BlueLink href="https://booking.com">
                                Booking.com
                            </BlueLink>
                            .
                        </p>
                        <p>
                            I'm a{' '}
                            <RedLink href="https://github.com/CiprianoFreitas">
                                developer
                            </RedLink>{' '}
                            by day and a{' '}
                            <YellowLink href="https://music.cipri.codes">
                                musician
                            </YellowLink>{' '}
                            by night.
                        </p>{' '}
                        <p>Sometimes I also write things.</p>
                    </AboutSub>
                </AboutHero>
            </Hero>
            <About offset={1}>
                <Title>About</Title>
            </About>
            <Contact offset={2}>
                <Inner>
                    <Title>Get in touch</Title>
                    <ContactText>
                        Say <a href="mailto:cipriano.freitas@outlook.com">Hi</a>{' '}
                        or find me on other platforms:{' '}
                        <a href="https://twitter.com/CiprianoFreitas">
                            Twitter
                        </a>{' '}
                        &{' '}
                        <a href="https://www.linkedin.com/in/ciprianofreitas/">
                            LinkedIn
                        </a>
                    </ContactText>
                </Inner>
                <Footer>&copy; 2019 by Cipriano Freitas in Amsterdam 🚲</Footer>
            </Contact>
        </Parallax>
    </>
);

export default Index;
