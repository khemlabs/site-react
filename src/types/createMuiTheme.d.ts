src / types / createMuiTheme.d.ts;

import * as createMuiTheme from '@material-ui/core/styles/createMuiTheme';

export interface FontSizes {
	xSmall: number;
	small: number;
	medium: number;
	large: number;
	xLarge: number;
}

declare module '@material-ui/core/styles/createMuiTheme' {
	interface ThemeOptions {
		sizes: FontSizes;
	}

	interface Theme {
		sizes: FontSizes;
	}
}
