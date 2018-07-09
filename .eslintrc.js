module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
	},
	extends: 'plugin:prettier/recommended',
	parserOptions: {
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true,
		},
		sourceType: 'module',
	},
	parser: 'babel-eslint',
	plugins: ['react'],
	rules: {
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
	},
};
