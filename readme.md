Esercizio di oggi: FizzBuzz
nome repo: js-fizzbuzz
Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
BONUS:
Crea un container nel DOM , aggiungendo (attraverso la funzione `appendChild()` oppure con la classica concatenazione vista fin'ora) un elemento html con il numero o la stringa corretta da mostrare.


1. Creare un ciclo for per la creazione di numeri da 1 a 100
All'interno del ciclo:
    ? i%3 == 0
        Stampo in console Fizz
    ? i%5 == 0
        Stampo in console Buzz
    ? i%3 == 0 && i%5 == 0
        Stampo in console FizzBuzz
    ; Stampo variabile i