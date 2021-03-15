require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Bathtubs & Bubbly`,
    author: `Erika Kurzawa`,
    about: ``,
    description: `A blog about soaking in bathtubs while sipping on bubbly.`,
    siteUrl: `https://bathtubsandbubbly.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        minify: false, // Breaks styles if not set to false
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `${process.env.WP_API_URL}`,
        auth: {
          htaccess: {
            username: `${process.env.WP_API_AUTH_USER}`,
            password: `${process.env.WP_API_AUTH_PASS}`,
          },
        },
      }
    },
    {
      resolve: `gatsby-transformer-sharp`,
    },
    {
      resolve: `gatsby-plugin-sharp`,
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     //trackingId:process.env.GOOGLE_ANALYTICS_TRACKING_ID,// `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-feed`,
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bathtubs and Bubbly`,
        short_name: `BathtubsAndBubbly`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#E07B77`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
    },
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
    {
      resolve: `gatsby-plugin-lodash`,
    },
    // {
    //   resolve: 'gatsby-plugin-mailchimp',
    //   options: {
    //     endpoint: process.env.MAILCHIMP_ENDPOINT, // add your MC list endpoint here; see instructions below
    //   },
    // },
    // {
    //   resolve: `gatsby-source-instagram`,
    //   options: {
    //     username: process.env.INSTAGRAM_USER_NAME_ID,
    //     access_token: process.env.INSTAGRAM_ACCESS_TOKEN,
    //   },
    // },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: [
            'Dancing+Script:100,200,300,400,500,600,700',
            'Lato:100,300,400,500,600,700',
          ],
        },
      },
    },
  ],
};
