const { createProxyMiddleware } = require('http-proxy-middleware');
import settings from './settings';

const {BASE_URL} = settings;
const targetURL = process.env.REACT_APP_ENV === 'development' ? "http://localhost:3005/" : BASE_URL;

module.exports = function (app) {
  app.use(
    '/',
    createProxyMiddleware({
      target: targetURL,
      changeOrigin: true,
    })
  );
};