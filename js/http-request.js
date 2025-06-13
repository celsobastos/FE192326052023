(function() {
    let requestEmail = {
        url: 'http://localhost:3001/email/json',
        method: 'POST',
        enviar: function(dados, alvoMensagem) {
                let http = new XMLHttpRequest(); // instancia do objeto
                let url = this.url

                http.open(this.method, url, true);
                http.setRequestHeader('Content-Type', 'application/json')
                alvoMensagem.innerHTML = "Estamos processando."
                http.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status === 200) {
                        let mensagem = JSON.parse(this.responseText)
                        alvoMensagem.innerHTML = mensagem.status
                    }
                    else if(this.readyState == 4 && this.status === 404) {
                        alvoMensagem.innerHTML = "Erro tente novamente"
                    }
                }
                // let dados = { emailteste: 'teste@email.com'}
                http.send(JSON.stringify(dados))
        }
    }

    window.EnviarEmail = requestEmail

})()