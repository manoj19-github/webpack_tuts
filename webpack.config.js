const Path=require("path")
module.exports={
  mode:"development",
  entry:"./src/App.js",
  output:{
    path:Path.resolve(__dirname,"dist"),
    filename:"bundle.js"
  },
  devServer:{
    static:{
      directory:Path.resolve(__dirname,"dist"),
    },
    compress:true,
    port:4000
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      }
    ]
  }
}
