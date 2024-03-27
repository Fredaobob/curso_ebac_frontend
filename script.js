document.getElementById('validationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const campoA = document.getElementById('campoA').value;
    const campoB = document.getElementById('campoB').value;
    const messageElement = document.getElementById('message');

    if (parseInt(campoB, 10) > parseInt(campoA, 10)) {
        messageElement.textContent = 'Formulário válido: Campo B é maior que o Campo A.';
        messageElement.style.color = 'green';
    } else {
        messageElement.textContent = 'Formulário inválido: Campo B deve ser maior que o Campo A.';
        messageElement.style.color = 'red';
    }
});

document.getElementById('campoA').addEventListener('input', restrictToNumeric);
document.getElementById('campoB').addEventListener('input', restrictToNumeric);

function restrictToNumeric(event) {
    event.target.value = event.target.value.replace(/\D/g, '');
}
