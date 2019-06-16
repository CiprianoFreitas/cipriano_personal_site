import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { graphql } from 'gatsby';

// Components
import Layout from '../components/layout';

// Elements
import Inner from '../elements/Inner';
import { BigTitle, SmallTitle } from '../elements/Titles';

// Views
import Background from '../elements/Background';

const CustomLink = styled.a`
    ${tw`underline`}
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
            </Inner>
            <Inner>
                <SmallTitle>Stuff I've written</SmallTitle>
                <ul>
                    {posts.map(({ node }) => {
                        const title =
                            node.frontmatter.title || node.fields.slug;
                        return (
                            <li>
                                <h3>{title}</h3>
                                <p
                                    // eslint-disable-next-line react/no-danger
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            node.frontmatter.description ||
                                            node.excerpt,
                                    }}
                                />
                            </li>
                        );
                    })}
                </ul>
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
