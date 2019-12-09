import React, { useState, useEffect } from 'react';
import { createMuiTheme, Theme } from '@material-ui/core/styles';

import baseTheme from './baseTheme';

// const useColorVariant: Function = (type: string): Theme => {
// 	const [theme, setTheme] = useState(baseTheme);

// 	useEffect(() => {
// 		setTheme({
// 			...baseTheme,
// 			palette: {
// 				...baseTheme.palette,
// 				type
// 			}
// 		});
// 	}, [type]);

// 	return theme;
// };
