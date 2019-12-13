const constants = {
	global: {
		styles: {
			'@global': {
				ul: {
					margin: 0,
					padding: 0
				},
				li: {
					listStyle: 'none'
				}
			}
		}
	},
	colors: {
		dark: {},
		light: {}
	},
	fonts: {},
	sizes: {
		xSmall: 10,
		small: 14,
		medium: 16,
		large: 20,
		xLarge: 22
	}
};

export type ConstantsType = typeof constants;

export default constants;
