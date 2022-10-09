/// <reference types="react-scripts" />
plugins:[
    //自动加载模块，而不必到处 import 或 require 。
    new webpack.ProvidePlugin({
      React: "React"
    })
  ]
