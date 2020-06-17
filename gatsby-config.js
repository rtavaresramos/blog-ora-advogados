module.exports = {
  plugins: [
      `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `ORA Sociedade de Advogados `,
    author: `Rodrigo `,
    description: `My site description...`,
    siteUrl: `https://oraadvogados.com.br`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/gatsbyjs`,
      },
      {
        name: `github`,
        url: `https://github.com/gatsbyjs`,
      },
    ],
  },
}
