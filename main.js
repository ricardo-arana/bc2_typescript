"use strict";
(function () {
    class Carro {
        constructor(color, fabricante, modelo, fechaFabricacion) {
            this.color = color;
            this.fabricante = fabricante;
            this.modelo = modelo;
            this.fechaFabricacion = fechaFabricacion;
        }
        obtenerColor() {
            return this.color;
        }
    }
    let auto = new Carro('Azul', 'Nissan', 'Delorian', new Date());
    console.log(auto.obtenerColor());
    console.log(auto.modelo);
})();
