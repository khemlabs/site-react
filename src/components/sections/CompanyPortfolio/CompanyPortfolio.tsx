import React, { useState } from 'react';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

import { useTranslation } from 'components/i18n';

const CompanyPortfolio: React.FunctionComponent = ({}): JSX.Element => {
	const classes = useStyles();
	const i18n = useTranslation('common');

	const images = [
		{
			url: './assets/img/portfolio/radiod/RadioD-1.png',
			title: 'Radio Disney',
			width: '20%'
		},
		{
			url: './assets/img/portfolio/ozono/Ozono1.png',
			title: 'Ozono',
			width: '40%'
		},
		{
			url: './assets/img/portfolio/fuerzaglobal/Fuerzaglobal-1.png',
			title: 'Fuerza bruta',
			width: '40%'
		},
		{
			url: './assets/img/portfolio/comicopolis/Comicopolis-1.png',
			title: 'Comicopolis',
			width: '38%'
		},
		{
			url: './assets/img/portfolio/bonaparte/sigpa1.png',
			title: 'Hospital Bonaparte',
			width: '38%'
		},
		{
			url: './assets/img/portfolio/bear/Bear1.png',
			title: 'Design Bear',
			width: '24%'
		},
		{
			url: './assets/img/portfolio/oxigeno/Oxigeno-1.png',
			title: 'Oxigeno',
			width: '40%'
		},
		{
			url: './assets/img/portfolio/jornadas/Jornadas-1.png',
			title: 'Jornadas de Salud',
			width: '20%'
		},
		{
			url: './assets/img/portfolio/worcket/Worcket-1.png',
			title: 'Workcet',
			width: '20%'
		},
		{
			url: './assets/img/portfolio/quickicks/Quickicks-1.png',
			title: 'Quickicks',
			width: '20%'
		}
	];

	return (
		<Container className={classes.root} component="section">
			<Typography variant="h4" align="center" component="h2">
				Portfolio
			</Typography>
			<div className={classes.images}>
				{images.map(image => (
					<ButtonBase
						key={image.title}
						className={classes.imageWrapper}
						style={{
							width: image.width
						}}
					>
						<div
							className={classes.imageSrc}
							style={{
								backgroundImage: `url(${image.url})`
							}}
						/>
						<div className={classes.imageBackdrop} />
						<div className={classes.imageButton}>
							<Typography component="h3" variant="h6" color="inherit" className={classes.imageTitle}>
								{image.title}
								<div className={classes.imageMarked} />
							</Typography>
						</div>
					</ButtonBase>
				))}
			</div>
		</Container>
	);
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			marginTop: theme.spacing(8),
			marginBottom: theme.spacing(4)
			// backgroundImage: 'url("./assets/img/team-2.jpg"',
			// backgroundAttachment: 'fixed'
		},
		images: {
			marginTop: theme.spacing(8),
			display: 'flex',
			flexWrap: 'wrap'
		},
		imageWrapper: {
			position: 'relative',
			display: 'block',
			padding: 0,
			borderRadius: 0,
			height: '40vh',
			[theme.breakpoints.down('sm')]: {
				width: '100% !important',
				height: 100
			},
			'&:hover': {
				zIndex: 1
			},
			'&:hover $imageBackdrop': {
				opacity: 0.15
			},
			'&:hover $imageMarked': {
				opacity: 0
			},
			'&:hover $imageTitle': {
				border: '4px solid currentColor'
			}
		},
		imageButton: {
			position: 'absolute',
			left: 0,
			right: 0,
			top: 0,
			bottom: 0,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			color: theme.palette.common.white
		},
		imageSrc: {
			position: 'absolute',
			left: 0,
			right: 0,
			top: 0,
			bottom: 0,
			backgroundSize: 'cover',
			backgroundPosition: 'center 40%'
		},
		imageBackdrop: {
			position: 'absolute',
			left: 0,
			right: 0,
			top: 0,
			bottom: 0,
			background: theme.palette.common.black,
			opacity: 0.5,
			transition: theme.transitions.create('opacity')
		},
		imageTitle: {
			position: 'relative',
			padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`
		},
		imageMarked: {
			height: 3,
			width: 18,
			background: theme.palette.common.white,
			position: 'absolute',
			bottom: -2,
			left: 'calc(50% - 9px)',
			transition: theme.transitions.create('opacity')
		}
	})
);

export default CompanyPortfolio;
