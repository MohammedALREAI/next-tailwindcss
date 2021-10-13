
const path = require('path');
module.exports = {
      typescript: {
    ignoreBuildErrors: true,
  },



//  add  webpak  congigration 
webpack(config) {
    config.module.rules.push(
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        exclude: [path.resolve(__dirname, 'src/Assets/Icons'), path.resolve(__dirname, 'src/Assets/Svg')],

        use: {
          loader: 'url-loader',
          options: {
            limit: 1000000,
            
          },
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            
            loader: 'babel-loader',
             options: {
          presets: ['@babel/preset-env']
        }
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: false, // true outputs JSX tags
              limit: 1000000,
            },
          },
        ],
      },
    );
    return  config;
},







    trailingSlash: true,
   
    distDir: 'build',
    serverRuntimeConfig:{
        PG_CONNECTIONSTRING:process.env.PG_CONNECTIONSTRING 
    },
    webpack5: false,
    
    publicRuntimeConfig: {
    },
    images: {
      domains:['soaptheme.net','soaptheme.net/wordpress/travelo/wp-content/uploads','assets.soaptheme.net'],
      
    deviceSizes: [320, 480, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
   
  }
  