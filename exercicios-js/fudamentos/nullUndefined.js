/*
    null => Ausência de valor.
    undefined => Quando não foi atribuido nenhum valor a variavel.

    Atribuições: Por valor e por referencia.

    Atribuição por referencia (objetos e funções):
    const a = {name: 'Teste'}
    Fica armazenado o endereço. 'a' aponta para o objeto
    const b = a
    Armazena o endereço que está em 'a'

    Tipos primitivos é realizado a copia do valor:
    const a = 3
    const b = a
*/
// undefined => Variável não foi inicializada
let valor
console.log(valor)

// is not defined -> ainda não foi defnido
// console.log(valor2)

// ausência de valor, foi definida! Foi inicializada
// Usada em objetos e funções
valor = null
console.log(valor)

const produto = {}
console.log(produto.preco) // undefined
// Cannot read property 'a' of undefined
// console.log(produto.preco.a)

produto.preco = 3.50
console.log(produto.preco)

produto.preco = undefined // Evitar atribuir
console.log(!!produto.preco) // false
console.log(produto)
delete produto.preco
console.log(produto)

produto.preco = null // sem preco
console.log(!!produto.preco)
console.log(produto)