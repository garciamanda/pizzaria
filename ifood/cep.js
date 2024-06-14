// Função para buscar o endereço a partir do CEP
function buscarEnderecoPorCEP(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                console.log('CEP não encontrado');
            } else {
                console.log(`CEP: ${data.cep}`);
                console.log(`Logradouro: ${data.logradouro}`);
                console.log(`Complemento: ${data.complemento}`);
                console.log(`Bairro: ${data.bairro}`);
                console.log(`Cidade: ${data.localidade}`);
                console.log(`Estado: ${data.uf}`);
            }
        })
        .catch(error => console.log('Ocorreu um erro ao buscar o endereço:', error));
}

// Exemplo de uso
buscarEnderecoPorCEP('01001000'); // CEP da Av. Paulista em São Paulo