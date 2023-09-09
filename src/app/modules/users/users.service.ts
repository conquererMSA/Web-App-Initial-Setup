import configEnv from '../../../configEnv'
import { IUser } from './users.interface'
import { User } from './users.model'
import generateUserId from './users.utils'

const createUserService = async (user: IUser): Promise<IUser | null> => {
  const lastId = await generateUserId()
  user.id = lastId
  if (!user.password) {
    user.password = configEnv.password as string
  }
  //create user to db
  const createdUser = await User.create(user)
  if (!createdUser) {
    throw new Error('Failed to create new user')
  }
  return createdUser
}
export default {
  createUserService,
}
