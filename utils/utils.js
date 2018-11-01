'use strict'

const GenerateID = () => `_${Math.random().toString(36).substr(2, 9)}`

export default {
  GenerateID
}