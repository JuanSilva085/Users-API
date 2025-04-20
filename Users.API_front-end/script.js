const apiUrl = "http://localhost:5180/api/User";


document.getElementById("formAdicionar").addEventListener("submit", async (e) => {
  e.preventDefault();

  const usuario = {
    nome: document.getElementById("nomeAdd").value,
    email: document.getElementById("emailAdd").value,
    telefone: document.getElementById("telefoneAdd").value,
    endereco: document.getElementById("enderecoAdd").value,
    dataNascimento: document.getElementById("dataAdd").value,
  };

  const resposta = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuario),
  });

  if (resposta.ok) {
    alert("Usuário adicionado com sucesso!");
    document.getElementById("formAdicionar").reset();
    carregarUsuarios();
  } else {
    alert("Erro ao adicionar usuário.");
  }
});


document.getElementById("formEditar").addEventListener("submit", async (e) => {
  e.preventDefault();

  const id = document.getElementById("idEdit").value;
  const usuario = {
    id: Number(id),
    nome: document.getElementById("nomeEdit").value,
    email: document.getElementById("emailEdit").value,
    telefone: document.getElementById("telefoneEdit").value,
    endereco: document.getElementById("enderecoEdit").value,
    dataNascimento: document.getElementById("dataEdit").value,
  };

  const resposta = await fetch(`${apiUrl}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuario),
  });

  if (resposta.ok) {
    alert("Usuário atualizado com sucesso!");
    document.getElementById("formEditar").reset();
    carregarUsuarios();
  } else {
    alert("Erro ao atualizar usuário.");
  }
});



async function carregarUsuarios() {
  const resposta = await fetch(apiUrl);
  const usuarios = await resposta.json();
  
  const tbody = document.getElementById("usuariosTableBody");
  tbody.innerHTML = "";
  
  usuarios.forEach((u) => {
    const linha = document.createElement("tr");
    const formatoData = new Date(u.dataNascimento).toLocaleDateString("pt-BR");
    linha.innerHTML = `
      <td>${u.id}</td>
      <td>${u.nome}</td>
      <td>${u.email}</td>
      <td>${u.telefone}</td>
      <td>${u.endereco}</td>
      <td>${formatoData}</td>
    `;
    tbody.appendChild(linha);
  });
}


async function preencherFormulario(id) {
  const resposta = await fetch(`${apiUrl}/${id}`);
  if (resposta.ok) {
    const usuario = await resposta.json();
    document.getElementById("id").value = usuario.id;
    document.getElementById("nome").value = usuario.nome;
    document.getElementById("email").value = usuario.email;
    document.getElementById("telefone").value = usuario.telefone;
    document.getElementById("endereco").value = usuario.endereco;
    document.getElementById("dataNascimento").value = usuario.dataNascimento.split("T")[0];
  }
}



async function deletarUsuario() {
  const id = document.getElementById("deleteId").value;
  if (!id) {
    alert("Informe um ID.");
    return;
  }

  const resposta = await fetch(`${apiUrl}/${id}`, { method: "DELETE" });

  if (resposta.ok) {
    alert("Usuário deletado.");
    carregarUsuarios();
  } else {
    alert("Não existe nenhum usuário com ID informado.");
  }
}



async function buscarUsuario() {
  const input = document.getElementById("buscaIdOuEmail").value.trim();
  const resultado = document.getElementById("resultadoBusca");
  resultado.innerHTML = "";

  if (!input) return;

  let resposta;
  if (!isNaN(Number(input))) {
    resposta = await fetch(`${apiUrl}/${input}`);
  } else {
    const todos = await fetch(apiUrl).then(res => res.json());
    const encontrado = todos.find(u => u.email === input);
    if (encontrado) {
      resposta = { ok: true, json: async () => encontrado };
    } else {
      resposta = { ok: false };
    }
  }

  if (resposta.ok) {
    const usuario = await resposta.json();
    resultado.innerHTML = `
      <p><strong>ID:</strong> ${usuario.id}</p>
      <p><strong>Nome:</strong> ${usuario.nome}</p>
      <p><strong>Email:</strong> ${usuario.email}</p>
      <p><strong>Telefone:</strong> ${usuario.telefone}</p>
    `;
  } else {
    resultado.innerHTML = "<p>Usuário não encontrado.</p>";
  }
}


window.onload = carregarUsuarios;
