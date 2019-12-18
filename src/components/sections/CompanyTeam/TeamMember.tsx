import React, { useEffect, useState } from 'react';

import Container from '@material-ui/core/Container';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { useTranslation } from 'components/i18n';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Link from 'components/Link';

type TeamMemberProps = {
	name: string;
	image: string;
	link?: string;
	description: Function | string;
};

const TeamMember: React.FunctionComponent<TeamMemberProps> = ({ name, image, link, description }): JSX.Element => {
	const classes = useStyles();
	const i18n = useTranslation('common');

	return (
		<React.Fragment>
			<Box className={classes.center}>
				<img itemProp="image" src={image} width="270" height="270" />
			</Box>
			<Typography className={classes.center} itemProp="name">
				<Link target="_blank" href={link ? link : '#team'}>
					<strong>{name}</strong>
				</Link>
			</Typography>
			<Typography className={classes.center} itemProp="jobTitle">
				<em>{description}</em>
			</Typography>
		</React.Fragment>
	);
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		center: {
			justifyContent: 'center',
			alignItems: 'center',
			textAlign: 'center'
		}
	})
);

export default TeamMember;
