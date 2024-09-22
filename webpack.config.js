const path = require('path'); // 引入path模块
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 引入html-webpack-plugin插件
const TerserPlugin = require('terser-webpack-plugin'); // 引入压缩插件
const BundleAnalyzerPlugin =
	require('webpack-bundle-analyzer').BundleAnalyzerPlugin; // 引入打包分析插件

module.exports = {
	mode: 'development', // 设置开发环境
	entry: './src/index.js', // 入口文件
	output: {
		// 输出
		filename: 'dist.js', // 打包后的文件名
		path: path.resolve(__dirname, 'dist'), // 打包后的目录
	},

	resolve: {
		alias: {
			utils: path.resolve(__dirname, 'src/utils/'), // 设置别名
		},
	},

	devServer: {
		// 开发服务器
		static: {
			// 设置服务器根目录
			directory: path.join(__dirname, 'dist'),
		},
	},

	optimization: {
		// 优化
		minimize: true, // 使用压缩
		minimizer: [new TerserPlugin()], // 使用压缩插件
	},

	plugins: [
		// 使用插件
		new HtmlWebpackPlugin({
			title: 'List of Blogs', // 设置html的title
		}),
		new BundleAnalyzerPlugin(), // 使用打包分析插件
	],

	module: {
		// 模块配置
		rules: [
			// 规则
			{
				test: /\.css$/i, // 匹配css文件 使用正则表达式
				use: ['style-loader', 'css-loader'], // 使用的loader
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/, // 匹配图片文件
				type: 'asset/resource', // 使用资源模块类型
			},
			{
				test: /\.js$/, // 匹配js文件
				exclude: /node_modules/, // 排除node_modules文件夹
				use: {
					loader: 'babel-loader', // 使用babel-loader
					options: {
						presets: ['@babel/preset-env'], // 使用babel预设
					},
				},
			},
		],
	},
};
