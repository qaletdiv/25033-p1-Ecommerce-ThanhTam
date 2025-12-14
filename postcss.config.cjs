module.exports = {
	plugins: {
		"postcss-import": {},
		"@csstools/postcss-global-data": {
			files: ["./src/css/variables/breakpoints.css"],
		},
		"postcss-custom-media": {},
		"postcss-preset-env": {
			stage: 2,
			features: {
				"nesting-rules": true,
				"custom-media-queries": true,
			},
			autoprefixer: {
				grid: true,
			},
		},

		// Minify CSS in production only
		cssnano:
			process.env.NODE_ENV === "production"
				? {
						preset: [
							"default",
							{
								discardComments: { removeAll: true },
								normalizeWhitespace: true,
							},
						],
					}
				: false,
	},
};
