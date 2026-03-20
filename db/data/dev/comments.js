const comments = [
  {
    user_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890", // screenqueen
    body: "The way they just casually dropped that Phil was shot… I gasped",
    episode_id: 562187,
    runtime_seconds: 420,
    created_at: "2024-03-01T20:07:00.000Z",
    is_live: true,
    is_spoiler: false,
  },
  {
    user_id: "b2c3d4e5-f6a7-8901-bcde-f12345678901", // bingewatcher
    body: "Dirty Den coming back from the dead is still the most unhinged thing this show has ever done",
    episode_id: 562187,
    runtime_seconds: 900,
    created_at: "2024-03-01T20:15:00.000Z",
    is_live: true,
    is_spoiler: false,
  },
  {
    user_id: "c3d4e5f6-a7b8-9012-cdef-123456789012", // soapaddict
    body: "I forgot how good the acting was in the Vicky Fowler storyline",
    episode_id: 562187,
    runtime_seconds: 1320,
    created_at: "2024-03-01T20:22:00.000Z",
    is_live: false,
    is_spoiler: false,
  },
  {
    user_id: "d4e5f6a7-b8c9-0123-defa-234567890123", // tellytea
    body: "Okay the Branning storyline though… the build up was incredible",
    episode_id: 562187,
    runtime_seconds: 1800,
    created_at: "2024-03-01T20:30:00.000Z",
    is_live: false,
    is_spoiler: true,
  },
  {
    user_id: "e5f6a7b8-c9d0-1234-efab-345678901234", // eastendersforever
    body: "Why did no one talk about this episode more when it aired???",
    episode_id: 562187,
    runtime_seconds: 2400,
    created_at: "2024-03-01T20:40:00.000Z",
    is_live: false,
    is_spoiler: false,
  },
  {
    user_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890", // screenqueen
    body: "The archive footage they used here is genuinely incredible",
    episode_id: 562187,
    runtime_seconds: 3000,
    created_at: "2024-03-01T20:50:00.000Z",
    is_live: false,
    is_spoiler: false,
  },
  {
    user_id: "b2c3d4e5-f6a7-8901-bcde-f12345678901", // bingewatcher
    body: "Reg Cox in the very first episode and they still hadn't topped it by this point",
    episode_id: 562187,
    runtime_seconds: 3300,
    created_at: "2024-03-01T20:55:00.000Z",
    is_live: false,
    is_spoiler: false,
  },
  {
    user_id: "c3d4e5f6-a7b8-9012-cdef-123456789012", // soapaddict
    body: "Nick Cotton is genuinely one of the best villains in soap history no notes",
    episode_id: 562188,
    runtime_seconds: 360,
    created_at: "2024-03-08T20:06:00.000Z",
    is_live: true,
    is_spoiler: false,
  },
  {
    user_id: "d4e5f6a7-b8c9-0123-defa-234567890123", // tellytea
    body: "The Dirty Den return scene still gives me chills every time they show it",
    episode_id: 562188,
    runtime_seconds: 720,
    created_at: "2024-03-08T20:12:00.000Z",
    is_live: true,
    is_spoiler: false,
  },
  {
    user_id: "e5f6a7b8-c9d0-1234-efab-345678901234", // eastendersforever
    body: "Dot's face when she sees Nick. The actress deserved every award going",
    episode_id: 562188,
    runtime_seconds: 1080,
    created_at: "2024-03-08T20:18:00.000Z",
    is_live: true,
    is_spoiler: false,
  },
  {
    user_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890", // screenqueen
    body: "They are NOT bringing up the cigarette lighter moment I am not okay",
    episode_id: 562188,
    runtime_seconds: 1560,
    created_at: "2024-03-08T20:26:00.000Z",
    is_live: false,
    is_spoiler: true,
  },
  {
    user_id: "b2c3d4e5-f6a7-8901-bcde-f12345678901", // bingewatcher
    body: "Frank Butcher coming back too?? This episode is everything",
    episode_id: 562188,
    runtime_seconds: 2100,
    created_at: "2024-03-08T20:35:00.000Z",
    is_live: false,
    is_spoiler: false,
  },
  {
    user_id: "c3d4e5f6-a7b8-9012-cdef-123456789012", // soapaddict
    body: "The Mitchell brothers reunion was so understated but so effective",
    episode_id: 562188,
    runtime_seconds: 2700,
    created_at: "2024-03-08T20:45:00.000Z",
    is_live: false,
    is_spoiler: false,
  },
  {
    user_id: "d4e5f6a7-b8c9-0123-defa-234567890123", // tellytea
    body: "Lucas Johnson was genuinely terrifying television. Underrated villain era",
    episode_id: 562189,
    runtime_seconds: 480,
    created_at: "2024-03-15T20:08:00.000Z",
    is_live: true,
    is_spoiler: false,
  },
  {
    user_id: "e5f6a7b8-c9d0-1234-efab-345678901234", // eastendersforever
    body: "The whole congregation not knowing he had just murdered someone. Chilling.",
    episode_id: 562189,
    runtime_seconds: 960,
    created_at: "2024-03-15T20:16:00.000Z",
    is_live: true,
    is_spoiler: true,
  },
  {
    user_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890", // screenqueen
    body: "Denise deserved so much better honestly",
    episode_id: 562189,
    runtime_seconds: 1440,
    created_at: "2024-03-15T20:24:00.000Z",
    is_live: false,
    is_spoiler: false,
  },
  {
    user_id: "b2c3d4e5-f6a7-8901-bcde-f12345678901", // bingewatcher
    body: "Don Gilet was absolutely incredible in this role and never got enough credit",
    episode_id: 562189,
    runtime_seconds: 1920,
    created_at: "2024-03-15T20:32:00.000Z",
    is_live: false,
    is_spoiler: false,
  },
  {
    user_id: "c3d4e5f6-a7b8-9012-cdef-123456789012", // soapaddict
    body: "The contrast between preacher Lucas and murderer Lucas is so well done",
    episode_id: 562189,
    runtime_seconds: 2400,
    created_at: "2024-03-15T20:40:00.000Z",
    is_live: false,
    is_spoiler: false,
  },

  {
    user_id: "d4e5f6a7-b8c9-0123-defa-234567890123", // tellytea
    body: "This storyline was so ahead of its time for a British soap",
    episode_id: 562190,
    runtime_seconds: 540,
    created_at: "2024-03-22T20:09:00.000Z",
    is_live: true,
    is_spoiler: false,
  },
  {
    user_id: "e5f6a7b8-c9d0-1234-efab-345678901234", // eastendersforever
    body: "The Masood family dynamic in this era was genuinely some of the best writing EastEnders ever did",
    episode_id: 562190,
    runtime_seconds: 1080,
    created_at: "2024-03-22T20:18:00.000Z",
    is_live: true,
    is_spoiler: false,
  },
  {
    user_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890", // screenqueen
    body: "Christian and Syed were robbed of a proper ending I will not be taking questions",
    episode_id: 562190,
    runtime_seconds: 1800,
    created_at: "2024-03-22T20:30:00.000Z",
    is_live: false,
    is_spoiler: false,
  },
  {
    user_id: "b2c3d4e5-f6a7-8901-bcde-f12345678901", // bingewatcher
    body: "Zainab finding out is still one of the best acted scenes in soap history",
    episode_id: 562190,
    runtime_seconds: 2520,
    created_at: "2024-03-22T20:42:00.000Z",
    is_live: false,
    is_spoiler: true,
  },
  {
    user_id: "c3d4e5f6-a7b8-9012-cdef-123456789012", // soapaddict
    body: "They were genuinely the most compelling couple on the show at this point",
    episode_id: 562190,
    runtime_seconds: 3240,
    created_at: "2024-03-22T20:54:00.000Z",
    is_live: false,
    is_spoiler: false,
  },
  // ── cluster ~7 mins (IDs 24–28) ──
  {
    user_id: "b2c3d4e5-f6a7-8901-bcde-f12345678901", // bingewatcher
    body: "Grant's face when he heard. Absolutely no words.",
    episode_id: 562187,
    runtime_seconds: 430,
    created_at: "2024-03-01T20:07:10.000Z",
    is_live: true,
    is_spoiler: false,
  },
  {
    user_id: "c3d4e5f6-a7b8-9012-cdef-123456789012", // soapaddict
    body: "Not me actually screaming at the telly right now",
    episode_id: 562187,
    runtime_seconds: 440,
    created_at: "2024-03-01T20:07:20.000Z",
    is_live: true,
    is_spoiler: false,
  },
  {
    user_id: "d4e5f6a7-b8c9-0123-defa-234567890123", // tellytea
    body: "The music when that scene cut?? Absolute goosebumps",
    episode_id: 562187,
    runtime_seconds: 450,
    created_at: "2024-03-01T20:07:30.000Z",
    is_live: true,
    is_spoiler: false,
  },
  {
    user_id: "e5f6a7b8-c9d0-1234-efab-345678901234", // eastendersforever
    body: "I did not have this on my bingo card at all",
    episode_id: 562187,
    runtime_seconds: 460,
    created_at: "2024-03-01T20:07:40.000Z",
    is_live: true,
    is_spoiler: false,
  },
  {
    user_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890", // screenqueen
    body: "Ross Kemp in this era was genuinely underrated as a dramatic actor",
    episode_id: 562187,
    runtime_seconds: 470,
    created_at: "2024-03-01T20:07:50.000Z",
    is_live: true,
    is_spoiler: false,
  },

  // ── cluster ~15 mins (IDs 29–33) ──
  {
    user_id: "b2c3d4e5-f6a7-8901-bcde-f12345678901", // bingewatcher
    body: "The audacity of that reveal. I actually stood up.",
    episode_id: 562187,
    runtime_seconds: 910,
    created_at: "2024-03-01T20:15:10.000Z",
    is_live: true,
    is_spoiler: false,
  },
  {
    user_id: "c3d4e5f6-a7b8-9012-cdef-123456789012", // soapaddict
    body: "This is why I've watched this show for 20 years. Unreal.",
    episode_id: 562187,
    runtime_seconds: 920,
    created_at: "2024-03-01T20:15:20.000Z",
    is_live: true,
    is_spoiler: false,
  },
  {
    user_id: "d4e5f6a7-b8c9-0123-defa-234567890123", // tellytea
    body: "The whole square is imploding and I am HERE for it",
    episode_id: 562187,
    runtime_seconds: 930,
    created_at: "2024-03-01T20:15:30.000Z",
    is_live: true,
    is_spoiler: false,
  },
  {
    user_id: "e5f6a7b8-c9d0-1234-efab-345678901234", // eastendersforever
    body: "Someone hold me that was too much to process",
    episode_id: 562187,
    runtime_seconds: 940,
    created_at: "2024-03-01T20:15:40.000Z",
    is_live: true,
    is_spoiler: false,
  },
  {
    user_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890", // screenqueen
    body: "The composer on this run of episodes deserves so much more credit",
    episode_id: 562187,
    runtime_seconds: 950,
    created_at: "2024-03-01T20:15:50.000Z",
    is_live: false,
    is_spoiler: false,
  },
  {
    user_id: "b2c3d4e5-f6a7-8901-bcde-f12345678901", // bingewatcher
    body: "Halfway through and I have aged 10 years watching this",
    episode_id: 562187,
    runtime_seconds: 1810,
    created_at: "2024-03-01T20:30:10.000Z",
    is_live: false,
    is_spoiler: false,
  },
  {
    user_id: "c3d4e5f6-a7b8-9012-cdef-123456789012", // soapaddict
    body: "I paused to make a cuppa and came back to three new disasters",
    episode_id: 562187,
    runtime_seconds: 1820,
    created_at: "2024-03-01T20:30:20.000Z",
    is_live: false,
    is_spoiler: false,
  },
  {
    user_id: "d4e5f6a7-b8c9-0123-defa-234567890123", // tellytea
    body: "The Beales, the Fowlers, the Mitchells all in crisis at once. Masterclass.",
    episode_id: 562187,
    runtime_seconds: 1830,
    created_at: "2024-03-01T20:30:30.000Z",
    is_live: false,
    is_spoiler: false,
  },
  {
    user_id: "e5f6a7b8-c9d0-1234-efab-345678901234", // eastendersforever
    body: "The writers really said let's ruin everyone's lives simultaneously",
    episode_id: 562187,
    runtime_seconds: 1840,
    created_at: "2024-03-01T20:30:40.000Z",
    is_live: false,
    is_spoiler: false,
  },
  {
    user_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890", // screenqueen
    body: "Every single person in that pub had a different reaction and it was perfect casting",
    episode_id: 562187,
    runtime_seconds: 1850,
    created_at: "2024-03-01T20:30:50.000Z",
    is_live: false,
    is_spoiler: false,
  },

  // ── cluster ~45 mins (IDs 39–43) ──
  {
    user_id: "b2c3d4e5-f6a7-8901-bcde-f12345678901", // bingewatcher
    body: "Ian Beale crying again. Some things never change.",
    episode_id: 562187,
    runtime_seconds: 2710,
    created_at: "2024-03-01T20:45:10.000Z",
    is_live: false,
    is_spoiler: false,
  },
  {
    user_id: "c3d4e5f6-a7b8-9012-cdef-123456789012", // soapaddict
    body: "At this point Ian crying is a genre of television",
    episode_id: 562187,
    runtime_seconds: 2720,
    created_at: "2024-03-01T20:45:20.000Z",
    is_live: false,
    is_spoiler: false,
  },
  {
    user_id: "d4e5f6a7-b8c9-0123-defa-234567890123", // tellytea
    body: "The way everyone just goes quiet when he walks in. Chilling.",
    episode_id: 562187,
    runtime_seconds: 2730,
    created_at: "2024-03-01T20:45:30.000Z",
    is_live: false,
    is_spoiler: false,
  },
  {
    user_id: "e5f6a7b8-c9d0-1234-efab-345678901234", // eastendersforever
    body: "Bianca's reaction in the background is doing so much work",
    episode_id: 562187,
    runtime_seconds: 2740,
    created_at: "2024-03-01T20:45:40.000Z",
    is_live: false,
    is_spoiler: false,
  },
  {
    user_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890", // screenqueen
    body: "The direction in this episode is next level. Every shot is deliberate.",
    episode_id: 562187,
    runtime_seconds: 2750,
    created_at: "2024-03-01T20:45:50.000Z",
    is_live: false,
    is_spoiler: false,
  },

  // ── cluster ~55 mins (IDs 44–48) ──
  {
    user_id: "b2c3d4e5-f6a7-8901-bcde-f12345678901", // bingewatcher
    body: "That cliffhanger has no right being this good for a Tuesday",
    episode_id: 562187,
    runtime_seconds: 3310,
    created_at: "2024-03-01T20:55:10.000Z",
    is_live: false,
    is_spoiler: false,
  },
  {
    user_id: "c3d4e5f6-a7b8-9012-cdef-123456789012", // soapaddict
    body: "See you all in the group chat. I am not okay.",
    episode_id: 562187,
    runtime_seconds: 3320,
    created_at: "2024-03-01T20:55:20.000Z",
    is_live: true,
    is_spoiler: false,
  },
  {
    user_id: "d4e5f6a7-b8c9-0123-defa-234567890123", // tellytea
    body: "They really ended it THERE. Genuinely cannot.",
    episode_id: 562187,
    runtime_seconds: 3330,
    created_at: "2024-03-01T20:55:30.000Z",
    is_live: true,
    is_spoiler: false,
  },
  {
    user_id: "e5f6a7b8-c9d0-1234-efab-345678901234", // eastendersforever
    body: "I need the next episode NOW. This is criminal.",
    episode_id: 562187,
    runtime_seconds: 3340,
    created_at: "2024-03-01T20:55:40.000Z",
    is_live: true,
    is_spoiler: false,
  },
  {
    user_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890", // screenqueen
    body: "Group chat is on fire right now and rightfully so",
    episode_id: 562187,
    runtime_seconds: 3350,
    created_at: "2024-03-01T20:55:50.000Z",
    is_live: true,
    is_spoiler: false,
  },
];

module.exports = comments;
