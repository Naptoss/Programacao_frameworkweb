document.addEventListener('DOMContentLoaded', function() {
    var cabecalhosBtn = document.getElementById('cabecalhosBtn');
    var cabecalhoResult = document.getElementById('cabecalhoResult');

    cabecalhosBtn.addEventListener('click', function() {
        event.preventDefault();
        cabecalhoResult.innerHTML = ''; // Limpa o conteúdo existente
        for (var i = 1; i<= 6; i++) {
            var cabecalho = document.createElement('h' + i);
            cabecalho.innerHTML = 'Cabeçalho ' + i;
            cabecalhoResult.appendChild(cabecalho);
        }
    });

    var VerificarBtn = document.getElementById('VerificarBtn');
    var resultado = document.getElementById('resultado');

    VerificarBtn.addEventListener('click', function(event) {
        event.preventDefault();
        var idade = document.getElementById('idade').value;
        
        if (idade === '') {
            resultado.innerHTML = 'Adicione sua idade';
        } else if (idade >= 18) {
            resultado.innerHTML = 'Você é maior de idade';
        } else {
            resultado.innerHTML = 'Você é menor de idade';
        }
    });
});