const Joi = require("joi");

const movieSchema = Joi.object({
  title: Joi.string().min(2).max(255).required(),
  director: Joi.string().min(2).max(255).required(),
  year: Joi.string().min(4).max(4).required(),
  color: Joi.string().min(1).max(1).required(),
  duration: Joi.number().less(999).required(),
});

const validateMovie = (req, res, next) => {
  const { title, director, year, color, duration } = req.body;

  const { error } = movieSchema.validate(
    { title, director, year, color, duration },
    { abortEarly: false }
  );

  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

const userSchema = Joi.object({
  email: Joi.string().email().max(255).required(),
  firstname: Joi.string().alphanum().min(2).max(30).required(),
  lastname: Joi.string().alphanum().min(2).max(255).required(),
});

const validateUser = (req, res, next) => {
  const { firstname, lastname, email } = req.body;

  const { error } = userSchema.validate({ firstname, lastname, email }, { abortEarly: false });

  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

module.exports = { validateMovie, validateUser };
