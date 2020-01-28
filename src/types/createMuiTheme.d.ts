src / types / createMuiTheme.d.ts;

import * as createMuiTheme from '@material-ui/core/styles/createMuiTheme';

export interface FontSizes {
	xSmall: number;
	small: number;
	medium: number;
	large: number;
	xLarge: number;
}

export interface Grandient {
	primary: string;
	secondary: string;
}

declare module '@material-ui/core/styles/createMuiTheme' {
	interface ThemeOptions {
		sizes: FontSizes;
		gradient: Grandient;
	}

	interface Theme {
		sizes: FontSizes;
		gradient: Grandient;
	}
}
