(function() {

    interface Viajero {
        nombre: string;
        edad: number;
        dni?: string;
    }

    interface Moderador {
        jefe: string;
    }
    
    const viajero: Viajero | Moderador = 
    {
        nombre: 'Jonas',
        edad: 17,
        dni: '23424',
        jefe: 'Victor'
    }

    function viajar(viajero: Viajero) {
        console.log(viajero.nombre)
    }
})();




