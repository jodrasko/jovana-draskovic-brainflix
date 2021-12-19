const { Router, json } = require("express");
const { v4: uuid } = require("uuid");
const fs = require("fs");
const videosRouter = Router();

const readData = () => {
  const videosData = fs.readFileSync("./data/videos.json");
  return JSON.parse(videosData);
};

const writeFile = (videosData) => {
  fs.writeFileSync("./data/videos.json", JSON.stringify(videosData, null, 2));
};

videosRouter.get("/", (req, res) => {
  const videosData = readData();

  let newVideosData = videosData.map((video) => {
    const { id, title, channel, image } = video;
    return { id, title, channel, image };
  });
  res.status(200).json(newVideosData);
});

videosRouter.get("/:videoId", (req, res) => {
  const videosData = readData();

  const video = videosData.find((video) => video.id === req.params.videoId);

  if (!video) {
    return res.status(404).send("The video is not found");
  }

  res.status(200).json(video);
});

const videoValidation = (req, res, next) => {
  if (!req.body.title || !req.body.description) {
    return res
      .status(400)
      .send("Please make sure to include title and description of the video");
  } else {
    next();
  }
};

videosRouter.post("/", videoValidation, (req, res) => {
  const videosData = readData();

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

  videosData.push(newVideo);
  writeFile(videosData);

  res.status(201).json(newVideo);
});

module.exports = videosRouter;
