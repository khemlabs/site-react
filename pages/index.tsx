import React from 'react';
import { NextPage } from 'next';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import MuiLink from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import Header from 'components/Header';
import Footer from 'components/Footer';
import CompayHero from 'components/sections/CompayHero';
import CompanyConsole from 'components/sections/CompanyConsole';
import CompanyProducts from 'components/sections/CompanyProducts';
import CompanyAbout from 'components/sections/CompanyAbout';
import CompanyServices from 'components/sections/CompanyServices';
import CompanyExpertise from 'components/sections/CompanyExpertise';
import CompanyPortfolio from 'components/sections/CompanyPortfolio';
import CompanyContact from 'components/sections/CompanyContact';
import CompanyTeam from 'components/sections/CompanyTeam/CompanyTeam';

// import useMediaQuery from '@material-ui/core/useMediaQuery';

import { useTranslation } from 'components/i18n';
import Link from 'components/Link';

// const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

const Copyright: React.FunctionComponent = () => {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<MuiLink color="inherit" href="https://khemlabs.com/">
				Khem Labs
			</MuiLink>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
};

export default function Index(): JSX.Element {
	const classes = useStyles();
	const i18n = useTranslation('common');

	return (
		<React.Fragment>
			<CssBaseline />
			<Header />
			<Container maxWidth="xl" component="main" className={classes.content}>
				<CompayHero />
				<CompanyConsole />
				<CompanyAbout />
				<CompanyProducts />
				<CompanyTeam />
				<CompanyServices />
				<CompanyPortfolio />
				<CompanyExpertise />
				<CompanyContact />
			</Container>
			<Footer />
		</React.Fragment>
	);
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		content: {
			padding: theme.spacing(0, 0, 6),
			backgroundImage: 'url("./assets/img/backgrounds/nodes.jpg")',
			backgroundPosition: 'right top',
			backgroundRepeat: 'no-repeat',
			backgroundAttachment: 'fixed'
		}
	})
);
