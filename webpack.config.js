const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    watch: true,
    
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [{
              loader: 'babel-loader',
              options: {
                  presets: [
                    "@babel/preset-react"
                  ]
              }
          }]
        }, 
        {
            test: /\.less$/,
            use: [
              {
                loader: 'style-loader', // creates style nodes from JS strings
              },
              {
                loader: 'css-loader', // translates CSS into CommonJS
              },
              {
                loader: 'less-loader', // compiles Less to CSS
              },
            ],
        },
        {
            test: /\.(js|jsx)$/,
            use: ["source-map-loader"],
            enforce: "pre"
        }
      ]
    },
    devtool: "source-map",
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Movie',
            filename: 'index.html',
            template: 'src/index.html'
        })
    ]
  };