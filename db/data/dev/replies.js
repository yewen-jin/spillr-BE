const replies = [
  {
    comment_id: 1,
    user_id: "b2c3d4e5-f6a7-8901-bcde-f12345678901", // bingewatcher
    body: "Right?? The Reg Cox callback was what got me — they really came full circle",
    episode_id: 562187,
    runtime_seconds: 420,
    created_at: "2024-03-01T20:08:00.000Z",
  },
  {
    comment_id: 1,
    user_id: "c3d4e5f6-a7b8-9012-cdef-123456789012", // soapaddict
    body: "I was watching with my mum and she actually screamed at that part",
    episode_id: 562187,
    runtime_seconds: 420,
    created_at: "2024-03-01T20:09:00.000Z",
  },
  {
    comment_id: 2,
    user_id: "d4e5f6a7-b8c9-0123-defa-234567890123", // tellytea
    body: "Dirty Den is literally the blueprint for every soap resurrection since",
    episode_id: 562187,
    runtime_seconds: 900,
    created_at: "2024-03-01T20:16:00.000Z",
  },
  {
    comment_id: 3,
    user_id: "e5f6a7b8-c9d0-1234-efab-345678901234", // eastendersforever
    body: "The Vicky storyline dragged on for years though tbf",
    episode_id: 562187,
    runtime_seconds: 1320,
    created_at: "2024-03-01T20:23:00.000Z",
  },
  {
    comment_id: 3,
    user_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890", // screenqueen
    body: "Fair point but the payoff was worth it",
    episode_id: 562187,
    runtime_seconds: 1320,
    created_at: "2024-03-01T20:24:00.000Z",
  },
  {
    comment_id: 8,
    user_id: "d4e5f6a7-b8c9-0123-defa-234567890123", // tellytea
    body: "Agreed — there's never been a villain quite like him since",
    episode_id: 562188,
    runtime_seconds: 360,
    created_at: "2024-03-08T20:07:00.000Z",
  },
  {
    comment_id: 9,
    user_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890", // screenqueen
    body: "They actually filmed that scene three times because they kept getting emotional",
    episode_id: 562188,
    runtime_seconds: 720,
    created_at: "2024-03-08T20:13:00.000Z",
  },
  {
    comment_id: 10,
    user_id: "b2c3d4e5-f6a7-8901-bcde-f12345678901", // bingewatcher
    body: "Julia Smith directing that scene was next level — RIP to a legend",
    episode_id: 562188,
    runtime_seconds: 1080,
    created_at: "2024-03-08T20:19:00.000Z",
  },
  {
    comment_id: 11,
    user_id: "c3d4e5f6-a7b8-9012-cdef-123456789012", // soapaddict
    body: "STOP I was not ready to be reminded of the lighter moment tonight",
    episode_id: 562188,
    runtime_seconds: 1560,
    created_at: "2024-03-08T20:27:00.000Z",
  },
  {
    comment_id: 11,
    user_id: "e5f6a7b8-c9d0-1234-efab-345678901234", // eastendersforever
    body: "Same honestly had to step away from the screen",
    episode_id: 562188,
    runtime_seconds: 1560,
    created_at: "2024-03-08T20:28:00.000Z",
  },
  {
    comment_id: 14,
    user_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890", // screenqueen
    body: "Completely underrated. He should have won a BAFTA for this",
    episode_id: 562189,
    runtime_seconds: 480,
    created_at: "2024-03-15T20:09:00.000Z",
  },
  {
    comment_id: 15,
    user_id: "b2c3d4e5-f6a7-8901-bcde-f12345678901", // bingewatcher
    body: "The preaching scene while Denise had no idea… genuinely disturbing television",
    episode_id: 562189,
    runtime_seconds: 960,
    created_at: "2024-03-15T20:17:00.000Z",
  },
  {
    comment_id: 16,
    user_id: "c3d4e5f6-a7b8-9012-cdef-123456789012", // soapaddict
    body: "Denise always gets dealt the worst hand and just keeps going. Icon.",
    episode_id: 562189,
    runtime_seconds: 1440,
    created_at: "2024-03-15T20:25:00.000Z",
  },
  {
    comment_id: 17,
    user_id: "d4e5f6a7-b8c9-0123-defa-234567890123", // tellytea
    body: "He said in an interview he based Lucas on real case studies. The commitment.",
    episode_id: 562189,
    runtime_seconds: 1920,
    created_at: "2024-03-15T20:33:00.000Z",
  },
  {
    comment_id: 19,
    user_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890", // screenqueen
    body: "It really was — nothing else on British TV was telling this story like this at the time",
    episode_id: 562190,
    runtime_seconds: 540,
    created_at: "2024-03-22T20:10:00.000Z",
  },
  {
    comment_id: 20,
    user_id: "b2c3d4e5-f6a7-8901-bcde-f12345678901", // bingewatcher
    body: "The Masood writing in this era genuinely made me care about every single family member",
    episode_id: 562190,
    runtime_seconds: 1080,
    created_at: "2024-03-22T20:19:00.000Z",
  },
  {
    comment_id: 21,
    user_id: "c3d4e5f6-a7b8-9012-cdef-123456789012", // soapaddict
    body: "The way the show just quietly dropped their storyline still makes me angry",
    episode_id: 562190,
    runtime_seconds: 1800,
    created_at: "2024-03-22T20:31:00.000Z",
  },
  {
    comment_id: 21,
    user_id: "d4e5f6a7-b8c9-0123-defa-234567890123", // tellytea
    body: "They deserved a proper send off and the writers just… didn't",
    episode_id: 562190,
    runtime_seconds: 1800,
    created_at: "2024-03-22T20:32:00.000Z",
  },
  {
    comment_id: 22,
    user_id: "e5f6a7b8-c9d0-1234-efab-345678901234", // eastendersforever
    body: "Nitin Ganatra was so good in that scene. The shame and the love all at once.",
    episode_id: 562190,
    runtime_seconds: 2520,
    created_at: "2024-03-22T20:43:00.000Z",
  },
];

module.exports = replies;
