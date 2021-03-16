//const express = require('express');
import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';
import dotenv from 'dotenv';


dotenv.config({path:"variables.env"});

const app = express();

//conectar la bd
db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch(error => console.log(error));

//Definir puerto
//const port = process.env.PORT || 4000;

  //Habilitar PUG
  app.set('view engine','pug');

  //Obtener el año actual
  //req lo que estas enviando ala servidor
  //res lo que el servidor te manda a ti
  //nest ya termino y se pasa al siguiente
  app.use((req, res, next) =>{
      //Manda informacipon a cmd   
      //console.log(req);
      //return next para forzarlo
      // res.locals.unaVariable = 'Una Nueva Variable';
       const year = new Date();
       res.locals.ActualYear = year.getFullYear();
       res.locals.nombresitio = "Agencia de viajes";

      //console.log(res.locals);
     return  next();
  });
//Agregar body parse para leer los datos del formulario
app.use(express.urlencoded({extended:true}));

//Definir la carpeta publica
app.use(express.static('public'));  
    
//Agregar rauter
//app.use('/', router);
app.use('/',router);

//Definir el puerto
/*Puerto y host para la app*/
const host= process.env.HOST || '0.0.0.0'; 
const port = process.env.PORT || 4000;

//app.listen(port,host,  () =>{
  //  console.log('El servidor esta funcionando');
//});

app.listen(port,host, () => {
   console.log(`El Servidor esta funcionando en elpuerto ${port}`);
});