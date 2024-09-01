const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

//Les routes
router.get('/', usersController.getAll); // get tous les ♻
router.post('/', usersController.post);
router.post('/login', usersController.login);
router.get('/current', usersController.currentUser);
router.delete('/logout', usersController.logout);

module.exports = router;
