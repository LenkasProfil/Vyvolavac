let jmena = [
    "Markéta",
    "Kateřina",
    "Júlia",
    "Lucie",
    "Aneta",
    "Veronika",
    "Petra",
    "Olga",
    "Naďa",
    "Nikola",
    "Eva",
    "Anísa",
    "Terezia",
    "Diana",
    "Anna",
    "Iva",
    "Denisa",
    "Zuzana",
    "Jana",
    "Martina",
    "Lenka",
    "Iveta",
    "Pavla",
    "Lucie",
    "Kamila",
    "Soňa"
];

let tazenaJmena = [];                                       //let se muze meni, var by se nemel menit
let vytazeneJmeno = "";
var tahnuteJmeno = document.getElementById("vyherka");
var button = document.getElementById("button");
var seznam = document.getElementById("seznam");

function rng(){
    return (randomNumberX = Math.floor(Math.random() * (jmena.length - 0))); // rng vytazeni indexu z jmena (delka az 0 (max min))
}

function tahnoutJmeno() {
    let index = rng()
    vytazeneJmeno = jmena[index]
    tazenaJmena.push(vytazeneJmeno)
    // console.log('cislo', rng())
    jmena.splice(index, 1)
    tahnuteJmeno.innerHTML = vytazeneJmeno
    console.log(vytazeneJmeno)
    console.log('list', jmena.length)
    console.log('druhy list', tazenaJmena.length)
    seznam.innerHTML = tazenaJmena



    if (jmena.length === 0) {
        tahnuteJmeno.innerHTML = 'vsichni byli vyvolani'
        button.disabled = true
    }

    // Generujeme náhodný index

    // Získáme výherní jméno na patřičném indexu

    // Vyřadíme vylosované jméno z osudí

    // Výherní jméno si uložíme do pole k ostatním výherním
    
}