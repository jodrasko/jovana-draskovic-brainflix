// ALL VIDEOS ROUTES FROM SERVER
const { Router, json } = require("express");
const { v4: uuid } = require("uuid");
const fs = require("fs");
const videosRouter = Router();

// A helper function to read a data JSON file
const readData = () => {
  // The readFileSync path is relative to where index.js file is
  const videosData = fs.readFileSync("./data/videos.json");
  return JSON.parse(videosData);
};

// A helper function that writes the data to JSON file
const writeFile = (videosData) => {
  // JSON.stringify takes additional parameters, that allow us to specify the amounts of white space (ie, indentation) in the file
  fs.writeFileSync("./data/videos.json", JSON.stringify(videosData, null, 2));
};

// we can be more specific with middleware by route
// gamesRouter.use(json());

// Fetching a list of games: GET /games
videosRouter.get("/", (req, res) => {
  const videosData = readData();

  // {
  //     "id": "84e96018-4022-434e-80bf-000ce4cd12b8",
  //     "title": "BMX Rampage: 2021 Highlights",
  //     "channel": "Red Cow",
  //     "image": "https://i.imgur.com/l2Xfgpl.jpg"
  //   },

  let newVideosData = videosData.map((video) => {
    const { id, title, channel, image } = video;
    return { id, title, channel, image };
  });
  res.status(200).json(newVideosData);
});

// Fetching a single video details: GET /videos/:videoId
videosRouter.get("/:videoId", (req, res) => {
  const videosData = readData();

  // We can get access to URL params (ie: :gameId) via req.params object
  const video = videosData.find((video) => video.id === req.params.videoId);

  if (!video) {
    // We can chain .status and .send/.json together to send back the response with a status code
    return res.status(404).send("The video is not found");
  }

  res.status(200).json(video);
});

const videoValidation = (req, res, next) => {
  // It's a good idea to setup validation for your endpoints to make sure the data required is sent in a request
  //{ id, title, channel, image }
  if (!req.body.title || !req.body.description) {
    return res
      .status(400)
      .send("Please make sure to include title and description of the video");
  } else {
    next();
  }
};

// Creating a new game: POST /games
videosRouter.post("/", videoValidation, (req, res) => {
  // We always read the newest data before doing any manipulation on it
  const videosData = readData();

  // We create IDs on a server, so it's not going to be a part of a request, rather we can use uuid or similar library to generate the new id
  const newVideo = {
    id: uuid(),
    title: req.body.title,
    channel: "Unknown",
    image: "blue-image-placeholder.jpg",
    description: req.body.description,
    views: "100",
    likes: "50",
    duration: "2:05",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: new Date().getTime(),
    comments: []
  };

  // Update our gamesData array and then write the updates to a games data JSON file
  videosData.push(newVideo);
  writeFile(videosData);

  // For POST requests we will send back a 201(Created) status code and it's common to send the newly created object (in case we need that id) in a response
  res.status(201).json(newVideo);
});

module.exports = videosRouter;
