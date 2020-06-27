/*
* 3 formas de delimitar uma string
* aspas simples, aspas duplas e símbolo da crase (template string)
*/

const escola = "Cod3r"

//indice do caracter da string
console.log(escola.charAt(4))
//Não gera erro
console.log("'"+escola.charAt(7)+"'")
//Caracter em unicode
console.log(escola.charCodeAt(3))
// Verificar se existe uma string, retornar a posição
console.log(escola.indexOf('3'))

//Indice 1 em diante
console.log(escola.substring(1))
//Indice 0 até 3
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!"))
console.log(escola.replace(3, 'e'))
//Expressão regular: substituir todos os números
console.log(escola.replace(/\d/, 'e'))

//Converter uma string para um array
console.log('Ana,Maria,Pedro'.split(','))