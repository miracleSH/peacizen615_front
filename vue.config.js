module.exports = {
  devServer: {
    port: process.env.VUE_APP_FRONT_PORT,
    proxy: 'http://localhost:8080'
  },
};
