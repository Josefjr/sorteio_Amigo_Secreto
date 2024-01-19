// Array para armazenar os nomes dos amigos
const amigos = [];

// Adiciona um amigo à lista
function adicionar() {
  const nomeAmigo = obterNomeAmigo();
  if (nomeAmigo !== '') {
    amigos.push(nomeAmigo);
    limparInputNomeAmigo();
    atualizarListaAmigos();
  }
}

// Realiza o sorteio dos amigos
function sortear() {
  const listaSorteio = document.getElementById('lista-sorteio');
  listaSorteio.innerHTML = '';

  // Verifica se há pelo menos dois amigos para realizar o sorteio
  if (amigos.length < 2) {
    alert('Adicione pelo menos dois amigos antes de sortear!');
    return;
  }

  // Embaralha a lista de amigos
  const amigosEmbaralhados = shuffleArray([...amigos]);

  // Exibe o resultado do sorteio
  for (let i = 0; i < amigosEmbaralhados.length; i++) {
    const amigoAtual = amigosEmbaralhados[i];
    const proximoAmigo = (i === amigosEmbaralhados.length - 1) ? amigosEmbaralhados[0] : amigosEmbaralhados[i + 1];
    listaSorteio.innerHTML += `${amigoAtual} -> ${proximoAmigo}<br>`;
  }
}

// Reinicia a lista de amigos e o sorteio
function reiniciar() {
  limparListaAmigos();
  limparListaSorteio();
}

// Atualiza a lista de amigos na interface
function atualizarListaAmigos() {
  const listaAmigos = document.getElementById('lista-amigos');
  
  // Limpa a lista de amigos antes de atualizar
  listaAmigos.innerHTML = '';

  // Cria uma lista não ordenada (ul)
  const ul = document.createElement('ul');

  // Adiciona cada amigo como um item de lista (li)
  amigos.forEach(amigo => {
    const li = document.createElement('li');
    li.textContent = amigo;
    ul.appendChild(li);
  });

  // Adiciona a lista à interface
  listaAmigos.appendChild(ul);
}

// Obtém o nome do amigo a partir do input
function obterNomeAmigo() {
  const nomeAmigoInput = document.getElementById('nome-amigo');
  return nomeAmigoInput.value.trim();
}

// Limpa o input do nome do amigo
function limparInputNomeAmigo() {
  const nomeAmigoInput = document.getElementById('nome-amigo');
  nomeAmigoInput.value = '';
}

// Limpa a lista de amigos
function limparListaAmigos() {
  amigos.length = 0;
  atualizarListaAmigos();
}

// Limpa a lista de sorteio na interface
function limparListaSorteio() {
  const listaSorteio = document.getElementById('lista-sorteio');
  listaSorteio.innerHTML = '';
}

// Embaralha um array utilizando o algoritmo Fisher-Yates
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


