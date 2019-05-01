module.exports = {
  siteName: 'Gridsome Blog',
  siteDescription: 'Blog buat ngulik gridsome',
  siteUrl: 'https://naughty-yalow-0fc8b8.netlify.com/',
  transformers: {
    remark: {}
  },

  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/**/*.md",
        typeName: "Post"
      }
    }
  ]
};