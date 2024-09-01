const mongoose = require('mongoose');
let connexion;

let mongoUrl = (process.env.MODE_ENV = 'prod'
	? `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@db:27017`
	: 'mongodb://db:27017/mastermind'); // Adjust as neede
module.exports = {
	connect: async () => {
		try {
			console.log('trying to connect to uiserver' + mongoUrl);
			mongoose.connection.useDb(`${process.env.DB_DEV}`);
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
