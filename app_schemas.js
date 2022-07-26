const Joi = require("joi");
const { ModuleDetectionKind } = require("typescript");

const customerSchema = Joi.object({

    code : Joi.number().integer().required(),
    name : Joi.string().required(),
    city : Joi.string().required()
});


module.exports = {
    customerSchema : customerSchema
}