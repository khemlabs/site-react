import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import Modal from 'components/Modal';
import { Container } from 'next/app';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
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
		}
	})
);

export default function PortfolioModal() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Container>
			<img src="./assets/img/portfolio/ozono/Ozono-1.jpg" />
		</Container>
	);
}
