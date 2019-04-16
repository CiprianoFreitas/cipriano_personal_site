/* eslint-disable react/no-danger */
import React from 'react';
import { Link, graphql } from 'gatsby';

import styled from 'styled-components';
import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';

const SocialItem = styled.li`
    display: inline;
    margin-right: 1rem;
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
            <Bio />
            <ul
                css="
                    list-style: none;
                    padding: 0;
                "
            >
                <SocialItem>
                    <a href="//music.cipri.codes">
                        <span aria-hidden="true">🎧</span> Music
                    </a>
                </SocialItem>
                <SocialItem>
                    <a href={`https://github.com/${social.twitter}`}>
                        <span aria-hidden="true">🐙</span> Github
                    </a>
                </SocialItem>
                <SocialItem>
                    <a href={`https://twitter.com/${social.twitter}`}>
                        <span aria-hidden="true">🐦</span> Twitter
                    </a>
                </SocialItem>
            </ul>
            {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug;
                return (
                    <div key={node.fields.slug}>
                        <h3 style={{}}>
                            <Link
                                style={{ boxShadow: 'none' }}
                                to={node.fields.slug}
                            >
                                {title}
                            </Link>
                        </h3>
                        <small>{node.frontmatter.date}</small>
                        <p
                            dangerouslySetInnerHTML={{
                                __html:
                                    node.frontmatter.description ||
                                    node.excerpt,
                            }}
                        />
                    </div>
                );
            })}
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
                    twitter
                }
            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
