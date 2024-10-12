const Joi = require("@hapi/joi");

module.exports = {
    add: Joi.object({
      username: Joi.string().required().empty().messages({
        "string.base": `Title should be a type of 'text'`,
        "string.empty": `Title cannot be an empty field`,
        "any.required": `Title is a required field`,
      }),
      email: Joi.string().required().empty().email().messages({
        "string.base": `email should be a type of 'text'`,
        "string.empty": `email cannot be an empty field`,
        "string.email": `email format not valid`,
        "any.required": `email is a required field`,
      }),
      password: Joi.string().required().empty().regex(/^[a-zA-Z0-9]{5,16}$/).min(5).max(16).messages({
        "string.base": `password should be a type of 'text'`,
        "string.empty": `password cannot be an empty field`,
        "string.min": `password should be of minimum 5 characters`,
        "string.max": `password should be of maximum 16 characters`,
        "string.pattern.base": `password must contains lower case, upper case and between 6 and 16 characters`,
        "any.required": `password is a required field`,
      }),
      
      confirm_password: Joi.string().valid(Joi.ref('password')).required().messages({
        "string.base": `Password and confirm password do not match`,
        "any.required": `password is a required field`,
      }),
      
      mobile_no: Joi.string().required().empty().messages({
        "string.base": `Mobile Number should be a type of 'text'`,
        "string.empty": `Mobile Number cannot be an empty field`,
        "any.required": `Mobile Number is a required field`,
      }),
      city: Joi.string().required().empty().messages({
        "string.base": `city should be a type of 'text'`,
        "string.empty": `city cannot be an empty field`,
        "any.required": `city is a required field`,
      }),
      state: Joi.string().required().empty().messages({
        "string.base": `state should be a type of 'text'`,
        "string.empty": `state cannot be an empty field`,
        "any.required": `state is a required field`,
      }),
      position: Joi.string().required().empty().messages({
        "string.base": `position should be a type of 'text'`,
        "string.empty": `position cannot be an empty field`,
        "any.required": `position is a required field`,
      }),
      starting_date: Joi.date().required().empty().messages({
        "string.empty": `Date cannot be an empty field`,
        "any.required": `Date is a required field`,
      }),
      salary: Joi.string().required().empty().messages({
        "string.base": `salary should be a type of 'text'`,
        "string.empty": `salary cannot be an empty field`,
        "any.required": `salary is a required field`,
      }),
      address: Joi.string().required().empty().messages({
        "string.base": `Address should be a type of 'text'`,
        "string.empty": `Address cannot be an empty field`,
        "any.required": `Address is a required field`,
      }),
      age: Joi.required().empty().messages({
        "string.empty": `Age cannot be an empty field`,
        "any.required": `Age is a required field`,
      }),
      gender: Joi.required().empty().messages({
        "string.empty": `Gender cannot be an empty field`,
        "any.required": `Gender is a required field`,
      }),
      pincode: Joi.string().required().empty().messages({
        "string.base": `pincode should be a type of 'text'`,
        "string.empty": `pincode cannot be an empty field`,
        "any.required": `pincode is a required field`,
      }),
    })
  };