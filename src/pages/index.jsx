/* eslint-disable react/no-danger */
import React from 'react';
import { Link, graphql } from 'gatsby';

import styled from 'styled-components';
import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';

const SocialItem = styled.li`
    margin-right: 1rem;
    margin-bottom: 1rem;
    font-size: 1rem;

    @media (max-width: 749px) {
        display: inline;
    }
`;

const Grid = styled.div`
    display: grid;
    column-gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const BlogIndex = ({ data, location }) => {
    const { title: siteTitle, social } = data.site.siteMetadata;
    const posts = data.allMarkdownRemark.edges;

    return (
        <Layout location={location} title={siteTitle}>
            <SEO
                title="Home"
                keywords={['blog', 'gatsby', 'javascript', 'react']}
            />
            <Grid>
                <div>
                    <header>
                        <h1
                            css={`
                                font-family: 'Lora', serif;
                                font-weight: bold;
                                margin-top: 0;
                                margin-bottom: 2rem;
                                font-size: 5rem;
                                color: ${props => props.theme.action};
                            `}
                        >
                            {siteTitle}
                        </h1>
                    </header>
                    <Bio />
                    <ul
                        css="
                            list-style: none;
                            padding: 0;
                            margin-bottom:4rem;
                        "
                    >
                        <SocialItem>
                            <a href="//music.cipri.codes">
                                <span aria-hidden="true">🎧</span> Music
                            </a>
                        </SocialItem>
                        <SocialItem>
                            <a href={`https://github.com/${social.handle}`}>
                                <span aria-hidden="true">🐙</span> Github
                            </a>
                        </SocialItem>
                        <SocialItem>
                            <a href={`https://twitter.com/${social.handle}`}>
                                <span aria-hidden="true">🐦</span> Twitter
                            </a>
                        </SocialItem>
                        <SocialItem>
                            <a href="https://til.cipri.codes">
                                <span aria-hidden="true">🧠</span> TIL
                            </a>
                        </SocialItem>
                    </ul>
                </div>
                <main>
                    <h2
                        css={`
                            font-family: 'Lora', serif;
                            font-weight: bold;
                            margin-top: 0;
                            font-size: 2rem;
                            color: ${props => props.theme.action};
                        `}
                    >
                        <span aria-hidden="true">📝</span>
                        {" Stuff I've written"}
                    </h2>
                    {posts.map(({ node }) => {
                        const title =
                            node.frontmatter.title || node.fields.slug;
                        return (
                            <Link
                                key={node.fields.slug}
                                to={node.fields.slug}
                                css={`
                                    display: block;
                                    border-left: 5px solid
                                        ${props => props.theme.action};
                                    transition: border-width 0.1s ease-in-out;
                                    padding-left: 1rem;
                                    margin-bottom: 2rem;
                                    &:hover {
                                        border-left: 15px solid
                                            ${props => props.theme.action};
                                        border-bottom: none;
                                        }
                                    }
                                `}
                            >
                                <h3 css="margin-bottom:0.5rem">{title}</h3>
                                <small
                                    css={`
                                        color: ${props =>
                                            props.theme.foreground};
                                    `}
                                >
                                    {node.frontmatter.date}
                                </small>
                                <p
                                    css={`
                                        color: ${props =>
                                            props.theme.foreground};
                                    `}
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            node.frontmatter.description ||
                                            node.excerpt,
                                    }}
                                />
                            </Link>
                        );
                    })}
                </main>
            </Grid>
        </Layout>
    );
};

export default BlogIndex;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
                social {
                    handle
                }
            }
        }
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
