const request = require('supertest')
const app = require('./server') // Adjust the path based on your folder structure
// const expect = require('expect.js') // Import the expect.js library

describe('Static responses are working', () => {
  it('should return hello world on test', async () => {
    const response = await request(app).get('/api/test')
    expect(response.status).toEqual(200)
    expect(response.text).toEqual('Hello World!')
  })
})
