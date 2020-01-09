import React, { useEffect, useState } from 'react';

import Container from '@material-ui/core/Container';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { useTranslation } from 'components/i18n';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Link from 'components/Link';
import TeamMember from './TeamMember';

const CompanyTeam: React.FunctionComponent = ({}): JSX.Element => {
	const classes = useStyles();
	const i18n = useTranslation('common');

	return (
		<Container id="team" maxWidth="xl" component="section" className={classes.root}>
			<Container className={classes.content}>
				<Grid container spacing={5} justify="center">
					<Grid item xs={12} md={4} itemProp="founder" itemScope itemType="http://schema.org/Person">
						<TeamMember
							name="Lucio Moya Farina"
							link="https://linkedin.com/in/luciomf"
							image="./assets/img/team/lucio.png"
							description={i18n.t('description_lmoya')}
						/>
					</Grid>
					<Grid item xs={12} md={4} itemProp="founder" itemScope itemType="http://schema.org/Person">
						<TeamMember
							name="Pablo Gambetta"
							link="https://linkedin.com/in/pgambetta"
							image="./assets/img/team/pablo.png"
							description={i18n.t('description_pgambetta')}
						/>
					</Grid>
					<Grid item xs={12} md={4} itemProp="funder" itemScope itemType="http://schema.org/Person">
						<TeamMember
							name="Fernando Moya"
							link="https://ar.linkedin.com/in/fernando-moya-18654214"
							image="./assets/img/team/fernando.png"
							description={i18n.t('description_fmoya')}
						/>
					</Grid>
					<Grid item xs={12} md={4} itemProp="funder" itemScope itemType="http://schema.org/Person">
						<TeamMember
							name="Juan Luis Samos"
							image="./assets/img/team/juan.png"
							description={i18n.t('description_jsamos')}
						/>
					</Grid>
					<Grid item xs={12} md={4} itemProp="employee" itemScope itemType="http://schema.org/Person">
						<TeamMember
							name="Nicolas Raffaele"
							link="https://ar.linkedin.com/in/nicolasraffaele"
							image="./assets/img/team/nico.png"
							description={i18n.t('description_nraffaele')}
						/>
					</Grid>
					<Grid item xs={12} md={4} itemProp="employee" itemScope itemType="http://schema.org/Person">
						<TeamMember
							name="Victoria Picchio"
							link="https://ar.linkedin.com/in/victoria-picchio-2a8b93111/en"
							image="./assets/img/team/victoria.png"
							description={i18n.t('description_vicpicchio')}
						/>
					</Grid>
					<Grid item xs={12} md={6} itemProp="employee" itemScope itemType="http://schema.org/Person">
						<TeamMember
							name="Alexis Schapiro"
							link="https://www.linkedin.com/in/alexis-schapiro-1b921a190"
							image="./assets/img/team/alexis.png"
							description={i18n.t('description_developer')}
						/>
					</Grid>
					<Grid item xs={12} md={6} itemProp="employee" itemScope itemType="http://schema.org/Person">
						<TeamMember
							name="Macarena Mosquera"
							link="https://www.linkedin.com/in/macarena-mosquera-8460459a/"
							image="./assets/img/team/maca.png"
							description={i18n.t('description_mmosquera')}
						/>
					</Grid>
					<Grid item xs={12} md={6} itemProp="employee" itemScope itemType="http://schema.org/Person">
						<TeamMember
							name="Leandro Laiño"
							link="https://www.linkedin.com/in/leandrojavierlaino"
							image="./assets/img/team/leandro.png"
							description={i18n.t('description_developer')}
						/>
					</Grid>
					<Grid item xs={12} md={6} itemProp="employee" itemScope itemType="http://schema.org/Person">
						<TeamMember
							name="Vanesa Alegre"
							image="./assets/img/team/vane.png"
							description={i18n.t('description_valegre')}
						/>
					</Grid>
				</Grid>
			</Container>
		</Container>
	);
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			backgroundColor: theme.palette.type == 'light' ? theme.palette.common.white : theme.palette.common.black,
			overflow: 'hidden'
		},
		content: {
			marginTop: theme.spacing(10),
			marginBottom: theme.spacing(15),
			position: 'relative',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center'
		},
		center: {
			justifyContent: 'center'
		}
	})
);

export default CompanyTeam;
