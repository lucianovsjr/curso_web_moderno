console.log(typeof console);
console.log(Math.ceil(6.1));

const obj1 = {};
obj1.nome = 'Bola';
//obj1['nome'] = 'Bola';
console.log(obj1.nome);

function Obj(nome) {
    //Visivel fora da funcao
    this.nome = nome;
    this.exec = function() {
        console.log('Exec... ', this.nome);
    };
}

const obj2 = new Obj('Cadeira');
const obj3 = new Obj('Mesa');

console.log(obj2.nome);
console.log(obj3.nome);

obj2.exec();
obj3.exec();