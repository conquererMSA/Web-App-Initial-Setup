import express, { Application, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()
app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.get('/', async (req: Request, res: Response) => {
    res.json({ status: 5000, message: 'App on home route' })
})
export default app