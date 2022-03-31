function Converter() {
    var chkDolar = document.getElementById("dolar-button");
    var chkEuro = document.getElementById("euro-button");
    var chkYen = document.getElementById("yen-button");
    var chkBitcoin = document.getElementById("bitcoin-button");
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorCotacao = parseFloat(valor);
    var bitcoin = 225765.71;

    if (chkDolar.checked) {
        var valorEmReal = valorCotacao * 4.76
    }
    if (chkEuro.checked) {
        var valorEmReal = valorCotacao * 5.28
    }

    if (chkYen.checked) {
        var valorEmReal = valorCotacao * 0.039
    }

    if (chkBitcoin.checked) {
        var valorEmReal = valorCotacao * bitcoin
    }

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em real é R$ " + valorEmReal.toFixed(2);
    
    elementoValorConvertido.innerHTML = valorConvertido;
    console.log(valorEmReal);
}