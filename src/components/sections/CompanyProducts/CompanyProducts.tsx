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
			title: <span itemProp="name">{i18n.t('wwd_apps_title')}</span>,
			body: (
				<Typography itemProp="description" variant="body1" color="textPrimary">
					{i18n.t('wwd_apps_description')}
				</Typography>
			),
			containerProps: {
				itemProp: 'itemOffered',
				itemScope: 'itemScope',
				itemType: 'http://schema.org/Service'
			}
		},
		{
			title: <span itemProp="name">{i18n.t('wwd_multimedia_title')}</span>,
			body: (
				<Typography itemProp="description" variant="body1" color="textPrimary">
					{i18n.t('wwd_multimedia_description')}
				</Typography>
			),
			containerProps: {
				itemProp: 'itemOffered',
				itemScope: 'itemScope',
				itemType: 'http://schema.org/Service'
			}
		},
		{
			title: <span itemProp="name">{i18n.t('wwd_customized_title')}</span>,
			body: (
				<Typography itemProp="description" variant="body1" color="textPrimary">
					{i18n.t('wwd_customized_description')}
				</Typography>
			),
			containerProps: {
				itemProp: 'itemOffered',
				itemScope: 'itemScope',
				itemType: 'http://schema.org/Service'
			}
		}
	];

	return (
		<Container
			id="products"
			component="section"
			className={classes.content}
			itemScope
			itemType="http://schema.org/Service"
		>
			<meta itemProp="serviceType" content="Software Development" />
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
