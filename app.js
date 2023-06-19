const ained = JSON.parse('{"H₂O":{"sulamispunkt":0.0,"sulamissoojus":333000.0,"tihedus":998.3,"erisoojusT":2050.0,"erisoojusV":4183.0,"piirTemp":100.0,"liik":"×","allikad":[1,2,8,0]},"Tellised":{"sulamispunkt":null,"sulamissoojus":null,"tihedus":1800.0,"erisoojusT":840.0,"erisoojusV":null,"piirTemp":null,"liik":"×","allikad":[2,0,0,0]},"Betoon":{"sulamispunkt":null,"sulamissoojus":null,"tihedus":2200.0,"erisoojusT":879.0,"erisoojusV":null,"piirTemp":null,"liik":"×","allikad":[2,0,0,0]},"Graniit":{"sulamispunkt":null,"sulamissoojus":null,"tihedus":2750.0,"erisoojusT":892.0,"erisoojusV":null,"piirTemp":null,"liik":"×","allikad":[2,0,0,0]},"Grafiit C":{"sulamispunkt":3527.0,"sulamissoojus":null,"tihedus":2200.0,"erisoojusT":609.0,"erisoojusV":null,"piirTemp":null,"liik":"×","allikad":[2,4,0,0]},"Lubjakivi":{"sulamispunkt":null,"sulamissoojus":null,"tihedus":2500.0,"erisoojusT":741.0,"erisoojusV":null,"piirTemp":null,"liik":"×","allikad":[2,0,0,0]},"Liivakivi":{"sulamispunkt":null,"sulamissoojus":null,"tihedus":2200.0,"erisoojusT":710.0,"erisoojusV":null,"piirTemp":null,"liik":"×","allikad":[2,0,0,0]},"Parafiinivaha":{"sulamispunkt":32.0,"sulamissoojus":251000.0,"tihedus":916.0,"erisoojusT":1920.0,"erisoojusV":3260.0,"piirTemp":370.0,"liik":"o","allikad":[8,2,6,13]},"PEG 900":{"sulamispunkt":34.0,"sulamissoojus":150500.0,"tihedus":1150.0,"erisoojusT":2260.0,"erisoojusV":2260.0,"piirTemp":250.0,"liik":"o","allikad":[8,9,0,0]},"Laurhape":{"sulamispunkt":42.0,"sulamissoojus":211600.0,"tihedus":900.0,"erisoojusT":1760.0,"erisoojusV":2270.0,"piirTemp":298.0,"liik":"o","allikad":[8,7,1,0]},"Er\u00fctritool":{"sulamispunkt":117.7,"sulamissoojus":339800.0,"tihedus":1450.0,"erisoojusT":2250.0,"erisoojusV":2610.0,"piirTemp":330.0,"liik":"o","allikad":[8,7,10,0]},"Oktadekaan":{"sulamispunkt":27.7,"sulamissoojus":243500.0,"tihedus":785.0,"erisoojusT":2140.0,"erisoojusV":2660.0,"piirTemp":308.5,"liik":"o","allikad":[8,7,0,0]},"Al":{"sulamispunkt":660.0,"sulamissoojus":396000.0,"tihedus":2700.0,"erisoojusT":945.0,"erisoojusV":1180.0,"piirTemp":2470.0,"liik":"m","allikad":[2,4,11,12]},"Cu":{"sulamispunkt":1084.0,"sulamissoojus":206000.0,"tihedus":8300.0,"erisoojusT":419.0,"erisoojusV":490.0,"piirTemp":2575.0,"liik":"m","allikad":[2,4,11,12]},"Fe":{"sulamispunkt":1538.0,"sulamissoojus":247000.0,"tihedus":7850.0,"erisoojusT":465.0,"erisoojusV":820.0,"piirTemp":2870.0,"liik":"m","allikad":[2,0,11,12]},"Pb":{"sulamispunkt":328.0,"sulamissoojus":23000.0,"tihedus":11340.0,"erisoojusT":131.0,"erisoojusV":140.0,"piirTemp":1750.0,"liik":"m","allikad":[2,4,11,12]},"Na":{"sulamispunkt":98.0,"sulamissoojus":113000.0,"tihedus":930.0,"erisoojusT":1360.0,"erisoojusV":1380.0,"piirTemp":884.0,"liik":"m","allikad":[14,15,0,0]},"Zn":{"sulamispunkt":419.0,"sulamissoojus":112000.0,"tihedus":6760.0,"erisoojusT":450.0,"erisoojusV":480.0,"piirTemp":910.0,"liik":"m","allikad":[14,15,0,0]},"CaCl₂×6H₂O":{"sulamispunkt":29.9,"sulamissoojus":187000.0,"tihedus":1530.0,"erisoojusT":1400.0,"erisoojusV":2200.0,"piirTemp":122.0,"liik":"h","allikad":[8,17,0,0]},"CH₃COONa×3H₂O":{"sulamispunkt":58.0,"sulamissoojus":250000.0,"tihedus":1280.0,"erisoojusT":2100.0,"erisoojusV":3000.0,"piirTemp":123.0,"liik":"h","allikad":[14,16,0,0]},"NaNO₃":{"sulamispunkt":306.0,"sulamissoojus":175000.0,"tihedus":1910.0,"erisoojusT":1660.0,"erisoojusV":1660.0,"piirTemp":380.0,"liik":"s","allikad":[14,18,0,0]},"KNO₃":{"sulamispunkt":330.0,"sulamissoojus":266000.0,"tihedus":2110.0,"erisoojusT":1220.0,"erisoojusV":1220.0,"piirTemp":400.0,"liik":"s","allikad":[8,18,0,0]}}');
// NB! convert.py lisab automaatselt esimesele reale ainete andmed
const aineteNim = Object.keys(ained);
var valitudAine;
var ühik = {};
var mõõduTüüp;
var paagiKuju;
var arvutatav;
var eelmineArvutatav;
var sisestatudAndmed = {};
var tulemused = {};
var chart;

function lae_andmed(){// Kõik, mis peab toimuma, kui leht avaneb
  lisaAined();
  näita('.fc2');// Teeb nähtavaks kõigi andmesisestusplokkide pealkirjad
  laePilt();

  var selectid = document.querySelectorAll('select');// Teeb masiivi kõikidest "select" elementidest
  var event = new Event('change');
  selectid.forEach(sl => {sl.dispatchEvent(event)});// Paneb kõik "select" elemendid käivitama enda "onchange" funktsiooni, et ekraanil kuvatavad väljad oleksid õiged
}

function lisaAined(){// Täidab ainete valiku menüü andmebaasis olevate ainete nimedega
  var mv = document.getElementById("materjal");//https://stackoverflow.com/questions/9895082/javascript-populate-drop-down-list-with-array
  aineteNim.forEach((element) => {
    var el = document.createElement("option");
    el.text = element;
    el.value = element;

    mv.add(el);
  });
}

