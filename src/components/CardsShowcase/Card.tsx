import React, { Props, ReactComponentElement } from 'react';

import { default as MuiCard } from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { useTranslation } from 'components/i18n';

type CardProps = {
	title?: React.ReactNode;
	subheader?: React.ReactNode;
	headerAction?: React.ReactNode;
	actions?: React.ReactNode;
};

const Card: React.FunctionComponent<CardProps> = ({
	children,
	title,
	subheader,
	headerAction,
	actions
}): JSX.Element => {
	const classes = useStyles();
	const i18n = useTranslation('common');

	return (
		<MuiCard>
			<CardHeader
				title={title ? title : null}
				subheader={subheader ? subheader : null}
				titleTypographyProps={{ align: 'center' }}
				subheaderTypographyProps={{ align: 'center' }}
				action={headerAction ? headerAction : null}
				className={classes.cardHeader}
			/>
			<CardContent>{children}</CardContent>
			{actions && <CardActions>{actions}</CardActions>}
		</MuiCard>
	);
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		cardHeader: {
			backgroundColor: theme.palette.type === 'dark' ? theme.palette.grey[700] : theme.palette.grey[200]
		}
	})
);

export default Card;
