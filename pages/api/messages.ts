import { NextApiResponse, NextApiRequest } from 'next';

type DataEmail = {
	name: string;
	company: string;
	email: string;
	textbody: string;
};

type EmailType = {
	first_name: string;
	company: string;
	email: string;
	textbody: string;
};

const redis = require('redis'),
	log = require('./Log'),
	nodemailer = require('nodemailer'),
	client = redis.createClient(6379, 'redishost');

// nodemailer singleton
let transporter: any;

// REDIS CLIENT
client.on('error', (err: Error) => log.error(err, 'services/message', 'save'));

const getTransporter = () => {
	if (transporter) return transporter;

	if (process.env.DISABLE_EMAIL && process.env.DISABLE_EMAIL === 'true') {
		log.info('Email disabled', 'services/Message', 'config');
	} else {
		log.info(`Configuring email (${process.env.GMAIL_OAUTH_SENDER})...`, 'services/Message', 'config');
		try {
			if (
				process.env.GMAIL_OAUTH_USERNAME &&
				process.env.GMAIL_OAUTH_CLIENT_ID &&
				process.env.GMAIL_OAUTH_CLIENT_SECRET &&
				process.env.GMAIL_OAUTH_REFRESH_TOKEN &&
				process.env.GMAIL_OAUTH_ACCESS_TOKEN &&
				process.env.GMAIL_OAUTH_SENDER &&
				process.env.GMAIL_OAUTH_RECEIVER
			) {
				const auth = {
					type: 'OAuth2',
					user: process.env.GMAIL_OAUTH_USERNAME,
					clientId: process.env.GMAIL_OAUTH_CLIENT_ID,
					clientSecret: process.env.GMAIL_OAUTH_CLIENT_SECRET,
					refreshToken: process.env.GMAIL_OAUTH_REFRESH_TOKEN
				};
				transporter = nodemailer.createTransport({ service: 'gmail', auth });
				return transporter;
			} else {
				log.error('Invalid GMAIL SMTP config', 'services/emailService', 'config');
			}
		} catch (e) {
			console.error(e);
			log.error('xouth2 not installed, please do "npm install xoauth2 --save"', 'services/emailService', 'setGMAILAPI');
		}

		return null;
	}
};

const email = (data: DataEmail) => {
	if (process.env.DISABLE_EMAIL && process.env.DISABLE_EMAIL === 'true') {
		return log.info('Email disabled', 'services/Message', 'email');
	}

	const transporter = getTransporter();
	if (!transporter) return log.info('transporter error', 'services/Message', 'email');

	log.info(`Sending email to (${process.env.GMAIL_OAUTH_RECEIVER})`, 'services/Message', 'email');
	const config = {
		from: process.env.GMAIL_OAUTH_SENDER,
		to: process.env.GMAIL_OAUTH_RECEIVER,
		subject: 'Message from site',
		html: `<p>
			Name: ${data.name}<br> 
			Company: ${data.company}<br> 
			Email: ${data.email}<br> 
			Message: <br>
			${data.textbody}
			</p>`
	};
	transporter.sendMail(config);
	return;
};

const save = (data: NextApiRequest & EmailType) => {
	const dataEmail = {
		name: data.first_name,
		company: data.company,
		email: data.email,
		textbody: data.textbody
	};
	email(dataEmail);
	client.sadd('messages', JSON.stringify(data));
};

export default (req: NextApiRequest, res: NextApiResponse) => {
	save(req.body);

	res.setHeader('Content-Type', 'application/json');
	res.statusCode = 200;
	res.end(JSON.stringify({ result: 'ok' }));
};
