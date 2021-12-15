// SERVER BRAINFLIX
const express = require("express");
const cors = require("cors");
const videosRoutes = require("./routes/videos");
const miscRoutes = require("./routes/misc");
// const employeesRoutes = require("./routes/employees");

const app = express();

// enable cors so that browser can make requests to our server
app.use(cors());

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
app.listen(8080, () => {
  console.log("🚀 Server listening on 8080");
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
