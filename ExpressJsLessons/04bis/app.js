const express = require("express");
const app = express();
app.use(express.json());

require("dotenv").config();
const port = process.env.APP_PORT ?? 5000;

const welcome = (req, res) => {
  res.send("Welcome to my favourite movie list");
};

app.get("/", welcome);

const movieHandlers = require("./movieHandlers");

// GET MOVIES
app.get("/api/movies", movieHandlers.getMovies);
app.get("/api/movies/:id", movieHandlers.getMovieById);
// POST MOVIES
app.post("/api/movies", movieHandlers.postMovie);
// PUT MOVIE
app.put("/api/movies/:id", movieHandlers.updateMovie);

const userHandlers = require("./userHandlers");

// GET USERS
app.get("/api/users", userHandlers.getUsers);
app.get("/api/users/:id", userHandlers.getUserById);
// POST USERS
app.post("/api/users", userHandlers.postUser);
// PUT USER
app.put("/api/users/:id", userHandlers.updateUser);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
