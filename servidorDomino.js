/*
 * Servidor HTTP que implementa un xat
 * @author  sergi.grau@fje.edu
 * @version 1.0
 * date 13.02.2017
 * format del document UTF-8
 *
 * CHANGELOG
 * 13.02.2017
 * - Servidor HTTP que implementa un xat
 *
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes el Clot
 */

var http = require('http');
var url = require('url');
var querystring = require('querystring');
var fs = require('fs');
var darreraEntrada = '';
function iniciar() {
  function onRequest(request, response) {
    var sortida;
    var pathname = url.parse(request.url).pathname;
    var consulta = url.parse(request.url, true).query;

    console.log("Petició per a  " + pathname + " rebuda.");

    if (pathname == '/domino') {
      response.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
      });

      fs.readFile('./index.html', function (err, sortida) {
        response.writeHead(200, {
          'Content-Type': 'text/html'
        });
        response.write(sortida);
        response.end();
      });

    }
    else if (pathname == '/css/style.css') {
      response.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
      });

      fs.readFile('./css/style.css', function (err, sortida) {
        response.writeHead(200, {
          'Content-Type': 'text/css'
        });

        response.write(sortida);
        response.end();
      });

    }
    else if (pathname == '/js/logicaDomino.js') {
      response.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
      });

      fs.readFile('./js/logicaDomino.js', function (err, sortida) {
        response.writeHead(200, {
          'Content-Type': 'text/css'
        });

        response.write(sortida);
        response.end();
      });

    }

    else if (pathname == '/enviar') {
      response.writeHead(201, {
        "Content-Type": "text/xml; charset=utf-8"
      });

      if (consulta['missatge'] != undefined)
        darreraEntrada = consulta['missatge'];
      response.end();
    }

    else if (pathname == '/consultar') {
      response.writeHead(200, {
        "Content-Type": "text/xml; charset=utf-8"
      });
      response.write(darreraEntrada);
      response.end();
    }

    else if (pathname == '/imatges/00.png') {
      response.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
      });

      fs.readFile('./imatges/00.png', function (err, sortida) {
        response.writeHead(200, {
          'Content-Type': 'text/css'
        });

        response.write(sortida);
        response.end();
      });

    }
    else if (pathname == '/imatges/10.png') {
      response.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
      });

      fs.readFile('./imatges/10.png', function (err, sortida) {
        response.writeHead(200, {
          'Content-Type': 'text/css'
        });

        response.write(sortida);
        response.end();
      });

    }
    else if (pathname == '/imatges/11.png') {
      response.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
      });

      fs.readFile('./imatges/11.png', function (err, sortida) {
        response.writeHead(200, {
          'Content-Type': 'text/css'
        });

        response.write(sortida);
        response.end();
      });

    }
    else if (pathname == '/imatges/20.png') {
      response.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
      });

      fs.readFile('./imatges/20.png', function (err, sortida) {
        response.writeHead(200, {
          'Content-Type': 'text/css'
        });

        response.write(sortida);
        response.end();
      });

    }
    else if (pathname == '/imatges/21.png') {
      response.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
      });

      fs.readFile('./imatges/21.png', function (err, sortida) {
        response.writeHead(200, {
          'Content-Type': 'text/css'
        });

        response.write(sortida);
        response.end();
      });

    }
    else if (pathname == '/imatges/22.png') {
      response.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
      });

      fs.readFile('./imatges/22.png', function (err, sortida) {
        response.writeHead(200, {
          'Content-Type': 'text/css'
        });

        response.write(sortida);
        response.end();
      });

    }
    else if (pathname == '/imatges/30.png') {
      response.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
      });

      fs.readFile('./imatges/30.png', function (err, sortida) {
        response.writeHead(200, {
          'Content-Type': 'text/css'
        });

        response.write(sortida);
        response.end();
      });

    }
    else if (pathname == '/imatges/31.png') {
      response.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
      });

      fs.readFile('./imatges/31.png', function (err, sortida) {
        response.writeHead(200, {
          'Content-Type': 'text/css'
        });

        response.write(sortida);
        response.end();
      });

    }
    else if (pathname == '/imatges/32.png') {
      response.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
      });

      fs.readFile('./imatges/32.png', function (err, sortida) {
        response.writeHead(200, {
          'Content-Type': 'text/css'
        });

        response.write(sortida);
        response.end();
      });

    }
    else if (pathname == '/imatges/33.png') {
      response.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
      });

      fs.readFile('./imatges/33.png', function (err, sortida) {
        response.writeHead(200, {
          'Content-Type': 'text/css'
        });

        response.write(sortida);
        response.end();
      });

    }
    else if (pathname == '/imatges/40.png') {
      response.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
      });

      fs.readFile('./imatges/40.png', function (err, sortida) {
        response.writeHead(200, {
          'Content-Type': 'text/css'
        });

        response.write(sortida);
        response.end();
      });

    }
    else if (pathname == '/imatges/41.png') {
      response.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
      });

      fs.readFile('./imatges/41.png', function (err, sortida) {
        response.writeHead(200, {
          'Content-Type': 'text/css'
        });

        response.write(sortida);
        response.end();
      });

    }
    else if (pathname == '/imatges/42.png') {
      response.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
      });

      fs.readFile('./imatges/42.png', function (err, sortida) {
        response.writeHead(200, {
          'Content-Type': 'text/css'
        });

        response.write(sortida);
        response.end();
      });

    }
    else if (pathname == '/imatges/43.png') {
      response.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
      });

      fs.readFile('./imatges/43.png', function (err, sortida) {
        response.writeHead(200, {
          'Content-Type': 'text/css'
        });

        response.write(sortida);
        response.end();
      });

    }
    else if (pathname == '/imatges/44.png') {
      response.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
      });

      fs.readFile('./imatges/44.png', function (err, sortida) {
        response.writeHead(200, {
          'Content-Type': 'text/css'
        });

        response.write(sortida);
        response.end();
      });

    }
    else if (pathname == '/imatges/50.png') {
      response.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
      });

      fs.readFile('./imatges/50.png', function (err, sortida) {
        response.writeHead(200, {
          'Content-Type': 'text/css'
        });

        response.write(sortida);
        response.end();
      });

    }
    else if (pathname == '/imatges/51.png') {
      response.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
      });

      fs.readFile('./imatges/51.png', function (err, sortida) {
        response.writeHead(200, {
          'Content-Type': 'text/css'
        });

        response.write(sortida);
        response.end();
      });

    }
    else if (pathname == '/imatges/52.png') {
      response.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
      });

      fs.readFile('./imatges/52.png', function (err, sortida) {
        response.writeHead(200, {
          'Content-Type': 'text/css'
        });

        response.write(sortida);
        response.end();
      });

    }
    else if (pathname == '/imatges/53.png') {
      response.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
      });

      fs.readFile('./imatges/53.png', function (err, sortida) {
        response.writeHead(200, {
          'Content-Type': 'text/css'
        });

        response.write(sortida);
        response.end();
      });

    }
    else if (pathname == '/imatges/54.png') {
      response.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
      });

      fs.readFile('./imatges/54.png', function (err, sortida) {
        response.writeHead(200, {
          'Content-Type': 'text/css'
        });

        response.write(sortida);
        response.end();
      });

    }
    else if (pathname == '/imatges/55.png') {
      response.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
      });

      fs.readFile('./imatges/55.png', function (err, sortida) {
        response.writeHead(200, {
          'Content-Type': 'text/css'
        });

        response.write(sortida);
        response.end();
      });

    }
    else if (pathname == '/imatges/60.png') {
      response.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
      });

      fs.readFile('./imatges/60.png', function (err, sortida) {
        response.writeHead(200, {
          'Content-Type': 'text/css'
        });

        response.write(sortida);
        response.end();
      });

    }
    else if (pathname == '/imatges/61.png') {
      response.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
      });

      fs.readFile('./imatges/61.png', function (err, sortida) {
        response.writeHead(200, {
          'Content-Type': 'text/css'
        });

        response.write(sortida);
        response.end();
      });

    }
    else if (pathname == '/imatges/62.png') {
      response.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
      });

      fs.readFile('./imatges/62.png', function (err, sortida) {
        response.writeHead(200, {
          'Content-Type': 'text/css'
        });

        response.write(sortida);
        response.end();
      });

    }
    else if (pathname == '/imatges/63.png') {
      response.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
      });

      fs.readFile('./imatges/63.png', function (err, sortida) {
        response.writeHead(200, {
          'Content-Type': 'text/css'
        });

        response.write(sortida);
        response.end();
      });

    }
    else if (pathname == '/imatges/64.png') {
      response.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
      });

      fs.readFile('./imatges/64.png', function (err, sortida) {
        response.writeHead(200, {
          'Content-Type': 'text/css'
        });

        response.write(sortida);
        response.end();
      });

    }
    else if (pathname == '/imatges/65.png') {
      response.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
      });

      fs.readFile('./imatges/65.png', function (err, sortida) {
        response.writeHead(200, {
          'Content-Type': 'text/css'
        });

        response.write(sortida);
        response.end();
      });

    }
    else if (pathname == '/imatges/66.png') {
      response.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
      });

      fs.readFile('./imatges/66.png', function (err, sortida) {
        response.writeHead(200, {
          'Content-Type': 'text/css'
        });

        response.write(sortida);
        response.end();
      });

    }

    else {
      response.writeHead(404, {
        "Content-Type": "text/html; charset=utf-8"
      });
      sortida = "404 NOT FOUND";
      response.write(sortida);
      response.end();
    }

 
  }


  http.createServer(onRequest).listen(8888);
  console.log("Servidor iniciat pel port 8888.");
}

exports.iniciar = iniciar;
