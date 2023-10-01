$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay: true
    });

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    });

    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            veiculoInteresse: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome',
            telefone: 'Por favor, insira seu telefone',
            email: 'Por favor, insira seu email',
            VeiculoInteresse: 'Esse campo é obrigatório'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidaHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert (`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
    $('.lista-veiculo button').click(function() {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();
    
        $('#veiculo-interesse').val(nomeVeiculo);
    
        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})

