export const GA_CAMPAIGN_ID = 'AW-893427191';
export const GA_TRACKING_ID = 'UA-72629702-1';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
	window.gtag('config', GA_TRACKING_ID, {
		page_path: url,
	});
};

type GTAGEvent = {
	action: string;
	category: string;
	label: string;
	value: string | number | null;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GTAGEvent) => {
	window.gtag('event', action, {
		event_category: category,
		event_label: label,
		value: value,
	});
};

export const conversion = () => {
	window.gtag('event', 'conversion', { send_to: `${GA_CAMPAIGN_ID}/vBzaCJmwudEBEPe7gqoD` });
};
