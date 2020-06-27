/*
* JS e multiparadigma => procedural, OO, funcional.
* {} => forma literal de um objeto
* Objeto => Coleção de chaves e valores
*/
const prod1 = {}
prod1.nome = 'Celular Android'
prod1.preco = 4998.90
prod1['desconto'] = 0.44 // Nao recomendado

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.99,
    obj: {
        propriedade: 1,
        obj: {
            propriedade: 2
        }
    }
}

console.log(prod2)