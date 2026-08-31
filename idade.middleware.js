const idadeMiddleware = (req, res, next) => {
  const { idade } = req.body;
  if (idade !== undefined) {
    const idadeNum = Number(idade);
    if (isNaN(idadeNum) || idadeNum < 0 || idadeNum > 120) {
      return res.status(400).json({ erro: 'A idade deve estar entre 0 e 120 anos' });
    }
  }
  next();
};

module.exports = idadeMiddleware;