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
      id: "alice",
      name: "Alice",
      chefs: ["Chef Kelsey", "Chef Savannah", "Chef Danny"]
    },
    {
      id: "marcus",
      name: "Marcus",
      chefs: ["Chef Tristen", "Chef Megan", "Chef Laura"]
    },
    {
      id: "priya",
      name: "Priya",
      chefs: ["Chef Tom", "Chef Michelle", "Chef Raf"]
    },
    {
      id: "jordan",
      name: "Jordan",
      chefs: ["Chef Kévin", "Chef Charly", "Chef Danyele"]
    },
    {
      id: "sam",
      name: "Sam",
      chefs: ["Chef Brady", "Chef Shane", "Chef Victoire"]
    },
    {
      id: "taylor",
      name: "Taylor",
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
        { playerId: "alice",   points: 18 },
        { playerId: "marcus",  points: 12 },
        { playerId: "priya",   points: 9  },
        { playerId: "jordan",  points: 15 },
        { playerId: "sam",     points: 7  },
        { playerId: "taylor",  points: 11 }
      ]
    },
    {
      number: 2,
      title: "Farm to Table",
      chefWinner: "Chef Tristen",
      scores: [
        { playerId: "alice",   points: 10 },
        { playerId: "marcus",  points: 20 },
        { playerId: "priya",   points: 14 },
        { playerId: "jordan",  points: 8  },
        { playerId: "sam",     points: 13 },
        { playerId: "taylor",  points: 6  }
      ]
    },
    {
      number: 3,
      title: "Fire & Spice",
      chefWinner: "Chef Kévin",
      scores: [
        { playerId: "alice",   points: 7  },
        { playerId: "marcus",  points: 11 },
        { playerId: "priya",   points: 16 },
        { playerId: "jordan",  points: 22 },
        { playerId: "sam",     points: 9  },
        { playerId: "taylor",  points: 14 }
      ]
    },
    {
      number: 4,
      title: "Restaurant Wars",
      chefWinner: "Chef Michelle",
      scores: [
        { playerId: "alice",   points: 14 },
        { playerId: "marcus",  points: 8  },
        { playerId: "priya",   points: 21 },
        { playerId: "jordan",  points: 12 },
        { playerId: "sam",     points: 17 },
        { playerId: "taylor",  points: 10 }
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
//      { playerId: "alice",   points: 0 },
//      { playerId: "marcus",  points: 0 },
//      { playerId: "priya",   points: 0 },
//      { playerId: "jordan",  points: 0 },
//      { playerId: "sam",     points: 0 },
//      { playerId: "taylor",  points: 0 }
//    ]
//  },
//
// ============================================================
