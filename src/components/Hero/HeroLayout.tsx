import React from 'react';
import clsx from 'clsx';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { useTranslation } from 'components/i18n';

type HeroLayoutProps = {
	backgroundClassName?: string;
};

const Hero: React.FunctionComponent<HeroLayoutProps> = ({ children, backgroundClassName }): JSX.Element => {
	const classes = useStyles();
	const i18n = useTranslation('common');
	console.log(backgroundClassName);
	return (
		<Container className={classes.container}>
			{children}
			<Box className={classes.backdrop} />
			<Box className={clsx(classes.background, backgroundClassName)} />
		</Container>
	);
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			marginTop: theme.spacing(3),
			marginBottom: theme.spacing(14),
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center'
		},
		backdrop: {
			position: 'absolute',
			left: 0,
			right: 0,
			top: 0,
			bottom: 0,
			backgroundColor: theme.palette.common.black,
			opacity: 0.5,
			zIndex: -1
		},
		background: {
			position: 'absolute',
			left: 0,
			right: 0,
			top: 0,
			bottom: 0,
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			zIndex: -2
		},
		arrowDown: {
			position: 'absolute',
			bottom: theme.spacing(4)
		}
	})
);

export default Hero;
