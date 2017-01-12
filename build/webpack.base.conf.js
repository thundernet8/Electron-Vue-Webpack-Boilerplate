var path = require('path')

module.exports = {
  // http://webpack.github.io/docs/configuration.html#node
  node: {
		__filename: false,
		__dirname: false
	},
  entry: {
    app: './src/renderer/index.js',
    electron: './src/main/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '../dist/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'app': path.resolve(__dirname, '../app'),
      'dist': path.resolve(__dirname, '../dist'),
      'src': path.resolve(__dirname, '../src'),
      'vue': 'vue/dist/vue.js' // https://gold.xitu.io/entry/57b27747a341310060fb8abb
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  target: 'electron-renderer',  // important
  module: {
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'vue-html',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash:7]'
        }
      }
    ]
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  }
}
