/* eslint-disable react/no-danger */
import React from 'react';
import { Link, graphql } from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';

const BlogPostTemplate = ({ location, pageContext, data }) => {
    const post = data.markdownRemark;
    const siteTitle = data.site.siteMetadata.title;
    const { previous, next } = pageContext;

    return (
        <Layout location={location} title={siteTitle}>
            <div css="padding: 5vw 10vw;">
                <SEO
                    title={post.frontmatter.title}
                    description={post.frontmatter.description || post.excerpt}
                />
                <header>
                    <h3
                        css={`
                            font-family: 'Lora', serif;
                            margin-top: 0;
                            color: ${props => props.theme.action};
                        `}
                    >
                        <Link
                            css="
                                box-shadow: none;
                                text-decoration: none;
                                color: inherit;
                            "
                            to="/"
                        >
                            ◀ {siteTitle}
                        </Link>
                    </h3>
                </header>
                <article>
                    <h1>{post.frontmatter.title}</h1>
                    <p
                        css="
                            display: 'block',
                        "
                    >
                        {post.frontmatter.date}
                    </p>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                    <hr style={{}} />
                    <Bio />
                </article>
    
                <ul
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        listStyle: 'none',
                        padding: 0,
                    }}
                >
                    <li>
                        {previous && (
                            <Link to={previous.fields.slug} rel="prev">
                                ← {previous.frontmatter.title}
                            </Link>
                        )}
                    </li>
                    <li>
                        {next && (
                            <Link to={next.fields.slug} rel="next">
                                {next.frontmatter.title} →
                            </Link>
                        )}
                    </li>
                </ul>
            </div>
        </Layout>
    );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
                author
            }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            excerpt(pruneLength: 160)
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
            }
        }
    }
`;
