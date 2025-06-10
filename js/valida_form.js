
// let valorCompoNome = campoNome
// let contagem = valorCompoNome;
let alerta = document.querySelector('.alert');
let botaoEnviar = document.querySelector('[data-js="btn-enviar"]')

botaoEnviar.addEventListener('click', (event) => {
    event.preventDefault();
    let contagem = document.querySelector('.nome-user').value;

    if (contagem >= 10) {
        console.log('passou aqui')
        alerta.innerHTML = 'Campo no não pode ter mais que 10 caracteres'
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