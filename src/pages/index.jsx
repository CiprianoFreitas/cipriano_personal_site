import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

// Components
import Layout from '../components/layout';

// Elements
import Inner from '../elements/Inner';
import { BigTitle } from '../elements/Titles';

// Views
import Background from '../elements/Background';


const CustomLink = styled.a`
    ${tw`underline`}
`;

const AboutHero = styled.div`
    ${tw`flex flex-col lg:flex-row items-center mt-8 z-50`};
`;

const AboutSub = styled.span`
    ${tw`text-white pt-12 lg:pt-0 text-2xl font-sans`};
`;


const Index = ({ data }) => {
    const posts = data.allMarkdownRemark.edges;
    return (
        <>
            <Layout />
            <Background />
            <Inner>
                <BigTitle>
                    Hi, <br /> I'm Cipri. 👋🏻
                </BigTitle>
                <AboutHero>
                    <AboutSub>
                        <p>
                            My name is Cipriano Freitas and I currently live in
                            Amsterdam helping people book their travels at{' '}
                            <CustomLink href="https://booking.com">
                                Booking.com
                            </CustomLink>
                            .
                        </p>
                        <p>
                            I'm a{' '}
                            <CustomLink href="https://github.com/CiprianoFreitas">
                                developer
                            </CustomLink>{' '}
                            by day and a{' '}
                            <CustomLink href="https://music.cipri.codes">
                                musician
                            </CustomLink>{' '}
                            by night.
                        </p>{' '}
                        <p>Sometimes I also write things.</p>
                    </AboutSub>
                </AboutHero>
            </Inner>
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
