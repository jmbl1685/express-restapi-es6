'use strict'

import winston from 'winston'
import fs from 'fs'

const path = 'logs'

const logFile = `Log_${new Date().toLocaleDateString()}.log`

if (!fs.existsSync(path))
  fs.mkdirSync(path)

if (!fs.existsSync(`${path}/${logFile}`)) {
  fs.appendFile(path + '/' + logFile, (err, res) => {
  })
}

const tsFormat = () => (new Date()).toLocaleTimeString()

const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      handleExceptions: true,
      json: false,
      timestamp: tsFormat,
      colorize: true,
      level: 'info'
    }),
    new (winston.transports.File)({
      handleExceptions: true,
      json: true,
      maxsize: 5242880,
      colorize: false,
      filename: `${path}/${logFile}`,
      timestamp: tsFormat,
      level: 'info'
    })
  ]
})

const parseMessage = (message) => {
  return (message === undefined | null) ? "{}" : message
}

exports.debug = (method, uuid, message) => {
  logger.debug(`${uuid} - ${method} - ${parseMessage(message)}`)
}

exports.verbose = (method, uuid, message) => {
  logger.verbose(`${uuid} - ${method} - ${parseMessage(message)}`)
}

exports.info = (method, uuid, message) => {
  logger.info(`${uuid} - ${method} - ${parseMessage(message)}`)
}

exports.warn = (method, uuid, message) => {
  logger.warn(`${uuid} - ${method} - ${parseMessage(message)}`)
}

exports.error = (method, uuid, message) => {
  logger.error(`${uuid} - ${method} - ${parseMessage(message)}`)
}
