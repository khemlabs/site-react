import React from 'react';
import { NextPage, NextPageContext } from 'next';

import { useTranslation } from 'components/i18n';

type ErrorPage = {
	statusCode?: Number;
};

const Error: NextPage<ErrorPage> = ({ statusCode }: ErrorPage) => {
	const i18n = useTranslation('common');
	return <p>{statusCode ? i18n.t('error-with-status', { statusCode }) : i18n.t('error-without-status')}</p>;
};

Error.getInitialProps = async ({ res, err }: NextPageContext) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { namespacesRequired: ['common'], statusCode };
};

export default Error;

// export default withTranslation('common')(Error);
