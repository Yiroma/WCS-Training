const database = require("./database");

const getMovies = (req, res) => {
  database
    .query("SELECT * FROM movies")
    .then(([movies]) => {
      res.json(movies);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const getMovieById = (req, res) => {
  const id = parseInt(req.params.id);

  database
    .query("SELECT * FROM movies WHERE id =?", [id])
    .then(([movies]) => {
      if (movies[0] != null) {
        res.json(movies[0]);
      } else {
        res.status(404).send("Movie Not Found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const postMovie = (req, res) => {
  const { title, director, year, color, duration } = req.body;

  database
    .query("INSERT INTO movies (title, director, year, color, duration) VALUES (?,?,?,?,?)", [
      title,
      director,
      year,
      color,
      duration,
    ])
    .then(([result]) => {
      res.location(`/api/movies/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving the movie");
    });
};

const updateMovie = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, director, year, color, duration } = req.body;

  database
    .query("UPDATE movies SET title =?, director =?, year =?, color =?, duration =? WHERE id =?", [
      title,
      director,
      year,
      color,
      duration,
      id,
    ])
    .then(([result]) => {
      if (result.affectedRows > 0) {
        res.sendStatus(204);
      } else {
        res.status(404).send("Movie Not Found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error updating the movie");
    });
};

module.exports = {
  getMovies,
  getMovieById,
  postMovie,
  updateMovie,
};
