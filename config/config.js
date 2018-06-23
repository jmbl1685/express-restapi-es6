'use strict'

export default {
  message: {
    success: 'OK',
    error: 'ERROR',
    warning: 'WARNING',
    dataAll: 'DATA ALL'
  },
  server: {
    port: process.env.PORT || 3000,
    message: `Server running in the port `
  }
}
