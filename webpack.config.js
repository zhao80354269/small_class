module.exports={
	entry:'./src/jsx/ReactComponent.jsx',//入口文件
	output:{
		path:'./js',//匹配出口文件
		filename:'app.js'
	},
	devtool:'source-map',//开启map使我们能在谷歌控制台看到自己所写的文件
	module:{
		loaders:[
			{
				test:/\.jsx$/,//匹配jsx格式的component
				loader:'jsx-loader'	//加载jsx的loader
			},
			{
				test:/\.css$/,
				loader:'style!css'//加载css的loader
			}
		]
	}
	
}
