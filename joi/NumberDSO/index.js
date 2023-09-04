const Joi = require("joi");

const accountSchema = Joi.object({
  username: Joi.string(),
  password: Joi.string().required().default("1111").description("Password"),
  age: Joi.number().greater(1).less(10),
  port: Joi.port(),
});

const admin = {
  username: "admin",
  password: "PBRAGJDejNumgLLyNM4wzFYkq8JA5QXS",
};

const { error, value } = accountSchema.validate(admin);
console.log(error, value);
