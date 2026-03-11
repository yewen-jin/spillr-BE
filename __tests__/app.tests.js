const db = require("../db/connection.js");
const seed = require("../db/seed/seed");
const data = require("../db/data/test/index");
const request = require("supertest");
const app = require("../src/app.js");

beforeAll(() => seed(data)); //before all tests reseed the test database with data
afterAll(() => db.end()); // after all close the db connections

describe("/api/episodes/:episode_id/comments", () => {
  describe("GET", () => {
    test("gets all comments for a particular episode of a tv-show, when get is successful responds with status 200", async () => {
      const result = await request(app)
        .get("/api/episodes/3129601/comments")
        .expect(200);
      const { body } = result;
      const { comments } = body;
      expect(Array.isArray(comments)).toBe(true);
      comments.forEach((comment) => {
        expect(typeof comment.user_id).toBe("string");
        expect(typeof comment.body).toBe("string");
        expect(typeof comment.episode_id).toBe("number");
        expect(typeof comment.runtime_seconds).toBe("number");
        expect(typeof comment.created_at).toBe("string");
        expect(typeof comment.is_spoiler).toBe("boolean");
        expect(typeof comment.is_live).toBe("boolean");
      });
    });
    test("gets all comments for a particular episode of a tv-show in ascending order of runtime seconds", async () => {
      const result = await request(app)
        .get("/api/episodes/3129601/comments")
        .expect(200);
      const { body } = result;
      const { comments } = body;
      expect(Array.isArray(comments)).toBe(true);
      expect(comments).toBeSortedBy("runtime_seconds", { descending: false });
    });
    test("filters comments to a 180-second window around the viewer's current position when ?t=x is provided", () => {});
    test("if there are no comments within the 180 second time frame returns empty array and status 200", () => {});
    test("comment object contains a key of reactions_total - the total amount of any kind of reaction left on that particular comment", () => {});
    test("comment object contains a keys of reactions_x - the total amount of a particular type of reaction left on that particular comment", () => {});
  });
});

describe("/api/comments/:comment_id/replies", () => {
  describe("GET", () => {
    test("gets all replies for a particular comment, when get is successful responds with status 200", () => {});
    test("gets all replies for a particular comment in descending order of created_at", () => {});
    test("reply object contains a key of reactions_total - the total amount of any kind of reaction left on that particular reply", () => {});
    test("reply object contains a keys of reactions_x - the total amount of a particular type of reaction left on that particular reply", () => {});
  });
});
