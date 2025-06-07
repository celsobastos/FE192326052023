console.log("Meu JS no FrontEnd");
var email;
var botao;
var alerta;
var mensagem;

botao = document.querySelector('.btn');
botao.addEventListener('click', () => {



    email = document.querySelector('.email').value;
    if (!email) {
        alerta = document.querySelector('.alert');
        alerta.innerHTML = 'Campo Obrigatório.'
    } else {
        alerta = document.querySelector('.alert');
        // mensagem = `Seu email "${email}" foi cadastrado.`
        mensagem = 'Seu email "' + email +  '" foi cadastrado.'

        alerta.innerHTML = mensagem;
    }


    
    

});
