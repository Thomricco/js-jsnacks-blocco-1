let numberList = [];
for (let i = 0; i < 10; i++) {
    numberList[i] = parseInt(prompt('Inserisci un numero'));
    // numberList.push(parseInt(prompt('Inserisci un numero')));
}

console.log("numberList" + numberList);

let totale;
for (let i = 0; i < numberList.length; i++) {
    totale = numberList[i] + totale;
}

console.log('il totale è:' + totale)


//il software deve chiedere per 10 volte all’utente di inserire un numero. 
//Il programma stampa la somma di tutti i numeri inseriti 
//Math javascript pow(potenza)