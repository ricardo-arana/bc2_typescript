(function() {

    function viajar(persona: string, epoca?: string, maquina: string = 'una maquina del tiempo' ): void {
        if(epoca) {
            console.log(`${persona} viajo al año ${epoca} con ${maquina}`);
        } else {
            console.log(`${persona} viajo en el tiempo con ${maquina}`);
        }
        
    }


    viajar('Jonas'); // no lo quiero tocar
    viajar('Ulrich', '1953'); // necesito agrega esto
    viajar('Claudia', '1953', 'una cueva');
})();