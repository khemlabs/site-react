import React from 'react';

import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import theme from 'components/ThemeLayout/baseTheme';
import { useTranslation } from 'components/i18n';
import Hero from 'components/Hero';

const CompanyHero: React.FunctionComponent = ({}): JSX.Element => {
	const classes = useStyles();
	const i18n = useTranslation('common');

	return (
		<Container maxWidth={'xl'} component="section" className={classes.root}>
			<Hero>
				<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom itemProp="name">
					<Link
						itemProp="url"
						variant="subtitle1"
						color="textPrimary"
						href="http://khemlabs.com"
						className={classes.link}
					>
						<img itemProp="logo" src="./assets/img/logo-brand.png" />
					</Link>
					<span itemProp="name">
						<strong className={classes.titleVariant}>khem</strong>
						<strong className={classes.titleRed}>labs</strong>
					</span>
				</Typography>
				<Typography variant="h5" align="center" color="textPrimary" gutterBottom>
					{i18n.t('khemlabs_frase')}
				</Typography>
				<Typography variant="body2" align="center" color="textPrimary" gutterBottom>
					<Link itemProp="sameAs" href="https://github.com/khemlabs" target="_blank">
						<GitHubIcon />
					</Link>
					<Link itemProp="sameAs" href="https://twitter.com/khemlabs" target="_blank">
						<TwitterIcon />
					</Link>
					<Link itemProp="sameAs" href="https://www.facebook.com/khemlabs" target="_blank">
						<FacebookIcon />
					</Link>
					<Link itemProp="sameAs" href="https://www.linkedin.com/company/khemlabs" target="_blank">
						<LinkedInIcon />
					</Link>
				</Typography>
			</Hero>
		</Container>
	);
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			color: theme.palette.type == 'light' ? theme.palette.common.black : theme.palette.common.black,
			backgroundColor: theme.palette.type == 'light' ? theme.palette.common.white : theme.palette.common.black,
			position: 'relative',
			display: 'flex',
			alignItems: 'center',
			[theme.breakpoints.up('sm')]: {
				height: '80vh',
				minHeight: 500,
				maxHeight: 1300
			}
		},
		heroContent: {
			padding: theme.spacing(8, 0, 6)
		},
		link: {
			display: 'block',
			margin: theme.spacing(1, 1.5)
		},
		titleVariant: {
			color: theme.palette.type === 'light' ? theme.palette.secondary.dark : theme.palette.secondary.light
		},
		titleRed: {
			color: theme.palette.type === 'light' ? theme.palette.primary.light : theme.palette.primary.dark
		}
	})
);

export default CompanyHero;
