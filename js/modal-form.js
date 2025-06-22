// (function($) {
//     const modalBtn = $.select('.modal-btn');
//     const modalBtnFechar = $.select('.fechar');
//     const textoBody = document.querySelector('.body > p');

//     modalBtnFechar.addEventListener('click', () => {
//         document.getElementById('modal').style.display = 'none'
//     });

//     modalBtn.addEventListener('click', (event) => {
//         console.log('Botão foi clicado');
//         textoBody.innerHTML = '';
//     });
    
// })(window.Lib)

// Start jQuery 

$(function(){
    const modalBtn = $('.modal-btn');
    const modalBtnFechar = $('.fechar');
    const textoBody = $('.body > p');
    const contato = $('.contato');

    modalBtnFechar.on('click', () => {
        $('#modal').fadeOut('slow')
    } );

    contato.on('click', () => {
        $('#modal').fadeIn('slow')
    } );
    
    $('.modal-btn').click(() => {
        textoBody.fadeOut(2000).fadeIn(1000).fadeOut(2000);
        // $('.body > p').fadeOut()
        $('.modal-btn').css('color', '#0000ff');
        // $(this).hide();
    });

    const objetoEvent = {
        mouseenter: function() {    
            $(this).css({
                'background-image': 'url(../assets/img/testimonial.jpg)',
                'border-bottom': '2px solid #000'
            });
        },
        mouseleave: function() {
            $(this)
            .css('background-image', 'url(../assets/img/offer.jpg)')
            .css('border-bottom', 'none');
        }
    };

    $('.main').on(objetoEvent)

    $('.slogan-main').on('click', function() {
        $(this).hide('slow', function() {
            $(this).show('slow', function () {
                console.log('Execuções encadeadas')
            })
        })
    })

    let emailUser = $('.email');
    emailUser.on('keyup', function(event){
        console.log($(this).val());
    })
    emailUser.val('seu email')

    const alimentosPet = $('.alimentos-pet');
    // alimentosPet.html('Comida para Caes')
    // const copia = alimentosPet.html();
    // alimentosPet.html(copia + ' >>')
    alimentosPet.append(" >>>")

    $('.add').click(function() {
        $('.new-obj').append('<input type="text">')
    });

    $('.email').mask('000.000.000-00', {reverse: true});
    
})
