import React, { Props } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { useTranslation } from 'components/i18n';

const Header: React.FunctionComponent = ({}): JSX.Element => {
	const classes = useStyles();
	const i18n = useTranslation('common');

	return (
		<AppBar position="static" color="default" elevation={0} className={classes.appBar}>
			<Toolbar className={classes.toolbar}>
				<Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
					<span className={classes.titleVariant}>khem</span>
					<span className={classes.titleRed}>labs</span>
				</Typography>
				<nav>
					<Link variant="button" color="textPrimary" href="#about-us" className={classes.link}>
						{i18n.t('menu_about')}
					</Link>
					<Link variant="button" color="textPrimary" href="#team" className={classes.link}>
						{i18n.t('menu_team')}
					</Link>
					<Link variant="button" color="textPrimary" href="#services" className={classes.link}>
						{i18n.t('menu_services')}
					</Link>
					<Link variant="button" color="textPrimary" href="#companies" className={classes.link}>
						{i18n.t('menu_companies')}
					</Link>
					<Link variant="button" color="textPrimary" href="#expertise" className={classes.link}>
						{i18n.t('menu_technologies')}
					</Link>
					<Link variant="button" color="textPrimary" href="#clients" className={classes.link}>
						{i18n.t('menu_clients')}
					</Link>
					<Link variant="button" color="textPrimary" href="#contact" className={classes.link}>
						{i18n.t('menu_contact')}
					</Link>
				</nav>
			</Toolbar>
		</AppBar>
	);
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		'@global': {
			ul: {
				margin: 0,
				padding: 0
			},
			li: {
				listStyle: 'none'
			}
		},
		appBar: {
			borderBottom: `1px solid ${theme.palette.divider}`
		},
		toolbar: {
			flexWrap: 'wrap'
		},
		toolbarTitle: {
			flexGrow: 1,
			fontFamily: 'Ubuntu'
		},
		titleVariant: {
			color: theme.palette.type === 'light' ? theme.palette.secondary.light : theme.palette.secondary.dark
		},
		titleRed: {
			color: theme.palette.type === 'light' ? theme.palette.primary.light : theme.palette.primary.dark
		},
		link: {
			margin: theme.spacing(1, 1.5)
		}
	})
);

export default Header;
