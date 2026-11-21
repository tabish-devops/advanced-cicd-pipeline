const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const request = require("supertest");
const app = require("../app");

describe("DevOps Employee Portal", () => {

  it("Home route should return 200", async () => {
    const response = await request(app).get("/");
    assert.equal(response.statusCode, 200);
    assert.equal(response.body.status, "Running");
  });

  it("Health check should return Healthy", async () => {
    const response = await request(app).get("/health");
    assert.equal(response.statusCode, 200);
    assert.equal(response.body.status, "Healthy");
  });

  it("API information should be available", async () => {
    const response = await request(app).get("/api/info");
    assert.equal(response.statusCode, 200);
    assert.equal(response.body.technology, "Node.js + Express");
  });

});