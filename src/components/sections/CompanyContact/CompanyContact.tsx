import React, { useState } from 'react';
import { Formik, Form, FormikHelpers, Field } from 'formik';
import getConfig from 'next/config';
import Recaptcha from 'react-recaptcha';

import { TextField } from 'formik-material-ui';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';

import { useTranslation } from 'components/i18n';

const { publicRuntimeConfig } = getConfig();

interface Values {
	email: string;
	textbody: string;
	recaptcha: string;
}

enum FormStatus {
	AVAILABLE,
	OK,
	ERROR,
	FAILED,
}

// type OnSumitType =

async function postData(url = '', data = {}) {
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});
	return await response.json();
}

const CompanyPortfolio: React.FunctionComponent = ({}): JSX.Element => {
	const classes = useStyles();
	const i18n = useTranslation('common');

	const handleSubmit = async (values: Values, { setSubmitting, setStatus }: FormikHelpers<Values>): Promise<void> => {
		try {
			const response = await postData('/api/messages', values);
			console.log('responde', response);
			if (response.result == 'ok') {
				setStatus(FormStatus.OK);
			} else {
				throw 'Response error';
			}
		} catch (error) {
			console.log(error);
			setStatus(FormStatus.FAILED);
		}
		setSubmitting(false);
	};

	const validateSubmit = (values: Values) => {
		const errors: Partial<Values> = {};
		if (!values.email) {
			errors.email = i18n.t('error_required');
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
			errors.email = i18n.t('error_invalid');
		}
		if (!values.textbody) {
			errors.textbody = i18n.t('error_required');
		}
		return errors;
	};

	return (
		<Container id="contact" maxWidth="xl" className={classes.root} component="section">
			<Container className={classes.container}>
				<Grid container>
					<Grid item xs={12} md={6} className={classes.cardWrapper}>
						<div className={classes.card}>
							<Formik
								initialValues={{
									email: '',
									textbody: '',
									recaptcha: '',
								}}
								validate={validateSubmit}
								onSubmit={handleSubmit}
							>
								{({ submitForm, errors, touched, isSubmitting, status, setStatus, setFieldValue }) => (
									<Form className={classes.cardContent} method="post" action="api/messages">
										<Typography variant="h2" component="h2" gutterBottom>
											{i18n.t('menu_contact')}
										</Typography>
										<Typography variant="h5">{i18n.t('message_description')}</Typography>
										<Field
											name="client-email"
											component={TextField}
											className={classes.textField}
											label={i18n.t('email_contact')}
											placeholder={i18n.t('email_placeholder')}
											variant="outlined"
											required
										/>
										<Field
											name="client-message"
											component={TextField}
											label={i18n.t('message_contact')}
											multiline
											rows="4"
											fullWidth
											variant="outlined"
											required
										/>
										<Box className={classes.recaptcha}>
											<Recaptcha
												sitekey={publicRuntimeConfig.googleRecaptchaKey}
												render="explicit"
												theme="dark"
												// badge="inline"
												verifyCallback={(response) => {
													setFieldValue('recaptcha', response);
												}}
												onloadCallback={() => {
													console.log('done loading!');
												}}
											/>
										</Box>
										{errors.recaptcha && touched.recaptcha && <p>{errors.recaptcha}</p>}
										{isSubmitting && <LinearProgress />}
										<Button
											color="primary"
											variant="contained"
											className={classes.button}
											disabled={isSubmitting}
											onClick={submitForm}
										>
											{i18n.t('send_contact')}
										</Button>
										<Snackbar
											open={status == FormStatus.OK}
											onClose={() => setStatus(FormStatus.AVAILABLE)}
											autoHideDuration={2000}
											message={i18n.t('message_thanks')}
										/>
										<Snackbar
											open={status == FormStatus.FAILED}
											onClose={() => setStatus(FormStatus.AVAILABLE)}
											autoHideDuration={2000}
											message={i18n.t('message_fail')}
										/>
									</Form>
								)}
							</Formik>
						</div>
					</Grid>
					<Grid item xs={12} md={6} className={classes.imagesWrapper}>
						<Hidden smDown>
							<div className={classes.imageDots} />
							<img src="./assets/img/cards.jpg" alt="call to action" className={classes.image} />
						</Hidden>
					</Grid>
				</Grid>
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
			display: 'flex',
		},
		container: {
			marginTop: theme.spacing(10),
			marginBottom: theme.spacing(15),
			position: 'relative',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
		},
		cardWrapper: {
			zIndex: 1,
		},
		card: {
			display: 'flex',
			justifyContent: 'center',
			backgroundColor: theme.palette.primary.dark,
			padding: theme.spacing(8, 3),
		},
		cardContent: {
			maxWidth: 400,
		},
		textField: {
			width: '100%',
			marginTop: theme.spacing(3),
			marginBottom: theme.spacing(2),
		},
		button: {
			width: '100%',
		},
		recaptcha: {
			width: '100%',
			padding: theme.spacing(2, 0),
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		},
		imagesWrapper: {
			position: 'relative',
		},
		imageDots: {
			position: 'absolute',
			top: -67,
			left: -67,
			right: 0,
			bottom: 0,
			width: '100%',
			background: 'url(/static/onepirate/productCTAImageDots.png)',
		},
		image: {
			position: 'absolute',
			top: -28,
			left: -28,
			right: 0,
			bottom: 0,
			width: '100%',
			maxWidth: 600,
		},
	})
);

export default CompanyPortfolio;
