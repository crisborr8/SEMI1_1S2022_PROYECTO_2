var express = require('express');
var bodyParser = require('body-parser');
var app = express();

const cors = require('cors');

//se importan las librerias y las credenciales 
const mysql = require('mysql');
const aws_keys = require('./creds');
//Se inicializa el sdk para menejar los servicios de AWS 
var AWS = require('aws-sdk');

var corsOptions = { origin: true, optionsSuccessStatus: 200 };
app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))

const db_credentials = require('./db_creds');
var conn = mysql.createPool(db_credentials);

const s3 = new AWS.S3(aws_keys.s3);
const rek = new AWS.Rekognition(aws_keys.rekognition);
const translate = new AWS.Translate(aws_keys.translate);

var port = 9000;
app.listen(port);
console.log("Escuchando en el puerto", port)

app.get("/", async (req, res) => {

        res.send("hola");

});

app.get("/getdata", async (req, res) => {
    conn.query(`SELECT * FROM CRIMINAL`, function (err, result) {
        if (err) throw err;
        res.send(result);
    });
});

// REKOGNITON
app.post('/detectarcara', function (req, res) { 
    var imagen = req.body.imagen;
    var params = {
        Image: { 
            S3Object: {
                Bucket: "bpractica1", 
                Name: "criminal 1.jpg"
              }
        }

      /*Image: { 
        Bytes: Buffer.from(imagen, 'base64')
      }*/,
      Attributes: ['ALL']
    };
    rek.detectFaces(params, function(err, data) {
      if (err) {res.json({mensaje: err})} 
      else {   
             res.json({Deteccion: data});      
      }
    });
  });

  app.post('/compararFotos', function (req, res) { 
    var imagen1 = req.body.imagen1;
    var imagen2 = req.body.imagen2;
    var params = {
      
      SourceImage: {
          Bytes: Buffer.from(imagen1, 'base64')     
      }, 
      TargetImage: {
          Bytes: Buffer.from(imagen2, 'base64')    
      },
      SimilarityThreshold: '80'
      
     
    };
    rek.compareFaces(params, function(err, data) {
      if (err) {res.json({mensaje: err})} 
      else {   
             res.json({Comparacion: data.FaceMatches});      
      }
    });
  });

  app.post('/traducir', (req, res) => {
    let body = req.body
  
    let text = body.mensaje
    let languange = body.language
    let idioma

    switch (languange){
      case 'spanish':
        idioma = 'es'
        break;

      case 'english':
        idioma = 'en'
        break;

      case 'russian':
        idioma = 'ru'
        break;

      default:
        idioma = 'es'
        break;        
    }
  
    let params = {
      SourceLanguageCode: 'auto',
      TargetLanguageCode: idioma,//'es',
      Text: text || 'Hello there'
    };
    translate.translateText(params, function (err, data) {
      if (err) {
        console.log(err, err.stack);
        res.send({ error: err })
      } else {
        console.log(data);
        res.send({ message: data })
      }
    });
  });