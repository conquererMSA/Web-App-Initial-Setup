import { Request, Response } from 'express'
import userService from './users.service'

// controller controll the request and response system
const createUserController = async (req: Request, res: Response) => {
  const { user } = req.body
  try {
    const result = await userService.createUserService(user)
    res
      .status(200)
      .json({ success: true, message: 'created user', data: result })
  } catch (error) {
    res.status(400).json({ success: false, error: 'could not create user' })
  }
}

export default { createUserController }
