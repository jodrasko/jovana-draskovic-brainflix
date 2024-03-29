const express = require("express");
const cors = require("cors");
const videosRoutes = require("./routes/videos");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5050;

app.use(
  cors({
    origin: process.env.CLIENT_URL
  })
);

app.use(express.static("./public/images"));

app.use(express.json());

app.use("/videos", videosRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server listening on ${PORT}`);
});
