$(document).ready(function(){
    $('#nome-completo').keyup(function() {
        $(this).val($(this).val().replace(/[^a-zA-Z\s]/g, ''));
    });

    // Máscara para Telefone
    $('#telefone').mask('(00) 00000-0000');
    
    // Máscara para CPF
    $('#cpf').mask('000.000.000-00', {reverse: true});
    
    // Máscara para CEP
    $('#cep').mask('00000-000');
});
