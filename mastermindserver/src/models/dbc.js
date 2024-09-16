const mongoose = require('mongoose');
let connexion;

let mongoUrl = (process.env.MODE_ENV = 'prod'
	? `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@db:27017`
	: 'mongodb://db:27017/mastermind'); // Adjust as neede
let DB = (process.env.MODE_ENV = 'prod'
	? process.env.DB_PROD
	: process.env.DB_DEV);
module.exports = {
	connect: async () => {
		try {
			console.log('trying to connect to uiserver' + mongoUrl);
			mongoose.connection.useDb(`${DB}`);
			connexion = await mongoose.connect(mongoUrl);

			//connexion = mongoose.connection.useDb(`${process.env.DB_DEV}`);
		} catch (error) {
			console.log(error);
		}
	},
	get: () => {
		if (connexion) {
			return connexion;
		} else {
			module.exports.connect();
		}
	},
};
