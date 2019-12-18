import React from 'react';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

type ServiceProps = {
	image: string;
	title: string;
	description: string;
};

const Service: React.FunctionComponent<ServiceProps> = ({ image, title, description }): JSX.Element => {
	const classes = useStyles();

	return (
		<Card itemProp="itemListElement" itemScope itemType="http://schema.org/Offer">
			<CardActionArea>
				<CardMedia itemProp="image" className={classes.media} image={image} title={title} />
				<CardContent className={classes.background}>
					<Typography itemProp="name" gutterBottom variant="h5" component="h2">
						{title}
					</Typography>
					<Typography itemProp="description" variant="body2" color="textSecondary" component="p">
						{description}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		media: {
			height: 400
		},
		background: {
			backgroundColor: theme.palette.common.white
		}
	})
);

export default Service;
