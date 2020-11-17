module.exports = {
  siteMetadata: {
    siteTitle: `Cheet Sheet`,
    defaultTitle: `Cheet Sheet`,
    siteTitleShort: `Cheet Sheet`,
    siteDescription: `Cheat Sheet`,
    siteUrl: `https://estitpab.github.io/`,
    siteAuthor: `@estitpab`,
    siteImage: `/banner.png`,
    siteLanguage: `fr`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/rocketseat/gatsby-themes`,
        baseDir: `examples/gatsby-theme-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://estitpab.github.io/`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
