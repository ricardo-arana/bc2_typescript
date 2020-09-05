(function() {

    const viajero = {
        nombre: 'Jonas',
        epoca: 2019,
        familia: 'Kahnwald'
    }

    const extraer = ({nombre: name, epoca}: any) => {
        console.log('nombre: ' + name);
        console.log('epoca: ' + epoca);
        // console.log('Familia: ' + familia);
    }

    extraer(viajero);

    const viajeros: string[] = ['Jonas', 'Ulrich', 'Claudia'];

    const [ , , tercero] = viajeros;

    // console.log(primero);
    // console.log(segundo);
    // console.log(tercero);

    const extraerArreglo = ([,,tercero]: string[]) => console.log(tercero)
    extraerArreglo(viajeros);


})();




