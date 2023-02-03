const userRouter = require('express').Router()

const userController = require('../controllers/user.controller')

userRouter.get('/users', userController.getUsers)

userRouter.post('/users', userController.postUser)

module.exports = userRouter
