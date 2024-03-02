/*
//u konzoli pise tekst, izvrsava operacije (true...), pokazuje gresku, pokazuje upozorenje

//console.log('Pozdrav iz konzole')
//console.log(5===6)
//console.error('Pozdrav iz konzole')
//console.warn('Pozdrav iz konzole')

//upisuje direktno na stranicu tekst,ili preko ID tekst ili operaciju
document.write('Pozdrav sa stranice')
//document.getElementById('poruka').innerText = 'Pozdrav!!!'

//pokazuje pop-up prozor sa porukom,otvara novi prozor...
//window.alert('Pozdrav iz Popup-a')
//window.open()

//deklaracija varijable
 let recenica;
 let ime = "Miki";
 //dajemo joj vrednost (moze i u prvom koraku)-inicijalizacija
 recenica = 'sada vezbam :)'
 console.log (recenica);

 //let godine = 5;
 let godine = '5';
 console.log(godine);

 let mesec = 3;
 let rezultat = godine + mesec
 //1. vrsi sabiranje brojeva (int, float...) 2. konkatenacija jer je '5' String
  console.log (rezultat);
  //provera tipa podataka
  console.log(typeof(godine));
  //pretvaramo String u int
  godine = parseInt(godine);
  console.log(typeof(godine));
  let rezultat1 = godine + mesec
  console.log (rezultat1);
  
  recenica = `${ime} `+recenica;
  console.log (recenica);
*/

      //PETLJE
 // let novcanice = [200, 100, 5, 20, 50];
  //let broj_novcanica = novcanice.length;
  //let ukupno_novca = 0;

 // for (let brojac = 0; brojac < broj_novcanica; brojac++) {
 //for (let brojac in novcanice){
  //for(let novcanica of novcanice){
    //console.log(novcanica);

        //console.log (brojac);
        //console.log(novcanice[brojac]);
        //console.log('----------')

    //ukupno_novca += novcanice[brojac];    
  //}
  //console.log('### KRAJ PETLJE ###')

  //console.log('Ukupno imamo:' + ukupno_novca + 'eura.');

  /*
  automobili.forEach(function(automobil){
    console.log(automobil);
  });*/


       //OBJEKTI
 /* let automobili = {
    audi: ['50000', '2017', 'Q7'],
    bmw: ['60000','2018', '330D'],
    mercedes: ['70000', '2019', 'S400']
 };

  for(automobil in automobili) {
  let naziv = automobil;
  let podaci_vozilu = automobili[automobil];

  console.log (`${naziv} model: ${podaci_vozilu[2]},
  godiste: ${podaci_vozilu[1]}
  cena: ${podaci_vozilu[0]} eura.`);
 
}*/

//console.log(automobili.bmw);

/*
      //FUNKCIJE
let nekretnine = {
  stan: 70000,
  kuca: 150000,
  plac: 30000
};

//Proracun za stan na 15 godina
racunanje_mesecne_rate(15, 'stan');

//Proracun za plac na 5 godina
racunanje_mesecne_rate(5, 'plac');

//Proracun za kucu na 20 godina
racunanje_mesecne_rate(20, 'kuca');

function racunanje_mesecne_rate(godine, vrsta_nekretnina){
  let meseci = godine * 12;
  let rata = nekretnine[vrsta_nekretnina] / meseci;
  rata = rata.toFixed(2);

  console.log ('-----------------');
  //console.log (meseci + ' meseci.');
  //console.log (rata + ' eura.');
  console.log (`Mesecna rata za ${vrsta_nekretnina} iznosi ${rata} eura na ${godine} godina.`);
}


function pokreniMe(dugme){
  let nazivDugmeta = dugme.innerText;
  let klasaDugmeta = dugme.className;
  

  let poruka = document.querySelector('#pisace');
  poruka.innerText = nazivDugmeta + ' - ' + klasaDugmeta;
  
}
*/

      //RUKOVANJE ELEMENTIMA
  /*
      let brend = document.getElementsByTagName('span');

  for (let auto of brend) {
    console.log(auto.innerText);
  }
  console.log('-------------------');


  let modeli = document.getElementsByClassName('automobil-model');

  for (let model of modeli) {
    console.log(model.innerText);
  }
  console.log ('-------------------');


  let najbolji = document.getElementById('recenica');

  console.log(najbolji.innerText);  
  console.log ('-------------------');
  */
  
      //QUERY SELECTOR
/*
  let brend = document.querySelectorAll('span');

  for (let auto of brend) {
    console.log(auto.innerText);
  }

  console.log ('-------------------');

  let modeli = document.querySelectorAll('.automobil-model');

  for (let model of modeli) {
    console.log(model.innerText);
  }
  console.log ('-------------------');

  let recenica = document.querySelector('#recenica');

  console.log(recenica.innerText); 
  */


  //BRISANJE IZ HTML-a PREKO JS
  let recenica = document.querySelector('#recenica');
  recenica.remove();

  //DODAVANJE NOVOG ELEMENTA
  let novi_el = document.createElement('div');//Formiramo novi element 
  novi_el.classList = 'novi - element'; //Dodajemo klasu
  novi_el.innerHTML = '<hr>Pozdrav!!!!'//Dodajemo HTML i text

  let body = document.querySelector('body');//Selektujemo Body tag
  body.appendChild(novi_el);//Na kraju Body taga dodajemo nas novi element

