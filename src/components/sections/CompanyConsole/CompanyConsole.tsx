import React, { useEffect, useState } from 'react';

import Container from '@material-ui/core/Container';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { useTranslation } from 'components/i18n';
import Box from '@material-ui/core/Box';

const CompanyConsole: React.FunctionComponent = ({}): JSX.Element => {
	const classes = useStyles();
	const i18n = useTranslation('common');

	return (
		<Container maxWidth="sm" component="section" className={classes.container}>
			<Box className={classes.container}></Box>
		</Container>
	);
};

const useLetterScroller = (words: any) => {
	useEffect(() => {}, [words]);
	return {};
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			padding: theme.spacing(8, 0, 6)
		},
		content: {
			padding: theme.spacing(16)
		}
	})
);

export default CompanyConsole;
