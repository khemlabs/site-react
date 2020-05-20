import React, { useEffect, useState } from 'react';

import Container from '@material-ui/core/Container';
import { useSpring, animated } from 'react-spring';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { useTranslation } from 'components/i18n';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

const CompanyConsole: React.FunctionComponent = ({}): JSX.Element => {
	const classes = useStyles();
	const i18n = useTranslation('common');
	const [reset, setReset] = useState(false);

	const fadeInOut = useSpring({
		from: { opacity: 1 },
		to: { opacity: 0 },
		reverse: reset,
		onRest: () => setReset(!reset),
	});

	return (
		<Container maxWidth="xl" component="section" className={classes.container}>
			<Box className={classes.container}>
				<Typography variant="body2" display="inline" className={classes.console}>
					&gt;
					{/* <Spring from={{ opacity: 1 }} to={{ opacity: 0 }} reverse={reset} onRest={() => setReset(!reset)}>
						{(props: any) => (
							<animated.span className={classes.consoleText} style={props}>
								_
							</animated.span>
						)}
					</Spring> */}
					<animated.span className={classes.consoleText} style={fadeInOut}>
						_
					</animated.span>
				</Typography>
			</Box>
		</Container>
	);
};

// const useLetterScroller = (words: any) => {
// 	useEffect(() => {}, [words]);
// 	return {};
// };

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			padding: theme.spacing(8, 0, 6),
			backgroundColor: theme.palette.common.black,
		},
		content: {
			padding: theme.spacing(2),
		},
		console: {
			padding: theme.spacing(0, 4),
			color: theme.palette.common.white,
			fontSize: theme.sizes.large,
		},
		consoleText: {
			padding: theme.spacing(0, 1),
		},
	})
);

export default CompanyConsole;