function täidaAndmetabel(){// Täidab "ainete andmebaasi" lehel oleva tabeli andmetega
  function ainetüübid(tähis){
    switch(tähis){
      case 'o':
        return 'orgaaniline';
      case 'h':
        return 'hüdraat';
      case 'm':
        return 'metall';
      case 's':
        return 'sool';
      case 'a':
        return 'hape/alus';
      case '×':
        return 'muu';
    }
  }
  function etteValmistus(väärtus, jaga = 1){
    if (väärtus === null){
      return '-';
    }
    else{
      return väärtus/jaga;
    }
  }
  function viiteVormistus(aine){
    let vastus = '';
    let {allikad} = ained[aine];
    allikad.sort((a, b) => {return a - b});
    allikad.forEach(a => {
      if (a){
        vastus += (a + '; ');
      }
    });
    vastus = vastus.slice(0, -2);
    return vastus;
  }
  let tabel = document.getElementById("andmetabeliSisu");
  let sisu = '';
  aineteNim.forEach(nimi =>{
    sisu += `
    <tr>
      <td class="w3-left-align">${nimi}</td>
      <td>${etteValmistus(ained[nimi].sulamispunkt)}</td>
      <td>${etteValmistus(ained[nimi].sulamissoojus, 1000)}</td>
      <td>${etteValmistus(ained[nimi].tihedus)}</td>
      <td>${etteValmistus(ained[nimi].erisoojusT, 1000)}</td>
      <td>${etteValmistus(ained[nimi].erisoojusV, 1000)}</td>
      <td>${etteValmistus(ained[nimi].piirTemp)}</td>
      <td>${ainetüübid(ained[nimi].liik)}</td>
      <td class="w3-right-align">${viiteVormistus(nimi)}</td>
    </tr>
    `;
  });//https://www.youtube.com/watch?v=eS-FVnhjvEQ 
  tabel.innerHTML = sisu;
  allikaVormistus();
}

function allikaVormistus(){// Kuna kõigile kasutatud allikate nimekirjas olevatele linkidele ühede ja samade atribuutide käsitsi lisamine oleks tüütu ja võtaks HTML-is palju ruumi, siis see funktsioon lisab need kõigele korraga
  var lingid = document.querySelectorAll('#allikad a');
  lingid.forEach(link => {
    link.setAttribute("target", "_blank");// Panab lingitu avanema uuel lehel
    link.setAttribute("rel", "external");// Annab brauserile märku, et lingitu ei ole osa samast veebilehest
    link.classList.add("w3-hover-text-orange");
  });
}

function peida(klass){// Kuna tuli tihti ette, et kõik mingi klassi elemendid on vaja nähtamatuks muuta, tegin selleks funktsiooni
  const väljad = document.querySelectorAll(klass);
  väljad.forEach(väli => {väli.style.display = 'none';});
}

function näita(klass){// Eelmise funktsiooni paariline, mis muudab kõik nähtavaks
  const väljad = document.querySelectorAll(klass);
  väljad.forEach(väli => {väli.style.display = 'block';});
}

function valiAine(valik){// Funktsioon, mis paneb siis kui kasutaja menüüst mõne aine valib, selle andmed muutujasse "valitudAine"
  valitudAine = ained[valik.value];
  valitudAine.nimi = valik.value;
}

function laePilt(){// Kuvab vajaliku pildi ja mõõtmete sisestamis väljad
  paagiKuju = document.getElementById("kuju").value;
  document.getElementById("joonis").src= `images/${paagiKuju}.png`;

  peida(".mõõtmed");
  
  if (paagiKuju === "Risttahukas"){
    document.getElementById("abc").style.display = "block";
  } else if (paagiKuju === "Kera"){
    document.getElementById("d1").style.display = "block";
  } else {
    document.getElementById("d1").style.display = "block";
    document.getElementById("h1").style.display = "block";
  }

}

function avaInfo(valik, nupp) {// Funktsioon, mis avab peale arvutusrežiimi valikut vastava infoteksti ja värvib valitud režiimi nuppu oranžiks, et näidata, et see on valitud
  var x = document.getElementsByClassName("info");// Selgitavat teksti sisaldavad plokid
  var y = document.getElementsByClassName("arvutusV");// Arvutusrežiimi nupud
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none"; // Kõige peitmine
    y[i].className = y[i].className.replace( /(?:^|\s)w3-orange(?!\S)/g , '' ); // Oranži värvi eemaldamine
  }
  document.getElementById(valik).style.display = "block"; // Vajaliku info nähtavaks tegemine
  document.getElementById("peidaInfo").style.display = "block"; // Info all asuva peitmis nuppu nähtavale toomine
  nupp.className += " w3-orange";// Vajutatud nuppu oranžiks värvimine

  document.getElementById('loogika_err').style.display = 'none';// Peida veateade, kui see nähtav on
  avaSisestus(valik);
}

function avaSisestus(otsitav){// Funktsioon, mis teeb nähtavaks need andmete sisestus lahtrid, mida on valitud režiimis vaja ja peidab ülejäänud
  const klassid = ['.energiakogus', '.paagiMaht', '.materjal'];
  const valikud = ['Palju soojust saab salvestada?', 'Kui suurt paaki vaja on?', 'Millist materjali kasutada?']

  for (var i = 0; i < valikud.length; i++) {
    if (otsitav === valikud[i]){
      arvutatav = klassid[i];
    }
    else {
      peida(klassid[i]);
    }
  }

  näita(arvutatav);
  // Kindlustab selle, et näha oleks neid sisestuslahterid, mis valikumenüüde põhjal olema peaksid.
  var selectid = document.querySelectorAll('select');
  selectid.forEach(sl => {
    if ((sl.outerHTML.includes('onchange="uuendaVälju(this)"'))){
      if (sl.parentElement.style.display != 'none'){
        uuendaVälju(sl);
      }
    }
  });

  document.getElementById('tulemused').style.display = 'none';// Peidab vanad tulemused
}

function suleInfo(nupp) {// Funktsioon, mis peidab info välja, selle alumises servas oleva nuppu vajutamisel
  peida(".info");
  nupp.parentElement.style.display = "none"
}

function uuendaVälju(sisnd){// Funktsioon, mis muudab seda, millised andmete sisestamise lahtrid näha on, kui mõnda vastavatest menüüdest kasutatakse
  var v = sisnd.value.split('+');

  for (i = 0; i < sisnd.length; i++) {
    let väljad = sisnd[i].value.split('+');
    väljad.forEach(id => {document.getElementById(id).style.display = "none";});
  }
  v.forEach(id => {document.getElementById(id).style.display = "block";});

}

function ühikud(el){// Salvestab ühikud "ühik" objekti, kui mõnda ühikut muudetakse
  id = el.getAttribute("id");
  ühik[id] = el.value;
  mõjutatudVäärtusteKontroll(id);
}

function mõjutatudVäärtusteKontroll(muudetu){// Kuna see, kui suur võib mõne sisendi väärtus olla sõltub selle ühhikust, tuleb peale ühiku muutmist käivitada vastavate väljade kontroll
  var event = new Event('change');
  switch (muudetu){
    case 'pikkusÜhik':
      switch (paagiKuju){
        case 'Risttahukas':
          document.getElementById("a").dispatchEvent(event);
          document.getElementById("b").dispatchEvent(event);
          document.getElementById("c").dispatchEvent(event);
          break;
        case 'Silinder':
        case 'Ü.silinder':
          document.getElementById("h").dispatchEvent(event);
        case 'Kera':
          document.getElementById("d").dispatchEvent(event);
          break;
      }
      break;

    case 'paksusÜhik':
      document.getElementById("p").dispatchEvent(event);
      break;

    case 'võimsuseÜhik':
      document.getElementById("P").dispatchEvent(event);
      break;

    case 'ajaÜhik':
      document.getElementById("aeg").dispatchEvent(event);
      break;

    case 'energiaÜhik':
      document.getElementById("E").dispatchEvent(event);
      break;
  }
}

function valiTüüp(el){// Salvestab selle, kas tegemist on sise või välismõõtmetega muutujasse "mõõduTüüp"
 mõõduTüüp = el.value;
}

