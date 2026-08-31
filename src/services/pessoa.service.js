const API_URL = 'http://localhost:3001/pessoas';

const listarTodas = async () => {
  const res = await fetch(API_URL);
  return await res.json();
};

const buscarPorId = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) return null;
  return await res.json();
};

const criar = async (dados) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
  });
  return await res.json();
};

const atualizar = async (id, dados) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
  });
  if (!res.ok) return null;
  return await res.json();
};

const remover = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  });
  return res.ok;
};

module.exports = {
  listarTodas,
  buscarPorId,
  criar,
  atualizar,
  remover
};
