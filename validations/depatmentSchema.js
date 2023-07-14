const Joi = require("joi");

const departmentSchema = Joi.object({
    name: Joi.string().required(),
    code: Joi.string().required(),
    description: Joi.string().required(),
    // fileName: Joi.string().required(),
  }).unknown(true); // Allow additional fields in the request body
  
  exports.departmentSchema = departmentSchema;
  
  exports.validateUser = (req, res, next) => {
    const { error } = departmentSchema.validate(req.body, { abortEarly: false });
    if (error) {
      const errorMessages = error.details.map((detail) => detail.message);
      return res.status(400).json({ errors: errorMessages });
    }
    next();
  };
  
  