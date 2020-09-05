(function() {

    console.log('inicio ejecución');
    const fuerza_yamcha = 6;
    const fuerza_saibaman = 3;
    const saibamanAutoDes = true;

    const promesa = new Promise(
        (resolve, reject) => {
           setTimeout(() => {
            if( fuerza_yamcha > fuerza_saibaman && !saibamanAutoDes) {
                resolve('Yamcha le gano al saibaman');
            }else {
                reject('Yamcha fue derrotado');
            }
           }, 2000)
        }
    );

    promesa.then((mensaje) => console.log(mensaje))
    .catch(e => console.warn(e));

    console.log('Este linea de código no fue bloqueada por la promesa');

})();




