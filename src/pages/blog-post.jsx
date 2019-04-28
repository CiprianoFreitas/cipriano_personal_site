import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import Layout from '../components/layout';
import Footer from '../components/Footer';
import Inner from '../elements/Inner';
import { Title } from '../elements/Titles';

const Article = styled.article`
    ${tw`text-white relative pb-32 font-sans max-w-md mx-auto`};
`;
const BlogPost = ({ location, pageContext, data }) => {
    const post = data.markdownRemark;
    // const { previous, next } = pageContext;

    return (
        <>
            <Layout />
            <Article>
                <Inner>
                    <Title>{post.frontmatter.title}</Title>
                </Inner>
                {/* eslint-disable-next-line react/no-danger */}
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </Article>
        </>
    );
};

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
export default BlogPost;
