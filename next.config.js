/** @type {import('next').NextConfig} */
const path = require('path')
const withAntdLess = require('next-plugin-antd-less');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  // optional: you can modify antd less variables directly here
  modifyVars: { "@primary-color": "#f84419", "@font-family": "Lato, sans-serif" },
  // Or better still you can specify a path to a file
  //  lessVarsFilePath: './styles/variables.less',
  // optional
  lessVarsFilePathAppendToEndOfContent: false,
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {},

  // Other Config Here...

  webpack(config) {
    return config;
  },
  env: {
    API_ENDPOINT: process.env.API_ENDPOINT,
  },
  images: {
    domains: ['localhost'],
  },
  eslint: {
   ignoreDuringBuilds: true,
  }
};

module.exports = withAntdLess(nextConfig);
