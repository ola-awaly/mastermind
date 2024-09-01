const mongoose = require('mongoose');
const dbvar =
	process.env.MODE_ENV == 'prod' ? process.env.DB_PROD : process.env.DB_DEV;
const DB = mongoose.connection.useDb(dbvar);
const userSchema = new mongoose.Schema({
	name: String,
	username: { type: String, required: true },
	password: { type: String, required: true },
	createdAt: Date,
});

const User = DB.model('user', userSchema);
module.exports = User;
