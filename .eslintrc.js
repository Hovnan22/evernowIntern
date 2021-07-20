module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: [
		"eslint:recommended",
		"@react-native-community",
		"plugin:prettier/recommended",
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: "module",
	},
	plugins: ["react"],
	rules: {
		"prettier/prettier": 0,
		"arrow-body-style": "warn",
		indent: ["error", "tab"],
		quotes: ["error", "double"],
		"react/prop-types": 0,
		"import/no-extraneous-dependencies": 0,
		"no-tabs": 0,
	},
};
