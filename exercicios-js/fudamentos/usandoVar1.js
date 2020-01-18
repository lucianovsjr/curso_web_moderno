/*
* Escopo -> Local onde a variavel e visivel/acessivel
* E possivel acessar a variavel var fora do bloco que foi definida
* desde que nao esteja dentro de uma funcao.
* Variavel 'var' criada fora de uma funcao e global.
*/
{{{{ var sera = 'Será???'; }}}}
console.log(sera);

function teste() {
    var local = 123;
    console.log(local);
}
// var definido dentro de uma funcao nao estará acessivel fora.
// Acessivel somente no escopo da funcao.
// console.log(local);