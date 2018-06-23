'use strict'

import app from './app'
import config from './config/config'
import winston from './config/log'

const port = config.server.port

app.listen(port, () =>
    winston.info('Server', `${config.server.message}${port}`))
