/*
    Tratamento de erro. Como se pode lancar uma excecao

    Try e um bloco de codigo, dentro possui um codigo que podera
    gerar um erro.
    Catch e um bloco de codigo que sera executado quando for lancado
    um erro em try.
    Finally sera executando sempre que terminar a execucao, com ou
    sem erro.
*/

function tratarError(erro) {
    // Lancar
    throw new Error('...');
}

function imprimir(obj) {    
    try {
        console.log(obj.name.toUpperCase() + '!!!');
    } catch (e) {
        tratarError(e);
    } finally {
        console.log('final');
    }
}

const obj = { nome: 'Roberto' };
imprimir(obj);