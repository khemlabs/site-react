import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { useTranslation } from 'components/i18n';

const CompanyAbout: React.FunctionComponent = ({}): JSX.Element => {
	const classes = useStyles();
	const i18n = useTranslation('common');

	return (
		<Container id="about-us" maxWidth="xl" component="section" className={classes.root}>
			<Container className={classes.content}>
				<Typography variant="h2" className={classes.title}>
					{i18n.t('menu_about')}
				</Typography>
				<Typography variant="body1" component="p">
					{i18n.t('description_about')}
				</Typography>
			</Container>
		</Container>
	);
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			backgroundColor: theme.palette.type == 'light' ? theme.palette.common.white : theme.palette.common.black,
			overflow: 'hidden'
		},
		content: {
			marginTop: theme.spacing(10),
			marginBottom: theme.spacing(15),
			position: 'relative',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center'
		},
		title: {
			marginBottom: theme.spacing(14)
		}
	})
);

export default CompanyAbout;