function kontroll(liik,kontrollitav){// Kontrollib, et sisestatud väärtused oleksid arvud ja jääksid mõistlikesse piiridesse
  var piirid = [0, 10000];
  var teated = ["Liiga väike arv!", "Liiga suur arv!"];

  var v = Number(kontrollitav.value.replace(',', '.'));// Et aktsepteeeriks nii punkti kui koma
  var errEl = kontrollitav.nextElementSibling;
  while (!errEl.classList.contains('err')){
    errEl = errEl.nextElementSibling;
  }
  var err = false;

  switch (liik){
    case 'temp':
      piirid = [-273.15, 3000];
      teated = ["Temperatuur ei saa olla madalam kui absoluutne null (" + piirid[0] + "°C ehk 0°K)!", "Valdav enamus matejale sulab alla " + piirid[1] + "°C! See kalkulaator ei ole nii eksteemsete tingimuste jaoks mõeldud."];
      break;
    case 'mõõt':
      piirid = [0, 1000];
      v = teisenda(v, ühik.pikkusÜhik, 'm');
      teated = ["Mahuti mõõtmed ei saa olla negatiivsed!", "See tundub väga ebarealistlik!"];
      break;
    case 'paksus':
      piirid = [0, 100];
      v = teisenda(v, ühik.paksusÜhik, 'm');
      teated = ["Isolatsiooni paksus ei saa olla negatiivne!", "See tundub väga ebarealistlik!"];
      break;
    case '%':
      piirid = [0, 100];
      teated = ["See peab olema midagi suuremat kui 0%", "Ei tundu erii mõistlik minna üle 100%"];
      break;
    case 'soojusjuhtivusT':
      piirid = [0, 450];
      teated = ["Soojusjuhtivustegur ei saa olla negatiivne!", "See pole küll võimaltult suur, aga väga ebatõenäoline!"];
      break;
    case 'võimsus':
      piirid = [0, 10000000];
      v = teisenda(v, ühik.võimsuseÜhik, 'W');
      teated = ["Tehniliset võib võimsus olla negatiivne, kui see programm sellist võimalust ei toeta.", "See pole küll võimatult suur, aga väljaspool selle rakenduse võimekust!"];
      break;
    case 'aeg':
      piirid = [10, 100000000];
      v = teisenda(v, ühik.ajaÜhik, 's');
      teated = ["Aeg peab olema vähemalt 10 sekundit!", "See pole küll võimatult suur, aga väljaspool selle rakenduse võimekust!"];
      break;
    case 'energia':
      piirid = [0, 1000000000];
      v = teisenda(v, ühik.energiaÜhik, 'J');
      teated = ["Energia ei saa olla negatiivne!", "See pole küll võimatult suur, aga väljaspool selle rakenduse võimekust!"];
      break;
  }
  

  if (isNaN(v)){// Kui sisestati midagi muud kui arv
    err = "Sellele väljale saab sisestada ainult arve!";
  }
  else if (v < piirid[0]){// Kui sisestati liiga väike arv
    err = teated[0];
  }
  else if (v > piirid[1]){// Kui sisestati liiga suur arv
    err = teated[1];
  }

  if (err){
    errEl.innerHTML = err;
    errEl.style.display = "block";
  }
  else {
    errEl.style.display = "none";
  }
}

function peidaErr(elemendid){// Peidab veateate, ja eemaldab elementidelt veataete peitmise funktsiooni
  document.getElementById("loogika_err").style.display = 'none';
  elemendid.forEach(el => {document.getElementById(el).removeAttribute('oninput')});
}

function loogikaKontroll(){// Kontrollib, kas sisestatud andmed on üheskoos loogilised
  function kuvaErr(sõnum, stiil = "block"){// Kuvab veateate arvutusnuppu ja andmesisestusplokkide vahel, või peidab selle
    errEl = document.getElementById("loogika_err");
    errEl.innerHTML = sõnum;
    errEl.style.display = stiil;
  }

  function lisaPeidaErr(elemendid){// Lisab veateate peitmise funktsiooni neile elementidele, mille väärtusega teade seotud on
    let funk = `peidaErr([`;
    elemendid.forEach(el => {funk += `'${el}',`});
    funk = funk.slice(0, -1);
    funk += `])`;
    elemendid.forEach(el => {document.getElementById(el).setAttribute('oninput',funk)});
  }

  if (arvutatav == undefined){
    kuvaErr('Enne valige mida arvutada!');
    return true;
  }
  var sisestatu = Object.keys(sisestatudAndmed);
  if (!(sisestatu.includes('min_temp') && sisestatu.includes('max_temp'))){// Ükskõik, mida arvutatakse, on vaja maksimum- ja miinimumtemperatuuri
    kuvaErr('Temperatuuriandmed on puudulikud!');
    lisaPeidaErr(['max_temp', 'min_temp']);
    return true;
  }
  if (arvutatav === '.paagiMaht'){// Kui arvutatakse mahtu, siis peab lisaks temperatuuridele olema kas energiakogus või aeg ja võimsus
    if (document.getElementById("E/P&aeg").value === "Energia hulk"){
      if (!sisestatu.includes('E')){
        kuvaErr('Palun sisestage salvestatav energia kogus!');
        lisaPeidaErr(['E']);
        return true;
      }
    }
    else {
      if (!(sisestatu.includes('aeg') && sisestatu.includes('P'))){
        kuvaErr('Sisestatud andmed on puudulikud!');
        lisaPeidaErr(['aeg', 'P']);
        return true;
      }
    }
  }
  if (arvutatav === '.energiakogus'){// Kui arvutatakse energiakogust peavad olema valitud paagi kujule vastavad mõõtmed 
    let võrdlePaksusega = false;
    let kaksP;
    if (mõõduTüüp === 'välis'){
      if (!sisestatu.includes('p')){
        kuvaErr('Kui soovite sisestada paagi välismõõtmed, peate sisestama ka isolatsiooni paksuse!');
        lisaPeidaErr(['p']);
        return true;
      }
      võrdlePaksusega = true;
      kaksP = teisenda(sisestatudAndmed.p, ühik.paksusÜhik, 'm') * 2;
    }
    let meetrites = {};
    ['a', 'b', 'c', 'd', 'h'].forEach(t => {meetrites[t] = teisenda(sisestatudAndmed[t], ühik.pikkusÜhik, 'm')});
    const {a, b, c, d, h} = meetrites;

    switch(paagiKuju){
      case 'Risttahukas':
        if (!(a && b && c)){
          kuvaErr('Palun sisestage kõik mõõtmed!');
          lisaPeidaErr(['a', 'b', 'c']);
          return true;
        }
        if (võrdlePaksusega){
          if (((a - kaksP) <= 0) || ((b - kaksP) <= 0) || ((c - kaksP) <= 0)){
            kuvaErr('Kõik paagi mõõtmed peavad olema suuremad kui 2 × isolatsiooni paksus!');
            lisaPeidaErr(['a', 'b', 'c', 'p']);
            return true;
          }
        }
        break;
      case 'Silinder':
      case 'Ü.silinder':
        if (!(h && d)){
          kuvaErr('Palun sisestage kõik mõõtmed!');
          lisaPeidaErr(['h', 'd']);
          return true;
        }
        if (võrdlePaksusega){
          if (((h - kaksP) <= 0) || ((d - kaksP) <= 0)){
            kuvaErr('Kõik paagi mõõtmed peavad olema suuremad kui 2 × isolatsiooni paksus!');
            lisaPeidaErr(['h', 'd', 'p']);
            return true;
          }
        }
        break;
      case 'Kera':
        if (!d){
          kuvaErr('Palun sisestage paagi läbimõõt');
          lisaPeidaErr(['d']);
          return true;
        }
        if (võrdlePaksusega){
          if ((d - kaksP) <= 0){
            kuvaErr('Paagi läbimõõt peab olema suurem kui 2 × isolatsiooni paksus!');
            lisaPeidaErr(['d', 'p']);
            return true;
          }
        }
        break;
    }
    
  }
  if (sisestatudAndmed.min_temp >= sisestatudAndmed.max_temp){
    kuvaErr('Maksimaalne temperatuur peab olema suurem kui minimaalne temperatuur!');
    lisaPeidaErr(['max_temp', 'min_temp']);
    return true;
  }
  if ((arvutatav === '.energiakogus')||(arvutatav === '.paagiMaht')){
    if ((valitudAine.piirTemp != null) && (sisestatudAndmed.min_temp >= valitudAine.piirTemp)){
      kuvaErr('Minimaalne temperatuur peab olema madalam, kui valitud aine keemis või lagunemistemperatuur (hetkel ' + valitudAine.piirTemp + '°C)!');
      lisaPeidaErr(['materjal', 'min_temp']);
      return true;
    }
  }
  
  kuvaErr('', 'none');
  return false;
  
}

