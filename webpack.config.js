const path =require('path');

module.exports ={
    name: 'wordrelay-setting',
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx']
    },

    entry: {
        app: ['./client']       //client안에 wordRelay가 있어서 안넣어도됨
    },    //입력
    module: {
        rules :[{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets :['@babel/preset-env', '@babel/preset-react'],
                plugins: ['@babel/plugin-proposal-class-properties']
            }
        }],
    },
    output: {
        path : path.join(__dirname, 'dist'),    //현재폴더와 합쳐줌 
        filename: 'app.js'
    },   //출력
}