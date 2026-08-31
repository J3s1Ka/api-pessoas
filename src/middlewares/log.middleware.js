const logMiddleware = (req, res, next) => {
  const data = new Date().toISOString().replace('T', ' ').substring(0, 19);
  console.log(`[${data}] ${req.method} ${req.originalUrl}`);
  next();
};

module.exports = logMiddleware;
