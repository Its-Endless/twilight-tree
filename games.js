/* ============================================================
   TWILIGHT TREE — GAME REGISTRY
   ------------------------------------------------------------
   TO ADD A NEW GAME:
   1. Save your game HTML file inside the /games/ folder.
   2. Save your thumbnail inside the /thumbnails/ folder.
   3. Copy one of the entries below and paste it above the last "];".
   4. Update the fields (id must be unique and match the filename without .html).
   5. Save. Done.
   ============================================================ */

window.GAMES = [
  {
    id: "click-the-dot",
    title: "Click the Dot",
    description: "Tap the glowing dot as fast as you can. Build combos up to 5× for maximum score.",
    category: "Reaction",
    thumbnail: "thumbnails/click-the-dot.png",
    gradient: ["#00f0ff", "#b400ff"],
    accent: "#00f0ff",
    file: "games/click-the-dot.html",
    isNew: false
  },
  {
    id: "star-vanguard",
    title: "Star Vanguard",
    description: "Endless wave-based space shooter. Destroy formations, dodge asteroids, upgrade your ship.",
    category: "Action",
    thumbnail: "thumbnails/star-vanguard.png",
    gradient: ["#ff00aa", "#ffe600"],
    accent: "#ff00aa",
    file: "games/star-vanguard.html",
    isNew: true
  },
  {
    id: "whack-a-mole",
    title: "Whack-a-Mole",
    description: "Tap the moles, dodge the bombs, and chase the combo multiplier in 30 seconds of pure arcade mayhem.",
    category: "Reaction",
    thumbnail: "thumbnails/whack-a-mole.png",
    gradient: ["#FFD700", "#FF3DAE"],
    accent: "#FFD700",
    file: "games/whack-a-mole.html",
    isNew: true
  },
  {
    id: "stickman-archer",
    title: "Stickman Archer",
    description: "Aim, draw, and release. Precision archery with satisfying physics.",
    category: "Action",
    thumbnail: "thumbnails/stickman-archer.png",
    gradient: ["#00ff88", "#00f0ff"],
    accent: "#00ff88",
    file: "games/stickman-archer.html",
    isNew: true
  },
  {
    id: "typeforge",
    title: "TypeForge",
    description: "Test your typing speed and make a high score.",
    category: "Reaction",
    thumbnail: "thumbnails/typeforge.jpg",
    gradient: ["#00ff88", "#00f0ff"],
    accent: "#00ff88",
    file: "games/typeforge.html",
    isNew: true
  },
  {
    id: "hungrybird",
    title: "Hungry Bird",
    description: "EAT-FLY-REPEAT",
    category: "Reaction",
    thumbnail: "thumbnails/hungry.png",
    gradient: ["#00ff88", "#00f0ff"],
    accent: "#00ff88",
    file: "games/hungry-bird.html",
    isNew: true
  },
  {
    id: "snake",
    title: "Snake",
    description: "The old retro snake game with new taste.",
    category: "Reaction",
    thumbnail: "thumbnails/snake.png",
    gradient: ["#00ff88", "#00f0ff"],
    accent: "#00ff88",
    file: "games/snake.html",
    isNew: true
  },
  {
    id: "don't look behind",
    title: "Don't look behind",
    description: "You Die, if you look Behind.",
    category: "Horror",
    thumbnail: "thumbnails/dlb.png",
    gradient: ["#00ff88", "#00f0ff"],
    accent: "#00ff88",
    file: "games/dlb.html",
    isNew: true
  },
  {
    id: "racetown",
    title: "Race Town",
    description: "Bring back old  days of raing with a cool drift.",
    category: "Racing",
    thumbnail: "thumbnails/racetown.png",
    gradient: ["#00ff88", "#00f0ff"],
    accent: "#00ff88",
    file: "games/racetown.html",
    isNew: true
  },
  {
    id: "terrahaven",
    title: "TerraHaven",
    description: "Build and Destroy in this Endless World, Show you creativity.",
    category: "Creative",
    thumbnail: "thumbnails/terrahaven.png",
    gradient: ["#00ff88", "#00f0ff"],
    accent: "#00ff88",
    file: "games/terrahaven.html",
    isNew: true
  }
];