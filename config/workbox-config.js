module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{png,xml,ico,svg,html,webmanifest}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'src/sw.js'
};