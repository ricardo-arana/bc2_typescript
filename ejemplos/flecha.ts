(function() {

    function sumar(a: number, b: number) {
        return a + b;
    }

    const sumar2 = function(a: number, b: number) {
        return a + b;
    }

    const sumar3 = (a:number, b:number) => a + b;


    console.log(sumar(2,4));
    console.log(sumar2(4,5));
    console.log(sumar3(4,5));


})();




