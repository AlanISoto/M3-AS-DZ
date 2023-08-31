const request = require("supertest");
const app = require("../server");

describe("Api endpoints", () => {
  let server;
  const testPort = 5001; // Choose a different port for the test server

  beforeAll((done) => {
    server = app.listen(testPort, () => {
      console.log("Test server is running");
      done();
    });
  });

  afterAll((done) => {
    // Close both the test server and the main server after all tests are done
    server.close(() => {
      done();
    });
  });

  it('Should return "Hello World!" for GET /api/test', async () => {
    const response = await request(app).get("/api/test");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello World!");
  });

  it('Should return "Dan is sick nasty with it." for GET /api/test2', async () => {
    const response = await request(app).get("/api/test2");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Dan is sick nasty with it.");
  });
});
