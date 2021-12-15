const { Router, json } = require("express");
const miscRouter = Router();

// we can be more specific with middleware by route
// miscRouter.use(json());

// Simple GET request that returns a string
miscRouter.get("/", (_request, response) => {
  response.send("Hello from BrainGames API. Welcome!");
});

// Simple GET request that returns an HTML string
miscRouter.get("/about", (_req, res) => {
  res.send(`
    <main>
      <h1>About BrainGames</h1>
      <h2>Games your brain will crave!</h2>
      <p>Level difficulty head bob Sony Halo: Combat Evolved lagging RNG Mass Effect 2 character class horde mode mudflation Nintendo 3DS Mario. Sandbox gank Rush Hot Coffee Red Dead Redemption minigame Mortal Kombat grinding Bejeweled on-disc dlc capture the flag. Open world GameBattles rekt nerf ÜberCharge FPS third-person ghosting pause.</p>
      <p>Quest strafing gamer first-party developer PlayStation 4 frag avatar pervasive game MMORPG Sidescroller heat map lagger. Super Mario Odyssey real time AI easter eggs chems PlayStation Hacker.</p>
    </main>
  `);
});

miscRouter.post("/testPost", (req, res) => {
  console.log(req.body);
  res.send("It worked!!!");
});

module.exports = miscRouter;
