import NextI18Next from 'next-i18next';
// import publicRuntimeConfig from 'next/config';
// const { localeSubpaths } = publicRuntimeConfig;

const NextI18NextInstance = new NextI18Next({
	localePath: './locales',
	defaultLanguage: 'en',
	otherLanguages: ['es', 'zh'],
	localeSubpaths: {
		en: 'en',
		es: 'es',
		zh: 'zh'
	},
	ignoreRoutes: ['/_next/', '/static/', '/public/', '/img/', '/assets/', '/legal/', '/pdf/', '/api/']
});

export default NextI18NextInstance;

/* Optionally, export class methods as named exports */
export const { appWithTranslation, withTranslation, useTranslation } = NextI18NextInstance;
