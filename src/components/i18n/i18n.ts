import NextI18Next from 'next-i18next';

const NextI18NextInstance = new NextI18Next({
	localePath: 'src/locales',
	defaultLanguage: 'en',
	otherLanguages: ['es'],
	localeSubpaths: {
		en: 'en',
		es: 'es'
	}
});

export default NextI18NextInstance;

/* Optionally, export class methods as named exports */
export const { appWithTranslation, withTranslation, useTranslation } = NextI18NextInstance;
