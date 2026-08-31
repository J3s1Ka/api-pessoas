const pessoaService = require('../services/pessoa.service');

const getPessoas = async (req, res) => {
  try {
    let pessoas = await pessoaService.listarTodas();
    const { idade, idadeMin, idadeMax } = req.query;

    if (idade !== undefined) {
      pessoas = pessoas.filter(p => Number(p.idade) === Number(idade));
    }
    if (idadeMin !== undefined) {
      pessoas = pessoas.filter(p => Number(p.idade) >= Number(idadeMin));
    }
    if (idadeMax !== undefined) {
      pessoas = pessoas.filter(p => Number(p.idade) <= Number(idadeMax));
    }

    return res.status(200).json(pessoas);
  } catch (erro) {
    return res.status(500).json({ erro: 'Erro interno ao buscar pessoas' });
  }
};

const getPessoaPorId = async (req, res) => {
  try {
    const pessoa = await pessoaService.buscarPorId(req.params.id);
    if (!pessoa) {
      return res.status(404).json({ erro: 'Pessoa não encontrada' });
    }
    return res.status(200).json(pessoa);
  } catch (erro) {
    return res.status(500).json({ erro: 'Erro interno ao buscar pessoa' });
  }
};

const createPessoa = async (req, res) => {
  try {
    const { nome, idade, email } = req.body;
    if (!nome || !email) {
      return res.status(400).json({ erro: 'Nome e email são obrigatórios' });
    }
    const novaPessoa = await pessoaService.criar({ nome, idade, email });
    return res.status(201).json(novaPessoa);
  } catch (erro) {
    return res.status(500).json({ erro: 'Erro interno ao criar pessoa' });
  }
};

const updatePessoa = async (req, res) => {
  try {
    const { nome, idade, email } = req.body;
    if (!nome || !email) {
      return res.status(400).json({ erro: 'Nome e email são obrigatórios' });
    }
    const pessoaAtualizada = await pessoaService.atualizar(req.params.id, { nome, idade, email });
    if (!pessoaAtualizada) {
      return res.status(404).json({ erro: 'Pessoa não encontrada' });
    }
    return res.status(200).json(pessoaAtualizada);
  } catch (erro) {
    return res.status(500).json({ erro: 'Erro interno ao atualizar pessoa' });
  }
};

const deletePessoa = async (req, res) => {
  try {
    const removido = await pessoaService.remover(req.params.id);
    if (!removido) {
      return res.status(404).json({ erro: 'Pessoa não encontrada' });
    }
    return res.status(204).send();
  } catch (erro) {
    return res.status(500).json({ erro: 'Erro interno ao remover pessoa' });
  }
};

module.exports = {
  getPessoas,
  getPessoaPorId,
  createPessoa,
  updatePessoa,
  deletePessoa
};
