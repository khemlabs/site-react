import React, { Props } from 'react';

import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { useTranslation } from 'components/i18n';

import HeroLayout from './HeroLayout';

type HeroProps = {
	backgroundImage?: string;
	backgroundColor?: string;
};

const Hero: React.FunctionComponent<HeroProps> = ({ children, backgroundImage, backgroundColor }): JSX.Element => {
	const classes = useStyles({ backgroundImage, backgroundColor });
	const i18n = useTranslation('common');
	console.log(backgroundColor);
	return (
		<HeroLayout backgroundClassName={classes.background}>
			{/* Increase the network loading priority of the background image. */}
			{backgroundImage && <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />}
			{children}
		</HeroLayout>
	);
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		background: {
			backgroundImage: (props: any): string => {
				console.log(props.backgroundColor);
				return props.backgroundImage ? `url(${props.backgroundImage})` : '';
			},
			backgroundColor: (props: any): string =>
				props.backgroundColor ? `${props.backgroundColor}` : theme.palette.background.paper, // Average color of the background image.
			backgroundPosition: 'center'
		},
		button: {
			minWidth: 200
		},
		h5: {
			marginBottom: theme.spacing(4),
			marginTop: theme.spacing(4),
			[theme.breakpoints.up('sm')]: {
				marginTop: theme.spacing(10)
			}
		},
		more: {
			marginTop: theme.spacing(2)
		}
	})
);

export default Hero;
