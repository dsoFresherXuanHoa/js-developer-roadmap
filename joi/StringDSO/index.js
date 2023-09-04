const Joi = require("joi");

const accountSchema = Joi.object({
  username: Joi.string().case("lower"),
  creditCard: Joi.string().creditCard(),
  password: Joi.string().required().default("1111").description("Password"),
});

const admin = {
  username: "admin",
  password: "PBRAGJDejNumgLLyNM4wzFYkq8JA5QXS",
};

const { error, value } = accountSchema.validate(admin);
console.log(error, value);
