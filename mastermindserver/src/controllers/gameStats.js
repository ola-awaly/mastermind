const gameStatsModel = require('../models/gameStats');

module.exports = {
	getStatsByUser: async (req, res) => {
		const userid = req.params.userid;
		const user = await gameStatsModel.findOne({ userid: userid });
		if (user) res.status(200).json(user);
		else res.status(200).json(null);
	},
	setStatsByUser: async (req, res) => {
		const userid = req.params.userid;
		const { name, tentatives } = req.body;

		//Recherche les stats pour ce game / utilisateur
		try {
			const statExistant = await gameStatsModel.findOne({
				name: name,
				userid: userid,
			});
			let newStat = null;
			// Si les stats existe pour ce jeu, mettre à jour si tentatives est plus grand que l'existant

			if (statExistant) {
				if (statExistant.tentatives < tentatives) {
					newStat = await gameStatsModel.findOneAndUpdate(
						{ name: name, userid: userid }, // Condition de recherche
						{
							played: new Date(),
							$max: { tentatives: tentatives },
						},
						{
							new: true, // Retourne le document mis à jour
							upsert: false, // N'insère pas un nouveau document s'il n'existe pas
						}
					);
					console.log({ updating: newStat });
					res.status(201).json(newStat);
				} else res.status(201).json(statExistant);
			} else {
				newStat = await gameStatsModel.insertMany(
					{
						tentatives: tentatives,
						played: new Date(),
						userid: userid,
						name: name,
					},
					{ new: true }
				);
				console.log({ inserting: newStat });
				res.status(201).json(newStat);
			}
		} catch (error) {
			console.log(error);
			res.status(400).json('error');
		}
	},
};
