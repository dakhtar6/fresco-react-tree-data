//WEBPACK.CONFIG.JS - USED TO CONFIGURE WEBPACK 

//REQUIRE OUR DEPENDENCIES
var webpack = require('webpack'); 
var path = require('path'); //used to manipulate path names more easily

module.exports = {
    devtool: 'inline-source-map', //used for errors in debugging by giving us line numbers
    entry: [ //where webpack looks for our files
        'webpack-dev-server/client?http://127.0.0.1:8080/', 
        'webpack/hot/only-dev-server', //used for hot or live-reloading
        './src' //the initial file to run, no filename so looks for index.js by default
    ],
    output: { //where webpack would output a file in production, best practice but not necessary for this app 
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js' //default file name
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src'], //where it looks for the files to bundle together
        extensions: ['', '.js'] //expected extensions
    },
    module: {
        loaders: [ //where we define our loaders
        {
            test: /\.jsx?$/, //optional, to use for jsx as well
            exclude: /node_modules/, 
            loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'] //modules we use to help load our app, babel is our ES6 compilier, presets of react is for the react syntax and jsx, es2015 has additional features
        }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), //for live-reloading
        new webpack.NoErrorsPlugin() //webpack won't compile if there are errors
    ]
};