function koguAndmed(){// Kogub kokku kõik arulised andmed, ja paneb need objekti "sisestatudAndmed", kasutades võtmena objekti ID-d
  var sisendid = document.querySelectorAll('input');
  sisendid.forEach(sisend => {
    var v = sisend.value;
    var id = sisend.getAttribute('id')
    if (v){// Kui sisestati midagi
      sisestatudAndmed[id] = Number(v.replace(',', '.'));
    }
  });
}

function energiaKilogrammisKA(){// Leiab kõigi ainete soojusenergia salvestamise võimekuse valitud temp vahemikus
  tulemused = {};
  var välistada = !(document.getElementById('temp_piirang').checked);

  aineteNim.forEach(nim => {
    var aine = ained[nim];
    const {max_temp, min_temp} = sisestatudAndmed;
    const tÜlempiir = (((aine.piirTemp != null) && (max_temp > aine.piirTemp)) ? aine.piirTemp : max_temp);

    if ((aine.piirTemp >= ((välistada) ? max_temp : min_temp))||(aine.piirTemp == null)){
      tulemused[nim] = {};
      if ((aine.sulamispunkt === null)||(tÜlempiir < aine.sulamispunkt)){
        tulemused[nim].energiaKilogrammis = (aine.erisoojusT * (tÜlempiir - min_temp));// Aine massierisoojus tahkes olekus korda delta t
      }
      else if (min_temp > aine.sulamispunkt){
        tulemused[nim].energiaKilogrammis = (aine.erisoojusV * (tÜlempiir - min_temp));// Aine massierisoojus vedelas olekus korda delta t
      }
      else {
        tulemused[nim].energiaKilogrammis = ((aine.erisoojusV * (tÜlempiir - aine.sulamispunkt)) + aine.sulamissoojus + (aine.erisoojusT * (aine.sulamispunkt - min_temp)));
      }

      tulemused[nim].energiaKuupmeetris = tulemused[nim].energiaKilogrammis * aine.tihedus;
      tulemused[nim].terveVahemik = (tÜlempiir === max_temp);
    }
  });
  
}

function sorteeri(obj, suund = 'kahanev', omadus){// Sorteerib objekti "omadused" ühe neis sisalduva väärtuse järgi kasvavas või kahanevas järjekorras

  var võrdlus = function (a, b){return b[1][omadus] - a[1][omadus]};
  if (suund === 'kasvav'){
    võrdlus = function (a, b){return a[1][omadus] - b[1][omadus]};
  }
  return Object.fromEntries(Object.entries(obj).sort(võrdlus));// https://stackoverflow.com/questions/1069666/sorting-object-property-by-values 
}

function tüvenumbrid(arvud, tn){// Ümardab kõik massiivis olevad arvud "tn" tüvenumbrini
  const vastus = [];
  arvud.forEach(a => {
    vastus.push(Number((a).toPrecision(tn)));//https://www.sitepoint.com/rounding-numbers-javascript/
  });
  return vastus;
}

function teisenda(arvud, ühik1, ühik2, tn = 0){// Teisendav väärtused ühest ühikust teise. Kuna sellele kasutamisele järgneb väga tihti "tüvenumbrid" funkktsioon, lisasin võiamluse kasutada mõlemat funktsiooni korraga, kui parameetrite lõppu lisasa tüvenumbrite arv
  function tegur(ü){
    const x =[1, 1];
    ü.forEach((nim, i)=> {

      switch(nim){// Kuna minutil, tunnil ja päeval tavaliselt kümnendeesliiteid ei ole, siis kontrolli enne eesliidete otsimist kas tegemist on ühega neist.
        case 'min':
          x[i] = 60;
          break;
        case 'h':
          x[i] = 3600;
          break;
        case 'd':
          x[i] = 86400;
          break;
        default:

          var aste = 1;
          switch(nim.slice(-1)){
            case '²':
              aste = 2;
              nim = nim.slice(0, -1);
              break;
            case '³':
              aste = 3;
              nim = nim.slice(0, -1);
              break;
          }
          
          if (nim.length > 1){// Kui on mingi eesliide, või ühik on pikem kui üks täht

            if (nim.slice(-2) === 'Wh'){// Selleks, et energia teisendusel arvestataks nii eesliidet, kui ka ühikut, mis võib olla J või Wh
              x[i] = 3600;
            }
    
            switch(nim.charAt(0)){// Võimalikud kümnendeesliited koos neile vastava arvuga
              case 'm':
                x[i] *= 0.001;
                break;
              case 'c':
                x[i] *= 0.01;
                break;
              case 'd':
                x[i] *= 0.1;
                break;
              case 'k':
                x[i] *= 1000;
                break;
              case 'M':
                x[i] *= 1000000;
                break;
            }
          }

          x[i] **= aste;// ühiku astme arvestamine
      }

    });
    return (x[0]/x[1]);

  }

  let t = [1, 1];
  if (ühik1 != ühik2){// Kui praegegune ja soovitav ühik on samad, siis tagasta samad väärtused, mis sisendiks olid, ainult ümarda, palju vaja

    const pooled1 = ühik1.split('/');
    const pooled2 = ühik2.split('/');

    pooled1.forEach((p, i) => {pooled1[i] = p.split('×');});
    pooled2.forEach((p, i) => {pooled2[i] = p.split('×');});


    if ((pooled1.length != pooled2.length)||(pooled1[0].length != pooled2[0].length)){// Kontroll, et mõlemad ühikud sisaldavad sama palju osi
      console.log('Väärtuste teisendamine ebaõnnestus! Ei suuda teisendada ' + ühik1 + ' ' + ühik2 + '-eks.');
      return arvud;
    }

    for (let i = 0; i < pooled1.length; i++){
      for (let j = 0; j < pooled1[i].length; j++){
        t[i] *= tegur([pooled1[i][j], pooled2[i][j]]);
      }
    }
  }

  if (typeof(arvud) === "number"){
    arvud *= (t[0]/t[1]);
    if (tn){
      arvud = tüvenumbrid([arvud],tn)[0];
    }
  }
  else if ((typeof(arvud) === "object") && (arvud != null)){
    arvud.forEach((a, i) => {arvud[i] = (a*t[0]/t[1])});
    if (tn){
      arvud = tüvenumbrid(arvud,tn);
    }
  }
  

  return arvud;
  
}

function SIpõhiühikuteks(sisendid){// Teisendab "sisestatudAndmed" objektis olevad väärtused SI põhiühikuteks
  const ühikuAndmed = {// Objekt, mis sseob kõik andmesisestus lahtrid, millel on ühik, õige ühiku menüü väärtusega ja selle ühikuga, mida arvutustes vaja on
    a:{valitu: ühik.pikkusÜhik, vaja:"m"},
    b:{valitu: ühik.pikkusÜhik, vaja:"m"},
    c:{valitu: ühik.pikkusÜhik, vaja:"m"},
    d:{valitu: ühik.pikkusÜhik, vaja:"m"},
    h:{valitu: ühik.pikkusÜhik, vaja:"m"},
    p:{valitu: ühik.paksusÜhik, vaja:"m"},
    P:{valitu: ühik.võimsuseÜhik, vaja:"W"},
    aeg:{valitu: ühik.ajaÜhik, vaja:"s"},
    E:{valitu: ühik.energiaÜhik, vaja:"J"}
  };
  sisendid.forEach(s => {
    sisestatudAndmed[s] = teisenda(sisestatudAndmed[s], ühikuAndmed[s].valitu, ühikuAndmed[s].vaja);
  });
}

