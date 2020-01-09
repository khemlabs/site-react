import React, { Props } from 'react';

import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { useTranslation } from 'components/i18n';

const Copyright: React.FunctionComponent = ({}): JSX.Element => {
	const i18n = useTranslation('common');
	const classes = useStyles();

	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://khemlabs.com/" className={classes.title}>
				<span className={classes.variant}>khem</span>
				<span className={classes.red}>labs</span>
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		title: {
			fontFamily: 'Ubuntu'
		},
		variant: {
			color: theme.palette.type === 'light' ? theme.palette.secondary.light : theme.palette.secondary.dark
		},
		red: {
			color: theme.palette.type === 'light' ? theme.palette.primary.light : theme.palette.primary.dark
		}
	})
);

export default Copyright;
