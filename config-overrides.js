const { overrideDevServer } = require('customize-cra');

const devServerConfig = () => (config) => {
  return {
    ...config,
    allowedHosts: ['127.0.0.1'],
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
      }
    }
  };
};

module.exports = {
  webpackDevServer: overrideDevServer(devServerConfig()),
};
