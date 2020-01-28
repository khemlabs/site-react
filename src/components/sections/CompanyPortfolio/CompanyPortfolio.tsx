import React, { useState, useCallback } from 'react';
import { useTransition, animated } from 'react-spring';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Box from '@material-ui/core/Box';

import { useTranslation } from 'components/i18n';
import Modal from 'components/Modal';

const images = [
	{
		url: './assets/img/portfolio/radiod/RadioD-1.png',
		title: 'Radio Disney',
		width: '20%',
		screenshots: [
			'./assets/img/portfolio/radiod/RadioD-1.png',
			'./assets/img/portfolio/radiod/RadioD-2.png',
			'./assets/img/portfolio/radiod/RadioD-3.png',
			'./assets/img/portfolio/radiod/RadioD-4.png',
			'./assets/img/portfolio/radiod/RadioD-5.png',
			'./assets/img/portfolio/radiod/RadioD-6.png'
		]
	},
	{
		url: './assets/img/portfolio/ozono/Ozono1.png',
		title: 'Ozono',
		width: '40%',
		screenshots: [
			'./assets/img/portfolio/ozono/Ozono1.png',
			'./assets/img/portfolio/ozono/Ozono2.png',
			'./assets/img/portfolio/ozono/Ozono3.png',
			'./assets/img/portfolio/ozono/Ozono4.png',
			'./assets/img/portfolio/ozono/Ozono5.png'
		]
	},
	{
		url: './assets/img/portfolio/fuerzaglobal/Fuerzaglobal-1.png',
		title: 'Fuerza bruta',
		width: '40%',
		screenshots: [
			'./assets/img/portfolio/fuerzaglobal/Fuerzaglobal-1.png',
			'./assets/img/portfolio/fuerzaglobal/Fuerzaglobal-2.png',
			'./assets/img/portfolio/fuerzaglobal/Fuerzaglobal-3.png'
		]
	},
	{
		url: './assets/img/portfolio/comicopolis/Comicopolis-1.png',
		title: 'Comicopolis',
		width: '38%',
		screenshots: [
			'./assets/img/portfolio/comicopolis/Comicopolis-1.png',
			'./assets/img/portfolio/comicopolis/Comicopolis-2.png',
			'./assets/img/portfolio/comicopolis/Comicopolis-3.png',
			'./assets/img/portfolio/comicopolis/Comicopolis-4.png'
		]
	},
	{
		url: './assets/img/portfolio/bonaparte/sigpa1.png',
		title: 'Hospital Bonaparte',
		width: '38%',
		screenshots: [
			'./assets/img/portfolio/bonaparte/sigpa1.png',
			'./assets/img/portfolio/bonaparte/sigpa2.png',
			'./assets/img/portfolio/bonaparte/sigpa3.png'
		]
	},
	{
		url: './assets/img/portfolio/bear/Bear1.png',
		title: 'Design Bear',
		width: '24%',
		screenshots: [
			'./assets/img/portfolio/bear/Bear1.png',
			'./assets/img/portfolio/bear/Bear2.png',
			'./assets/img/portfolio/bear/Bear7.png'
		]
	},
	{
		url: './assets/img/portfolio/oxigeno/Oxigeno-1.png',
		title: 'Oxigeno',
		width: '40%',
		screenshots: ['./assets/img/portfolio/oxigeno/Oxigeno-1.png']
	},
	{
		url: './assets/img/portfolio/jornadas/Jornadas-1.png',
		title: 'Jornadas de Salud',
		width: '20%',
		screenshots: [
			'./assets/img/portfolio/jornadas/Jornadas-1.png',
			'./assets/img/portfolio/jornadas/Jornadas-2.png',
			'./assets/img/portfolio/jornadas/Jornadas-3.png',
			'./assets/img/portfolio/jornadas/Jornadas-4.png',
			'./assets/img/portfolio/jornadas/Jornadas-5.png',
			'./assets/img/portfolio/jornadas/Jornadas-6.png'
		]
	},
	{
		url: './assets/img/portfolio/worcket/Worcket-1.png',
		title: 'Workcet',
		width: '20%',
		screenshots: [
			'./assets/img/portfolio/worcket/Worcket-1.png',
			'./assets/img/portfolio/worcket/Worcket-2.png',
			'./assets/img/portfolio/worcket/Worcket-3.png',
			'./assets/img/portfolio/worcket/Worcket-4.png'
		]
	},
	{
		url: './assets/img/portfolio/quickicks/Quickicks-1.png',
		title: 'Quickicks',
		width: '20%',
		screenshots: [
			'./assets/img/portfolio/quickicks/Quickicks-1.png',
			'./assets/img/portfolio/quickicks/Quickicks-2.png',
			'./assets/img/portfolio/quickicks/Quickicks-3.png',
			'./assets/img/portfolio/quickicks/Quickicks-4.png'
		]
	}
];

