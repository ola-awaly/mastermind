const express = require('express');
const cookie = require('cookie-parser');
const { MongoClient } = require('mongodb');
const dbc = require('./models/dbc');

const app = express();
let connexion = dbc.get();
app.use(cookie());
app.use(express.json());
app.use('/api/users', require('./routers/users'));
app.use('/api/stats', require('./routers/gameStats'));

app.get('/err', (req, res) => {
	process.exit(1);
});
app.get('/', (req, res) => {
	res.status(200).json({ message: 'dans /' });
	// count
	// 	.findOneAndUpdate({}, { $inc: { count: 1 } }, { returnNewDocument: true })
	// 	.then((doc) => {
	// 		console.log(doc);
	// 		res.status(200).json({ message: 'nbre de login: ' + doc.count });
	// 	});
});

app.listen(8080, console.log('serveur écoute sur le port 8080'));
