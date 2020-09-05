(function() {

    interface Icarro {
        fechaFabricacion: Date; 
    }

    class Carro implements Icarro{
        fechaFabricacion: Date;
        constructor(private color: string,
                    private fabricante: string,
                    public modelo: string,
                    fechaFabricacion: Date) {
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




