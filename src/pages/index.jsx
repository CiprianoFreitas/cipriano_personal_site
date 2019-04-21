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
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

    & > * {
        padding: 5vw 10vw;
    }
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
                    <div>
                        <p>
                            My name is <strong>Cipriano Freitas</strong> and I
                            currently live in Amsterdam helping people book
                            their travels at <strong>Booking.com</strong>.
                        </p>

                        <p>
                            I'm a developer by day and a musician by night.
                            Sometimes I also write things
                        </p>
                        <br />
                    </div>
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
                <main
                    css={`
                        background-color: ${props => props.theme.background};
                        background-image: url("data:image/svg+xml,%3Csvg width='84' height='84' viewBox='0 0 84 84' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23263238' fill-opacity='0.07'%3E%3Cpath d='M84 23c-4.417 0-8-3.584-8-7.998V8h-7.002C64.58 8 61 4.42 61 0H23c0 4.417-3.584 8-7.998 8H8v7.002C8 19.42 4.42 23 0 23v38c4.417 0 8 3.584 8 7.998V76h7.002C19.42 76 23 79.58 23 84h38c0-4.417 3.584-8 7.998-8H76v-7.002C76 64.58 79.58 61 84 61V23zM59.05 83H43V66.95c5.054-.5 9-4.764 9-9.948V52h5.002c5.18 0 9.446-3.947 9.95-9H83v16.05c-5.054.5-9 4.764-9 9.948V74h-5.002c-5.18 0-9.446 3.947-9.95 9zm-34.1 0H41V66.95c-5.053-.502-9-4.768-9-9.948V52h-5.002c-5.184 0-9.447-3.946-9.95-9H1v16.05c5.053.502 9 4.768 9 9.948V74h5.002c5.184 0 9.447 3.946 9.95 9zm0-82H41v16.05c-5.054.5-9 4.764-9 9.948V32h-5.002c-5.18 0-9.446 3.947-9.95 9H1V24.95c5.054-.5 9-4.764 9-9.948V10h5.002c5.18 0 9.446-3.947 9.95-9zm34.1 0H43v16.05c5.053.502 9 4.768 9 9.948V32h5.002c5.184 0 9.447 3.946 9.95 9H83V24.95c-5.053-.502-9-4.768-9-9.948V10h-5.002c-5.184 0-9.447-3.946-9.95-9zM50 50v7.002C50 61.42 46.42 65 42 65c-4.417 0-8-3.584-8-7.998V50h-7.002C22.58 50 19 46.42 19 42c0-4.417 3.584-8 7.998-8H34v-7.002C34 22.58 37.58 19 42 19c4.417 0 8 3.584 8 7.998V34h7.002C61.42 34 65 37.58 65 42c0 4.417-3.584 8-7.998 8H50z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
                        min-height: calc(100vh - 40px);
                        position: relative;
                    `}
                >
                    <h2
                        css={`
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
                    <footer css="position: absolute; bottom: 2rem;">
                        © {new Date().getFullYear()}, Built in Amsterdam 🚲
                    </footer>
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
