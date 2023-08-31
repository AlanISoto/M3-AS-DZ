const request = require("supertest");
const app = require("../server");

describe("Api endpoints", () => {
  it('should return "Hello World!" for GET /api/test', async () => {
    const response = await request(app).get("/api/test");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello World!");
  });

  it('should return "Dan is sick nasty with it." for GET /api/test2', async () => {
    const response = await request(app).get("/api/test2");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Dan is sick nasty with it.");
  });
});
