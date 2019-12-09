const path = require('path');

module.exports = {
	webpack(config, options) {
		config.resolve.alias['assets'] = path.join(__dirname, 'src/assets');
		config.resolve.alias['components'] = path.join(__dirname, 'src/components');
		config.resolve.alias['contexts'] = path.join(__dirname, 'src/contexts');
		config.resolve.alias['screens'] = path.join(__dirname, 'src/screens');
		config.resolve.alias['types'] = path.join(__dirname, 'src/types');
		config.resolve.alias['lib'] = path.join(__dirname, 'src/lib');
		return config;
	}
};
