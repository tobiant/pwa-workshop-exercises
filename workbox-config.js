module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{png,xml,ico,svg,html,webmanifest}'
	],
	swDest: 'src/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};