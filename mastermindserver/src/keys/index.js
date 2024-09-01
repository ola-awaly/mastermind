const fs = require('fs');
const path = require('path');

module.exports = {
	key: fs.readFileSync(path.join(__dirname, 'private.pem')),
	pubkey: fs.readFileSync(path.join(__dirname, 'public.pem')),
};
