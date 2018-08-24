'use strict'

import chai from 'chai'
import server from '../app'
import chaiHttp from 'chai-http'
const expect = chai.expect

chai.use(chaiHttp)

describe('ValueController Test', () => {

  const body = { id: 'A12345', value: 'Juan Batty' }

  // it('POST api/value', (done) => {

  //   chai.request(server)
  //     .post('/api/value')
  //     .send(body)
  //     .end((err, res) => {
  //       if (err) done(err)
  //       expect(res).to.have.status(200)
  //       done()
  //     })
  // })

  it('GET api/value', (done) => {

    chai.request(server)
      .get('/api/value')
      .end((err, res) => {
        if (err) done(err)
        expect(res).to.have.status(200)
        expect(res.body).to.property('GET')
        done()
      })

  })

  it('GET api/value/:id', (done) => {

    const id = '12345'
    chai.request(server)
      .get(`/api/value/${id}`)
      .end((err, res) => {
        if (err) done(err)
        expect(res).to.have.status(200)
        expect(res.body).to.property('GET')
        done()
      })

  })

  it('PUT api/value', (done) => {

    const id = '12345'
    chai.request(server)
      .put(`/api/value/${id}`)
      .send(body)
      .end((err, res) => {
        if (err) done(err)
        expect(res).to.have.status(200)
        expect(res.body).to.property('PUT')
        done()
      })

  })

  it('DELETE api/value', (done) => {

    const id = '12345'
    chai.request(server)
      .delete(`/api/value/${id}`)
      .end((err, res) => {
        if (err) done(err)
        expect(res).to.have.status(200)
        expect(res.body).to.property('DELETE')
        done()
      })

  })

})