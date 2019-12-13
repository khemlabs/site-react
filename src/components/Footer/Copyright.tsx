import React, { Props } from 'react';

import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import { useTranslation } from 'components/i18n';

const Copyright: React.FunctionComponent = ({}): JSX.Element => {
	const i18n = useTranslation('common');

	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://material-ui.com/">
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
};

export default Copyright;
