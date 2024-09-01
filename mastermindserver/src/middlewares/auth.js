const { pubkey } = require('../keys');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/users');
const checkAuth = async (req, res, next) => {
	//console.log(req);
	const token = req.cookies.token;
	if (token) {
		try {
			const decodedToken = jwt.verify(token, pubkey);
			// { iat: 1725090470, exp: 1740642470, sub: '66cde350973c6ca5cf9334c4' }
			//iat (Issued At) : Représente la date et l'heure à laquelle le token a été créé.
			// exp (Expiration Time) : Représente la date et l'heure à laquelle le token expirera.
			// sub (Subject) : Est un identifiant unique pour l'entité pour laquelle le token a été émis.
			if (decodedToken) {
				const currentUser = await UserModel.findById(decodedToken.sub);
				req.currentUser = currentUser;
				next();
			} else res.status(401).json({ message: 'authentication requise' });
		} catch (error) {
			console.log(error);
			res.status(401).json({ message: 'error' });
		}
	} else res.status(401).json({ message: 'authentication requise' });
};

module.exports = {
	checkAuth,
};
