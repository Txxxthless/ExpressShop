const ApiError = require("../error/apiError");

function handleError(err, req, res, next) {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).send(err.message);
  }

  return res.status(500).send("Something went wrong.");
}

module.exports = handleError;
