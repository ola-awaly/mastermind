const fs = require('fs');
const path = require('path');

module.exports = {
	key: (process.env.MODE_ENV = 'prod'
		? process.env.JWTPRIVATEKEY
		: fs.readFileSync(path.join(__dirname, 'private.pem'))),
	pubkey: (process.env.MODE_ENV = 'prod'
		? process.env.JWTPUBLICKEY
		: fs.readFileSync(path.join(__dirname, 'public.pem'))),
};
process.env.DB_PROD;
