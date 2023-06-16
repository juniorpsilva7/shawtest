import express from 'express'
import { router } from './routes'

const app = express()

// indicate to express read a body with json
app.use(express.json())

// use router
app.use(router)

export { app }
