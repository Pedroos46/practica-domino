/*
 * programa que permet tenir un xat amb AJAX
 * @author sergi.grau@fje.edu
 * @version 1.0
 * date 13.02.2017
 * format del document UTF-8
 *
 * CHANGELOG
 * 13.02.2017
 * - programa  permet tenir un xat amb AJAX
 * NOTES
 * ORIGEN
 * Desenvolupament en entorn client. Escola del clot
 */

var fitxesJugador = [];

var fitxesJugadorJson = {
  0: "",
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",
}

/*Funcio d'aleatorietat*/
var max = 6;
var min = 0;
function getRandomFitxes() {
  var primerNumero = Math.floor(Math.random() * (max - min + 1)) + min;
  var segonNumero =  Math.floor(Math.random() * (max - min + 1)) + min;

  var fitxa = primerNumero + "" +segonNumero;
  return fitxa;
}

function assignarFitxes(){
  while(fitxesJugador.length < 7){
    fitxesJugador.push(getRandomFitxes());
  }
  printarFitxes();
  console.log(fitxesJugador);
}


function printarFitxes(){
  var i=1;
  for(key in fitxesJugador){
    imageUrl = "";
    switch (fitxesJugador[key].toString()){
      case "00": imageUrl = "00.png"; break;

      case "01":
      case "10": imageUrl = "10.png"; break;

      case "11": imageUrl = "11.png"; break;

      case "02":
      case "20": imageUrl = "20.png"; break;

      case "21":
      case "12": imageUrl = "21.png"; break;

      case "22": imageUrl = "22.png"; break;

      case "03":
      case "30": imageUrl = "30.png"; break;

      case "13":
      case "31": imageUrl = "31.png"; break;

      case "23":
      case "32": imageUrl = "32.png"; break;

      case "33": imageUrl = "33.png"; break;

      case "04":
      case "40": imageUrl = "40.png"; break;

      case "14":
      case "41": imageUrl = "41.png"; break;

      case "24":
      case "42": imageUrl = "42.png"; break;

      case "34":
      case "43": imageUrl = "42.png"; break;

      case "44": imageUrl = "42.png"; break;

      case "05":
      case "50": imageUrl = "50.png"; break;

      case "15":
      case "51": imageUrl = "51.png"; break;

      case "25":
      case "52": imageUrl = "52.png"; break;

      case "35":
      case "53": imageUrl = "53.png"; break;

      case "45":
      case "54": imageUrl = "54.png"; break;

      case "55": imageUrl = "55.png"; break;

      case "06":
      case "60": imageUrl = "60.png"; break;

      case "16":
      case "61": imageUrl = "61.png"; break;

      case "26":
      case "62": imageUrl = "62.png"; break;

      case "36":
      case "63": imageUrl = "63.png"; break;

      case "46":
      case "64": imageUrl = "46.png"; break;

      case "56":
      case "65": imageUrl = "65.png"; break;

      case "66": imageUrl = "66.png"; break;

    }

    var x = document.createElement("img");
    x.setAttribute("src", "imatges/" + imageUrl);
    x.setAttribute("width", "60");
    x.setAttribute("height", "109");

    document.getElementById('f'+i).appendChild(x);
    i++;
  }
}

window.onload = () => {
    assignarFitxes();

    var id_interval = setInterval( () => {
        cridarAJAX('/consultar');
    }, 1000);

    var xhr;
    var darreraResposta = '';


    document.getElementById("f1").onclick = (e) =>{
        console.log('Fitxa 1 premuda');
          cridarAJAX('/enviar?missatge=' + fitxesJugador[0]);
    }

    document.getElementById("f2").onclick = (e) =>{
        console.log('Fitxa 2 premuda');
          cridarAJAX('/enviar?missatge=' + fitxesJugador[1]);
    }

    document.getElementById("f3").onclick = (e) =>{
      console.log('Fitxa 3 premuda');
        cridarAJAX('/enviar?missatge=' + fitxesJugador[2]);
    }

    document.getElementById("f4").onclick = (e) =>{
      console.log('Fitxa 4 premuda');
        cridarAJAX('/enviar?missatge=' + fitxesJugador[3]);
    }

    document.getElementById("f5").onclick = (e) =>{
      console.log('Fitxa 5 premuda');
        cridarAJAX('/enviar?missatge=' + fitxesJugador[4])
    }

    document.getElementById("f6").onclick = (e) =>{
      console.log('Fitxa 6 premuda')
        cridarAJAX('/enviar?missatge=' + fitxesJugador[5]);
    }

    document.getElementById("f7").onclick = (e) =>{
      console.log('Fitxa 7 premuda')
        cridarAJAX('/enviar?missatge=' + fitxesJugador[6]);
    }

    function cridarAJAX(url) {
        xhr = new XMLHttpRequest();

        if (!xhr) {
            alert('problemes amb XHR');
            return false;
        }
        xhr.onreadystatechange = rebreDades;
        xhr.open('GET', url);
        xhr.send(null);
    }

    function rebreDades() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var li = document.createElement('li');

                var resposta = xhr.response;

                if (resposta != darreraResposta) {
                    console.log('Rebut per lajax:',resposta);

                    imageUrl= "";
                    switch (resposta.toString()){
                      case "00": imageUrl = "00.png"; break;

                      case "01":
                      case "10": imageUrl = "10.png"; break;

                      case "11": imageUrl = "11.png"; break;

                      case "02":
                      case "20": imageUrl = "20.png"; break;

                      case "21":
                      case "12": imageUrl = "21.png"; break;

                      case "22": imageUrl = "22.png"; break;

                      case "03":
                      case "30": imageUrl = "30.png"; break;

                      case "13":
                      case "31": imageUrl = "31.png"; break;

                      case "23":
                      case "32": imageUrl = "32.png"; break;

                      case "33": imageUrl = "33.png"; break;

                      case "04":
                      case "40": imageUrl = "40.png"; break;

                      case "14":
                      case "41": imageUrl = "41.png"; break;

                      case "24":
                      case "42": imageUrl = "42.png"; break;

                      case "34":
                      case "43": imageUrl = "42.png"; break;

                      case "44": imageUrl = "42.png"; break;

                      case "05":
                      case "50": imageUrl = "50.png"; break;

                      case "15":
                      case "51": imageUrl = "51.png"; break;

                      case "25":
                      case "52": imageUrl = "52.png"; break;

                      case "35":
                      case "53": imageUrl = "53.png"; break;

                      case "45":
                      case "54": imageUrl = "54.png"; break;

                      case "55": imageUrl = "55.png"; break;

                      case "06":
                      case "60": imageUrl = "60.png"; break;

                      case "16":
                      case "61": imageUrl = "61.png"; break;

                      case "26":
                      case "62": imageUrl = "62.png"; break;

                      case "36":
                      case "63": imageUrl = "63.png"; break;

                      case "46":
                      case "64": imageUrl = "46.png"; break;

                      case "56":
                      case "65": imageUrl = "65.png"; break;

                      case "66": imageUrl = "66.png"; break;

                    }
                    li.innerHTML = "<img src='imatges/" + imageUrl+ "'>";
                    //document.write("<img src='imatges/" + imageUrl+ "'>");
                    darreraResposta = resposta;

                    document.getElementById('xat').appendChild(li);
                }
            } else {
                console.log('problemes amb l\'AJAX');
            }
        }
    }

};



