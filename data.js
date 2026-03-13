// ============================================================
//  TOP CHEF FANTASY LEAGUE — DATA FILE
//  Edit this file to update scores and player info.
//  Push to GitHub and the site updates automatically.
// ============================================================

const LEAGUE = {

  // ----------------------------------------------------------
  // PLAYERS — Add/edit league members here
  // Each player needs a unique "id" (no spaces), a "name",
  // and a list of their drafted "chefs".
  // ----------------------------------------------------------
  players: [
    {
      id: "ben",
      name: "Ben",
      chefs: ["Chef Kelsey", "Chef Savannah", "Chef Danny"]
    },
    {
      id: "helen",
      name: "Helen",
      chefs: ["Chef Tristen", "Chef Megan", "Chef Laura"]
    },
    {
      id: "sydney",
      name: "Sydney",
      chefs: ["Chef Tom", "Chef Michelle", "Chef Raf"]
    },
    {
      id: "jasmine",
      name: "Jasmine",
      chefs: ["Chef Kévin", "Chef Charly", "Chef Danyele"]
    },
    {
      id: "amie",
      name: "amie",
      chefs: ["Chef Brady", "Chef Shane", "Chef Victoire"]
    },
    {
      id: "courtney",
      name: "Courtney",
      chefs: ["Chef Amanda", "Chef Nasrin", "Chef Kealoha"]
    }
  ],

  // ----------------------------------------------------------
  // EPISODES — Add a new object for each episode.
  //
  // Fields:
  //   number      — episode number (integer)
  //   title       — episode title (string)
  //   chefWinner  — Top Chef winner of the episode (string)
  //   scores      — array of { playerId, points }
  //                 playerId must match an id in players above
  //                 points = fantasy points earned this episode
  //
  // Scoring ideas (customize to your league's rules):
  //   +5  — your chef won the Quickfire
  //   +10 — your chef won the Elimination challenge
  //   +3  — your chef received a compliment from judges
  //   -3  — your chef was in the bottom
  //   -10 — your chef was eliminated
  // ----------------------------------------------------------
  episodes: [
    {
      number: 1,
      title: "First Impressions",
      chefWinner: "Chef Kelsey",
      scores: [
        { playerId: "ben",   points: 18 },
        { playerId: "helen",  points: 12 },
        { playerId: "sydney",   points: 9  },
        { playerId: "jasmine",  points: 15 },
        { playerId: "amie",     points: 7  },
        { playerId: "courtney",  points: 11 }
      ]
    },
    {
      number: 2,
      title: "Farm to Table",
      chefWinner: "Chef Tristen",
      scores: [
        { playerId: "ben",   points: 10 },
        { playerId: "helen",  points: 20 },
        { playerId: "sydney",   points: 14 },
        { playerId: "jasmine",  points: 8  },
        { playerId: "amie",     points: 13 },
        { playerId: "courtney",  points: 6  }
      ]
    },
    {
      number: 3,
      title: "Fire & Spice",
      chefWinner: "Chef Kévin",
      scores: [
        { playerId: "ben",   points: 7  },
        { playerId: "helen",  points: 11 },
        { playerId: "sydney",   points: 16 },
        { playerId: "jasmine",  points: 22 },
        { playerId: "amie",     points: 9  },
        { playerId: "courtney",  points: 14 }
      ]
    },
    {
      number: 4,
      title: "Restaurant Wars",
      chefWinner: "Chef Michelle",
      scores: [
        { playerId: "ben",   points: 14 },
        { playerId: "helen",  points: 8  },
        { playerId: "sydney",   points: 21 },
        { playerId: "jasmine",  points: 12 },
        { playerId: "amie",     points: 17 },
        { playerId: "courtney",  points: 10 }
      ]
    }
  ]

};

// ============================================================
//  HOW TO ADD A NEW EPISODE
//  Copy this template into the episodes array above:
//
//  {
//    number: 5,
//    title: "Episode Title Here",
//    chefWinner: "Chef Name",
//    scores: [
//      { playerId: "ben",   points: 0 },
//      { playerId: "helen",  points: 0 },
//      { playerId: "sydney",   points: 0 },
//      { playerId: "jasmine",  points: 0 },
//      { playerId: "amie",     points: 0 },
//      { playerId: "courtney",  points: 0 }
//    ]
//  },
//
// ============================================================
