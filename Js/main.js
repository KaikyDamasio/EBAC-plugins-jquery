$(document).ready(function(){

    $('#cpf').mask('000.000.000.-00',{
        placeholder:'___.___.___-__'
    }),
    
    $('#telefone').mask('(00) 00000-0000', {
        placeholder:'(__) _____-____'
    }),

    $('#cep').mask('00000-000',{
        placeholder:'01234-567'
    })
})