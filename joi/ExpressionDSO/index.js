const Joi = require("joi");

const accountSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(10).required(),
  password: Joi.string().required().default("1111").description("Password"),
  repeatPassword: Joi.ref("password"),
  role: Joi.any()
    .allow("admin", "user")
    .valid("admin", "user")
    .invalid("writer"),
});

const admin = {
  username: "admin",
  password: "PBRAGJDejNumgLLyNM4wzFYkq8JA5QXS",
  repeatPassword: "PBRAGJDejNumgLLyNM4wzFYkq8JA5QXS",
  role: "admin",
};

const { error, value } = accountSchema.validate(admin);

Joi.assert(admin, accountSchema, "Something went wrong!");
console.log(Joi.isError(error));
console.log(Joi.isRef(accountSchema.repeatPassword));
console.log(Joi.isSchema(accountSchema));

console.log(value);
console.log(accountSchema.describe());
