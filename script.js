// script.js
document.getElementById('numeroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado

    // Pega os valores dos campos A e B
    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);

    // Elemento onde as mensagens serão exibidas
    const mensagem = document.getElementById('mensagem');

    // Validação
    if (campoB > campoA) {
        mensagem.textContent = "Formulário válido! O número B é maior que o número A.";
        mensagem.style.color = "green";
    } else {
        mensagem.textContent = "Formulário inválido! O número B deve ser maior que o número A.";
        mensagem.style.color = "red";
    }
});