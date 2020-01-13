let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)// ! => Negação

// Todos os numeros são true, excecao do 0
console.log('Verdadeiros:')
console.log(!!-1)
console.log(!!2)
console.log(!!' ')
console.log(!!{})
console.log(!![])
console.log(!!Infinity)

console.log('Falsos:')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)

//Mostra o primeiro true
console.log('' || null || 1 || ' ')

//Operacao logica em uma string: determinar um valor padrao
let nome = ''
console.log(nome || 'Desconhecido')