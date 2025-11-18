export default {
	plugins: {
		'postcss-import': {},
		'postcss-preset-env': {
			stage: 3,
			features: {
				'nesting-rules': true,
				'custom-media-queries': true,
				'custom-properties': false,
			},
		},
		autoprefixer: {},
		...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
	},
};
