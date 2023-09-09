import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import userRouter from './app/modules/users/users.routes'

const app: Application = express()
app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application Routes
app.use('/api/v1/users', userRouter)

app.get('/api/v1', async (req: Request, res: Response) => {
  res.json({ status: 200, message: 'App on home route' })
})
export default app