const kuvaTulemus = {// Objekt, mis sisaldab erinevaid funktsioone graafikute genereerimiseks 
  grPunktid: {},
  peegelda: function(){// Peegeldab andmepunkte y telje suhtes. Võimaldav teha jahtumisgraafikust soojenemisgraafik
    for (const olek in this.grPunktid) {
      this.grPunktid[olek].forEach((punkt, i) => {
        this.grPunktid[olek][i].x = tulemused.aeg - punkt.x;
      });
    }
  },
  ktsa: function(olek){// Ei suutnud sellele head lühikest nime leida "Kui Tühi Siis Array" - kui grPunktid mingi faasi jaoks on täiesti olematud, pane sinna tühi jada, muidu "push" ei toimi
    this.grPunktid[olek] = (this.grPunktid[olek]) ? this.grPunktid[olek] : [];
  },
  grLineaarne: function(xAlg = 0, yAlg = tulemused.energiaKilogrammis.maxT){// Funktsioon, mis arvutab graafiku (või selle osa) punktide kordinaadid, kui tarbimine on konstantne

    const {P} = sisestatudAndmed; 
    const {olek, minT, E} = tulemused.energiaKilogrammis;
    if (olek === 'faasimuutusega'){
      let faasimuutuseLõpp = tulemused.aeg - ((tulemused.aineMass * E[2]) / P);
      let faasimuutuseAlgus = faasimuutuseLõpp - ((valitudAine.sulamissoojus * tulemused.aineMass) / P);

      if (yAlg > valitudAine.sulamispunkt){
        this.ktsa('vedel');
        this.grPunktid['vedel'].push(...[
          {x: xAlg, y: yAlg},
          {x: faasimuutuseAlgus, y: valitudAine.sulamispunkt}
        ]);
        this.grPunktid['faasimuutus'] = [
          {x: faasimuutuseAlgus, y: valitudAine.sulamispunkt},
          {x: faasimuutuseLõpp, y: valitudAine.sulamispunkt}
        ];
        this.ktsa('tahke');
        this.grPunktid['tahke'].push(...[
          {x: faasimuutuseLõpp, y: valitudAine.sulamispunkt},
          {x: tulemused.aeg, y: minT}
        ]);
      }
      else {
        this.ktsa('tahke');
        this.grPunktid['tahke'].push(...[
          {x: xAlg, y: yAlg},
          {x: tulemused.aeg, y: minT}
      ]);
      }
    }
    else{
      this.ktsa(olek);
      this.grPunktid[olek].push(...[
        {x: xAlg, y: yAlg},
        {x: tulemused.aeg, y: minT}
      ]);
    }
  },
  grKõver: function(kordaja, P = sisestatudAndmed.P, maxT = tulemused.energiaKilogrammis.maxT, minT = tulemused.energiaKilogrammis.minT, tagurpidi = false){// Funktsioon, mis arvutab graafiku (või selle osa) punktide kordinaadid, kui tarbimine muutub isolatsiooni läbiva soojuskao tõttu
    function jahtumiskõver(algT, lõppT, c, algusaeg = 0){
      const pArv = 100;// Mitmeks osaks jahtumisaeg jagada? Katseliselt leitud väärtus.
      const jadaPikkus = (pArv / 4) * ((tagurpidi) ? 16 : 6);// Jada pisut pikem, juhuks kui päris jahtumisaeg osutub pikemaks, kui keskmise põhjal leitu

      const {välis_temp} = sisestatudAndmed;
      const {energia} = tulemused;

      let dT1 = algT - sisestatudAndmed.välis_temp;
      let dT2 = lõppT - sisestatudAndmed.välis_temp;
      let dTkesk = (dT1 + dT2) / 2;
      let aeg = (energia / ((kordaja * dTkesk) + P) * ((tagurpidi) ? -1 : 1));
      let periood = aeg / pArv;

      if (tagurpidi){
        [algT, lõppT] = [lõppT, algT];
      }
      let punktid = [{x: algusaeg, y: algT}];

      let tempLangus = new Array(jadaPikkus).fill((algT-lõppT) / pArv);// Jada, mis sisaldab temperatuuri muutusi igas ajavahemikus

      let uusTemp = algT;
      for (let i = 0; i < jadaPikkus;){

        for (let j = 0; j < 3; j++){
          let dT = (uusTemp - (tempLangus[i]/2)) - välis_temp;// Sise ja väliskeskkonna keskmine temperatuurierinevus selle konkreetse ajavahemiku jooksul.
          let Q = (kordaja * dT + P) * periood;
          tempLangus[i] = Q / (tulemused.aineMass * c);
        }

        uusTemp -= tempLangus[i];
        i++;
        punktid.push({x: (periood * i + algusaeg), y: uusTemp});
        if ((uusTemp < lõppT) ? !tagurpidi : tagurpidi){// Lõppeta siis kui temperatuur on kas lõpptemperatuurist kõrgem või madalam olenevalt sellest kas toimub jahtumine või soojenemine
          break;
        }
      };
      
      let lõppPunkt = punktid.pop();
      let eelviimanePunkt = punktid.at(-1);
      punktid.push({x: eelviimanePunkt.x + (((eelviimanePunkt.y - lõppT) * (lõppPunkt.x - eelviimanePunkt.x)) / (eelviimanePunkt.y - lõppPunkt.y)), y: lõppT});// Lisab lõppu punkti, mis on täpselt lõpptemperatuuril
      return punktid;
    }

    if (tagurpidi){
      P *= -1;
    }
    const {olek} = tulemused.energiaKilogrammis;

    if (olek === 'faasimuutusega'){
      if (minT < valitudAine.sulamispunkt){
        if (tagurpidi){
          this.grPunktid['tahke'] = jahtumiskõver(valitudAine.sulamispunkt, minT, valitudAine.erisoojusT);

          let algus = this.grPunktid['tahke'].at(-1).x;
          let lõpp = algus + ((valitudAine.sulamissoojus * tulemused.aineMass)/(((kordaja * valitudAine.sulamispunkt) + P) * -1));

          this.grPunktid['faasimuutus'] = [
            {x: algus, y: valitudAine.sulamispunkt},
            {x: lõpp, y: valitudAine.sulamispunkt}
          ];

          this.grPunktid['vedel'] = jahtumiskõver(maxT, valitudAine.sulamispunkt, valitudAine.erisoojusV, lõpp);
          tulemused.aeg = this.grPunktid.vedel.at(-1).x;

        }
        else {
          this.grPunktid['vedel'] = jahtumiskõver(maxT, valitudAine.sulamispunkt, valitudAine.erisoojusV);

          let algus = this.grPunktid['vedel'].at(-1).x;
          let lõpp = algus + ((valitudAine.sulamissoojus * tulemused.aineMass)/((kordaja * valitudAine.sulamispunkt) + P));

          this.grPunktid['faasimuutus'] = [
            {x: algus, y: valitudAine.sulamispunkt},
            {x: lõpp, y: valitudAine.sulamispunkt}
          ];

          this.grPunktid['tahke'] = jahtumiskõver(valitudAine.sulamispunkt, minT, valitudAine.erisoojusT, lõpp);
          tulemused.aeg = this.grPunktid.tahke.at(-1).x;
        }
      }
      else {
        this.grPunktid['vedel'] = jahtumiskõver(maxT, minT, valitudAine.erisoojusV);
        tulemused.aeg = this.grPunktid.vedel.at(-1).x;
      }
      
    }
    else {
      this.grPunktid[olek] = jahtumiskõver(maxT, minT, ((olek === 'tahke') ? valitudAine.erisoojusT : valitudAine.erisoojusV));
      tulemused.aeg = this.grPunktid[olek].at(-1).x;
    }


  },
  materjal: function(graafikuÜhik){// Loob tulpdiagrammi erinevatest soojasalvestusmaterjalidest

    var tiheduseLiik = ((graafikuÜhik.includes('m³')) ? 'energiaKuupmeetris' : 'energiaKilogrammis');

    tulemused = sorteeri(tulemused, 'kahanev', tiheduseLiik);
    var sildid = Object.keys(tulemused);
    var väärtused = Object.values(tulemused);
    var värvid = [];

    väärtused.forEach((v, i) => {
      värvid[i] = (v.terveVahemik) ? 'rgba(0, 200, 250, 0.5)' : 'rgba(245, 66, 66, 0.5)';
      väärtused[i] = v[tiheduseLiik];
    });

    väärtused = teisenda(väärtused, 'J/kg', graafikuÜhik, 4);

    var maht = 8;
    sildid.length = maht;
    väärtused.length = maht;
    värvid.length = maht;

    var legendiOsad = '1';
    if (värvid.includes('rgba(245, 66, 66, 0.5)')){
      legendiOsad = '2';
    }

    var laius = window.innerWidth;
    var telg = 'x';
    var kuvaSuhe = 2;

    if (laius < 525){
      telg = 'y';
      kuvaSuhe = 0.75;
      document.getElementById('chart').style.paddingTop = '24px';
    }

    const spetsLegend = function(context){
      var legends = context.legend.legendItems;
      //console.log(context);
      
      if (legends[0].text === '2'){// Kui on piiratud vahemikuga aineid, siis lisa legendi eraldi tähis
        legends[1] = JSON.parse(JSON.stringify(legends[0]));
        legends[1].fillStyle = "rgba(245, 66, 66, 0.5)";
        legends[1].text = 'Kasutatav piiratud temp vahemikus';
      }

      legends[0].fillStyle = "rgba(0, 200, 250, 0.5)";
      legends[0].text = 'Kasutatav kogu temp vahemikus';
    }

    const spetsInfo = function(context){
      let vastus = [`Energiatihedus: ${context.parsed.y} ${graafikuÜhik}`];

      const {sulamispunkt, piirTemp} = ained[context.label];
      if (piirTemp != null) {
        vastus.push(`Keemis-/lagunemispunkt: ${piirTemp}°C`);
      }
      if (sulamispunkt != null) {
        vastus.push(`Sulamispunkt: ${sulamispunkt}°C`);
      }
      return vastus;
    }

    const teeRuumi = function(chart, legend, options){ //https://www.youtube.com/watch?v=87rnMzENg3U 
      //console.log(chart.legend.fit);
      const fitValue = chart.legend.fit;

      chart.legend.fit = function fit(){
        fitValue.bind(chart.legend)();
        console.log(chart);
        let lisa = 8;
        if ((chart.legend.legendItems[0].text === '2') && (chart.width < 500)){// Kui on kaks silti ja need ei mahu ühele reale
          lisa = 24;
        }
        return this.height += lisa;
      }
    }

    if (chart){
      chart.data.labels = sildid;
      chart.data.datasets[0].data = väärtused;
      chart.data.datasets[0].label = legendiOsad;
      chart.data.datasets[0].backgroundColor = värvid;
      chart.options.plugins.tooltip.callbacks.label = spetsInfo;
      chart.update();
    }
    else {

      const ctx = document.getElementById('chart');

      chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: sildid,
          datasets: [{
            label: legendiOsad,
            data: väärtused,
            borderWidth: 1,
            backgroundColor: värvid
          }]
        },
        options: {
          indexAxis: telg,
          aspectRatio: kuvaSuhe,
          scales: {
            y: {
              beginAtZero: true
            }
          },
          plugins: {
            tooltip: {
              displayColors: false,
              
              callbacks: {
                label: spetsInfo
              }
            },
            legend: {
              align: 'start'
            }
          }
        },
        plugins: [
          {
            beforeDraw: spetsLegend,
            beforeInit: teeRuumi
          }
        ]
      });
    }
  },
  energiaKogus: function(ajaÜhik){// Loob joondiagrammi "grLineaarne" ja/või "grKõver" arvutatud punktide alusel
    const värvid = {vedel: 'rgb(245, 161, 66)', tahke: 'rgb(66, 135, 245)', faasimuutus: 'rgb(111, 245, 66)'};
    let olekud = Object.keys(this.grPunktid);
    let grSisu = [];
    let teljeSildiSuurus = 16;

    olekud.forEach(o => {
      let ümardatu = [];
      this.grPunktid[o].forEach((punkt) => {
        ümardatu.push({x: teisenda(punkt.x, 's', ajaÜhik, 4), y: tüvenumbrid([punkt.y], 4)[0]});
      });

      grSisu.push({
        label: `${valitudAine.nimi} - ${o}`,
        data: ümardatu,
        showLine: true,
        fill: false,
        borderColor: värvid[o],
        backgroundColor: värvid[o]
      });
    });

    const spetsInfo = function(context){
      let vastus = [`${context.parsed.y}°C, ${context.parsed.x} ${ajaÜhik}`];
      return vastus;
    }

    if (chart){
      chart.data.datasets = grSisu;
      chart.options.scales.x.title.text = `Aeg (${ajaÜhik})`;
      chart.options.plugins.tooltip.callbacks.label = spetsInfo;
      chart.update();
    }
    else {
      const canvas = document.getElementById('chart');
      const ctx = canvas.getContext("2d");
      chart = new Chart(ctx, {
        type: 'scatter',
        data: {
          datasets: grSisu
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Temperatuur (°C)',
                font: {
                  size: teljeSildiSuurus
                }
              }
            },
            x: {
              beginAtZero: true,
              title: {
                display: true,
                text: `Aeg (${ajaÜhik})`,
                font: {
                  size: teljeSildiSuurus
                }
              }
            }
          },
          plugins: {
            tooltip: {
              callbacks: {
                label: spetsInfo
              }
            }
          }
        }
      });
    }
  }
};

