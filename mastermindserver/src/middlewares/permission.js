const permission = (req, res, next) => {
	console.warn({ current_user: req.currentUser, params: req.params.userid });

	if (req.currentUser._id != req.params.userid)
		res.status(403).json({ message: 'Permission denied' });
	else next();
};
module.exports = { permission };
