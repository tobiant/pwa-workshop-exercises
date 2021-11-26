module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{png,xml,ico,svg,js,css,properties,html,json,webmanifest}'
	],
	swSrc: './webapp/sw.js',
	swDest: './dist/sw.js'
};
