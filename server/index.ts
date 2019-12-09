import next from 'next';
import nextI18NextMiddleware from 'next-i18next/middleware';

import nextI18next from '../src/components/i18n';
import { IncomingMessage, ServerResponse } from 'http';

const express = require('express');
const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

(async () => {
	await app.prepare();
	const server = express();

	server.use(nextI18NextMiddleware(nextI18next));

	server.get('*', (req: IncomingMessage, res: ServerResponse): Promise<void> => handle(req, res));

	await server.listen(port);
	console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line no-console
})();
