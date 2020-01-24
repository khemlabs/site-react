import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal, { ModalProps } from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		modal: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center'
		},
		paper: {
			backgroundColor: (props: any): string =>
				props.backgroundColor ? `${props.backgroundColor}` : theme.palette.background.paper,
			border: '2px solid #000',
			boxShadow: theme.shadows[5],
			padding: theme.spacing(2, 4, 3)
		}
	})
);

interface TransitionsProps extends ModalProps {
	backgroundColor?: string;
}

const TransitionsModal: React.FunctionComponent<TransitionsProps> = ({ children, open, onClose, backgroundColor }) => {
	const classes = useStyles({ backgroundColor });

	return (
		<Modal
			aria-labelledby="transition-modal-title"
			aria-describedby="transition-modal-description"
			className={classes.modal}
			open={open}
			onClose={onClose}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500
			}}
		>
			<Fade in={open}>
				<Box className={classes.paper}>{children}</Box>
			</Fade>
		</Modal>
	);
};

export default TransitionsModal;
