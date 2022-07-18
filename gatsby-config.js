const siteUrl = "https://double-agency.com";

module.exports = {
  siteMetadata: {
    siteUrl,
    title: "Double Agency",
    description:
      "Growthmarketing and Growth Hacking are new business strategies for startups that incorporate marketing within your product and core business values. Build growth right into the hard of your company, by using feedback and customer data to test, enhance your product, build a lean and sustainable business and become a master entrepreneur.",
    dripAccountId: 3029595,
    quoraId: "734fe9ad62044edc880c170a76f4f321",
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
    `gatsby-transformer-remark`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `careers`,
        path: `./content/careers`,
      },
    },

    /********************
     *
     * Trackers
     *
     ********************/
    {
      resolve: `gatsby-plugin-linkedin-insight`,
      options: {
        partnerId: `1853889`,
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "1613747988773735",
      },
    },
    {
      resolve: `gatsby-plugin-reddit-pixel`,
      options: {
        pixelId: "t2_pyhymtu8",
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-M44383W",
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: ["UA-157579030-1", "AW-670876710"],
      },
    },
  ],
};
