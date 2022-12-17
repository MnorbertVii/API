'use strict'

//import joi dependency

const Joi = require('joi');


exports.articleValidation = Joi.object({
    header: Joi.string().trim()
    .min(5)
    .max(15)
    .required(),

    description: Joi.string().trim()
    .min(5)
    .max(1000)
    .required(),
})

.with("header", "description");