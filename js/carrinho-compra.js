(function () {
    let carrinho = [];
    let eviarCompra = [];
    let botoes = document.querySelectorAll('.produtos button');

    botoes[0].addEventListener('click', () => {
        carrinho.push({preco: 4, produto: 'rosquinhas'})
        console.log(carrinho)
        console.log(JSON.stringify(carrinho))
    })

    botoes[1].addEventListener('click', () => {
        carrinho.push({preco: 10, produto: 'osso'})
        console.log(carrinho)
        console.log(JSON.stringify(carrinho))
    })

    botoes[2].addEventListener('click', () => {
        carrinho.push({preco: 5, produto: 'bolinho'})
        console.log(carrinho)
        console.log(JSON.stringify(carrinho))
        
    })
    // eviarCompra = JSON.stringify(carrinho)


    console.log('Executou');

    let compra = {}
    compra.nome = 'Antonio josé';
    compra.cpf = '125.456.456-58';
    compra.carrinho = []
    compra.carrinho.push({preco: 5, produto: 'bolinho'})
    compra.carrinho.push({preco: 10, produto: 'rosquinhas'})
    console.log(compra.nome)


    /* Converte para JSON */
    let compraLoja = JSON.stringify(compra);
    console.log(compraLoja);

})()