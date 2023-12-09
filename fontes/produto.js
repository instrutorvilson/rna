const { listaProdutos } = require('./db')

function salvar(prod){
   listaProdutos.push(prod)
}

function remove(index){
    listaProdutos.splice(index,1)
}

function consultar(descricao){
   for(let i = 0; i < listaProdutos.length; i++){
       if(listaProdutos[i].descricao == descricao){
         return listaProdutos[i]
       }
   }
   return undefined
}

module.exports = { salvar, remove, consultar }