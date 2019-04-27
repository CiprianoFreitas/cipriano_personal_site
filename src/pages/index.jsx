import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Parallax } from 'react-spring/renderprops-addons.cjs';

// Components
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';

// Elements
import Inner from '../elements/Inner';
import { Title, BigTitle, Subtitle } from '../elements/Titles';

// Views
import Hero from '../views/Hero';
import Projects from '../views/Projects';
import About from '../views/About';
import Contact from '../views/Contact';

import avatar from '../images/avatar.jpg';

const ProjectsWrapper = styled.div`
    ${tw`flex flex-wrap justify-between mt-8`};
    display: grid;
    grid-gap: 4rem;
    grid-template-columns: repeat(2, 1fr);
    @media (max-width: 1200px) {
        grid-gap: 3rem;
    }
    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        grid-gap: 2rem;
    }
`;

const AboutHero = styled.div`
    ${tw`flex flex-col lg:flex-row items-center mt-8`};
`;

const Avatar = styled.img`
    ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
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
                            Amsterdam helping people book their travels at
                            Booking.com.
                        </p>
                        <p>I'm a developer by day and a musician by night.</p>{' '}
                        <p>Sometimes I also write things.</p>
                    </AboutSub>
                </AboutHero>
                {/* <Subtitle>
                    I'm creating noice web experiences for the next generation
                    of consumer-facing companies.
                </Subtitle> */}
            </Hero>
            {/* <Projects offset={1}>
                <Title>Stuff I Wrote</Title>
                <ProjectsWrapper>
                    <ProjectCard
                        title="Freiheit"
                        link="https://www.behance.net/gallery/58937147/Freiheit"
                        bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
                    >
                        This project is my entry to Adobe's
                        #ChallengeYourPerspective contest.
                    </ProjectCard>
                    <ProjectCard
                        title="Harry Potter"
                        link="https://www.behance.net/gallery/52915793/Harry-Potter"
                        bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
                    >
                        I entered the DOCMA 2017 award with this Harry Potter
                        inspired image.
                    </ProjectCard>
                    <ProjectCard
                        title="Tomb Raider"
                        link="https://www.behance.net/gallery/43907099/Tomb-Raider"
                        bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
                    >
                        Recreation of a Tomb Raider Wallpaper (Fan Art)
                    </ProjectCard>
                    <ProjectCard
                        title="Eagle"
                        link="https://www.behance.net/gallery/38068151/Eagle"
                        bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
                    >
                        A fantasy image manipulation relocating the habitat of
                        wild animals.
                    </ProjectCard>
                </ProjectsWrapper>
            </Projects> */}
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
                <Footer>&copy; 2019 by Cipriano Freitas in Amsterdam</Footer>
            </Contact>
        </Parallax>
    </>
);

export default Index;
