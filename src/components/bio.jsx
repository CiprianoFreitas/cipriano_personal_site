/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const bioQuery = graphql`
    query BioQuery {
        avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
            childImageSharp {
                fixed(width: 50, height: 50) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        site {
            siteMetadata {
                author
                social {
                    handle
                }
            }
        }
    }
`;

function Bio() {
    return (
        <StaticQuery
            query={bioQuery}
            render={data => {
                const { author } = data.site.siteMetadata;
                return (
                    <div
                        css="
                            display: flex;
                            align-items: center;
                        "
                    >
                        <p>
                            <strong>{author}</strong> lives in Amsterdam and he
                            struggles with biking every day.
                        </p>
                    </div>
                );
            }}
        />
    );
}

export default Bio;
