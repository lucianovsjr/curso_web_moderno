/*
* Arrays sao heterogeneos: multiplos tipos de dados
* Ideal e ter um array com um unico tipo de dado
*/
const valores = [7.7, 8.9, 6.3, 9.2]

console.log(valores[0], valores[3])
//Acessar um elemento que nao existe => undefined
console.log(valores[4])

valores[4] = 10
console.log(valores[4])

//Incluir item fora da ordem, itens ficarao vazios
valores[6] = 10
console.log(valores) // <1 empty item>
console.log(valores[5]) // undefined

console.log(valores.length)

//Add elementos
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

// Pega o ultimo valor e remove
console.log(valores.pop())
console.log(valores)

//Caso exista elementos posteriores, ficara vazio
delete valores[0]
console.log(valores)

//Array em js e object
console.log(typeof valores)