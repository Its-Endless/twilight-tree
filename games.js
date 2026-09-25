/* ============================================================
   TWILIGHT TREE — GAME REGISTRY
   ------------------------------------------------------------
   TO ADD A NEW GAME:
   1. Save your game HTML file inside the /games/ folder.
   2. Copy one of the entries below and paste it above the last "];".
   3. Update the fields (id must be unique and match the filename without .html).
   4. Save. Done. The game will appear on the homepage automatically.
   ============================================================ */

window.GAMES = [
  {
    id: "click-the-dot",
    title: "Click the Dot",
    description: "Tap the glowing dot as fast as you can. Build combos up to 5× for maximum score.",
    category: "Reaction",
    emoji: "⚡",
    gradient: ["#00f0ff", "#b400ff"],   // [start color, end color] for the thumbnail
    accent: "#00f0ff",                   // accent color for hover glow
    file: "games/click-the-dot.html",
    isNew: false
  },
  {
    id: "star-vanguard",
    title: "Star Vanguard",
    description: "Endless wave-based space shooter. Destroy formations, dodge asteroids, upgrade your ship.",
    category: "Action",
    emoji: "🚀",
    gradient: ["#ff00aa", "#ffe600"],
    accent: "#ff00aa",
    file: "games/star-vanguard.html",
    isNew: true
  }
  ,
  {
    "id": "whack-a-mole",
    "title": "Whack-a-Mole",
    "description": "Tap the moles, dodge the bombs, and chase the combo multiplier in 30 seconds of pure arcade mayhem.",
    "category": "Reaction",
    "emoji": "🔨",
    "gradient": ["#FFD700", "#FF3DAE"],
    "accent": "#FFD700",
    "file": "games/whack-a-mole.html",
    "isNew": true
  }
  ,
  {
    id: "stickman-archer",
    title: "Stickman Archer",
    description: "Short, punchy description of the game.",
    category: "Action",
    emoji: "🧩",
    gradient: ["#00ff88", "#00f0ff"],
    accent: "#00ff88",
    file: "games/stickman-archer.html",
    isNew: true
  }
  /* === ADD YOUR NEXT GAME HERE ===
  ,
  {
    id: "my-new-game",
    title: "My New Game",
    description: "Short, punchy description of the game.",
    category: "Puzzle",                     // Action | Reaction | Puzzle | Arcade | Strategy
    emoji: "🧩",
    gradient: ["#00ff88", "#00f0ff"],
    accent: "#00ff88",
    file: "games/my-new-game.html",
    isNew: true
  }
  */
];