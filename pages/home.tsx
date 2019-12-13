import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import Header from 'components/Header';
import Hero from 'components/Hero';
import CardsSection from 'components/CardsSection';
import Footer from 'components/Footer';
// import useMediaQuery from '@material-ui/core/useMediaQuery';

// const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

export default function Pricing() {
	return (
		<React.Fragment>
			<CssBaseline />
			<Header />
			<Hero />
			<CardsSection />
			<Footer />
		</React.Fragment>
	);
}
