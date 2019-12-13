import React, { Props } from 'react';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { useTranslation } from 'components/i18n';

const tiers = [
	{
		title: 'Free',
		price: '0',
		description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
		buttonText: 'Sign up for free',
		buttonVariant: 'outlined'
	},
	{
		title: 'Pro',
		subheader: 'Most popular',
		price: '15',
		description: ['20 users included', '10 GB of storage', 'Help center access', 'Priority email support'],
		buttonText: 'Get started',
		buttonVariant: 'contained'
	},
	{
		title: 'Enterprise',
		price: '30',
		description: ['50 users included', '30 GB of storage', 'Help center access', 'Phone & email support'],
		buttonText: 'Contact us',
		buttonVariant: 'outlined'
	}
];

const CardsSection: React.FunctionComponent = ({}): JSX.Element => {
	const classes = useStyles();
	const i18n = useTranslation('common');

	return (
		<section>
			<Container maxWidth="md" component="main">
				<Grid container spacing={5} alignItems="flex-end">
					{tiers.map(tier => (
						// Enterprise card is full width at sm breakpoint
						<Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
							<Card>
								<CardHeader
									title={tier.title}
									subheader={tier.subheader}
									titleTypographyProps={{ align: 'center' }}
									subheaderTypographyProps={{ align: 'center' }}
									action={tier.title === 'Pro' ? <StarIcon /> : null}
									className={classes.cardHeader}
								/>
								<CardContent>
									<div className={classes.cardPricing}>
										<Typography component="h2" variant="h3" color="textPrimary">
											${tier.price}
										</Typography>
										<Typography variant="h6" color="textSecondary">
											/mo
										</Typography>
									</div>
									<ul>
										{tier.description.map(line => (
											<Typography component="li" variant="subtitle1" align="center" key={line}>
												{line}
											</Typography>
										))}
									</ul>
								</CardContent>
								<CardActions>
									<Button fullWidth={true} variant="outlined" color="primary">
										{tier.buttonText}
									</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</section>
	);
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		heroContent: {
			padding: theme.spacing(8, 0, 6)
		},
		cardHeader: {
			backgroundColor: theme.palette.type === 'dark' ? theme.palette.grey[700] : theme.palette.grey[200]
		},
		cardPricing: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'baseline',
			marginBottom: theme.spacing(2)
		}
	})
);

export default CardsSection;
