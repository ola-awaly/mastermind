const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const dbvar =
	process.env.MODE_ENV == 'prod' ? process.env.DB_PROD : process.env.DB_DEV;
const DB = mongoose.connection.useDb(dbvar);
const gameStatsSchema = new mongoose.Schema({
	name: { type: String, required: true },
	userid: { type: ObjectId, ref: 'User', required: true },
	tentatives: { type: Number, required: true },
	played: Date,
});

// Définir un index composé unique sur les champs `userid` et `name`
gameStatsSchema.index({ userid: 1, name: 1 }, { unique: true });

module.exports = DB.model('gameStats', gameStatsSchema);
