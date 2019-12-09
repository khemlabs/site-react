import { createMuiTheme } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';
import blue from '@material-ui/core/colors/blue';

// import UIColorVariant from './UIColorVariant';

enum UIColorVariant {
	Light = 'light',
	Dark = 'dark'
}

const baseTheme = createMuiTheme({
	palette: {
		primary: blue,
		secondary: lightBlue,
		type: UIColorVariant.Light,
		contrastThreshold: 3,
		tonalOffset: 0.2,
		background: { default: 'linear-gradient(45deg, #2196f3 30%, #4dabf5 90%)' }
	},
	direction: 'ltr'
});

export { baseTheme as default };
