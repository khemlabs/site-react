import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { useTranslation } from 'components/i18n';

const CompanyExpertise: React.FunctionComponent = ({}): JSX.Element => {
	const classes = useStyles();
	const i18n = useTranslation('common');

	return (
		<Container id="expertise" maxWidth="sm" className={classes.content}>
			<Typography variant="h1">Experience</Typography>
		</Container>
	);
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		content: {
			padding: theme.spacing(8, 0, 6),
		},
	})
);

export default CompanyExpertise;
