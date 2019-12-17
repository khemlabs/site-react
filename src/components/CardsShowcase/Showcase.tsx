import React, { Props } from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { useTranslation } from 'components/i18n';
import Card from './Card';

export type ShowcaseCard = {
	title?: string;
	subtitle?: string;
	body: React.ReactNode | JSX.Element;
	action?: React.ReactNode | JSX.Element;
};

type ShowcaseProps = {
	cards: Array<ShowcaseCard>;
};

const Showcase: React.FunctionComponent<ShowcaseProps> = ({ cards, children }): JSX.Element => {
	const classes = useStyles();
	const i18n = useTranslation('common');

	return (
		<Grid xl container spacing={5} alignItems="center" className={classes.gridFluid}>
			{cards.map((card: ShowcaseCard, index: number) => (
				<Grid item key={`showcas_${index}`} xs={12} sm={6} md={4}>
					<Card
						title={card.title ? card.title : null}
						subheader={card.subtitle ? card.subtitle : null}
						actions={card.action ? card.action : null}
					>
						<div className={classes.cardBody}>{card.body}</div>
					</Card>
				</Grid>
			))}
			{children && (
				<Grid item spacing={2} xs={12}>
					{children}
				</Grid>
			)}
		</Grid>
	);
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		gridFluid: {
			width: '100%',
			margin: 0
		},
		cardBody: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'baseline',
			marginBottom: theme.spacing(2)
		}
	})
);

export default Showcase;
