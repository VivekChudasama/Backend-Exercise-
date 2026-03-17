const express = require('express');
const router = express.Router();
const controller = require('../controllers/user')

router.get('/users1' , controller.users1)

router.get('/users/:id' , controller.getUserById)

router.post('/users' , controller.getAllUsers)

router.delete('/users/:id' , controller.deleteUserById)


module.exports = router