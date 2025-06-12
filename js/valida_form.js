let alerta = document.querySelector('.meu-alerta');
let botaoEnviar = document.querySelector('[data-js="btn-enviar"]')
let objInputData = document.querySelectorAll('.inputData');
let alertMsg = document.querySelector('.alert');
let form = document.querySelector('form');

// objInputData = [nome, email, senha]


console.dir(objInputData);

botaoEnviar.addEventListener('click', (event) => {
    let campo = '';
    // debugger;
    event.preventDefault();
    for(let i = 0; i < objInputData.length; i++) {
        if (objInputData[i].value.length == '') {
            objInputData[i].classList.add('ativo')
            alerta.style.display = 'block';
            campo += objInputData[i].previousElementSibling.innerHTML + ', ';
            alertMsg.innerHTML = `Verifique o ${campo} `;
        }
        else {
            objInputData[i].classList.remove('ativo')
            alertMsg.innerHTML = '';
            alerta.style.display = 'none'
        }
    }


    if(!campo) {
        form.submit();
    }

})


// console.dir(campoNome);
// let executaEvento = function() {
//     alerta.innerHTML = "Funcionou"
// }
// let executaEvento2 = function() {
//     alerta.innerHTML = "evento 2"
// }
// campoNome.addEventListener('click', executaEvento);
// campoNome.addEventListener('blur', executaEvento2)