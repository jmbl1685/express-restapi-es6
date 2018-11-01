'use strict'

import utils from '../utils/utils'

export default class Value {

  constructor(value) {

    let _id = utils.GenerateID()
    let _value = value

    this.GetID = () => _id
    this.SetValue = value => _value = value
    this.GetValue = () => _value

    this.GetJSON = () => {
      return {
        id: this.GetID(),
        value: this.GetValue(),
      }
    }

  }

}