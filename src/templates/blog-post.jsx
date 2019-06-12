import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import Layout from '../components/layout';
import Inner from '../elements/Inner';
import { Title } from '../elements/Titles';
import { graphql, Link } from 'gatsby';
import Background from '../elements/Background';

const Article = styled.article`
    ${tw`text-white relative py-16 sm:px-6 sm:py-6 font-sans max-w-md mx-auto`};
`;

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
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

const BlogPost = ({ data }) => {
    const post = data.markdownRemark;
    return (
        <>
            <Layout />
            <Background />
            <Article>
                <Link to="/">Back</Link>

                <Inner>
                    <Title>{post.frontmatter.title}</Title>
                </Inner>
                {/* eslint-disable-next-line react/no-danger */}
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </Article>
        </>
    );
};

export default BlogPost;
