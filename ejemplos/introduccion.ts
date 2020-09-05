(function() {

    function saludar(nombre: string) {
        console.log('Hola, ' + nombre);
    }

    var persona = {name: 'Ricardo'};

    saludar(persona.name);
    saludar('clase');
})();
