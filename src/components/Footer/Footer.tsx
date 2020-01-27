import React, { Props } from 'react';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { useTranslation } from 'components/i18n';

import Copyright from './Copyright';

const footers = [
	{
		title: 'Company',
		items: [
			{ title: 'Team', link: '#team' },
			{ title: 'About Us', link: '#about' },
			{ title: 'Porfolio', link: '#portfolio' },
			{ title: 'Expertise', link: '#expertise' }
		]
	},
	{
		title: 'Languages',
		items: [
			{ title: 'English', link: '/en' },
			{ title: 'Español', link: '/es' },
			{ title: '中文', link: '/zh' }
		]
	},
	{
		title: 'Legal',
		items: [
			{ title: 'Privacy policy', link: '/privacy.pdf' },
			{ title: 'Terms of use', link: '/terms.pdf' }
		]
	}
];

const Header: React.FunctionComponent = ({}): JSX.Element => {
	const classes = useStyles();
	const i18n = useTranslation('common');

	return (
		<Container maxWidth="xl" component="footer" className={classes.footer}>
			<Grid container spacing={4} justify="space-evenly">
				{footers.map(footer => (
					<Grid item xs={6} sm={3} key={footer.title}>
						<Typography variant="h6" color="textPrimary" gutterBottom>
							{footer.title}
						</Typography>
						<ul>
							{footer.items.map((item, index) => (
								<li key={index}>
									<Link href={item.link} variant="subtitle1" color="textSecondary">
										{item.title}
									</Link>
								</li>
							))}
						</ul>
					</Grid>
				))}
			</Grid>
			<Box mt={5}>
				<Copyright />
			</Box>
		</Container>
	);
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		footer: {
			borderTop: `1px solid ${theme.palette.divider}`,
			paddingTop: theme.spacing(3),
			paddingBottom: theme.spacing(3),
			[theme.breakpoints.up('sm')]: {
				paddingTop: theme.spacing(6),
				paddingBottom: theme.spacing(6)
			},
			backgroundColor: theme.palette.type == 'light' ? theme.palette.common.white : theme.palette.common.black,
			overflow: 'hidden'
		}
	})
);

export default Header;
