import express from 'express'
import usersController from './users.controller'
const userRouter = express.Router()

userRouter.post('/create-user', usersController.createUserController)

export default userRouter
