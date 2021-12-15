module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "doggy",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "alldata",
        fieldName: "alldata",
        url: "https://api-sa-east-1.graphcms.com/v2/ckx7isrmg045001yw58qwabh7/master",
      },
    },
  ],
};
