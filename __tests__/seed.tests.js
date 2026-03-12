const db = require("../db/connection");
const seed = require("../db/seed/seed"); // ---> we are invoking our seeding based on whether jest (jest automatically searches through files with .test) is running so we can be sure this is for test environment, we use nmp test to run this
const data = require("../db/data/test/index"); // ---> we are importing our test data now to be tested

beforeAll(() => seed(data)); //before all tests reseed the test database with data
afterAll(() => db.end()); // after all close the db connectionS

describe("seed", () => {
  describe("profiles table", () => {
    test("profiles table exists", async () => {
      const query = await db.query(
        `SELECT EXISTS (
            SELECT FROM 
                information_schema.tables 
            WHERE 
                table_name = 'profiles'
            );`,
      );

      const { rows } = query;
      const [{ exists }] = rows;

      expect(exists).toBe(true);
    });
    test("profiles table has user_id column as UUID", async () => {
      const query = await db.query(
        `SELECT *
     FROM information_schema.columns
     WHERE table_name = 'profiles'
AND column_name = 'user_id';`,
      );

      const { rows } = query;

      const [column] = rows;

      expect(column.column_name).toBe("user_id");
      expect(column.data_type).toBe("uuid");
    });
  });

  describe("tv_shows table exists", () => {
    test("tv_shows table exists", async () => {
      const query = await db.query(
        `SELECT EXISTS (
            SELECT FROM 
                information_schema.tables 
            WHERE 
                table_name = 'tv_shows'
            );`,
      );

      const { rows } = query;
      const [{ exists }] = rows;

      expect(exists).toBe(true);
    });
    test("tv_shows table has tv_show_id column as INT", async () => {
      const query = await db.query(
        `SELECT *
     FROM information_schema.columns
     WHERE table_name = 'tv_shows'
AND column_name = 'tv_show_id';`,
      );

      const { rows } = query;

      const [column] = rows;

      expect(column.column_name).toBe("tv_show_id");
      expect(column.data_type).toBe("integer");
    });
  });

  describe("seasons table exists", () => {
    test("seasons table exists", async () => {
      const query = await db.query(
        `SELECT EXISTS (
            SELECT FROM 
                information_schema.tables 
            WHERE 
                table_name = 'seasons'
            );`,
      );

      const { rows } = query;
      const [{ exists }] = rows;

      expect(exists).toBe(true);
    });
    test("seasons table has season_id column as INT", async () => {
      const query = await db.query(
        `SELECT *
     FROM information_schema.columns
     WHERE table_name = 'seasons'
AND column_name = 'season_id';`,
      );

      const { rows } = query;

      const [column] = rows;

      expect(column.column_name).toBe("season_id");
      expect(column.data_type).toBe("integer");
    });
  });

  describe("episodes table exists", () => {
    test("episodes table exists", async () => {
      const query = await db.query(
        `SELECT EXISTS (
            SELECT FROM 
                information_schema.tables 
            WHERE 
                table_name = 'episodes'
            );`,
      );

      const { rows } = query;
      const [{ exists }] = rows;

      expect(exists).toBe(true);
    });
    test("episodes table has episode_id column as INT", async () => {
      const query = await db.query(
        `SELECT *
     FROM information_schema.columns
     WHERE table_name = 'episodes'
AND column_name = 'episode_id';`,
      );

      const { rows } = query;

      const [column] = rows;

      expect(column.column_name).toBe("episode_id");
      expect(column.data_type).toBe("integer");
    });
  });

  describe("comments table exists", () => {
    test("comments table exists", async () => {
      const query = await db.query(
        `SELECT EXISTS (
            SELECT FROM 
                information_schema.tables 
            WHERE 
                table_name = 'comments'
            );`,
      );

      const { rows } = query;
      const [{ exists }] = rows;

      expect(exists).toBe(true);
    });
    test("comments table has comment_id column as SERIAL", async () => {
      const query = await db.query(
        `SELECT *
     FROM information_schema.columns
     WHERE table_name = 'comments'
AND column_name = 'comment_id';`,
      );

      const { rows } = query;

      const [column] = rows;

      expect(column.column_name).toBe("comment_id");
      expect(column.data_type).toBe("integer");
    });
  });

  describe("replies table exists", () => {
    test("replies table exists", async () => {
      const query = await db.query(
        `SELECT EXISTS (
            SELECT FROM 
                information_schema.tables 
            WHERE 
                table_name = 'replies'
            );`,
      );

      const { rows } = query;
      const [{ exists }] = rows;

      expect(exists).toBe(true);
    });
    test("replies table has reply_id column as SERIAL", async () => {
      const query = await db.query(
        `SELECT *
     FROM information_schema.columns
     WHERE table_name = 'replies'
AND column_name = 'reply_id';`,
      );

      const { rows } = query;

      const [column] = rows;

      expect(column.column_name).toBe("reply_id");
      expect(column.data_type).toBe("integer");
    });
  });

  describe("reactions table exists", () => {
    test("reactions table exists", async () => {
      const query = await db.query(
        `SELECT EXISTS (
            SELECT FROM 
                information_schema.tables 
            WHERE 
                table_name = 'reactions'
            );`,
      );

      const { rows } = query;
      const [{ exists }] = rows;

      expect(exists).toBe(true);
    });
    test("reactions table has reaction_id column as SERIAL", async () => {
      const query = await db.query(
        `SELECT *
     FROM information_schema.columns
     WHERE table_name = 'reactions'
AND column_name = 'reaction_id';`,
      );

      const { rows } = query;

      const [column] = rows;

      expect(column.column_name).toBe("reaction_id");
      expect(column.data_type).toBe("integer");
    });
  });

  describe("friends table exists", () => {
    test("friends table exists", async () => {
      const query = await db.query(
        `SELECT EXISTS (
            SELECT FROM 
                information_schema.tables 
            WHERE 
                table_name = 'friends'
            );`,
      );

      const { rows } = query;
      const [{ exists }] = rows;

      expect(exists).toBe(true);
    });
    test("friends table has friends_id column as SERIAL", async () => {
      const query = await db.query(
        `SELECT *
     FROM information_schema.columns
     WHERE table_name = 'friends'
AND column_name = 'friends_id';`,
      );

      const { rows } = query;

      const [column] = rows;

      expect(column.column_name).toBe("friends_id");
      expect(column.data_type).toBe("integer");
    });
  });

  describe("subscriptions table exists", () => {
    test("subscriptions table exists", async () => {
      const query = await db.query(
        `SELECT EXISTS (
            SELECT FROM 
                information_schema.tables 
            WHERE 
                table_name = 'subscriptions'
            );`,
      );

      const { rows } = query;
      const [{ exists }] = rows;

      expect(exists).toBe(true);
    });
    test("subscriptions table has subscription_id column as SERIAL", async () => {
      const query = await db.query(
        `SELECT *
     FROM information_schema.columns
     WHERE table_name = 'subscriptions'
AND column_name = 'subscription_id';`,
      );

      const { rows } = query;

      const [column] = rows;

      expect(column.column_name).toBe("subscription_id");
      expect(column.data_type).toBe("integer");
    });
  });

  describe("polls table", () => {
    test("polls table exists", async () => {
      const query = await db.query(
        `SELECT EXISTS (
            SELECT FROM 
                information_schema.tables 
            WHERE 
                table_name = 'polls'
            );`,
      );

      const { rows } = query;
      const [{ exists }] = rows;

      expect(exists).toBe(true);
    });
    test("polls table has poll_id column as SERIAL", async () => {
      const query = await db.query(
        `SELECT *
     FROM information_schema.columns
     WHERE table_name = 'polls'
AND column_name = 'poll_id';`,
      );

      const { rows } = query;

      const [column] = rows;

      expect(column.column_name).toBe("poll_id");
      expect(column.data_type).toBe("integer");
    });
  });

  describe("poll_votes table exists", () => {
    test("poll_votes table exists", async () => {
      const query = await db.query(
        `SELECT EXISTS (
            SELECT FROM 
                information_schema.tables 
            WHERE 
                table_name = 'poll_votes'
            );`,
      );

      const { rows } = query;
      const [{ exists }] = rows;

      expect(exists).toBe(true);
    });
    test("poll_votes table has poll_vote_id column as SERIAL", async () => {
      const query = await db.query(
        `SELECT *
     FROM information_schema.columns
     WHERE table_name = 'poll_votes'
AND column_name = 'poll_vote_id';`,
      );

      const { rows } = query;

      const [column] = rows;

      expect(column.column_name).toBe("poll_vote_id");
      expect(column.data_type).toBe("integer");
    });
  });

  describe("notifications table exists", () => {
    test("notifications table exists", async () => {
      const query = await db.query(
        `SELECT EXISTS (
            SELECT FROM 
                information_schema.tables 
            WHERE 
                table_name = 'notifications'
            );`,
      );

      const { rows } = query;
      const [{ exists }] = rows;

      expect(exists).toBe(true);
    });
    test("notifications table has notification_id column as SERIAL", async () => {
      const query = await db.query(
        `SELECT *
     FROM information_schema.columns
     WHERE table_name = 'notifications'
AND column_name = 'notification_id';`,
      );

      const { rows } = query;

      const [column] = rows;

      expect(column.column_name).toBe("notification_id");
      expect(column.data_type).toBe("integer");
    });
  });
});