function laeGraafikAlla(el){// Funktsioon, mis genereerib graafiku allalaadimiseks vajaliku andme lingi
  var formaat = el.innerHTML;
  if (formaat === 'Pilt (PNG)'){
    el.href = document.getElementById('chart').toDataURL("image/png");
  }
  else if (formaat === 'Andmed (CSV)'){
    let allalaetav = [];
    switch(arvutatav){
      case '.materjal':
        allalaetav.push('Aine, massierisoojus (J/kg), mahuerisoojus (J/m3), minimaalne temp (°C), maksimaalne temp (°C)\n')
        const aineteNimed = Object.keys(tulemused);
        const {min_temp, max_temp} = sisestatudAndmed;
        aineteNimed.forEach(nim => {
          allalaetav.push(`${nim},${tulemused[nim].energiaKilogrammis},${tulemused[nim].energiaKuupmeetris},${min_temp},${(((ained[nim].piirTemp != null) && (max_temp > ained[nim].piirTemp)) ? ained[nim].piirTemp : max_temp)}\n`);
        });
        break;
      
      case '.energiakogus':
        const faasid = Object.keys(kuvaTulemus.grPunktid);
        allalaetav.push(`aeg (s),temp (°C),olek\n`);
        let täisarvuks = (kuvaTulemus.grPunktid[faasid.at(-1)].at(-1).x > 100000);// Kui sekundeid on kokku üle 100000, siis ümarda täisarvuks
        faasid.forEach(faas => {
          kuvaTulemus.grPunktid[faas].forEach(punkt => {
            allalaetav.push(`${(täisarvuks) ? Math.round(punkt.x) : punkt.x},${punkt.y},${faas}\n`);
          });
        });
        break;
    }
    let blob = new Blob(allalaetav, { type: "text/csv" });// https://stackoverflow.com/questions/49510580/download-a-csv-file-in-javascript-or-symfony-from-a-base64
    el.href = window.URL.createObjectURL(blob);
    URL.revokeObjectURL(el.href);
  }
  
}

