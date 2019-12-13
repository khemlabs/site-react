import React, { Props } from 'react';

import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { useTranslation } from 'components/i18n';

const Hero: React.FunctionComponent = ({}): JSX.Element => {
	const classes = useStyles();
	const i18n = useTranslation('common');

	return (
		<section>
			<Container maxWidth="sm" component="main" className={classes.heroContent}>
				<Link itemProp="url" variant="subtitle1" color="textPrimary" href="#about-us" className={classes.link}>
					<img itemProp="logo" src="./img/logo-brand.png" />
				</Link>
				<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom itemProp="name">
					<Typography variant="body1" display="inline" color="inherit" noWrap className={classes.titleVariant}>
						khem
					</Typography>
					<Typography variant="body1" display="inline" color="inherit" noWrap className={classes.titleRed}>
						labs
					</Typography>
				</Typography>
			</Container>
		</section>
	);
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		heroContent: {
			padding: theme.spacing(8, 0, 6)
		},
		link: {
			margin: theme.spacing(1, 1.5)
		},
		titleVariant: {
			color: theme.palette.type === 'light' ? theme.palette.primary.light : theme.palette.primary.dark
		},
		titleRed: {
			color: theme.palette.type === 'light' ? theme.palette.secondary.light : theme.palette.secondary.dark
		}
	})
);

export default Hero;
