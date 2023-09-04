const Joi = require("joi");

const accountSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(10).required(),
  password: Joi.string().required(),
  repeatPassword: Joi.ref("password"),
});

const admin = {
  username: "admin",
  password: "PBRAGJDejNumgLLyNM4wzFYkq8JA5QXS",
  repeatPassword: "PBRAGJDejNumgLLyNM4wzFYkq8JA5QXS",
};

const { error, value } = accountSchema.validate(admin);
console.log(error);
console.log(value);

Joi.assert(admin, accountSchema, "Something went wrong!");