function teeForm(väärtus, algÜhik, ühikud){// Funktsioon, mis genereerib HTML "form" elemendi koos sisuga, mis teisendab automaatselt mõnda tekstis olevat väärtust ühest ühikust teise, kasutades "teisenda()" funktsiooni ja ümardab tulemuse "tüvenumbrid()"funktsiooniga
  var optimaalneÜhik = 0;
  var pikkus = 30;
  ühikud.forEach((ü, i) => {
    let arv = teisenda(väärtus, algÜhik, ü, 4);
    let p = arv.toString().length;
    if (p < pikkus){
      pikkus = p;
      optimaalneÜhik = i;
    }
  });
  var f = `<form style="display: inline;" oninput="o.value = teisenda(${väärtus},'${algÜhik}', ü.value, 4)">
    <output name="o">${teisenda(väärtus, algÜhik, ühikud[optimaalneÜhik], 4)}</output>
    <select name="ü">
  `;

  ühikud.forEach((ü, i) => {
    f += `<option${(i === optimaalneÜhik) ? ' selected':''} value="${ü}">${ü}</option>`
  });
  f += '</select></form>';
  return f;
}

function energiaKilogrammis(minTemp = sisestatudAndmed.min_temp, maxTemp = sisestatudAndmed.max_temp){// Leia balitud aine soojusenergiasalvestusvõime, oleks loogiline ühendada "energiaKilogrammisKA()" funktsiooniga, kuid hetkel on see keeruline
  
  var energiaAndmedM = {};
  var energiaAndmedV;
  var tekst = '';
  
  if ((valitudAine.piirTemp != null) && (valitudAine.piirTemp < maxTemp)){
    maxTemp = valitudAine.piirTemp;
    tekst += `Kui soojuse salvestamiseks kasutatakse ${valitudAine.nimi}, siis on suurim lubatav temperatuur ${maxTemp}°C, mis on madalam, kui sisestatud maksimaalne temperatuur. Seetõttu on arvutustes kasutatud temperatuurivahemikku ${minTemp}°C kuni ${maxTemp}°C. `;
  }

  if ((valitudAine.sulamispunkt === null)||(maxTemp < valitudAine.sulamispunkt)){
    energiaAndmedM = {E: [valitudAine.erisoojusT * (maxTemp - minTemp)], maxT: maxTemp, minT: minTemp, olek: 'tahke'};
  }
  else if (minTemp > valitudAine.sulamispunkt){
    energiaAndmedM = {E: [valitudAine.erisoojusV * (maxTemp - minTemp)], maxT: maxTemp, minT: minTemp, olek: 'vedel'};
  }
  else {
    let vedel = (valitudAine.erisoojusV * (maxTemp - valitudAine.sulamispunkt));
    let tahke = (valitudAine.erisoojusT * (valitudAine.sulamispunkt - minTemp));
    let kogu = vedel + valitudAine.sulamissoojus + tahke;
    
    energiaAndmedM = {E: [kogu, vedel, tahke], maxT: maxTemp, minT: minTemp, olek: 'faasimuutusega'};
  }

  energiaAndmedV = energiaAndmedM.E[0] * valitudAine.tihedus;
  tekst += `${valitudAine.nimi} energiatihedus temperatuurivahemikus ${minTemp}°C kuni ${maxTemp}°C on ${teeForm(energiaAndmedM.E[0], 'J/kg', ['J/kg', 'kJ/kg', 'Wh/kg', 'kWh/kg'])} ehk ${teeForm(energiaAndmedV, 'J/m³', ['J/m³', 'kJ/m³', 'Wh/m³', 'kWh/m³', 'J/dm³', 'kJ/dm³', 'Wh/dm³'])}. `;
  return [energiaAndmedM, tekst, energiaAndmedV];
}

function vajalikMaht(){// Vajaliku paagimahu arvutamise funktsioon
  var tekst = '';

  [tulemused.energiaKilogrammis, tekst, tulemused.energiaKuupmeetris] = energiaKilogrammis();

  if (document.getElementById("E/P&aeg").value === "võimsus+aeg"){
    sisestatudAndmed.E = (sisestatudAndmed.P * sisestatudAndmed.aeg);
    tekst = `Sisestatud võimsuse ja aja põhjal on vaja salvestada ${teeForm(sisestatudAndmed.E, 'J', ['J', 'kJ', 'Wh', 'kWh'])} soojusenergiat. ${tekst}`;
  }

  tulemused.maht = sisestatudAndmed.E / tulemused.energiaKuupmeetris;

  if (sisestatudAndmed.täituvus === undefined){
    sisestatudAndmed.täituvus = 100;
  }

  tulemused.paagiMaht = (tulemused.maht / sisestatudAndmed.täituvus * 100);

  tekst += `Järelikult on soojuse salvestamiseks vaja ${teeForm(tulemused.maht, 'm³', ['m³', 'dm³', 'cm³'])} ${valitudAine.nimi}. Kui paagi täituvus on ${sisestatudAndmed.täituvus}%, siis paagi sisemine ruumala peab olema ${teeForm(tulemused.paagiMaht, 'm³', ['m³', 'dm³', 'cm³'])}.`;

  document.getElementById('tekstEnneGraafikut').innerHTML =  tekst;
}

