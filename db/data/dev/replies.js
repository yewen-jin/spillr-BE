const replies = [
  {
    comment_id: 1,
    user_id: "b2c3d4e5-f6a7-8901-bcde-f12345678901", // bingewatcher
    body: "Right?? The Reg Cox callback was what got me — they really came full circle",
    episode_id: 3129600,
    runtime_seconds: 420,
    created_at: "2024-03-01T20:08:00.000Z",
  },
  {
    comment_id: 1,
    user_id: "c3d4e5f6-a7b8-9012-cdef-123456789012", // soapaddict
    body: "I was watching with my mum and she actually screamed at that part",
    episode_id: 3129600,
    runtime_seconds: 420,
    created_at: "2024-03-01T20:09:00.000Z",
  },
  {
    comment_id: 2,
    user_id: "d4e5f6a7-b8c9-0123-defa-234567890123", // tellytea
    body: "Dirty Den is literally the blueprint for every soap resurrection since",
    episode_id: 3129600,
    runtime_seconds: 900,
    created_at: "2024-03-01T20:16:00.000Z",
  },
  {
    comment_id: 3,
    user_id: "e5f6a7b8-c9d0-1234-efab-345678901234", // eastendersforever
    body: "The Vicky storyline dragged on for years though tbf",
    episode_id: 3129600,
    runtime_seconds: 1320,
    created_at: "2024-03-01T20:23:00.000Z",
  },
  {
    comment_id: 3,
    user_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890", // screenqueen
    body: "Fair point but the payoff was worth it",
    episode_id: 3129600,
    runtime_seconds: 1320,
    created_at: "2024-03-01T20:24:00.000Z",
  },
  {
    comment_id: 8,
    user_id: "d4e5f6a7-b8c9-0123-defa-234567890123", // tellytea
    body: "Agreed — there's never been a villain quite like him since",
    episode_id: 3129601,
    runtime_seconds: 360,
    created_at: "2024-03-08T20:07:00.000Z",
  },
  {
    comment_id: 9,
    user_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890", // screenqueen
    body: "They actually filmed that scene three times because they kept getting emotional",
    episode_id: 3129601,
    runtime_seconds: 720,
    created_at: "2024-03-08T20:13:00.000Z",
  },
  {
    comment_id: 10,
    user_id: "b2c3d4e5-f6a7-8901-bcde-f12345678901", // bingewatcher
    body: "Julia Smith directing that scene was next level — RIP to a legend",
    episode_id: 3129601,
    runtime_seconds: 1080,
    created_at: "2024-03-08T20:19:00.000Z",
  },
  {
    comment_id: 11,
    user_id: "c3d4e5f6-a7b8-9012-cdef-123456789012", // soapaddict
    body: "STOP I was not ready to be reminded of the lighter moment tonight",
    episode_id: 3129601,
    runtime_seconds: 1560,
    created_at: "2024-03-08T20:27:00.000Z",
  },
  {
    comment_id: 11,
    user_id: "e5f6a7b8-c9d0-1234-efab-345678901234", // eastendersforever
    body: "Same honestly had to step away from the screen",
    episode_id: 3129601,
    runtime_seconds: 1560,
    created_at: "2024-03-08T20:28:00.000Z",
  },
  {
    comment_id: 14,
    user_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890", // screenqueen
    body: "Completely underrated. He should have won a BAFTA for this",
    episode_id: 3129604,
    runtime_seconds: 480,
    created_at: "2024-03-15T20:09:00.000Z",
  },
  {
    comment_id: 15,
    user_id: "b2c3d4e5-f6a7-8901-bcde-f12345678901", // bingewatcher
    body: "The preaching scene while Denise had no idea… genuinely disturbing television",
    episode_id: 3129604,
    runtime_seconds: 960,
    created_at: "2024-03-15T20:17:00.000Z",
  },
  {
    comment_id: 16,
    user_id: "c3d4e5f6-a7b8-9012-cdef-123456789012", // soapaddict
    body: "Denise always gets dealt the worst hand and just keeps going. Icon.",
    episode_id: 3129604,
    runtime_seconds: 1440,
    created_at: "2024-03-15T20:25:00.000Z",
  },
  {
    comment_id: 17,
    user_id: "d4e5f6a7-b8c9-0123-defa-234567890123", // tellytea
    body: "He said in an interview he based Lucas on real case studies. The commitment.",
    episode_id: 3129604,
    runtime_seconds: 1920,
    created_at: "2024-03-15T20:33:00.000Z",
  },
  {
    comment_id: 19,
    user_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890", // screenqueen
    body: "It really was — nothing else on British TV was telling this story like this at the time",
    episode_id: 3129606,
    runtime_seconds: 540,
    created_at: "2024-03-22T20:10:00.000Z",
  },
  {
    comment_id: 20,
    user_id: "b2c3d4e5-f6a7-8901-bcde-f12345678901", // bingewatcher
    body: "The Masood writing in this era genuinely made me care about every single family member",
    episode_id: 3129606,
    runtime_seconds: 1080,
    created_at: "2024-03-22T20:19:00.000Z",
  },
  {
    comment_id: 21,
    user_id: "c3d4e5f6-a7b8-9012-cdef-123456789012", // soapaddict
    body: "The way the show just quietly dropped their storyline still makes me angry",
    episode_id: 3129606,
    runtime_seconds: 1800,
    created_at: "2024-03-22T20:31:00.000Z",
  },
  {
    comment_id: 21,
    user_id: "d4e5f6a7-b8c9-0123-defa-234567890123", // tellytea
    body: "They deserved a proper send off and the writers just… didn't",
    episode_id: 3129606,
    runtime_seconds: 1800,
    created_at: "2024-03-22T20:32:00.000Z",
  },
  {
    comment_id: 22,
    user_id: "e5f6a7b8-c9d0-1234-efab-345678901234", // eastendersforever
    body: "Nitin Ganatra was so good in that scene. The shame and the love all at once.",
    episode_id: 3129606,
    runtime_seconds: 2520,
    created_at: "2024-03-22T20:43:00.000Z",
  }, // ── cluster 1 replies (comments 24–28) ──
  {
    comment_id: 24,
    user_id: "d4e5f6a7-b8c9-0123-defa-234567890123",
    body: "That slow zoom on his face was doing so much heavy lifting",
    episode_id: 3129600,
    runtime_seconds: 430,
    created_at: "2024-03-01T20:07:30.000Z",
  },
  {
    comment_id: 24,
    user_id: "e5f6a7b8-c9d0-1234-efab-345678901234",
    body: "Honestly his best performance in years at that point",
    episode_id: 3129600,
    runtime_seconds: 430,
    created_at: "2024-03-01T20:07:50.000Z",
  },
  {
    comment_id: 25,
    user_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    body: "Same!! My neighbours must have thought something happened",
    episode_id: 3129600,
    runtime_seconds: 440,
    created_at: "2024-03-01T20:07:40.000Z",
  },
  {
    comment_id: 26,
    user_id: "b2c3d4e5-f6a7-8901-bcde-f12345678901",
    body: "The strings kicking in right at that moment was perfect",
    episode_id: 3129600,
    runtime_seconds: 450,
    created_at: "2024-03-01T20:07:50.000Z",
  },
  {
    comment_id: 28,
    user_id: "c3d4e5f6-a7b8-9012-cdef-123456789012",
    body: "Never on my bingo card either but here we are crying",
    episode_id: 3129600,
    runtime_seconds: 460,
    created_at: "2024-03-01T20:08:00.000Z",
  },

  // ── cluster 2 replies (comments 29–33) ──
  {
    comment_id: 29,
    user_id: "d4e5f6a7-b8c9-0123-defa-234567890123",
    body: "I stood up too, literally on my feet",
    episode_id: 3129600,
    runtime_seconds: 910,
    created_at: "2024-03-01T20:15:20.000Z",
  },
  {
    comment_id: 30,
    user_id: "e5f6a7b8-c9d0-1234-efab-345678901234",
    body: "Nothing on British telly touches it when EastEnders fires like this",
    episode_id: 3129600,
    runtime_seconds: 920,
    created_at: "2024-03-01T20:15:30.000Z",
  },
  {
    comment_id: 31,
    user_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    body: "Genuinely the most chaotic episode of any soap I have ever seen",
    episode_id: 3129600,
    runtime_seconds: 930,
    created_at: "2024-03-01T20:15:40.000Z",
  },
  {
    comment_id: 32,
    user_id: "b2c3d4e5-f6a7-8901-bcde-f12345678901",
    body: "I needed a lie down after this one I won't lie",
    episode_id: 3129600,
    runtime_seconds: 940,
    created_at: "2024-03-01T20:15:50.000Z",
  },
  {
    comment_id: 33,
    user_id: "c3d4e5f6-a7b8-9012-cdef-123456789012",
    body: "The incidental music in this era is so underappreciated",
    episode_id: 3129600,
    runtime_seconds: 950,
    created_at: "2024-03-01T20:16:00.000Z",
  },

  // ── cluster 3 replies (comments 34–38) ──
  {
    comment_id: 34,
    user_id: "d4e5f6a7-b8c9-0123-defa-234567890123",
    body: "The cuppa was stone cold by the time I remembered it existed",
    episode_id: 3129600,
    runtime_seconds: 1810,
    created_at: "2024-03-01T20:30:20.000Z",
  },
  {
    comment_id: 35,
    user_id: "e5f6a7b8-c9d0-1234-efab-345678901234",
    body: "The tea stayed untouched for the whole second half same",
    episode_id: 3129600,
    runtime_seconds: 1820,
    created_at: "2024-03-01T20:30:30.000Z",
  },
  {
    comment_id: 36,
    user_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    body: "The cross-cutting between all three families was genuinely cinematic",
    episode_id: 3129600,
    runtime_seconds: 1830,
    created_at: "2024-03-01T20:30:40.000Z",
  },
  {
    comment_id: 37,
    user_id: "b2c3d4e5-f6a7-8901-bcde-f12345678901",
    body: "Soap opera as high art, I will die on this hill",
    episode_id: 3129600,
    runtime_seconds: 1840,
    created_at: "2024-03-01T20:30:50.000Z",
  },
  {
    comment_id: 38,
    user_id: "c3d4e5f6-a7b8-9012-cdef-123456789012",
    body: "Every extra in that pub scene deserves a credit honestly",
    episode_id: 3129600,
    runtime_seconds: 1850,
    created_at: "2024-03-01T20:31:00.000Z",
  },

  // ── cluster 4 replies (comments 39–43) ──
  {
    comment_id: 39,
    user_id: "d4e5f6a7-b8c9-0123-defa-234567890123",
    body: "At this point Ian crying is load bearing for the show's emotional structure",
    episode_id: 3129600,
    runtime_seconds: 2710,
    created_at: "2024-03-01T20:45:20.000Z",
  },
  {
    comment_id: 40,
    user_id: "e5f6a7b8-c9d0-1234-efab-345678901234",
    body: "A genre AND a public service",
    episode_id: 3129600,
    runtime_seconds: 2720,
    created_at: "2024-03-01T20:45:30.000Z",
  },
  {
    comment_id: 41,
    user_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    body: "The silence before he speaks is so well directed",
    episode_id: 3129600,
    runtime_seconds: 2730,
    created_at: "2024-03-01T20:45:40.000Z",
  },
  {
    comment_id: 42,
    user_id: "b2c3d4e5-f6a7-8901-bcde-f12345678901",
    body: "She always finds the comedy even in the darkest scenes",
    episode_id: 3129600,
    runtime_seconds: 2740,
    created_at: "2024-03-01T20:45:50.000Z",
  },
  {
    comment_id: 43,
    user_id: "c3d4e5f6-a7b8-9012-cdef-123456789012",
    body: "This director should have got more EastEnders episodes honestly",
    episode_id: 3129600,
    runtime_seconds: 2750,
    created_at: "2024-03-01T20:46:00.000Z",
  },

  // ── cluster 5 replies (comments 44–48) ──
  {
    comment_id: 44,
    user_id: "d4e5f6a7-b8c9-0123-defa-234567890123",
    body: "Tuesday destroyed me more than any other day of the week for years",
    episode_id: 3129600,
    runtime_seconds: 3310,
    created_at: "2024-03-01T20:55:20.000Z",
  },
  {
    comment_id: 45,
    user_id: "e5f6a7b8-c9d0-1234-efab-345678901234",
    body: "My group chat genuinely crashed from the volume of messages",
    episode_id: 3129600,
    runtime_seconds: 3320,
    created_at: "2024-03-01T20:55:30.000Z",
  },
  {
    comment_id: 46,
    user_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    body: "The freeze frame at the end was so bold and it completely worked",
    episode_id: 3129600,
    runtime_seconds: 3330,
    created_at: "2024-03-01T20:55:40.000Z",
  },
  {
    comment_id: 47,
    user_id: "b2c3d4e5-f6a7-8901-bcde-f12345678901",
    body: "I actually rang my mum after this episode ended",
    episode_id: 3129600,
    runtime_seconds: 3340,
    created_at: "2024-03-01T20:55:50.000Z",
  },
  {
    comment_id: 48,
    user_id: "c3d4e5f6-a7b8-9012-cdef-123456789012",
    body: "Still on fire, been on fire, will remain on fire",
    episode_id: 3129600,
    runtime_seconds: 3350,
    created_at: "2024-03-01T20:56:00.000Z",
  },
];

module.exports = replies;
