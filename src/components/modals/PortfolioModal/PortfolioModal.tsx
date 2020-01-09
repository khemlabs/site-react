import React, { useEffect, useReducer } from 'react';
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

const modalReducer = (state: any, action: any) => {
	switch (action.type) {
		case 'open':
			return { open: true };
		case 'close':
			return { open: false };
	}
};

export const usePortfolioModal = () => {
	const reducer: any = useReducer(modalReducer, { open: false });

	return reducer;
};

const PortfolioModal: React.FunctionComponent = (): JSX.Element => {
	const classes = useStyles();
	const [{ open }, dispatch] = usePortfolioModal();

	return (
		<Modal open={open} onClose={() => dispatch({ type: 'close' })}>
			<Container>
				<img src="./assets/img/portfolio/ozono/Ozono1.jpg" width="300" />
			</Container>
		</Modal>
	);
};

export default PortfolioModal;
