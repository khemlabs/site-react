import React, { useState } from 'react';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';

import { useTranslation } from 'components/i18n';

const CompanyPortfolio: React.FunctionComponent = ({}): JSX.Element => {
	const classes = useStyles();
	const i18n = useTranslation('common');

	const [open, setOpen] = useState(false);

	const handleSubmit = (event: any) => {
		event.preventDefault();
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Container id="contact" maxWidth="xl" className={classes.root} component="section">
			<Container className={classes.container}>
				<Grid container>
					<Grid item xs={12} md={6} className={classes.cardWrapper}>
						<div className={classes.card}>
							<form onSubmit={handleSubmit} className={classes.cardContent}>
								<Typography variant="h2" component="h2" gutterBottom>
									{i18n.t('menu_contact')}
								</Typography>
								<Typography variant="h5">Please complete your email and message to contact us.</Typography>
								<TextField className={classes.textField} label={i18n.t('email_contact')} placeholder="Your email" />
								<TextField
									id="outlined-multiline-static"
									label={i18n.t('message_contact')}
									multiline
									rows="4"
									fullWidth
									variant="outlined"
								/>
								<Button type="submit" color="primary" variant="contained" className={classes.button}>
									{i18n.t('send_contact')}
								</Button>
							</form>
						</div>
					</Grid>
					<Grid item xs={12} md={6} className={classes.imagesWrapper}>
						<Hidden smDown>
							<div className={classes.imageDots} />
							<img src="./assets/img/cards.jpg" alt="call to action" className={classes.image} />
						</Hidden>
					</Grid>
				</Grid>
				<Snackbar open={open} onClose={handleClose} message="We will send you our best offers, once a week." />
			</Container>
		</Container>
	);
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			color: theme.palette.primary.contrastText,
			backgroundColor: theme.palette.common.white,
			marginTop: theme.spacing(10),
			marginBottom: 0,
			display: 'flex'
		},
		container: {
			marginTop: theme.spacing(10),
			marginBottom: theme.spacing(15),
			position: 'relative',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center'
		},
		cardWrapper: {
			zIndex: 1
		},
		card: {
			display: 'flex',
			justifyContent: 'center',
			backgroundColor: theme.palette.primary.dark,
			padding: theme.spacing(8, 3)
		},
		cardContent: {
			maxWidth: 400
		},
		textField: {
			width: '100%',
			marginTop: theme.spacing(3),
			marginBottom: theme.spacing(2)
		},
		button: {
			width: '100%'
		},
		imagesWrapper: {
			position: 'relative'
		},
		imageDots: {
			position: 'absolute',
			top: -67,
			left: -67,
			right: 0,
			bottom: 0,
			width: '100%',
			background: 'url(/static/onepirate/productCTAImageDots.png)'
		},
		image: {
			position: 'absolute',
			top: -28,
			left: -28,
			right: 0,
			bottom: 0,
			width: '100%',
			maxWidth: 600
		}
	})
);

export default CompanyPortfolio;
