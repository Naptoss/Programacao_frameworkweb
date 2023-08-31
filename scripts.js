document.addEventListener('DOMContentLoaded', function() {
    var cabecalhosBtn = document.getElementById('cabecalhosBtn');
    var  cabecalho = document.getElementById('cabecalho');
    for(var i = 1; i <= 6; i++) {
        cabecalhosBtn.addEventListener('click', function() {
            event.preventDefault();
            var cabecalho = document.createElement('h' + i);
            cabecalho.innerHTML = 'Cabeçalho ' + i;
            document.body.appendChild(cabecalho);
        });
    }
});













document.addEventListener('DOMContentLoaded', function() {
    var VerificarBtn = document.getElementById('VerificarBtn');
    var resultado = document.getElementById('resultado');
    VerificarBtn.addEventListener('click', function() {
        event.preventDefault();
        var idade = document.getElementById('idade').value;
        if (idade >=18){
            resultado.innerHTML = 'Você é maior de idade';
        } else if (idade  !== null) {
            resultado.innerHTML = 'Adicione sua idade';
        }else {
            resultado.innerHTML = 'Você é menor de idade';
        }

    });
});