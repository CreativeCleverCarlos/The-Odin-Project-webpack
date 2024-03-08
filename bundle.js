//this is the beginning setup

//quick note, my files aren't in folders cause it didn't really say how to set it up in the beginning... so the folder with everything in this is gonna look like an absolute mess...

const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    },
//in order to import css files from within a javascript module. a npm style-loader and css-loader needs to be added to the module configuration

//within the... terminal this get's put in "npm install --save-dev style-loader css-loader"

    module: {
        rules: [
            {
                test: /\.css$/i, //allows you to import './style.css' into the file that depends on styling
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    
};

