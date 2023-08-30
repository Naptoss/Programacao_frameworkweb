document.addEventListener('DOMContentLoaded', function() {
    var VerificarBtn = document.getElementById('VerificarBtn');
    var resultado = document.getElementById('resultado');

    VerificarBtn.addEventListener('click', function() {
        var idade = document.getElementById('idade').value;
            
        if (idade >=18){
            resultado.innerHTML = 'Você é maior de idade';
        
        } else {
            resultado.innerHTML = 'Você é menor de idade';
        }
    });
});