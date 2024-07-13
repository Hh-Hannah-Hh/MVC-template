const app = require("../app");
const request = require("supertest");
const db = require("../database/connection");
const seed = require("../database/seed");
const data = require("../db/data/test-data");

beforeAll(() => {
  return seed(data);
});
afterAll(() => {
  return db.end();
});
