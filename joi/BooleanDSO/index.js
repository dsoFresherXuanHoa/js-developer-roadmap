const Joi = require("joi");

const accountSchema = Joi.object({
  username: Joi.string(),
  password: Joi.string().required().default("1111").description("Password"),
  status: Joi.boolean().truthy("A").sensitive(),
});

const admin = {
  username: "admin",
  password: "PBRAGJDejNumgLLyNM4wzFYkq8JA5QXS",
  status: "D",
};

const { error, value } = accountSchema.validate(admin);
console.log(error, value);
