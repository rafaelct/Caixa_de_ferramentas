
class Cronometro {

    constructor() {
        this.time = "";
        this.timeini = "";
        this.timefim = "";
        this.resultado = "";
    }

    inicio() {
        this.time = new Date();
        this.timeini = this.time.getTime();
    }

    fim() {
        this.time = new Date();
        this.timefim = this.time.getTime();
        this.resultado = this.timefim - this.timeini;

    }

    resultadotempo() {
        return this.resultado;
    }
    
}

module.exports = Cronometro;
