/*
 * programa que permet tenir un xat amb AJAX
 * @author sergi.grau@fje.edu, Roger Pedros Villorbina
 * @version 1.0
 * date 13.02.2017
 * format del document UTF-8

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

function getImagePath(number){
  switch (number){
    case "00": return "00.png"; break;

    case "01":
    case "10": return "10.png"; break;

    case "11": return "11.png"; break;

    case "02":
    case "20": return "20.png"; break;

    case "21":
    case "12": return "21.png"; break;

    case "22": return "22.png"; break;

    case "03":
    case "30": return "30.png"; break;

    case "13":
    case "31": return "31.png"; break;

    case "23":
    case "32": return "32.png"; break;

    case "33": return "33.png"; break;

    case "04":
    case "40": return "40.png"; break;

    case "14":
    case "41": return "41.png"; break;

    case "24":
    case "42": return "42.png"; break;

    case "34":
    case "43": return "42.png"; break;

    case "44": return "42.png"; break;

    case "05":
    case "50": return "50.png"; break;

    case "15":
    case "51": return "51.png"; break;

    case "25":
    case "52": return "52.png"; break;

    case "35":
    case "53": return "53.png"; break;

    case "45":
    case "54": return "54.png"; break;

    case "55": return "55.png"; break;

    case "06":
    case "60": return "60.png"; break;

    case "16":
    case "61": return "61.png"; break;

    case "26":
    case "62": return "62.png"; break;

    case "36":
    case "63": return "63.png"; break;

    case "46":
    case "64": return "46.png"; break;

    case "56":
    case "65": return "65.png"; break;

    case "66": return "66.png"; break;

  }
}


function printarFitxes(){
  var i=1;
  for(key in fitxesJugador){
    imageUrl =  getImagePath(fitxesJugador[key].toString());
    //getImagePath(fitxesJugador[key].toString());

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

                    imageUrl= getImagePath(resposta.toString());

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



