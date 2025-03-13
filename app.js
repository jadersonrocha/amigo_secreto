//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.

const participantes = []; // Array para armazenar os nomes dos participantes

// Função para adicionar participante
function adicionarParticipante(nome) {
    // 'nome' é o parâmetro que representa o nome do participante a ser adicionado
    if (nome && !participantes.includes(nome)) { // Verifica se o nome não está vazio e se já não foi adicionado
        participantes.push(nome); // Adiciona o nome ao array de participantes
        atualizarListaParticipantes(); // Atualiza a lista de participantes no HTML
        limparCampoEntrada(); // Limpa o campo de entrada
    }
}

// Função para atualizar a lista de participantes no HTML
function atualizarListaParticipantes() {
    const lista = document.getElementById('listaAmigos'); // Obtém o elemento da lista no HTML
    lista.innerHTML = ''; // Limpa a lista atual
    participantes.forEach(participante => { // Itera sobre os participantes
        const item = document.createElement('li'); // Cria um novo item de lista
        item.textContent = participante; // Define o texto do item como o nome do participante
        lista.appendChild(item); // Adiciona o item à lista no HTML
    });
}

// Função para limpar o campo de entrada
function limparCampoEntrada() {
    document.getElementById('amigo').value = ''; // Define o valor do campo de entrada como vazio
}

// Desafio
function amigoSecreto(participantes) { 
    const sorteados = []; // Lista para armazenar os índices dos participantes já sorteados
    const amigos = []; // Lista para armazenar os participantes
    const amigosSorteados = []; // Lista para armazenar os amigos secretos sorteados
    let i = 0;
    let j = 0;
    
    while (i < participantes.length) {
        let sorteado = Math.floor(Math.random() * participantes.length); // Sorteia um índice aleatório
        if (sorteados.indexOf(sorteado) === -1 && sorteado !== i) { // Verifica se o índice já foi sorteado e se não é o próprio participante
            sorteados.push(sorteado); // Adiciona o índice sorteado à lista de sorteados
            amigos.push(participantes[i]); // Adiciona o participante atual à lista de amigos
            amigosSorteados.push(participantes[sorteado]); // Adiciona o participante sorteado à lista de amigos secretos
            i++;
        }
    }
    
    const resultado = document.getElementById('resultado'); // Obtém o elemento da lista de resultados no HTML
    resultado.innerHTML = ''; // Limpa a lista de resultados atual
    while (j < amigos.length) {
        const item = document.createElement('li'); // Cria um novo item de lista
        item.textContent = `${amigos[j]} tirou ${amigosSorteados[j]}`; // Define o texto do item como o resultado do sorteio
        resultado.appendChild(item); // Adiciona o item à lista de resultados no HTML
        j++;
    }
}