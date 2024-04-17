document.getElementById('form-validacao').addEventListener('submit', function (event) {
    event.preventDefault();

    var campoA = parseFloat(document.getElementById('campoA').value);
    var campoB = parseFloat(document.getElementById('campoB').value);

    if (campoB > campoA) {
        exibirMensagem("Formulário válido!", "positiva");
    } else {
        exibirMensagem("Campo B deve ser maior que Campo A.", "negativa");
    }
});

function exibirMensagem(mensagem, tipo) {
    var mensagemElement = document.getElementById('mensagem');
    mensagemElement.textContent = mensagem;
    mensagemElement.className = "mensagem " + tipo;
}
