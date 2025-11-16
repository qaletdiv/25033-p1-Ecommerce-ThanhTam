module.exports = {
	plugins: {
		// Process @import statements first
		"postcss-import": {},

		// Enable custom media queries for responsive design (task #17)
		"postcss-custom-media": {},

		// Modern CSS features + autoprefixer
		"postcss-preset-env": {
			stage: 2,
			features: {
				"nesting-rules": true,
				"custom-media-queries": true,
			},
			autoprefixer: {
				grid: true, // Support for CSS Grid
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
