const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
  return (req, res, next) => {
    // creamos el middleware de forma dinámica usando closures
    const data = req[property]; // body, query, params...
    const { error } = schema.validate(data, { abortEarly: false }); // para que no frene al primer error
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  };
}

module.exports = validatorHandler;
