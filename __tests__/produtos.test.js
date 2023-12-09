const { listaProdutos } = require("../fontes/db")
const { salvar, consultar, remove } = require("../fontes/produto")

describe('testando base de produtos',()=>{
    it('Testando de inseriu novo produto',()=>{
        let obj = {descricao:'soja',preco:20, estoque:5} //A -> Arrange
        salvar(obj)   // A -> act
       // expect(listaProdutos.length).toBe(2)
       expect(listaProdutos[1].descricao).toEqual('soja') //A -> assert
    })

    test('Testando se produto soja existe na lista',()=>{   
       expect(consultar('soja')).not.toBeUndefined()
    })

    test('Testando se produto pepino existe na lista',()=>{   
        expect(consultar('pepino')).toBeUndefined()
     })

     test('Testando remover',()=>{ 
        remove(1) 
        expect(consultar('soja')).toBeUndefined()
     })
})