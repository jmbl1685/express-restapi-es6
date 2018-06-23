'use strict'

const dataresponse = {
  success: 'OK',
  error: 'ERROR',
  warning: 'WARNING',
  dataAll: 'DATA ALL'
}

const server = {
  port: process.env.PORT || 3000,
  message: `Server running`
}

export default {
  dataresponse,
  server
}
