cronometro = require('./cronometro');

function espera() {
    crono.fim();
    console.log('Resultado: '+crono.resultadotempo());
}
let crono = new cronometro();

crono.inicio();

setTimeout(espera,600);

//crono.fim();



