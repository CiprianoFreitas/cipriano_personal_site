import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Parallax } from 'react-spring/renderprops-addons.cjs';

// Components
import Layout from '../components/layout';
import BlogPostCard from '../components/BlogPostCard';
import Footer from '../components/Footer';

// Elements
import Inner from '../elements/Inner';
import { Title, BigTitle } from '../elements/Titles';

// Views
import Hero from '../views/Hero';
import Contact from '../views/Contact';
import Projects from '../views/Projects';

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

const Index = ({ data }) => {
    const posts = data.allMarkdownRemark.edges;
    return (
        <>
            <Layout />
            <Parallax pages={4}>
                <Hero offset={0}>
                    <BigTitle>
                        Hi, <br /> I'm Cipri. 👋🏻
                    </BigTitle>
                    <AboutHero>
                        <AboutSub>
                            <p>
                                My name is Cipriano Freitas and I currently live
                                in Amsterdam helping people book their travels
                                at{' '}
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
                <Projects offset={1}>
                    <Title>Stuff I've Written</Title>
                    <ProjectsWrapper>
                        {posts.map(({ node }) => {
                            const title =
                                node.frontmatter.title || node.fields.slug;
                            return (
                                <BlogPostCard
                                    title={title}
                                    link={node.fields.slug}
                                    bg="linear-gradient(140deg, rgba(22,23,25,1) 0%, rgba(42,46,48,1) 100%)"
                                >
                                    <p
                                        // eslint-disable-next-line react/no-danger
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                node.frontmatter.description ||
                                                node.excerpt,
                                        }}
                                    />
                                </BlogPostCard>
                            );
                        })}
                    </ProjectsWrapper>
                </Projects>
                <Contact offset={3}>
                    <Inner>
                        <Title>Get in touch</Title>
                        <ContactText>
                            Say{' '}
                            <a href="mailto:cipriano.freitas@outlook.com">Hi</a>{' '}
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
                    <Footer />
                </Contact>
            </Parallax>
        </>
    );
};
export const pageQuery = graphql`
    query {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { published: { eq: true } } }
        ) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                    }
                }
            }
        }
    }
`;
export default Index;
