const express = require('express');
const router = express.Router();
const gameStats = require('../controllers/gameStats');
const { checkAuth } = require('../middlewares/auth');
const { permission } = require('../middlewares/permission');
//Les routes
router.get('/:userid', checkAuth, permission, gameStats.getStatsByUser); //get les stats des games par utilisateur
router.post('/:userid', checkAuth, permission, gameStats.setStatsByUser); //set les stats d'un game par cet utilisateur

module.exports = router;
