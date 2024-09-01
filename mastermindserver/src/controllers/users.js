const UserModel = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { key, pubkey } = require('../keys');
module.exports = {
	getAll: (req, res) => {
		console.log('getalluserscontroller');
		res.status(200).json({
			users: [
				{ id: 1, name: 'ola' },
				{ id: 2, name: 'rayan' },
			],
		});
	},

	post: async (req, res) => {
		let userInfo = req.body;

		const saltRounds = 10;
		userInfo.password = await bcrypt.hash(userInfo.password, saltRounds);
		console.log(req.body);

		userInfo.createdAt = Date();
		const newUser = new UserModel(userInfo);
		newUser
			.save()
			.then(() => {
				res.status(201).json({ message: 'user créé' });
			})
			.catch((error) => console.log(error));
	},

	login: async (req, res) => {
		const loginInfo = req.body;

		const findedUser = await UserModel.findOne({
			username: loginInfo.username,
		});
		if (findedUser) {
			const ok = await bcrypt.compare(
				loginInfo.password,
				findedUser.password
			);

			if (ok) {
				let token = jwt.sign({}, key, {
					subject: findedUser._id.toString(),
					expiresIn: 3600 * 24 * 30 * 6,
					algorithm: 'RS256',
				});
				res.cookie('token', token, { HttpOnly: true });
				res.status(200).json(findedUser);
			} else res.status(400).json({ message: 'failed authentication' });
		} else res.status(400).json({ message: 'failed authentication' });
	},
	logout: (req, res) => {
		console.log('logout');
		res.clearCookie('token');
		res.end();
	},
	currentUser: async (req, res) => {
		console.log(req);
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
					const newToken = jwt.sign({}, key, {
						subject: currentUser._id.toString(),
						expiresIn: 3600 * 24 * 30 * 6,
						algorithm: 'RS256',
					});
					res.cookie('token', newToken, { HttpOnly: true });
					res.status(200).json(currentUser);
				} else res.status(400).json(null);
			} catch (error) {
				console.log(error);
				res.status(400).json(null);
			}
		} else res.status(400).json(null);
	},
};

// router.get("/current", async (req, res) => {
//     const token = req.cookies.token;
//     console.log(token);
//     try {
//       const decodedToken = jsonwebtoken.verify(token, keyPub);
//       if (decodedToken) {
//         user = await UserModel.findById(decodedToken.sub)
//           .select("name email ")
//           .exec();
//         if (user) res.json(user);
//         else res.status(400).json(null);
//       } else res.status(400).json(null);
//     } catch (error) {
//       console.log(error);
//       res.status(400).json(null);
//     }
//   });
