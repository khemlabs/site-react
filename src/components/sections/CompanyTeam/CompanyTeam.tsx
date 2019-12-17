import React, { useEffect, useState } from 'react';

import Container from '@material-ui/core/Container';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { useTranslation } from 'components/i18n';

const CompanyTeam: React.FunctionComponent = ({}): JSX.Element => {
	const classes = useStyles();
	const i18n = useTranslation('common');

	return <Container maxWidth="sm" component="section" className={classes.content}></Container>;
};

const useLetterScroller = (words: any) => {
	useEffect(() => {}, [words]);
	return {};
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		content: {
			padding: theme.spacing(8, 0, 6)
		}
	})
);

export default CompanyTeam;
