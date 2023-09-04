const Joi = require("joi");

const accountSchema = Joi.object({
  username: Joi.array().items(Joi.string().valid("admin", "guest")),
  password: Joi.string().required().default("1111").description("Password"),
});

const admin = {
  username: ["writer"],
  password: "PBRAGJDejNumgLLyNM4wzFYkq8JA5QXS",
};

const { error, value } = accountSchema.validate(admin);
console.log(error, value);
