const Joi = require("joi");

const accountSchema = Joi.object({
  username: Joi.string(),
  password: Joi.string().required().default("1111").description("Password"),
  releaseDate: Joi.date().greater("01-01-2001").less("01-01-2002"),
});

const admin = {
  username: "admin",
  password: "PBRAGJDejNumgLLyNM4wzFYkq8JA5QXS",
  releaseDate: new Date("01-16-2001"),
};

const { error, value } = accountSchema.validate(admin);
console.log(error, value);
