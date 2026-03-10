const db = require("../db/connection");
const seed = require("../db/seeds/seed"); // ---> we are invoking our seeding based on whether jest (jest automatically searches through files with .test) is running so we can be sure this is for test environment, we use nmp test to run this
const data = require("../db/data/test-data/index"); // ---> we are importing our test data now to be tested

beforeAll(() => seed(data)); //before all tests reseed the test database with data
afterAll(() => db.end()); // after all close the db connectionS

describe("seed", () => {
  test("users table", () => {});
});
