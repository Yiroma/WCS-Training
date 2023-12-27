const database = require("./database");

const getMovies = (req, res) => {
  let initialSql = "SELECT * FROM users";
  const whereSqlValues = [];

  if (req.query.color != null) {
    whereSqlValues.push({
      column: "color",
      value: req.query.color,
      operator: "=",
    });
  }
  if (req.query.duration != null) {
    whereSqlValues.push({
      column: "duration",
      value: req.query.duration,
      operator: "<=",
    });
  }

  database
    .query(
      whereSqlValues.reduce(
        (sql, { column, operator }, index) =>
          `${sql} ${index === 0 ? "WHERE" : "AND"} ${column} ${operator}?`,
        initialSql
      ),
      whereSqlValues.map(({ value }) => value)
    )
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

const deleteMovie = (req, res) => {
  const id = parseInt(req.params.id);

  database
    .query("DELETE FROM movies WHERE id =?", [id])
    .then(([result]) => {
      if (result.affectedRows > 0) {
        res.sendStatus(200);
      } else {
        res.status(404).send("Movie Not Found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error deleting the movie");
    });
};

module.exports = {
  getMovies,
  getMovieById,
  postMovie,
  updateMovie,
  deleteMovie,
};
