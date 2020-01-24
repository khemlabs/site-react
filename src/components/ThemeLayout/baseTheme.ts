import { createMuiTheme } from '@material-ui/core/styles';

export enum UIColorVariant {
	Light = 'light',
	Dark = 'dark'
}

const lightRed = '#d94e5b';
const darkRed = '#911723';
const mainRed = '#d02232';
const lightGray = '#5b5a5b';
const darkGray = '#232223';
const mainGray = '#333133';
const contrastWhite = '#ffffff';
const contrastBlack = '#000000';
const gradientRed = 'linear-gradient(45deg, #d94e5b 30%, #d02232 90%)';
const gradientGray = 'linear-gradient(45deg, #5b5a5b 30%, #333133 90%)';

const baseTheme = createMuiTheme(
	{
		palette: {
			primary: {
				light: lightRed,
				main: mainRed,
				dark: darkRed,
				contrastText: contrastWhite
			},
			secondary: {
				light: lightGray,
				main: mainGray,
				dark: darkGray,
				contrastText: contrastBlack
			},
			type: UIColorVariant.Light,
			contrastThreshold: 3,
			tonalOffset: 0.2,
			background: { default: lightGray }
		},
		direction: 'ltr',
		typography: {
			fontFamily: 'Roboto',
			fontSize: 14,
			fontWeightLight: 300,
			fontWeightRegular: 400,
			fontWeightMedium: 500,
			fontWeightBold: 700
		}
	},
	{
		sizes: {
			xSmall: 10,
			small: 14,
			medium: 16,
			large: 20,
			xLarge: 22
		}
	}
);

export default baseTheme;
