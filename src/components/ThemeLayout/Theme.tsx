import React, { useState, useEffect } from 'react';

import ThemeProvider from '@material-ui/styles/ThemeProvider';

import baseTheme from './baseTheme';

const ThemeLayout: React.FunctionComponent = ({ children }): JSX.Element => {
	return <ThemeProvider theme={baseTheme}>{children}</ThemeProvider>;
};

export default ThemeLayout;
