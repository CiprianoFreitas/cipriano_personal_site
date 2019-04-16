module.exports = {
    siteMetadata: {
        title: `Hi, I'm Cipri.`,
        author: `Cipriano Freitas`,
        description: `Cipri`,
        siteUrl: `https://gatsby-starter-blog-demo.netlify.com/`,
        social: {
            handler: `ciprianofreitas`,
        },
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/blog`,
                name: `blog`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/assets`,
                name: `assets`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                        },
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    `gatsby-remark-prismjs`,
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`,
                ],
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: `UA-137563238-1`,
            },
        },
        `gatsby-plugin-feed`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Cipri`,
                short_name: `Cipri`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#172B4D`,
                display: `minimal-ui`,
                icon: `content/assets/favicon.png`,
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-netlify`,
        `gatsby-plugin-netlify-cms`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-remove-serviceworker`,
    ],
};