function energiaKogus(){// Salvestatava energiakoguse ja kasutusaja arvutamise funktsioon
  var maha = 0;
  if (mõõduTüüp === 'välis'){
    maha = sisestatudAndmed.p * 2;
  }

  switch(document.getElementById("soojustusOmadused").value){
    case 'Rs':
      sisestatudAndmed.l = sisestatudAndmed.p / sisestatudAndmed.R;
      break;
    case 'SJT':
      sisestatudAndmed.R = sisestatudAndmed.p / sisestatudAndmed.l;
      break;
  }
  var kordaja = 0;
  tulemused.siseRuumala = 0;
  if (paagiKuju === 'Risttahukas'){// Erinevate kujundite ruumala arvutamine sisestatud mõõtmete alusel
    let {a, b, c, R} = sisestatudAndmed;
    a -= maha;
    b -= maha;
    c -= maha;
    tulemused.siseRuumala = (a * b * c);
    kordaja = ((a*b + b*c + a*c) * 2) / R;// S/R pole päris täpne, kuna ei arvesta nurki aga praegu piisab
  }
  else if ((paagiKuju === 'Kera') || (paagiKuju === 'Ü.silinder')){
    let {d, R, p} = sisestatudAndmed;
    let r = (d - maha)/2;
    tulemused.siseRuumala = ((4/3) * Math.PI * (r**3));
    kordaja = (4 * Math.PI * r * (r + p)) / R;
  }
  if ((paagiKuju === 'Silinder') || (paagiKuju === 'Ü.silinder')){// Kuna ümaraotsalise silindri puhul on vaja, et käivituks nii selle, kui ka eelmise if-i sisu, siis siin peab olema if, mitte else if
    let {d, h, l, p, R} = sisestatudAndmed;
    let r = (d - maha)/2;
    h -= maha;
    tulemused.siseRuumala += (Math.PI * (r**2) * h);
    kordaja += (2 * Math.PI * l * h) / (Math.log((r + p) / r));

    if (paagiKuju === 'Silinder'){
      kordaja += (2 * Math.PI * (r**2)) / R;
    }
  }


  if (sisestatudAndmed.täituvus === undefined){
    sisestatudAndmed.täituvus = 100;
  }
  tulemused.aineRuumala = (tulemused.siseRuumala / 100) * sisestatudAndmed.täituvus;
  tulemused.aineMass = tulemused.aineRuumala * valitudAine.tihedus;

  tulemused.energiaKilogrammis = null;
  [tulemused.energiaKilogrammis, tekst, tulemused.energiaKuupmeetris] = energiaKilogrammis();
  tulemused.energia = tulemused.aineMass * tulemused.energiaKilogrammis.E[0];
  
  tekst += `Paagi sisemine maht on ${teeForm(tulemused.siseRuumala, 'm³', ['m³', 'dm³', 'cm³'])} ja täituvus ${sisestatudAndmed.täituvus}%. Järelikult on paagis ${teeForm(tulemused.aineRuumala, 'm³', ['m³', 'dm³', 'cm³'])} ${valitudAine.nimi}. 
    Sellesse on võimalik salvestada ${teeForm(tulemused.energia, 'J', ['J', 'kJ', 'Wh', 'kWh'])} energiat. 
  `;

  if (sisestatudAndmed.P !== undefined){
    const {P, välis_temp} = sisestatudAndmed;

    let dTmax = tulemused.energiaKilogrammis.maxT- välis_temp;
    let dTmin = tulemused.energiaKilogrammis.minT - välis_temp;

    soojendatakse = (document.getElementById("energiaSuund").value === "võimsus");
    
    kuvaTulemus.grPunktid = {};
    if (isNaN(sisestatudAndmed.l) || (välis_temp === undefined)){
      tulemused.aeg = tulemused.energia/P;
      // Graafiku punktide arvutamine
      kuvaTulemus.grLineaarne();

      if (soojendatakse){
        kuvaTulemus.peegelda();
      }
      
    }
    else {
      let dTpiir = (P / kordaja);// dTpiir - temperatuur, mille ületamisel muutub isolatsiooni läbiv soojusvool suuremaks kui sisestatud tarbimine
      let piir = (välis_temp + dTpiir);

      if (soojendatakse){
        if (dTpiir < dTmax){
          tekst += `<br>Sisestatud andmete põhjal ületab soojuskadu läbi paagi isolatsiooni paagi soojendamiseks kasutatavat võimsust, kui selle sisetemperatuur tõuseb üle ${tüvenumbrid([piir], 4)[0]}°C. 
            See tähendab, et ükskõik kui kaua paaki ${teeForm(sisestatudAndmed.P, 'W', ['W', 'kW'])} võimsusega kütta, ei ületa temperatuur ${tüvenumbrid([piir], 4)[0]}°C. Te võiksite kaaluda parema isolatsiooni kasutamist.
          `;
          document.getElementById('tekstEnneGraafikut').innerHTML =  tekst;
          return;
        }
        else{
          kuvaTulemus.grKõver(kordaja, P, tulemused.energiaKilogrammis.maxT, tulemused.energiaKilogrammis.minT, true);
        }
      }
      else {
        let läbiIsolatsiooni = document.getElementById("KasLiita").value;
        if (läbiIsolatsiooni === "osa tarbimisest"){

          if (dTpiir >= dTmax){
            tulemused.aeg = tulemused.energia/P;
            // Graafiku punktide arvutamine
            kuvaTulemus.grLineaarne();
          }
          else if (dTpiir < dTmin){
            kuvaTulemus.grKõver(kordaja, 0);
          }
          else {
            kuvaTulemus.grKõver(kordaja, 0, tulemused.energiaKilogrammis.maxT, piir);
            
            const linAlgus = tulemused.aeg;
            const [ülejäänudEnergiatihedus, , ] = energiaKilogrammis(sisestatudAndmed.min_temp, piir);
            tulemused.aeg = linAlgus + ((ülejäänudEnergiatihedus.E[0] * tulemused.aineMass) / P);

            kuvaTulemus.grLineaarne(linAlgus, piir);//

            if (tulemused.energiaKilogrammis.olek === 'vedel'){
              tulemused.aeg = kuvaTulemus.grPunktid.vedel.at(-1).x;
            }
            else {
              tulemused.aeg = kuvaTulemus.grPunktid.tahke.at(-1).x;
            }

          }

        }
        else if (läbiIsolatsiooni === "lisa võimsus"){
          kuvaTulemus.grKõver(kordaja);

        }
        
      }
    }
    tekst += (soojendatakse) ? `Kui paaki soojendada võimsusega ${teeForm(sisestatudAndmed.P, 'W', ['W', 'kW'])} siis soojenemiseks ${tulemused.energiaKilogrammis.maxT}°C-ni kulub` : `Sellest piisab, et rahuldada ${teeForm(sisestatudAndmed.P, 'W', ['W', 'kW'])} tarbimist`;
    tekst += ` ${teeForm(tulemused.aeg, 's', ['s', 'min', 'h'])}.`;

    document.getElementById('graafiku_osa').style.display = 'block';
    kuvaTulemus.energiaKogus(document.getElementById("grÜhik").value);
  }
  
  document.getElementById('tekstEnneGraafikut').innerHTML =  tekst;
}

function arvuta(){// Arvuta nuppu vajutamisel arvutab selle, mida vaja
  sisestatudAndmed = {};
  koguAndmed();

  var tulemusteEl = document.getElementById('tulemused');
  tulemusteEl.style.display = 'none';
  document.getElementById('graafiku_osa').style.display = 'none';
  var onErr = loogikaKontroll();
  if (onErr){
    return;
  }
  if (arvutatav != eelmineArvutatav){
    function lisaValikud(sisud, väärtused = sisud){// Funktsioon, mis teeb stringi kõikide vajalike "option" elementidega graafiku ülemises paremas nurgas asuva menüü jaoks.
      let tulemus = '';
      väärtused.forEach((v, i) => {
        tulemus += `<option value="${v}">${sisud[i]}</option>`;
      });
      return tulemus;
    }
    eelmineArvutatav = arvutatav;
    document.getElementById('tekstEnneGraafikut').innerHTML =  '';

    
    let ühikuEl = document.getElementById('grÜhik');
    switch(arvutatav){
      case '.materjal':
        ühikuEl.setAttribute('onchange','kuvaTulemus.materjal(this.value)');
        ühikuEl.innerHTML = lisaValikud(['J/kg', 'kJ/kg', 'Wh/kg', 'kWh/kg', 'kJ/m³', 'Wh/m³', 'kWh/m³', 'kJ/dm³']);
        ühikuEl.options[1].setAttribute('selected','');
        break;
      
      case '.energiakogus':
        ühikuEl.setAttribute('onchange','kuvaTulemus.energiaKogus(this.value)');
        ühikuEl.innerHTML = lisaValikud(['sekund', 'minut', 'tund', 'päev'], ['s', 'min', 'h', 'd']);
        ühikuEl.options[2].setAttribute('selected','');
        break;
    }

    if (chart){
      chart.destroy();
      chart = null;
    }
  }
  
  tulemusteEl.style.display = 'block';
  let kuvamisÜhik = document.getElementById("grÜhik").value;
  switch(arvutatav){
    case '.materjal':
      energiaKilogrammisKA();
      document.getElementById('graafiku_osa').style.display = 'block';
      kuvaTulemus.materjal(kuvamisÜhik);
      break;
    
    case '.paagiMaht':
      SIpõhiühikuteks(['E', 'P', 'aeg']);
      vajalikMaht();
      break;
    
    case '.energiakogus':
      SIpõhiühikuteks(['a', 'b', 'c', 'd', 'h', 'p', 'P']);

      energiaKogus();
      break;
  }
}
