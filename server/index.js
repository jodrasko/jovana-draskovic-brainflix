// SERVER BRAINFLIX
const express = require("express");
const cors = require("cors");
const videosRoutes = require("./routes/videos");
const miscRoutes = require("./routes/misc");
// const employeesRoutes = require("./routes/employees");

// You have to run dotenv.config to make your .env files available
require("dotenv").config();

// To access .env variables we get them from process global variable
console.log(process.env.PORT);

// .env should be gitignored so provide .env.sample with the names of the env variables required for the app

const app = express();
const PORT = process.env.PORT || 5050;

// Need to include CORS middle ware to allow requests from the client
app.use(
  cors({
    origin: process.env.CLIENT_URL
  })
);
app.use(express.json());

// example of simple middleware
app.use((req, res, next) => {
  console.log("Incoming request!");
  // we could stop all requests here if we wanted to
  // res.send("You shall not pass!");
  next();
});

app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.path}`);
  next();
});

// serve static assets from "./public/images"
app.use(express.static("./public/images"));

// This line of code is required to enable req.body parameter allowing us to make POST requests with the data in the body of request
app.use(express.json());

app.use("/videos", videosRoutes);
app.use("/", miscRoutes);
// for example we could also have employee routes
// app.use("/employees", employeesRoutes);

// Listen on PORT and provide a success callback function
app.listen(PORT, () => {
  console.log(`🚀 Server listening on ${PORT}`);
});

// Troubleshooting

/*
  EADDRINUSE: address already in use :::8080
  means you already have something running on 8080
*/

/*
  To stop your server from running, press Ctrl+C
*/

/*
  Cannot set headers after they are sent to the client
  You are trying to send a response after the response has already been sent. You can only send ONE response per request
*/
