module.exports = {
	root: true,
	extends: [
		"@react-native-community",
	],
	rules: {
		"prettier/prettier": 0,
		"arrow-body-style" : "warn",
		"indent": ["error", "tab"],
		"quotes": ["error", "double"],
		"react/prop-types": 0,
		"import/no-extraneous-dependencies": 0,
		"no-tabs": 0,
	},
};