const transparentBackground = 'rgba(19, 19, 19, 0.23);';

const CompanyPortfolio: React.FunctionComponent = ({}): JSX.Element => {
	const classes = useStyles();
	const i18n = useTranslation('common');
	// const [{}, dispatch] = usePortfolioModal();

	const [open, setOpen] = useState(false);
	const [gallery, setGallery] = useState(0);

	const handleOpen = (index: number) => {
		console.log('open modal');
		setGallery(index);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const [index, set] = useState(0);
	const onClick = useCallback(() => set(state => (state + 1) % 3), []);

	const transitions = useTransition(index, p => p, {
		from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
		enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
		leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' }
	});

	const pages = images[gallery].screenshots.map(screenshot => ({ style }: any) => (
		<animated.div className={classes.transitionMain} style={style}>
			<img src={screenshot} className={classes.flexImage} />
		</animated.div>
	));

	return (
		<Container
			id="portfolio"
			className={classes.root}
			component="section"
			itemProp="manufacturer"
			itemScope
			itemType="http://schema.org/ItemList"
		>
			<Typography variant="h2" className={classes.title}>
				{i18n.t('menu_portfolio')}
			</Typography>

			<div className={classes.images}>
				{images.map((image, index) => (
					<ButtonBase
						key={image.title}
						className={classes.imageWrapper}
						style={{
							width: image.width
						}}
						onClick={() => handleOpen(index)}
						itemProp="itemListElement"
						itemScope
						itemType="http://schema.org/Product"
					>
						<div
							className={classes.imageSrc}
							itemProp="image"
							style={{
								backgroundImage: `url(${image.url})`
							}}
						/>
						<div className={classes.imageBackdrop} />
						<div className={classes.imageButton}>
							<Typography component="h3" variant="h6" color="inherit" itemProp="name" className={classes.imageTitle}>
								{image.title}
								<div className={classes.imageMarked} />
							</Typography>
						</div>
					</ButtonBase>
				))}
			</div>
			<Modal open={open} onClose={handleClose} backgroundColor={transparentBackground}>
				<Box className={classes.transitionContainer}>
					{images[gallery].screenshots.length > 1 ? (
						<div className={classes.transitionMain} onClick={onClick}>
							{transitions.map(({ item, props, key }) => {
								const Page = pages[item];
								return <Page key={key} style={props} />;
							})}
						</div>
					) : (
						<div className={classes.transitionMain}>
							<div className={classes.transitionMain}>
								<img className={classes.flexImage} src={images[gallery].screenshots[0]} />
							</div>
							<img className={classes.flexImageHover} src="img/logo-small.png" />
						</div>
					)}
				</Box>
			</Modal>
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
		},
		modal: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center'
		},
		paper: {
			backgroundColor: theme.palette.background.paper,
			border: '2px solid #000',
			boxShadow: theme.shadows[5],
			padding: theme.spacing(2, 4, 3)
		},
		transitionContainer: {
			position: 'relative',
			width: '70vw',
			height: '80vh'
		},
		transitionMain: {
			cursor: 'pointer',
			position: 'absolute',
			width: '100%',
			height: '100%',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			color: 'white',
			fontWeight: 800,
			fontSize: '25em',
			willChange: 'transform, opacity',
			textShadow: '0px 2px 40px #00000020, 0px 2px 5px #00000030'
		},
		flexImage: {
			maxHeight: '95%',
			padding: theme.spacing(2),
			background: theme.gradient.primary
		},
		flexImageHover: {
			position: 'absolute',
			bottom: '8px',
			right: '8px'
		},
		title: {
			marginBottom: theme.spacing(14),
			color: theme.palette.primary.contrastText,
			textAlign: 'center'
		}
	})
);

export default CompanyPortfolio;
