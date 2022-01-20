function limpar () {
    document.getElementById('tela').value ='';   
}

function unir(valor) {
    document.getElementById('tela').value += valor;
}

function calcular() {
    let resultado = 0;
    resultado = document.getElementById('tela').value;
    document.getElementById('tela').value = eval(resultado);
}