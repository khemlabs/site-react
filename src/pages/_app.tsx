import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';

import { appWithTranslation } from 'components/i18n';
import Theme from 'components/ThemeLayout';

class MyApp extends App {
	componentDidMount() {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentElement!.removeChild(jssStyles);
		}
		const rescript = document.createElement('script');
		rescript.src = 'https://www.google.com/recaptcha/api.js';
		rescript.async = true;
		rescript.defer = true;
		document.body.appendChild(rescript);
	}
	render() {
		const { Component, pageProps } = this.props;

		return (
			<React.Fragment>
				<Head>
					<title>Khem Labs - Development Company</title>
				</Head>
				<Theme>
					{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
					<CssBaseline />
					<Component {...pageProps} />
				</Theme>
			</React.Fragment>
		);
	}
}

export default appWithTranslation(MyApp);
