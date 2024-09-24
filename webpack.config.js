// WordPress webpack config.
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

// Import the helper to find and generate the entry points in the src directory
const { getWebpackEntryPoints } = require( '@wordpress/scripts/utils/config' );

// Plugins.
const RemoveEmptyScriptsPlugin = require( 'webpack-remove-empty-scripts' );

// Utilities.
const path = require( 'path' );

module.exports = [
	{
		...defaultConfig,
		name: "Example Plugin",
		entry: {
			'example-one': {
				import: path.resolve(
					process.cwd(),
					'./public/wp-content/plugins/plugin-example/src/Domain/Blocks/example-one/',
					'block.json'
				),
				filename: '[name]/block.json',
			},
			'example-two': {
				import: path.resolve(
					process.cwd(),
					'./public/wp-content/plugins/plugin-example/src/Domain/Blocks/example-two/',
					'block.json'
				),
				filename: '[name]/block.json',
			},
			slotfill: {
				import: path.resolve(
					process.cwd(),
					'./public/wp-content/plugins/plugin-example/src/Domain/Slots/slotfill',
					'index.js'
				),
				filename: '[name]/index.js',
			},
		},
		output: {
			...defaultConfig.output,
			path: path.resolve( __dirname, './public/wp-content/plugins/plugin-example/build/')
		},
		plugins: [
			...defaultConfig.plugins,
		],
	},
	{
		...defaultConfig,
		name: "Example Theme",
		entry: {
			'js/editor': {
				import: path.resolve(
					__dirname, './public/wp-content/themes/theme-example/resources/js/',
					'editor.js'
				),
			},
			'js/global': {
				import: path.resolve(
					__dirname,
					'./public/wp-content/themes/theme-example/resources/js/',
					'global.js'
				)
			},
			'css/global': path.resolve(
				__dirname,
				'./public/wp-content/themes/theme-example/resources/css/',
				'global.css',
			),
		},
		output: {
			...defaultConfig.output,
			path: path.resolve(
				__dirname,
				'./public/wp-content/themes/theme-example/assets/'
			),
		},
	}
];
