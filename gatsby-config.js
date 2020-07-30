module.exports = {
  siteMetadata: {
    title: '100 Days of Code Log',
    author: 'Ana Vela',
    description: 'Documenting my journey through the 100 days of code challenge',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-notion-database`,
      options: {
        sourceConfig: [
          {
            name: 'posts',
            table:
              'https://www.notion.so/9cb09fd21f2f4e9cbf6eb44352f7958a?v=c2b6bdf8320a410f924adf952a2ed113',

            cacheType: 'html',
          },
        ],
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Quicksand','Montserrat','Poppins', 'Roboto', 'Droid Serif']
        }
      }
    },
    {
    resolve: 'gatsby-plugin-crisp-chat',
    options: {
      // websiteId: 'YOUR_CRISP_WEBSITE_ID',
      websiteId: 'process.env.CRISP_WEBSITE_ID',
      enableDuringDevelop: true, // Optional. Disables Crisp Chat during gatsby develop. Defaults to true.
      defer: true, // Optional. Sets the Crisp loading script to defer instead of async. Defaults to false.
      enableImprovedAccessibility: false // Optional. Sets aria-label attribute on pop-up icon for screen readers. Defaults to true.
    },
  }
  ],
}
