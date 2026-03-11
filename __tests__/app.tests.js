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
        .get("/api/episodes/3129600/comments")
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
        .get("/api/episodes/3129600/comments")
        .expect(200);
      const { body } = result;
      const { comments } = body;
      expect(Array.isArray(comments)).toBe(true);
      expect(comments).toBeSortedBy("runtime_seconds", { descending: false });
    });
    test("FILTERS comments to a 180-second window around the viewer's current position when ?t=x is provided", async () => {
      const result = await request(app)
        .get("/api/episodes/3129600/comments?t=500")
        .expect(200);

      //this is a comment you should see in the array
      const testDataObj = {
        user_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
        body: "The way they just casually dropped that Phil was shot… I gasped",
        episode_id: 3129600,
        runtime_seconds: 420,
        created_at: "2024-03-01T20:07:00.000Z",
        is_live: true,
        is_spoiler: false,
      };

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
    test("if there are no comments within the 180 second time frame returns empty array and status 200", async () => {
      const result = await request(app)
        .get("/api/episodes/3129600/comments?t=0")
        .expect(200);

      const { body } = result;
      const { comments } = body;
      expect(Array.isArray(comments)).toBe(true);
      expect(comments).toEqual([]);
    });
    test("a comment object contains a key of reactions_total - the total amount of any kind of reaction left on that particular comment", async () => {
      const result = await request(app)
        .get("/api/episodes/3129600/comments?t=1060")
        .expect(200);

      //this is a comment you should see in the array
      const testDataObj = {
        user_id: "b2c3d4e5-f6a7-8901-bcde-f12345678901",
        body: "Dirty Den coming back from the dead is still the most unhinged thing this show has ever done",
        episode_id: 3129600,
        runtime_seconds: 900,
        created_at: "2024-03-01T20:15:00.000Z",
        is_live: true,
        is_spoiler: false,
      };

      const { body } = result;

      const { comments } = body;
      expect(Array.isArray(comments)).toBe(true);

      comments.forEach((comment) => {
        expect(typeof comment.reactions_total).toBe("number");
      });
    });
    test("comment object contains a key of reactionsTotal_type - the total amount of a particular type of reaction left on that particular comment", async () => {
      const result = await request(app)
        .get("/api/episodes/3129600/comments?t=1060")
        .expect(200);

      //this is a comment you should see in the array
      const testDataObj = {
        user_id: "b2c3d4e5-f6a7-8901-bcde-f12345678901",
        body: "Dirty Den coming back from the dead is still the most unhinged thing this show has ever done",
        episode_id: 3129600,
        runtime_seconds: 900,
        created_at: "2024-03-01T20:15:00.000Z",
        is_live: true,
        is_spoiler: false,
      };
      //example reactionsTotal_type key on a given comment object
      //structure should be the COUNT of that reaction type on a key called *reaction_type* concatenated with the word Total
      const commentobject = {
        reactionsTotal_type: {
          angryTotal: 70,
          laughingTotal: 6,
          cryingTotal: 10,
          fireTotal: 7,
          deadTotal: 9,
          heartTotal: 20,
        },
      };

      const { body } = result;

      const { comments } = body;
      expect(Array.isArray(comments)).toBe(true);

      comments.forEach((comment) => {
        expect(typeof comment.reactionsTotal_type).toBe("object");
      });
    });
  });
});

describe("/api/comments/:comment_id/replies", () => {
  describe("GET", () => {
    test("gets all replies for a particular comment, when get is successful responds with status 200", async () => {
      const result = await request(app)
        .get("/api/comments/2/replies")
        .expect(200);
      const { body } = result;
      const { replies } = body;
      expect(Array.isArray(replies)).toBe(true);
      replies.forEach((reply) => {
        expect(typeof reply.user_id).toBe("string");
        expect(typeof reply.body).toBe("string");
        expect(typeof reply.comment_id).toBe("number");
        expect(typeof reply.runtime_seconds).toBe("number");
        expect(typeof reply.created_at).toBe("string");
      });
    });
    test("gets all replies for a particular comment in descending order of created_at", async () => {
      const result = await request(app)
        .get("/api/comments/2/replies")
        .expect(200);
      const { body } = result;
      const { replies } = body;
      expect(Array.isArray(replies)).toBe(true);
      expect(replies).toBeSortedBy("created_at", { descending: true });
    });
    test("reply object contains a key of reactions_total - the total amount of any kind of reaction left on that particular reply", async () => {
      const result = await request(app)
        .get("/api/comments/2/replies")
        .expect(200);
      const { body } = result;
      const { replies } = body;
      expect(Array.isArray(replies)).toBe(true);
      replies.forEach((reply) => {
        expect(typeof reply.reactions_total).toBe("number");
      });
    });
    test("reply object contains a key of reactionsTotal_type - the total amount of a particular type of reaction left on that particular comment", async () => {
      const result = await request(app)
        .get("/api/comments/2/replies")
        .expect(200);
      const { body } = result;
      const { replies } = body;
      expect(Array.isArray(replies)).toBe(true);
      replies.forEach((reply) => {
        expect(typeof reply.reactionsTotal_type).toBe("object");
      });
    });
  });
});
