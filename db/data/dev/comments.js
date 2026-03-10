const comments = [
  {
    user_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890", // screenqueen
    body: "The way they just casually dropped that Phil was shot… I gasped",
    episode_id: 3129600,
    runtime_seconds: 420,
    created_at: "2024-03-01T20:07:00.000Z",
    is_live: true,
    is_spoiler: false,
  },
  {
    user_id: "b2c3d4e5-f6a7-8901-bcde-f12345678901", // bingewatcher
    body: "Dirty Den coming back from the dead is still the most unhinged thing this show has ever done",
    episode_id: 3129600,
    runtime_seconds: 900,
    created_at: "2024-03-01T20:15:00.000Z",
    is_live: true,
    is_spoiler: false,
  },
  {
    user_id: "c3d4e5f6-a7b8-9012-cdef-123456789012", // soapaddict
    body: "I forgot how good the acting was in the Vicky Fowler storyline",
    episode_id: 3129600,
    runtime_seconds: 1320,
    created_at: "2024-03-01T20:22:00.000Z",
    is_live: false,
    is_spoiler: false,
  },
  {
    user_id: "d4e5f6a7-b8c9-0123-defa-234567890123", // tellytea
    body: "Okay the Branning storyline though… the build up was incredible",
    episode_id: 3129600,
    runtime_seconds: 1800,
    created_at: "2024-03-01T20:30:00.000Z",
    is_live: false,
    is_spoiler: true,
  },
  {
    user_id: "e5f6a7b8-c9d0-1234-efab-345678901234", // eastendersforever
    body: "Why did no one talk about this episode more when it aired???",
    episode_id: 3129600,
    runtime_seconds: 2400,
    created_at: "2024-03-01T20:40:00.000Z",
    is_live: false,
    is_spoiler: false,
  },
  {
    user_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890", // screenqueen
    body: "The archive footage they used here is genuinely incredible",
    episode_id: 3129600,
    runtime_seconds: 3000,
    created_at: "2024-03-01T20:50:00.000Z",
    is_live: false,
    is_spoiler: false,
  },
  {
    user_id: "b2c3d4e5-f6a7-8901-bcde-f12345678901", // bingewatcher
    body: "Reg Cox in the very first episode and they still hadn't topped it by this point",
    episode_id: 3129600,
    runtime_seconds: 3300,
    created_at: "2024-03-01T20:55:00.000Z",
    is_live: false,
    is_spoiler: false,
  },
  {
    user_id: "c3d4e5f6-a7b8-9012-cdef-123456789012", // soapaddict
    body: "Nick Cotton is genuinely one of the best villains in soap history no notes",
    episode_id: 3129601,
    runtime_seconds: 360,
    created_at: "2024-03-08T20:06:00.000Z",
    is_live: true,
    is_spoiler: false,
  },
  {
    user_id: "d4e5f6a7-b8c9-0123-defa-234567890123", // tellytea
    body: "The Dirty Den return scene still gives me chills every time they show it",
    episode_id: 3129601,
    runtime_seconds: 720,
    created_at: "2024-03-08T20:12:00.000Z",
    is_live: true,
    is_spoiler: false,
  },
  {
    user_id: "e5f6a7b8-c9d0-1234-efab-345678901234", // eastendersforever
    body: "Dot's face when she sees Nick. The actress deserved every award going",
    episode_id: 3129601,
    runtime_seconds: 1080,
    created_at: "2024-03-08T20:18:00.000Z",
    is_live: true,
    is_spoiler: false,
  },
  {
    user_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890", // screenqueen
    body: "They are NOT bringing up the cigarette lighter moment I am not okay",
    episode_id: 3129601,
    runtime_seconds: 1560,
    created_at: "2024-03-08T20:26:00.000Z",
    is_live: false,
    is_spoiler: true,
  },
  {
    user_id: "b2c3d4e5-f6a7-8901-bcde-f12345678901", // bingewatcher
    body: "Frank Butcher coming back too?? This episode is everything",
    episode_id: 3129601,
    runtime_seconds: 2100,
    created_at: "2024-03-08T20:35:00.000Z",
    is_live: false,
    is_spoiler: false,
  },
  {
    user_id: "c3d4e5f6-a7b8-9012-cdef-123456789012", // soapaddict
    body: "The Mitchell brothers reunion was so understated but so effective",
    episode_id: 3129601,
    runtime_seconds: 2700,
    created_at: "2024-03-08T20:45:00.000Z",
    is_live: false,
    is_spoiler: false,
  },
  {
    user_id: "d4e5f6a7-b8c9-0123-defa-234567890123", // tellytea
    body: "Lucas Johnson was genuinely terrifying television. Underrated villain era",
    episode_id: 3129604,
    runtime_seconds: 480,
    created_at: "2024-03-15T20:08:00.000Z",
    is_live: true,
    is_spoiler: false,
  },
  {
    user_id: "e5f6a7b8-c9d0-1234-efab-345678901234", // eastendersforever
    body: "The whole congregation not knowing he had just murdered someone. Chilling.",
    episode_id: 3129604,
    runtime_seconds: 960,
    created_at: "2024-03-15T20:16:00.000Z",
    is_live: true,
    is_spoiler: true,
  },
  {
    user_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890", // screenqueen
    body: "Denise deserved so much better honestly",
    episode_id: 3129604,
    runtime_seconds: 1440,
    created_at: "2024-03-15T20:24:00.000Z",
    is_live: false,
    is_spoiler: false,
  },
  {
    user_id: "b2c3d4e5-f6a7-8901-bcde-f12345678901", // bingewatcher
    body: "Don Gilet was absolutely incredible in this role and never got enough credit",
    episode_id: 3129604,
    runtime_seconds: 1920,
    created_at: "2024-03-15T20:32:00.000Z",
    is_live: false,
    is_spoiler: false,
  },
  {
    user_id: "c3d4e5f6-a7b8-9012-cdef-123456789012", // soapaddict
    body: "The contrast between preacher Lucas and murderer Lucas is so well done",
    episode_id: 3129604,
    runtime_seconds: 2400,
    created_at: "2024-03-15T20:40:00.000Z",
    is_live: false,
    is_spoiler: false,
  },
  {
    user_id: "d4e5f6a7-b8c9-0123-defa-234567890123", // tellytea
    body: "This storyline was so ahead of its time for a British soap",
    episode_id: 3129606,
    runtime_seconds: 540,
    created_at: "2024-03-22T20:09:00.000Z",
    is_live: true,
    is_spoiler: false,
  },
  {
    user_id: "e5f6a7b8-c9d0-1234-efab-345678901234", // eastendersforever
    body: "The Masood family dynamic in this era was genuinely some of the best writing EastEnders ever did",
    episode_id: 3129606,
    runtime_seconds: 1080,
    created_at: "2024-03-22T20:18:00.000Z",
    is_live: true,
    is_spoiler: false,
  },
  {
    user_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890", // screenqueen
    body: "Christian and Syed were robbed of a proper ending I will not be taking questions",
    episode_id: 3129606,
    runtime_seconds: 1800,
    created_at: "2024-03-22T20:30:00.000Z",
    is_live: false,
    is_spoiler: false,
  },
  {
    user_id: "b2c3d4e5-f6a7-8901-bcde-f12345678901", // bingewatcher
    body: "Zainab finding out is still one of the best acted scenes in soap history",
    episode_id: 3129606,
    runtime_seconds: 2520,
    created_at: "2024-03-22T20:42:00.000Z",
    is_live: false,
    is_spoiler: true,
  },
  {
    user_id: "c3d4e5f6-a7b8-9012-cdef-123456789012", // soapaddict
    body: "They were genuinely the most compelling couple on the show at this point",
    episode_id: 3129606,
    runtime_seconds: 3240,
    created_at: "2024-03-22T20:54:00.000Z",
    is_live: false,
    is_spoiler: false,
  },
];

module.exports = comments;
