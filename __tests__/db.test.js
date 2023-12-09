const { listaUsuarios } = require('../fontes/db')


describe('Testando base de dados',()=>{
    test('Verificar de user Admin existe',()=>{
        expect(listaUsuarios).toContain('Admin')
    })

    test('Verificar tamanho da lista',()=>{
        expect(listaUsuarios.length).toBe(3)
    })
    
    test('Verificar se inseriu novo registro',()=>{
        listaUsuarios.push('maria')
        expect(listaUsuarios.length).toBe(4)
        expect(listaUsuarios[listaUsuarios.length-1]).toEqual('maria')
    })

})