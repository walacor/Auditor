const { createProxyMiddleware } = require('http-proxy-middleware');
const settings = require('./settings');

const {BASE_URL} = settings;
const targetURL = process.env.NODE_ENV === 'development' ? "http://localhost:3005/" : BASE_URL;

module.exports = function (app) {
  app.use(
    '/ui',
    createProxyMiddleware({
      target: targetURL,
      changeOrigin: true,
      pathRewrite: {
        '^/ui': '',
      },
    })
  );
};
