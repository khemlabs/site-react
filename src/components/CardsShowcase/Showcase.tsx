import React, { Props } from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { useTranslation } from 'components/i18n';
import Card from './Card';
import { CardHeader, CardContent } from '@material-ui/core';

export type ShowcaseCard = {
	title?: React.ReactNode | JSX.Element | string;
	subtitle?: string;
	body: React.ReactNode | JSX.Element;
	action?: React.ReactNode | JSX.Element;
	containerProps?: any;
};

type ShowcaseProps = {
	cards: Array<ShowcaseCard>;
};

const Showcase: React.FunctionComponent<ShowcaseProps> = ({ cards, children }): JSX.Element => {
	const classes = useStyles();
	const i18n = useTranslation('common');

	return (
		<Grid
			xl
			container
			spacing={5}
			alignItems="center"
			className={classes.gridFluid}
			itemProp="makesOffer"
			itemScope
			itemType="http://schema.org/ItemList"
		>
			{cards.map((card: ShowcaseCard, index: number) => (
				<Grid
					item
					key={`showcas_${index}`}
					xs={12}
					sm={6}
					md={4}
					itemProp="itemListElement"
					itemScope
					itemType="http://schema.org/Offer"
				>
					<div {...card.containerProps} itemProp="offers">
						<Card
							title={card.title ? card.title : null}
							subheader={card.subtitle ? card.subtitle : null}
							actions={card.action ? card.action : null}
						>
							{card.body}
						</Card>
						<meta itemProp="availability" content="https://schema.org/InStock" />
						<meta itemProp="priceCurrency" content="USD" />
						<meta itemProp="price" content="35.0/h" />
					</div>
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
			margin: 0,
		},
		cardBody: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'baseline',
			marginBottom: theme.spacing(2),
		},
	})
);

export default Showcase;
