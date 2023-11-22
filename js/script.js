// CREO IL CICLO FOR PER NUMERI DA 1 A 100

for(let i=1; i<=100; i++) {

    // CREO LA MODIFICA IN CONSOLE PER I MULTIPLI DI 3
    if(i%3 == 0) {
        console.log('Fizz');
    }

    // CREO LA MODIFICA IN CONSOLE PER I MULTIPLI DI 5
    else if(i%5 == 0) {
        console.log('Buzz');
    }

    // CREO LA MODIFICA IN CONSOLE PER I MULTIPLI DI 3 E DI 5
    else if(i%3 == 0 && i%5 == 0) {
        console.log('FizzBuzz');
    }

    else {
        console.log(i)
    }

}

