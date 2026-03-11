// const db = require("../db/connection.js");
// const seed = require("../db/seeds/seed");
// const data = require("../db/data/test-data");
// const request = require("supertest");

describe("/api/episodes/:episode_id/comments", () => {
  describe("GET", () => {
    test("gets all comments for a particular episode of a tv-show, when get is successful responds with status 200", () => {});

    test("gets all comments for a particular episode of a tv-show in ascending order of runtime seconds", () => {});
    test("filters comments to a 180-second window around the viewer's current position when ?t=x is provided", () => {});
    test("if there are no comments within the 180 second time frame returns empty array and status 200", () => {});
  });
});
