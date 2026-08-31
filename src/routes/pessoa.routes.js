const express = require('express');
const router = express.Router();
const pessoaController = require('../controllers/pessoa.controller');
const idadeMiddleware = require('../middlewares/idade.middleware');

router.get('/', pessoaController.getPessoas);
router.get('/:id', pessoaController.getPessoaPorId);
router.post('/', idadeMiddleware, pessoaController.createPessoa);
router.put('/:id', idadeMiddleware, pessoaController.updatePessoa);
router.delete('/:id', pessoaController.deletePessoa);

module.exports = router;
