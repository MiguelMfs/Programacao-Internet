const pessoas = [];

function criarObjeto() {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const cidade = document.getElementById("cidade").value;
    const mensagemErro = document.getElementById("mensagemErro");

    if (!nome || !idade || !cidade) {
        mensagemErro.textContent = "Todos os campos são obrigatórios. Por favor, preencha todos os campos.";
        return; 
    }

    mensagemErro.textContent = "";

    const novaPessoa = {
        nome: nome,
        idade: idade,
        cidade: cidade
    };

    pessoas.push(novaPessoa);

    atualizarListaPessoas();

    document.getElementById("pessoaForm").reset();
}

function atualizarListaPessoas() {
    const pessoasList = document.getElementById("pessoasList");
    pessoasList.innerHTML = ''; 
    
    pessoas.forEach(pessoa => {
        const paragrafo = document.createElement('p');
        paragrafo.textContent = `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`;
        pessoasList.appendChild(paragrafo);
    });
}
