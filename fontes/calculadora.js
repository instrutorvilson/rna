function soma(n1, n2){
    return n1 + n2
}

function subtracao(n1, n2){
    return n1 - n2
}

function divisao(n1, n2){
    if(n2 == 0)
      throw "Não é possivel dividir por zero"
    return n1 / n2
}

module.exports = { soma, subtracao, divisao }