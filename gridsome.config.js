module.exports = {
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