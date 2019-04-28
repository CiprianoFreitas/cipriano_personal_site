import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import Layout from '../components/layout';
import Inner from '../elements/Inner';
import { Title } from '../elements/Titles';
import { graphql, Link } from 'gatsby';
import { colors } from '../../tailwind';
import { UpDown, UpDownWide } from '../styles/animations';
import SVG from '../components/SVG';

const Article = styled.article`
    ${tw`text-white relative py-16 sm:px-6 sm:py-6  font-sans max-w-md mx-auto`};
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
            <UpDown>
                <SVG
                    icon="triangle"
                    hiddenMobile
                    width={48}
                    stroke={colors.orange}
                    left="10%"
                    top="20%"
                />
                <SVG
                    icon="hexa"
                    width={48}
                    stroke={colors.red}
                    left="60%"
                    top="70%"
                />
                <SVG
                    icon="box"
                    width={6}
                    fill={colors['grey-darker']}
                    left="60%"
                    top="15%"
                />
            </UpDown>
            <UpDownWide>
                <SVG
                    icon="arrowUp"
                    hiddenMobile
                    width={16}
                    fill={colors['blue-dark']}
                    left="80%"
                    top="10%"
                />
                <SVG
                    icon="triangle"
                    width={12}
                    stroke={colors.white}
                    left="90%"
                    top="50%"
                />
                <SVG
                    icon="circle"
                    width={16}
                    fill={colors['grey-darker']}
                    left="70%"
                    top="90%"
                />
                <SVG
                    icon="triangle"
                    width={16}
                    stroke={colors['grey-darkest']}
                    left="30%"
                    top="65%"
                />
                <SVG
                    icon="cross"
                    width={16}
                    stroke={colors['pink-light']}
                    left="28%"
                    top="15%"
                />
                <SVG
                    icon="circle"
                    width={6}
                    fill={colors['grey-darkest']}
                    left="75%"
                    top="10%"
                />
                <SVG
                    icon="upDown"
                    hiddenMobile
                    width={8}
                    fill={colors['grey-darkest']}
                    left="45%"
                    top="10%"
                />
            </UpDownWide>
            <SVG
                icon="circle"
                hiddenMobile
                width={24}
                fill={colors['grey-darker']}
                left="5%"
                top="70%"
            />
            <SVG
                icon="circle"
                width={6}
                fill={colors['grey-darkest']}
                left="4%"
                top="20%"
            />
            <SVG
                icon="circle"
                width={12}
                fill={colors['grey-darkest']}
                left="50%"
                top="60%"
            />
            <SVG
                icon="upDown"
                width={8}
                fill={colors['grey-darkest']}
                left="95%"
                top="90%"
            />
            <SVG
                icon="upDown"
                hiddenMobile
                width={24}
                fill={colors['grey-darker']}
                left="40%"
                top="80%"
            />
            <SVG
                icon="triangle"
                width={8}
                stroke={colors['grey-darker']}
                left="25%"
                top="5%"
            />
            <SVG
                icon="circle"
                width={64}
                fill={colors.green}
                left="95%"
                top="5%"
            />
            <SVG
                icon="box"
                hiddenMobile
                width={64}
                fill={colors.purple}
                left="5%"
                top="90%"
            />
            <SVG
                icon="box"
                width={6}
                fill={colors['grey-darkest']}
                left="10%"
                top="10%"
            />
            <SVG
                icon="box"
                width={12}
                fill={colors['grey-darkest']}
                left="40%"
                top="30%"
            />
            <SVG
                icon="hexa"
                width={16}
                stroke={colors['grey-darker']}
                left="10%"
                top="50%"
            />
            <SVG
                icon="hexa"
                width={8}
                stroke={colors['grey-darker']}
                left="80%"
                top="70%"
            />

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
