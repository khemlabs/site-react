import React, { Props } from 'react';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { useTranslation } from 'components/i18n';

import Copyright from './Copyright';

const Header: React.FunctionComponent = ({}): JSX.Element => {
	const classes = useStyles();
	const i18n = useTranslation('common');

	const footers = [
		{
			title: i18n.t('company_contact'),
			items: [
				{ title: i18n.t('menu_team'), link: '#team' },
				{ title: i18n.t('menu_about'), link: '#about' },
				{ title: i18n.t('menu_portfolio'), link: '#portfolio' },
				{ title: i18n.t('menu_technologies'), link: '#expertise' }
			]
		},
		{
			title: i18n.t('menu_languajes'),
			items: [
				{ title: 'English', link: '/en' },
				{ title: 'Español', link: '/es' },
				{ title: '中文', link: '/zh' }
			]
		},
		{
			title: i18n.t('menu_legal'),
			items: [
				{ title: i18n.t('policy'), link: 'legal/PrivacyPolicy.pdf' }
				// { title: 'Terms of use', link: '/terms.pdf' }
			]
		}
	];

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
