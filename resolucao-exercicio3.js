/*Uma comerciante comprou alguns produtos e quer revender com lucro de 45% se o valor da compra foi menor que 20 reais. 
Caso contrário, o lucro será de 30%. O valor deve ser passado para o programa que deverá retornar o valor da venda.
 */
 let valorDaCompra = 14
 if (valorDaCompra < 20) { console.log (valorDaCompra + (valorDaCompra * 0.45))}
else {
    if (valorDaCompra > 20) {console.log (valorDaCompra + (valorDaCompra * 0.30))}
}