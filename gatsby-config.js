const path = require('path')

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: path.join(__dirname, 'src', 'pages'),
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve(path.resolve(__dirname, 'src', 'templates', 'Page.jsx')),
        },
        remarkPlugins: [
          require('remark-math'),
          // require('remark-html-katex'),
        ],
        rehypePlugins: [
          require('rehype-katex')
        ],
      },
    },
  ],
}
