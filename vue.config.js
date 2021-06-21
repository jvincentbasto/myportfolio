module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule("pdf")
      .test(/\.pdf$/)
      .use("file-loader")
      .loader("file-loader");
    // .tap(options => {
    //   console.log(options)
    //   return options
    // })
  },
};
