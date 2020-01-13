const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`

console.log(concatenacao, template)

// Empressoes
console.log(`1 + 1 = ${1 + 1}`)

//Função arrow
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidade')}!`)
