const fs = require('fs');
const path = require('path');

module.exports = {
	key: (process.env.MODE_ENV = 'prod'
		? process.env.jwtprivatekey
		: fs.readFileSync(path.join(__dirname, 'private.pem'))),
	pubkey: (process.env.MODE_ENV = 'prod'
		? process.env.jwtpublickey
		: fs.readFileSync(path.join(__dirname, 'public.pem'))),
};
process.env.DB_PROD;
