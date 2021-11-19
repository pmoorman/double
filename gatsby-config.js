const siteUrl = "https://double-agency.com";

module.exports = {
  siteMetadata: {
    siteUrl,
    title: "Double Agency",
    description:
      "Growthmarketing and Growth Hacking are new business strategies for startups that incorporate marketing within your product and core business values. Build growth right into the hard of your company, by using feedback and customer data to test, enhance your product, build a lean and sustainable business and become a master entrepreneur.",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-sass",
      options: {
        additionalData: `
          @import '~bootstrap/scss/functions';
          @import '~bootstrap/scss/mixins';
          @import './src/styles/variables';
          @import '~bootstrap/scss/variables';
        `,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-tsconfig-paths",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-layout",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `blurred`,
        },
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
