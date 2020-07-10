const request = require('supertest')
const { app } = require('../../src/core')

describe('Info Status Endpoints', () => {
    it('should get app status', async () => {
        const res = await request(app).get('/info/status').send()
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('app')
        expect(res.body).toHaveProperty('version')
    })
})
