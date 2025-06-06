console.log("Meu JS no FrontEnd");
var email;
var botao;

botao = document.querySelector('.btn');
botao.addEventListener('click', () => {
    
    email = document.querySelector('.email').value;
    console.log(email);

});
