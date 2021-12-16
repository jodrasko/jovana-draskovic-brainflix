// ALL VIDEOS ROUTES FROM SERVER
const { Router, json } = require("express");
const { v4: uuid } = require("uuid");
const fs = require("fs");
const videosRouter = Router();

// A helper function to read a data JSON file
const readData = () => {
  // The readFileSync path is relative to where server.js file is
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

  //   // req.query allows us access to URL query parameters, ie: /games?genre=RPG&dateReleased=2020 as an object
  //   const queryParams = req.query;
  //   let newVideosData = [...videosData];

  //   if (queryParams.genre) {
  //     // Filter out gamesData array to only include the games with a genre in query parameter
  //     newVideosData = videosData.filter((game) => {
  //       return game.genres.includes(queryParams.genre);
  //     });
  //   }

  // {
  //     "id": "84e96018-4022-434e-80bf-000ce4cd12b8",
  //     "title": "BMX Rampage: 2021 Highlights",
  //     "channel": "Red Cow",
  //     "image": "https://i.imgur.com/l2Xfgpl.jpg"
  //   },

  let newVideosData = videosData.map((video) => {
    // Here we are using a rest parameter to remove some of the keys from the game object, which is common for GET all requests, to return limited data
    const { id, title, channel, image } = video;
    return { id, title, channel, image };
  });

  // Only single response per request can be sent, it will throw an error otherwise
  res.status(200).json(newVideosData);
});

// Fetching a single game details: GET /games/:gameId
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
    channel: " ",
    image: "https://i.imgur.com/l2Xfgpl.jpg",
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
