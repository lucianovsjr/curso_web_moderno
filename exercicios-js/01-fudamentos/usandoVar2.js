var numero = 1;
{
    var numero = 2;
    console.log('numero dentro = ', numero);
}
console.log('numero fora =', numero);

var numero2 = 0;
console.log('numero2 fora =', numero2);

function teste() {
    var numero2 = 10;
    console.log('numero2 dentro = ', numero2);
}

teste();
console.log('numero2 fora =', numero2);