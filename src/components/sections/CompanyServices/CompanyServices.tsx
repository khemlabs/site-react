import React from 'react';

import Container from '@material-ui/core/Container';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { useTranslation } from 'components/i18n';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Service from './Service';

const CompanyServices: React.FunctionComponent = ({}): JSX.Element => {
	const classes = useStyles();
	const i18n = useTranslation('common');

	return (
		<Container id="#services" maxWidth="xl" component="section" className={classes.root}>
			<Container
				className={classes.container}
				itemProp="hasOfferCatalog"
				itemScope
				itemType="http://schema.org/OfferCatalog"
			>
				<Typography variant="h2" className={classes.title}>
					{i18n.t('menu_services')}
				</Typography>
				<Grid container spacing={5}>
					<Grid item xs={12}>
						<Service
							title={i18n.t('title_rest')}
							image="./assets/img/services.jpg"
							description={i18n.t('description_rest')}
						/>
					</Grid>
					<Grid item xs={12}>
						<Service
							title={i18n.t('title_canvas')}
							image="./assets/img/multimedia.jpg"
							description={i18n.t('description_canvas')}
						/>
					</Grid>
					<Grid item xs={12}>
						<Service
							title={i18n.t('title_singlepage')}
							image="./assets/img/spa.jpg"
							description={i18n.t('description_singlepage')}
						/>
					</Grid>
					<Grid item xs={12}>
						<Service
							title={i18n.t('title_realtime')}
							image="./assets/img/realtime.jpg"
							description={i18n.t('description_realtime')}
						/>
					</Grid>
				</Grid>
			</Container>
		</Container>
	);
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			backgroundColor: theme.palette.grey[300],
			overflow: 'hidden'
		},
		container: {
			marginTop: theme.spacing(10),
			marginBottom: theme.spacing(15),
			position: 'relative',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center'
		},
		item: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			padding: theme.spacing(0, 5)
		},
		title: {
			marginBottom: theme.spacing(14)
		}
	})
);

export default CompanyServices;
