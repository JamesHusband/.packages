export const errorHandlingMiddleware = (err, req, res, _next) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({ message: err.message });
  } else {
    res.status(500).json({ message: err.message });
  }
};
