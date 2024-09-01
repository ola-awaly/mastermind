const permission = (req, res, next) => {
	if (req.currentUser._id != req.params.userid)
		res.status(403).json({ message: 'Permission denied' });
	else next();
};
module.exports = { permission };
