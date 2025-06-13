(function (Enviar) {
    console.log("Meu JS no FrontEnd");
    var email;
    var botao;
    var alerta;
    var mensagem;

    botao = document.querySelector('.btn');
    botao.addEventListener('click', (event) => {
        event.preventDefault();
        processaMensagem();
    });

    function processaMensagem() {
        email = document.querySelector('.email').value;
        alerta = document.querySelector('.alert');
        if (!email) {
            alerta.innerHTML = 'Campo Obrigatório.'
        } else {  
            sessionStorage.setItem('email', email);
            Enviar.enviar({ email: email}, alerta)
        }
    }

    function mensagem(alerta, email) {
        mensagem = `Seu email "${email}" foi cadastrado.`
        alerta.innerHTML = mensagem;
    }

    let emailUser = sessionStorage.getItem('email');
    if (emailUser !== null) {
        document.querySelector('.email').value = emailUser;
    }

})(window.EnviarEmail);






