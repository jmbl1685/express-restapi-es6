'use strict'

import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(morgan('dev'))
app.use(helmet())

require('./routes/value.routes').default(app)

export default app

