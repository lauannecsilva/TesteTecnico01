var numeroInteiro = prompt("Por favor, informe um número positivo")
var resultado = 0
numeroInteiro= parseInt(numeroInteiro)

if(numeroInteiro > 0 ){
    for (var numero = 0; numero < numeroInteiro; numero++) {
            if(numero % 3 == 0 || numero % 5 == 0 ){
                resultado = resultado + numero
            }
    }
            window.alert(resultado)
}else{
    window.alert("O número informado não é positivo.")
}


