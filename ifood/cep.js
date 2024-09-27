const cep = document.querySelector('#cep');
const endereço = document.querySelector('#endereço');
const bairro = document.querySelector('#bairro');
const cidade = document.querySelector('#cidade');
const message = document.querySelector('#message');

cep.addEventListener('focusout', async() => {

    try {
    const onlynumbers = /^[0-9]+$/;
    const CepValido = /^[0-9]{8}+$/;
    
    if(!onlynumbers.test(cep.value) || !CepValido.test(cep.value)) {
        throw {cep_error:'Cep Invalido' };
    }

    const response = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`);

    if(!response.ok) {
        throw await response.jsonl();
    }

    const responseCep = await response.json();

    endereço.value = responseCep.logradouro;
    bairro.value = responseCep.bairro;
    cidade = responseCep.localidade;
        
    } catch (error) {
        if(error?.cep_error) {
            message.textContent = error.cep_error;
            setTimeout(() => {
                message.textContent = '';
            }, 5000);
        }
        console.log(error);
    }

})