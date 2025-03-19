const request = require('supertest');
const { app, server } = require('../index');  // Import app and server

describe('GET /', () => {
  it('should return Hello, Azure DevOps!', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hello, Azure DevOps!');
  });

  afterAll((done) => {
    server.close(done);  // Close the server after tests are done
  });
});
