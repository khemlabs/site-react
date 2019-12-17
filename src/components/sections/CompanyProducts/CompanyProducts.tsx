import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { useTranslation } from 'components/i18n';
import CardsShowcase from 'components/CardsShowcase';

const CompanyProducts: React.FunctionComponent = ({}): JSX.Element => {
	const classes = useStyles();
	const i18n = useTranslation('common');

	const products = [
		{
			title: i18n.t('wwd_apps_title'),
			body: (
				<Typography variant="body1" color="textPrimary">
					{i18n.t('wwd_apps_description')}
				</Typography>
			)
		},
		{
			title: i18n.t('wwd_multimedia_title'),
			body: (
				<Typography variant="body1" color="textPrimary">
					{i18n.t('wwd_multimedia_description')}
				</Typography>
			)
		},
		{
			title: i18n.t('wwd_customized_title'),
			body: (
				<Typography variant="body1" color="textPrimary">
					{i18n.t('wwd_customized_description')}
				</Typography>
			)
		}
	];

	return (
		<Container component="section" className={classes.content}>
			<CardsShowcase cards={products} />
		</Container>
	);
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		content: {
			padding: theme.spacing(8, 0, 6)
		}
	})
);

export default CompanyProducts;
