const { soma, subtracao, divisao } = require("../fontes/calculadora");

describe('Realizando testes de calculadora',()=>{
    test('adds 1 + 2 to equal 3', () => {
        expect(soma(1, 2)).toBe(3);
    });

    test('Take 10 - 2 to equal 8', () => {
        expect(subtracao(10, 2)).toBe(8);
    });

    test('Dividir 10 / 2 to equal 5', () => {
        expect(divisao(10, 2)).toBe(5);
    });

    test('Dividir 10 / 0 throw exception', () => {
        //expect(()=>{divisao(10, 0)}).toThrow();
        //expect(()=>{divisao(10, 0)}).toThrow('Não é possivel dividir por zero');
        expect(()=>{divisao(10, 0)}).toThrow(/zero/)
       // expect(()=>{divisao(10, 0)}).not.toThrow('Não é possivel dividir por zero')
        
    });
})
